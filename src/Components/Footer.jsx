import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Footer = () => {

    let params = useParams();
    let navigate = useNavigate();

    const handleBack = () => {
        // code here
        navigate(`/card`);
    }

    return (
        <div>
            <h5>This is from footer. {params.id} {params.page} </h5>
            <button onClick={handleBack} >Back</button>
        </div>
    )
}

const Section = () => {
    return (
        <div>
            <h4>This is Section Component.</h4>
        </div>
    )
}

export { Footer, Section };