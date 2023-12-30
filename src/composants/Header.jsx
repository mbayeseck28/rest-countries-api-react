import React from 'react'
import DarkMode from '../darkMode/DarkMode'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({darkMode, fa, text}) => {
  return (
    <div>
      <div className="shadow ">
        <div className='container' >
            <div className="d-flex justify-content-between py-2">
                <h5 className="fw-semibold">Where in the world?</h5>
                {/* <button className='btn d-flex align-items-center fw-semibold gap-1' onClick={darkMode}>
                <FontAwesomeIcon icon={fa} />
                    {text}
                </button> */}
                <DarkMode />
                {/* <div className="d-flex align-items-center fw-semibold gap-1">
                    
                </div> */}
                
              </div>
        </div>
    </div>
    </div>
  )
}

export default Header
