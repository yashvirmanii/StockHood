import React from 'react'
import { Panel } from "rsuite";

const NewsPanel = ({ allNews }) => {
    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: "100%", background: "#80edb7", cursor: 'default' }}>
                <h3>News Updates</h3>
            </Panel>
            {allNews.length > 0 && allNews.map((article) => (
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: "100%" }} key={article.id}>
                    <Panel header={article.title}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <small>
                                {article.description}
                            </small>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(article.link);
                                }}
                            >Click to visit</button>
                        </div>
                    </Panel>
                </Panel>
            ))}
        </div>
    )
}

export default NewsPanel