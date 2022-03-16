import React from "react";
import TradingViewWidget from 'react-tradingview-widget';
import { Panel, Row, Col, Button } from "rsuite";
import "./styles.css"
const ChartPanel = ({ selectedStock, portfolio }) => {
    const symbol = `BSE:${selectedStock}`
    return (
        <div className="container">
            <div className="chart-container">
                <TradingViewWidget
                    symbol={selectedStock === "" ? "BSE:TCS" : symbol}
                    locale="in"
                    autosize
                />
            </div>
            <div className="info-container">
                <Panel header="Big Sharks Portfolio" shaded style={{ marginBottom: '10px' }}>
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
                        {portfolio.length > 0 && portfolio.map((investor) => (
                            <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(investor.link);
                                }}>
                                <Col md={6} sm={12} key={investor.id} style={{ height: '10rem' }}>
                                    <Panel bordered header={investor.investor} className='Indices-head'>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>
                                                Total Holding:- {investor.holding}
                                            </span>
                                            <span>
                                                Total NetWorth:- {investor.netWorth}
                                            </span>
                                        </div>
                                    </Panel>
                                </Col>
                            </a>
                        ))}
                    </Row>
                </Panel>
            </div>
        </div>
    )
}

export default ChartPanel