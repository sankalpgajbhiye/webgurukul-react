import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SectionOneCard from './SectionOneCard'
import { Link } from "react-router-dom";

export default function SectionOne() {

    // const cardData = [
    //     { title: "Featured title", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words." },
    //     { title: "Featured title two", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words two." },
    //     { title: "Featured title three", description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words three." },
    // ];

    const [ posts, setPosts ] = useState([]);

    // const getPosts = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data, 'from axios');
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    const getPosts = async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const { data, status } = result;
            if(status === 200) setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => json) // console.log(json)
    }, [])

    
    // componenentDidMount
    // componenentWillUpdate
    // componentWillUnmount

    return (
        <>
            <Link to="/">Calculator</Link> { ` ` }

            <Link to="/footer/445/one">Footer</Link>{ ` ` }
            <Link to="/footer/446/two">Footer</Link>{ ` ` }
            <Link to="/footer/447/three">Footer</Link>{ ` ` }
            <Link to="/footer/448/four">Footer</Link>{ ` ` }

            <Link to={`/footer/448/four`}>Footerdd</Link>{ ` ` }

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Columns with icons</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    { posts.map((data, i) => 
                        <SectionOneCard
                            key={i.toString()} 
                            data={data}
                        />                
                    ) }
                </div>
            </div>
        </>
    )
}
