import React from 'react'

const Loader = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="card" aria-hidden="true">
            <div className="placeholder loadImg col-12"></div>
                <div className="card-body">
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    </p>
                </div>
        </div>     
    </div>
  )
}

export default Loader
