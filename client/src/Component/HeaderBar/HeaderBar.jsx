import React from 'react'
import { useState } from "react";
import SelectInputSearch from '../SelectInputSearch/SelectInput'
import { Button } from 'rsuite';
import "./styles.css"

const HeaderBar = ({ setSelectedStock, selectedStock }) => {
    const [search, setSearch] = useState(selectedStock)
    return (
        <header className='main-container'>
            <div className="headerBar-left-side">
                <span className='headerBar-title'>StockHood</span>
            </div>
            <div className="headerBar-right-side">
                <SelectInputSearch
                    size="lg"
                    placeholder="Search by Symbol or Company name..."
                    inputOptions={{
                        onChange: (value) => {
                            setSearch(value)
                        }
                    }}
                    btnOptions={{
                        onClick: () => {
                            setSelectedStock(search)
                        }
                    }}
                />
            </div>
            <div className="headerBar-rightEnd-side">
                <span className='headerBar-contact'>Contact Us</span>
            </div>
        </header>
    )
}

export default HeaderBar