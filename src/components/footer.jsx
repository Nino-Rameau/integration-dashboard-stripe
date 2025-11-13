
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-evenly text-black dark:text-white p-4 bg-blue-100 dark:bg-blue-800 mt-10">
      <div className="flex flex-row gap-2">
      <p>Site web réalisé par :</p>
      <a href="https://nino-rameau.fr" className="underline hover:text-blue-500">Nino Rameau</a>
      </div>
      <p>Copyright 2025</p>
    </footer>
  );
};

export default Footer;