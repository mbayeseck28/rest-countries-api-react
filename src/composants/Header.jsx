import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
      <div className="shadow ">
        <div className='container' >
            <div className="d-flex justify-content-between py-2">
                <h5 className="fw-semibold">Where in the world?</h5>
                <div className="d-flex align-items-center fw-semibold gap-1">
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                </div>
                
              </div>
        </div>
    </div>
    </div>
  )
}

export default Header
