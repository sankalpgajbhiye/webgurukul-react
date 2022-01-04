import React from 'react';
import SectionOneCard from './SectionOneCard'

export default function SectionOne() {

    const cardData = [
        { title: "Featured title", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words." },
        { title: "Featured title two", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words two." },
        { title: "Featured title three", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words three." },
    ];

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Columns with icons</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                { cardData.map((data, i) => 
                    <SectionOneCard
                        key={i.toString()} 
                        data={data}
                    />                
                ) }
            </div>
        </div>
    )
}