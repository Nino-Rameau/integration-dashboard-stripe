const Absence = ({ nombre, liste, type }) => {
  return (
    <details className="border border-black dark:border-white rounded p-2 max-w-[40%]">
      <summary className="cursor-pointer text-black dark:text-white">
        {nombre} personne {type}
      </summary>
      <ul className="ml-4 list-disc text-black dark:text-white">
        {liste.map((personne, index) => (
          <li key={index}>
            {personne.prenom} {personne.nom}
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Absence;
