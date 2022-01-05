import React from 'react'

export default function SectionOneCard(props) {

    const { data:{ title, description } } = props;

    console.log(';fdsakl');
    
    const cardStyle = {backgroundColor: "red", color: "white"};

    return (
        <div className="feature col" style={cardStyle}>
            <div className="feature-icon bg-primary bg-gradient">
                <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
            </div>
            <h2>{ title } </h2>
            <p>{ description }</p>
            <a href="#" className="icon-link">
                Call to action
                <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right" /></svg>
            </a>
        </div>
    )
}
