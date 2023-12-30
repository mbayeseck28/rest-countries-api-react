import React from 'react'

const Details = ({flags, common, population, region, subregion, capital, tld, retour }) => {
  return (
    <div className='mt-5'>
        <button type="button" onClick={retour} class="btn btn-light my-4 shadow changeText changeBg px-4 border-0">
            Back
        </button>
    <div className="container">
    <div className="row">
      <div className="col-md-6 mb-3 mb-sm-0">
          <div className="card-body drapeauDet">
              <img src={flags} alt="" />
          </div>
      </div>
      <div className="col-md-6 d-flex align-content-center align-items-center">     
          <div className="card-body py-2 ps-md-5">
            <h4 className="fw-semibold changeText">{common}</h4>
            <div className="d-flex justify-content-between py-3 flex-wrap">
              <div className="">
                <h6 className="fw-bold">Native Name: <span className="fw-normal">{common}</span></h6>
                <h6 className="fw-bold">Population: <span className="fw-normal">{population}</span></h6>
                <h6 className="fw-bold">Région: <span className="fw-normal">{region}</span></h6>
                <h6 className="fw-bold">Sub Région: <span className="fw-normal">{subregion}</span></h6>
                <h6 className="fw-bold">Capital: <span className="fw-normal">{capital}</span></h6>
              </div>
              <div className="">
                <h6 className="fw-bold">Top Level Domain: <span className="fw-normal">{tld}</span></h6>
                <h6 className="fw-bold">Currencies: <span className="fw-normal">{population}</span></h6>
                <h6 className="fw-bold">Langages: <span className="fw-normal">{region}</span></h6>
              </div>
          </div>
          {/* <div className="mt-4">
            <h6 className="fw-bold d-flex flex-wrap">Border Countries: 
              <span className="fw-normal px-2 py-1 shadow mx-2">{borders[0]}</span>
              <span className="fw-normal px-2 py-1 shadow mx-2">{borders[1]}</span>
              <span className="fw-normal px-2 py-1 shadow mx-2">{borders[2]}</span>
            </h6>
          </div> */}
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Details
