import React from "react";
import TradingViewWidget from 'react-tradingview-widget';
import { Grid, Panel, Row, Col } from "rsuite";
import "./styles.css"
const ChartPanel = () => {
    return (
        <div className="container">
            <div className="chart-container">
                <TradingViewWidget
                    symbol="BSE:BCG"
                    locale="in"
                    autosize
                />
            </div>
            <div className="info-container">
                <Panel header="Company Report" shaded style={{ marginBottom: '10px' }}>
                    <Row>
                        <Col md={6} sm={12}>
                            <Panel bordered header="BSE Sensex" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                        <Col md={6} sm={12}>
                            <Panel bordered header="Nifty 50" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                        <Col md={6} sm={12}>
                            <Panel bordered header="Nifty Next 50" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                        <Col md={6} sm={12}>
                            <Panel bordered header="Nifty Bank" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                        <Col md={6} sm={12}>
                            <Panel bordered header="Nifty Bank" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                        <Col md={6} sm={12}>
                            <Panel bordered header="Nifty Bank" className='Indices-head'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima aperiam repellat quod facilis. Possimus quidem voluptatem repellendus accusamus placeat sint nulla, magni doloribus quaerat corrupti. Dolorum magnam dignissimos fuga?
                            </Panel>
                        </Col>
                    </Row>
                </Panel>
            </div>
        </div>
    )
}

export default ChartPanel