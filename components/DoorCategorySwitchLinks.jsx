import Link from "next/link";

const DOOR_CATEGORIES = [
  {
    id: "premium",
    href: "/products/aluminium-haustueren",
    label: "zu Aluminium Premium Haustüren",
  },
  {
    id: "side",
    href: "/products/k70nt",
    label: "zu Nebeneingangstüren",
  },
  {
    id: "budget",
    href: "/products/kunststoff-alu-haustueren",
    label: "zu budgetfreundlichen Haustüren",
  },
];

export default function DoorCategorySwitchLinks({ current }) {
  const links = DOOR_CATEGORIES.filter((category) => category.id !== current);

  return (
    <nav className="doorCategorySwitch" aria-label="Weitere Türbereiche">
      {links.map((category) => (
        <Link href={category.href} legacyBehavior key={category.id}>
          <a className="doorCategorySwitchLink">{category.label}</a>
        </Link>
      ))}

      <style jsx>{`
        .doorCategorySwitch {
          display: grid;
          gap: 8px;
          margin-top: 6px;
        }

        .doorCategorySwitchLink {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.14);
          color: #26221e;
          display: block;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.25;
          padding: 0.78rem 0.9rem;
          text-align: center;
          text-decoration: none;
          transition: border-color 0.16s ease, color 0.16s ease, transform 0.16s ease;
        }

        .doorCategorySwitchLink:hover,
        .doorCategorySwitchLink:focus {
          border-color: #d57716;
          color: #b86411;
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
}
