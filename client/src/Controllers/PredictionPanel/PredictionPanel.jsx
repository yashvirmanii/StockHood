import React from 'react'
import { Panel } from "rsuite";

const PredictionPanel = ({ predictions }) => {
    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: "100%", background: "#80edb7", cursor: 'default' }}>
                <h3>Brokers Research</h3>
            </Panel>
            {predictions.length > 0 && predictions.map((article) => (
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: "100%" }} key={article.id}>
                    <Panel header={article.action}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h6>
                                {article.target}
                            </h6>
                            <h6>
                                {article.broker}
                            </h6>
                        </div>
                    </Panel>
                </Panel>
            ))}
        </div>
    )
}

export default PredictionPanel