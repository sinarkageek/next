import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const [plats, setPlats] = useState([]);
  const [newDish, setNewDish] = useState({ titre: '', ingredients: [] });
  const [ingredients, setIngredients] = useState([]);

  // Chargement initial des données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responsePlats, responseIngredients] = await Promise.all([
          axios.get('https://strapi.furamingo.app/api/plats?populate=*'),
          axios.get('https://strapi.furamingo.app/api/ingredients')
        ]);

        setPlats(responsePlats.data.data || []);
        setIngredients(responseIngredients.data.data || []);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setNewDish({ ...newDish, titre: e.target.value });
  };

  const handleIngredientClick = (ingredientTitle) => {
    if (!newDish.ingredients.includes(ingredientTitle)) {
      setNewDish({ ...newDish, ingredients: [...newDish.ingredients, ingredientTitle] });
    }
  };

  const handleAddDish = async () => {
    try {
      const response = await axios.post('https://strapi.furamingo.app/api/plats', newDish);
      if (response.status === 200 || response.status === 201) {
        setPlats([...plats, response.data]);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'un nouveau plat:', error);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Titres des plats et ingrédients</h1>
        <div className={styles.grid}>
          {/* Affichage des plats */}
          {plats.map((plat, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles['card h3']}>{plat.attributes.titre}</h3>
              <p className={styles['card p']}>Ingrédients :</p>
              <ul>
                {plat.attributes.ingredients?.data ? (
                  plat.attributes.ingredients.data.map((ingredient, i) => (
                    <li key={i}>{ingredient.attributes.titre}</li>
                  ))
                ) : (
                  <li>Pas d'ingrédients disponibles</li>
                )}
              </ul>
            </div>
          ))}

          {/* Formulaire d'ajout d'un nouveau plat */}
          <div className={styles.card}>
            <h3 className={styles['card h3']}>Ajouter un plat</h3>
            <input
              type="text"
              placeholder="Titre du plat"
              value={newDish.titre}
              onChange={handleInputChange}
              className={styles.input}
            />
            <p className={styles['card p']}>Ingrédients :</p>
            {/* Liste des boutons pour ajouter des ingrédients */}
            {ingredients.map((ingredient, index) => (
              <button
                key={index}
                onClick={() => handleIngredientClick(ingredient.attributes.titre)}
              >
                {ingredient.attributes.titre}
              </button>
            ))}
            {/* Liste des ingrédients ajoutés */}
            <ul>
              {newDish.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <button onClick={handleAddDish}>Ajouter</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a className={styles['footer a']}>
          Powered by <img src="/logo.png" alt="Logo" className={styles['footer img']} />
        </a>
      </footer>
    </div>
  );
}
