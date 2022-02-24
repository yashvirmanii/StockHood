import React from 'react'
import { Grid, Panel, Row, Col, Table } from "rsuite";
import NewsPanel from '../NewsPanel/NewsPanel';
import PredictionPanel from '../PredictionPanel/PredictionPanel';
import MyPro from "../ChartPanel/ChartPanel"
import moment from "moment";
import "./styles.css"

const DashBoard = () => {
    const { Column, Cell, HeaderCell } = Table;
    return (
        <div className='dashBoard-container'>
            <Panel header="Indices" shaded collapsible style={{ marginBottom: '10px' }}>
                <Col md={24}>
                    <Table
                        // ref={tableRef}
                        affixHorizontalScrollbar
                        autoHeight
                        className=""
                        // data={ }
                        rowHeight={50}
                        virtualized
                    >

                        <Column verticalAlign="middle" align="center" width={200} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>INDEX</HeaderCell>
                            <Cell dataKey="Index" style={{ width: "300px", fontSize: "12px" }}>
                                {rowData => rowData.supplierName ? rowData.supplierName : ''}

                            </Cell>
                        </Column>

                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }} >CURRENT</HeaderCell>
                            <Cell dataKey="current" style={{ width: "300px", fontSize: "12px" }}>
                                {rowData => rowData.matterCategory ? rowData.matterCategory.title : ''}
                            </Cell>
                        </Column>

                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>%CHING</HeaderCell>

                            <Cell dataKey="changing" style={{ fontSize: '12px' }}>
                                {rowData => `${(rowData.supplierShortName) ? rowData.supplierShortName : rowData.supplierName}${(rowData.nameSuffix) ? ` | ${rowData.nameSuffix}` : ""}`}
                            </Cell>
                        </Column>

                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>OPEN</HeaderCell>

                            <Cell dataKey="artefactId" style={{ fontSize: '12px' }}>
                                {rowData => rowData.artefact ? rowData.artefact.name : ''}
                            </Cell>
                        </Column>

                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>HIGH</HeaderCell>

                            <Cell dataKey="matterOwner" style={{ fontSize: '12px' }}>
                                {rowData => rowData.matterOwner ? rowData.matterOwner.name : ''}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>LOW</HeaderCell>

                            <Cell dataKey="matterStatus" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? "Completed" : "In Progress"}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>PREV. CLOSE</HeaderCell>

                            <Cell dataKey="matterCreated" style={{ fontSize: '12px' }}>
                                {rowData => rowData.createdAt ? moment(rowData.createdAt).format('YYYY-MM-DD') : ''}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>PREV. DAY</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>1W AGO</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>1M AGO</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>1Y AGO</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>52W HIGH</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                        <Column verticalAlign="middle" align="center" width={150} >
                            <HeaderCell style={{ fontSize: "12px", width: "300px", fontWeight: 'bold', color: 'black' }}>52W LOW</HeaderCell>

                            <Cell dataKey="matterCompleted" style={{ fontSize: '12px' }}>
                                {rowData => rowData.isCompleted ? moment(rowData.updatedAt).format('YYYY-MM-DD') : ""}
                            </Cell>
                        </Column>
                    </Table>
                </Col>
            </Panel>
            <Grid fluid style={{ marginTop: "5px" }}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={7} lg={5} style={{ height: '100vh', border: "5px solid black", borderRadius: '10px', overflow: 'hidden', overflowY: 'scroll' }}>
                        <NewsPanel />
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={14} style={{ height: '100vh', borderTop: "5px solid black", borderBottom: "5px solid black", borderRadius: '10px' }}>
                        <MyPro />
                    </Col>
                    <Col xs={24} sm={12} md={7} lg={5} style={{ height: '100vh', border: "5px solid black", borderRadius: '10px', overflow: 'hidden', overflowY: 'scroll' }}>
                        <PredictionPanel />
                    </Col>
                </Row>
            </Grid>
        </div >
    )
}

export default DashBoard