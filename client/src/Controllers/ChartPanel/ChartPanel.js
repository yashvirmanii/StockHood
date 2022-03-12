import React from "react";
import TradingViewWidget from 'react-tradingview-widget';
import { Grid, Panel, Row, Col, Button } from "rsuite";
import "./styles.css"
const ChartPanel = ({ selectedStock }) => {
    const symbol = `BSE:${selectedStock}`
    return (
        <div className="container">
            <div className="chart-container">
                <TradingViewWidget
                    symbol={symbol}
                    locale="in"
                    autosize
                />
            </div>
            <div className="info-container">
                <Panel header="Company Report" shaded style={{ marginBottom: '10px' }}>
                    <div className="btn-background">
                        <Button
                            size="md"
                            color="blue"
                            appearance="primary"
                            className="zerodha-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(`https://stocks.zerodha.com/stocks/${selectedStock}?checklist=basic`);
                            }}
                        >Trade via zerodha</Button>
                    </div>
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