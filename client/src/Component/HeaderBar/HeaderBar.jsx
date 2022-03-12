import React from 'react'

import SelectInputSearch from '../SelectInputSearch/SelectInput'
import "./styles.css"

const HeaderBar = () => {
    return (
        <div className='main-container'>
            <div className="headerBar-left-side">
                <span className='headerBar-title'>StockHood</span>
            </div>
            <div className="headerBar-right-side">
                <SelectInputSearch size="lg" placeholder="Search by Symbol or Company name..." />
            </div>
            <div className="headerBar-rightEnd-side">
                <span className='headerBar-contact'>Contact Us</span>
            </div>
        </div>
    )
}

export default HeaderBar