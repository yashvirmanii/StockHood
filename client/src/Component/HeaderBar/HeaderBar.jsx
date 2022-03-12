import React from 'react'
import { useState } from "react";
import SelectInputSearch from '../SelectInputSearch/SelectInput'
import { Button } from 'rsuite';
import "./styles.css"

const HeaderBar = ({ setSelectedStock, selectedStock }) => {
    const [search, setSearch] = useState(selectedStock)
    return (
        <div className='main-container'>
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
                />
                <Button
                    style={{ height: "2.4rem", borderRadius: '5px', marginLeft: '-8px', cursor: "pointer" }}
                    onClick={() => { setSelectedStock(search) }}
                >Search</Button>
            </div>
            <div className="headerBar-rightEnd-side">
                <span className='headerBar-contact'>Contact Us</span>
            </div>
        </div>
    )
}

export default HeaderBar