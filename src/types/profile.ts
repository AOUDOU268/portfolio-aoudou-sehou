export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isAvailable: boolean;
  handle?: string;
}

export interface Education {
  institution: string;
  institutionFull: string;
  degree: string;
  field: string;
  graduationDate: string;
  period?: string;
  status: string;
  highlights: string[];
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  title: string;
  positioning: string[];
  bio: string;
  philosophy: string;
  availability: {
    status: 'available' | 'open_to_opportunities' | 'focusing_on_venture';
    label: string;
    details: string;
  };
  education: Education;
  previousEducation?: Education;
  venture: {
    name: string;
    tagline: string;
    description: string;
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  contact: {
    email: string;
    emailAvailable: boolean;
    phone?: string;
    phoneAvailable: boolean;
    location: string;
    responseTime: string;
  };
  socials: SocialLink[];
}
