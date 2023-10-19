import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [userCount, setUserCount] = useState(0);
  const [plats, setPlats] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // Comptage des utilisateurs
    axios.get('https://strapi.furamingo.app/api/users/count')
      .then(response => {
        setUserCount(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du comptage des utilisateurs:', error);
      });

    // Obtention des plats
    axios.get('https://strapi.furamingo.app/api/plats')
      .then(response => {
        setPlats(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des plats:', error);
      });

    // Obtention des ingrédients
    axios.get('https://strapi.furamingo.app/api/ingredients')
      .then(response => {
        setIngredients(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des ingrédients:', error);
      });

    // Obtention des données de la page
    axios.get('https://strapi.furamingo.app/api/page')
      .then(response => {
        setPageData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la page:', error);
      });

  }, []);

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          User Count: {userCount}
        </h1>
        <div className="grid">
          {/* Affichez ici vos plats, ingrédients, etc. */}
        </div>
      </main>
      <footer className="footer">
        {/* Votre pied de page */}
      </footer>
    </div>
  );
}
