import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  Copy,
  Check,
  Send,
  Clock,
  MapPin,
  Mail,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/SocialIcons';
import { useLanguage } from '../../context/LanguageContext';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { t, profile, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState<string>('');

  // Identifiant Formspree public configurable sans secret (ex: VITE_FORMSPREE_FORM_ID=xvgowpqk)
  const formspreeId = (import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined)?.trim();
  const isServiceConfigured = Boolean(formspreeId && formspreeId.length > 0);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return t('contact.validation_name_req');
        if (value.trim().length < 2) return t('contact.validation_name_len');
        return undefined;
      case 'email':
        if (!value.trim()) return t('contact.validation_email_req');
        if (!emailRegex.test(value.trim())) return t('contact.validation_email_invalid');
        return undefined;
      case 'subject':
        if (!value.trim()) return t('contact.validation_subject_req');
        if (value.trim().length < 3) return t('contact.validation_subject_len');
        return undefined;
      case 'message':
        if (!value.trim()) return t('contact.validation_msg_req');
        if (value.trim().length < 10) return t('contact.validation_msg_len');
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return !Object.values(newErrors).some(Boolean);
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Encodage strict et propre du lien mailto
  const buildMailtoUrl = () => {
    const s = encodeURIComponent(
      form.subject.trim()
        ? `[Portfolio] ${form.subject.trim()}`
        : language === 'fr'
          ? `[Contact Portfolio] Prise de contact`
          : `[Portfolio Contact] New Inquiry`
    );
    const b = encodeURIComponent(
      (language === 'fr' ? 'Nom / Organisation : ' : 'Name / Organization: ') +
      `${form.name.trim() || (language === 'fr' ? 'Non précisé' : 'Not specified')}\n` +
      (language === 'fr' ? 'Email de réponse : ' : 'Reply Email: ') +
      `${form.email.trim() || (language === 'fr' ? 'Non précisé' : 'Not specified')}\n\n` +
      (language === 'fr' ? 'Message :\n' : 'Message:\n') +
      `${form.message.trim() || (language === 'fr' ? '(Aucun message rédigé)' : '(No message text)')}`
    );
    return `mailto:${profile.contact.email}?subject=${s}&body=${b}`;
  };

  const handleOpenMailto = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl();
  };

  // Soumission réelle vers Formspree uniquement si le service est configuré
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    if (!isServiceConfigured) {
      // Sécurité : ne jamais tenter de fausse soumission
      window.location.href = buildMailtoUrl();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setServerErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        const data = await response.json().catch(() => null);
        const errorText = data?.error || 'Erreur lors de la transmission du message.';
        setServerErrorMessage(errorText);
        setSubmitStatus('error');
      }
    } catch {
      setServerErrorMessage('Impossible de joindre le service de formulaire. Vérifiez votre connexion Internet.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-surface-light-subtle dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/60 relative overflow-hidden">
      {/* Orbes ambiants doux pour la section contact */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/8 dark:bg-blue-600/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 -left-10 w-80 h-80 rounded-full bg-emerald-500/8 dark:bg-emerald-600/10 blur-3xl pointer-events-none animate-float-reverse" />

      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            badgeText={t('contact.badge')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">

          {/* Colonne 1 : Coordonnées et réseaux professionnels */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-2 space-y-5">
            <Card className="card-hover">
              <Badge variant="success" size="sm" className="mb-3">
                {profile.availability.label}
              </Badge>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                {profile.availability.details}
              </p>

              {/* Bloc email officiel */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 mb-4">
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  {language === 'fr' ? 'Adresse électronique directe' : 'Direct email address'}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-sm font-semibold text-brand-600 dark:text-blue-400 hover:underline break-all"
                  >
                    {profile.contact.email}
                  </a>
                  <button
                    onClick={handleCopy}
                    type="button"
                    className="p-1.5 rounded-md text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 shrink-0"
                    aria-label={t('contact.copy_email')}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> {t('contact.copied')}
                  </p>
                )}
              </div>

              {/* Méta-informations */}
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 mb-5">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0" />
                  <span>{profile.contact.responseTime}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0" />
                  <span>{profile.contact.location}</span>
                </div>
              </div>

              {/* Bouton de contact rapide mailto */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {language === 'fr' ? 'Prise de contact rapide' : 'Quick direct contact'}
                </p>
                <a
                  href={`mailto:${profile.contact.email}?subject=${encodeURIComponent(language === 'fr' ? 'Prise de contact - AOUDOU SEHOU' : 'Contact - AOUDOU SEHOU')}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('contact.direct_btn')}</span>
                </a>
              </div>

              {/* Réseaux et profils professionnels */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  {t('contact.social_title')}
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/AOUDOU268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="font-medium">GitHub</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-brand-600 dark:group-hover:text-blue-400">
                      <span>@AOUDOU268</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aoudou-sehou-7b8020440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span className="font-medium">LinkedIn</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-brand-600 dark:group-hover:text-blue-400">
                      <span>in/aoudou-sehou</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100091392117097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span className="font-medium">Facebook</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-brand-600 dark:group-hover:text-blue-400">
                      <span>Aoudou Sehou</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Colonne 2 : Formulaire de contact sécurisé */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-3">
            <Card className="card-hover">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {t('contact.send_card_title')}
                </h3>
                {isServiceConfigured ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3 h-3" /> {language === 'fr' ? 'Service actif' : 'Service Active'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                    <ShieldAlert className="w-3 h-3" /> {language === 'fr' ? 'Mode direct mailto' : 'Direct mailto mode'}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {language === 'fr'
                  ? 'Remplissez les informations ci-dessous. Sans service externe configuré, le message s’ouvrira directement dans votre client de messagerie habituel.'
                  : 'Fill in the information below. Without an external service configured, your message will open directly in your default email client.'}
              </p>

              {/* Bannière d'avertissement honnête si Formspree n'est pas configuré */}
              {!isServiceConfigured && (
                <div className="mb-6 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{language === 'fr' ? 'Envoi automatique API désactivé' : 'Automatic API delivery disabled'}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-amber-800 dark:text-amber-300">
                      {language === 'fr'
                        ? <>Aucun faux message de succès ne sera affiché. La variable <code className="font-mono font-semibold bg-amber-100 dark:bg-amber-900/60 px-1 rounded">VITE_FORMSPREE_FORM_ID</code> n'est pas définie. Utilisez le bouton d'envoi ci-dessous pour transférer directement votre saisie dans votre logiciel d'email.</>
                        : <>No false success message will be shown. The <code className="font-mono font-semibold bg-amber-100 dark:bg-amber-900/60 px-1 rounded">VITE_FORMSPREE_FORM_ID</code> variable is not set. Use the send button below to transfer your inputs directly into your email software.</>}
                    </p>
                  </div>
                </div>
              )}

              {/* Message de succès authentique si retour 200 de Formspree */}
              {submitStatus === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">{t('contact.success_title')}</h4>
                    <p className="mt-1 leading-relaxed text-emerald-800 dark:text-emerald-300">
                      {t('contact.success_desc')}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-3 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 underline hover:no-underline"
                    >
                      {t('contact.send_another')}
                    </button>
                  </div>
                </div>
              )}

              {/* Message d'erreur serveur Formspree */}
              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-900 dark:text-red-200 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">{language === 'fr' ? 'Échec de transmission' : 'Transmission Failed'}</h4>
                    <p className="mt-1 leading-relaxed text-red-800 dark:text-red-300">
                      {serverErrorMessage || (language === 'fr' ? 'Une erreur est survenue lors de l’envoi. Vous pouvez basculer sur l’envoi direct par email.' : 'An error occurred during submission. You can switch to direct email.')}
                    </p>
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {language === 'fr' ? 'Ouvrir dans ma messagerie avec ce message' : 'Open in email client with this message'}
                    </button>
                  </div>
                </div>
              )}

              {/* Formulaire */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Champ Nom */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t('contact.name_label')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={touched.name && errors.name ? 'contact-name-error' : undefined}
                      placeholder={language === 'fr' ? 'Votre nom ou Organisation' : 'Your Name or Organization'}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${touched.name && errors.name
                          ? 'border-red-500 focus:ring-red-500 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:ring-brand-600'
                        }`}
                    />
                    {touched.name && errors.name && (
                      <p id="contact-name-error" role="alert" className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Champ Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t('contact.email_label')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? 'contact-email-error' : undefined}
                      placeholder="vous@domaine.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${touched.email && errors.email
                          ? 'border-red-500 focus:ring-red-500 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:ring-brand-600'
                        }`}
                    />
                    {touched.email && errors.email && (
                      <p id="contact-email-error" role="alert" className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Champ Sujet */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.subject_label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    aria-invalid={Boolean(touched.subject && errors.subject)}
                    aria-describedby={touched.subject && errors.subject ? 'contact-subject-error' : undefined}
                    placeholder={language === 'fr' ? 'Ex : Recrutement ingénieur / Mission de conseil / Collaboration' : 'E.g.: Software Engineering Role / Consulting / Collaboration'}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${touched.subject && errors.subject
                        ? 'border-red-500 focus:ring-red-500 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:ring-brand-600'
                      }`}
                  />
                  {touched.subject && errors.subject && (
                    <p id="contact-subject-error" role="alert" className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.message_label')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined}
                    placeholder={language === 'fr' ? 'Décrivez vos besoins, le contexte de votre projet ou les compétences recherchées...' : 'Describe your project requirements, scope, or desired skills...'}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors resize-y min-h-[120px] ${touched.message && errors.message
                        ? 'border-red-500 focus:ring-red-500 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:ring-brand-600'
                      }`}
                  />
                  {touched.message && errors.message && (
                    <p id="contact-message-error" role="alert" className="mt-1 text-[11px] text-red-600 dark:text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Boutons d'action conditionnels */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {isServiceConfigured ? (
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={isSubmitting}
                      icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      iconPosition="right"
                      className="font-semibold"
                    >
                      {isSubmitting ? t('contact.sending_btn') : t('contact.submit_btn')}
                    </Button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{language === 'fr' ? 'Transférer vers ma messagerie (mailto)' : 'Transfer to email client (mailto)'}</span>
                    </button>
                  )}

                  <a
                    href={buildMailtoUrl()}
                    className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{language === 'fr' ? 'Alternative mailto directe' : 'Direct mailto alternative'}</span>
                  </a>
                </div>
              </form>
            </Card>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
};
