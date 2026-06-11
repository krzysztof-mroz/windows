export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/products/kunststoff-alu-haustueren",
      permanent: true,
    },
  };
}

export default function KunststoffHaustuerenRedirect() {
  return null;
}
