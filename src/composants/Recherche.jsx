import React from 'react'

const Recherche = ({cherchePays, chercheRegion}) => {
  return (
    <div>
      <div className="cherche pt-4">
            <form className="d-flex justify-content-between flex-wrap">
                <div className="mb-2 myInput">
                    <input className="form-control shadow border-0" type="search" placeholder="Rechercher un pays" aria-label="Search" onChange={cherchePays} />
                </div>
                <div className="mb-2 myInput">
                    <select className="form-select shadow form-select-lg mb-3 fs-6 border-0 changeText changeBg" id="select-continent" aria-label="Large select example" onChange={chercheRegion}>
                        <option value="all" selected>Filtrer par région</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                      </select>
                </div>
              </form> 
        </div>
    </div>
  )
}

export default Recherche
