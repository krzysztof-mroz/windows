// CTAButton.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CTAButton = () => {
  const [ctaText, setCtaText] = useState('');
  const [isBlue, setIsBlue] = useState(true);
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
    const randomCta = ctaOptions[Math.floor(Math.random() * ctaOptions.length)];
    setCtaText(randomCta);

    const interval = setInterval(() => {
      setIsBlue((prev) => !prev);
    }, 6000); // Toggle color every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push('/kontakt/anfrage');
  };

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={handleClick}
        className="transition-colors duration-3000 ease-in-out rounded-md text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mv3"
        style={{
          whiteSpace: 'normal',
          backgroundColor: isBlue ? '#0074D9' : '#FF4136', // Lighter blue and red
          color: 'white', // Ensure text remains white
          border: 'none', // No border
          transition: 'background-color 3s ease-in-out', // Gradual background color change
          paddingTop: '1rem', // Custom large vertical padding
          paddingBottom: '1rem', // Custom large vertical padding
          paddingLeft: '1rem', // Custom large vertical padding
          paddingRight: '1rem', // Custom large vertical padding
        }}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default CTAButton;
