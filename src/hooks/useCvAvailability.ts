import { useState, useEffect } from 'react';

export function useCvAvailability() {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const cvPath = '/files/cv-aoudou-sehou.pdf';

  useEffect(() => {
    let isMounted = true;

    // Vérifie si le fichier physique existe réellement sur le serveur
    fetch(cvPath, { method: 'HEAD' })
      .then((res) => {
        if (isMounted) {
          // Si le serveur retourne 200 et un type PDF ou non 404
          const isOk = res.ok && res.status === 200;
          setIsAvailable(isOk);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsAvailable(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [cvPath]);

  return {
    isAvailable: isAvailable === true,
    isLoading: isAvailable === null,
    cvPath,
  };
}
