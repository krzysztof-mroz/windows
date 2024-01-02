// CTAButton.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CTAButton = () => {
  const [ctaText, setCtaText] = useState('');
  const router = useRouter();

  useEffect(() => {
    const ctaOptions = [
      'Entdecken Sie, wie Sie mit unseren Fenstern Energie und Geld sparen können – Fragen Sie uns noch heute an!',
      'Verpassen Sie nicht unsere exklusiven Angebote! Senden Sie uns Ihre Anfrage und sichern Sie sich einen Beratungstermin.',
      'Machen Sie den ersten Schritt zu besseren Fenstern – Kontaktieren Sie uns mit Ihrer Anfrage!',
      'Erfahren Sie, wie Sie Komfort & Stil verbinden – Senden Sie eine Anfrage!',
      'Lassen Sie sich von unseren Fensterexperten beraten – Jetzt anfragen!',
      'Starten Sie Ihre maßgeschneiderte Fensterberatung jetzt! Klicken Sie hier und erhalten Sie sofort ein individuelles Angebot.',
      'Erfahren Sie, warum tausende Kunden uns vertrauen. Fordern Sie eine kostenlose Expertenberatung für Ihre Fenster an',
      'Genießen Sie Komfort und Stil. Lassen Sie uns Ihnen zeigen, wie – starten Sie hier Ihre Anfrage',
      'Kostenlose Beratung für Ihre Fensteranpassung. Senden Sie uns jetzt Ihre Anfrage!'
    ];
    // Randomly select one of the CTA texts
    const randomCta = ctaOptions[Math.floor(Math.random() * ctaOptions.length)];
    setCtaText(randomCta);
  }, []);

  const handleClick = () => {
    // Logic to navigate to the 'kontakt/anfrage' component
    router.push('/kontakt/anfrage');
  };

  return (
    <div className="flex justify-center pa4">
      <button
        onClick={handleClick}
        className="w3-button w3-border w3-border-red w3-deep-orange mv3 mh2 hover-w3-border-orange hover-w3-sand"
        style={{ whiteSpace: 'normal' }}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default CTAButton;