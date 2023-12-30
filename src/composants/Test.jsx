import './App.css';
import Header from './composants/Header';
import Recherche from './composants/Recherche';
import Carte from './composants/Carte';
import Loader from './composants/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [showContent, setShowContent] = useState(true);
  const originalDataRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    // Stockez les données originales lors de la première mise à jour des données
    if (originalDataRef.current.length === 0 && data.length > 0) {
      originalDataRef.current = data.slice();
    }
  }, [data]);

  function chercheRegion(e) {
    e.preventDefault();
    const countrySearch = e.target.value.toLowerCase();
    setUrl(`https://restcountries.com/v3.1/region/${countrySearch}`);
    console.log(url);
  }

  function cherchePays(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();

    // Vérifiez si les données originales ont été stockées, sinon, stockez-les
    if (originalDataRef.current.length === 0) {
      originalDataRef.current = data.slice();
    }

    const filteredCountries = originalDataRef.current.filter((pays) => {
      return pays.name.common.toLowerCase().includes(searchTerm);
    });

    // Mise à jour de l'état avec le résultat filtré
    setData(filteredCountries);
  }

  function detailsPays(cle) {
    const cleRecherche = 'population';
    const valeurRecherche = cle;
    const objetTrouve = data.find(
      (objet) => objet[cleRecherche] === valeurRecherche
    );
    setShowContent(false);
    console.log(objetTrouve);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        {showContent ? (
          <>
            <Recherche
              cherchePays={cherchePays}
              chercheRegion={chercheRegion}
            />
            <div>
              {isLoading ? (
                <div className="row">
                  {data.map((pays, index) => (
                    <Loader />
                  ))}
                </div>
              ) : (
                <div className="row">
                  {data.map((pays) => (
                    <Carte
                      key={pays.population}
                      flags={pays.flags.png}
                      common={pays.name.common}
                      population={pays.population}
                      continents={pays.continents}
                      capital={pays.capital}
                      detailsPays={detailsPays}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Remplacez ces composants par les composants que vous souhaitez afficher à la place */}
            <Header />
          </>
        )}
        {/* <button onClick={() => setShowContent(!showContent)}>
          {showContent ? 'Effacer le contenu' : 'Afficher le contenu'}
        </button> */}
      </div>
    </div>
  );
}

export default App;
