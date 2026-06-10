import { useRouter } from 'next/router';

const CTAButton = () => {
  const router = useRouter();

  const actions = [
    {
      label: 'Fenster planen',
      href: '/fenster',
      primary: false
    },
    {
      label: 'Türen planen',
      href: '/tueren',
      primary: false
    },
    {
      label: 'Anfrage senden',
      href: '/kontakt/anfrage',
      primary: true
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center pv3 ph3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => router.push(action.href)}
          className="mv2 mh2"
          style={{
            minWidth: 160,
            whiteSpace: 'normal',
            backgroundColor: action.primary ? '#d57716' : '#ffffff',
            color: action.primary ? '#ffffff' : '#333333',
            border: action.primary ? '1px solid #b86411' : '1px solid #d9d9d9',
            paddingTop: '0.8rem',
            paddingBottom: '0.8rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default CTAButton;
