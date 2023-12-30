import React from 'react'
import './Carte.css';

const Carte = ({detailsPays, flags, common, population, continents, capital}) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='card shadow border-0'>
            <button type="button" className="btn m-0 p-0 text-start" onClick={() => detailsPays(population)} >
                <div className="drapeau">
                    <img src={flags} alt="" />
                </div>
                <div className="card-body py-4">
                    <span>
                        <h5><span className="fw-semibold">{common}</span></h5>
                    </span>
                    <span>
                        <h6>Population: <span className="fw-light">{population}</span></h6>
                    </span>
                    <span>
                        <h6>Région: <span className="fw-light">{continents}</span></h6>
                    </span>
                    <span>
                        <h6>Capital: <span className="fw-light">{capital}</span></h6>
                    </span>
                </div>       
            </button>
        </div>
    </div>
  )
}

export default Carte
