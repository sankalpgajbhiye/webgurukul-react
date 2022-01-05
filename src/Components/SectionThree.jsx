import React from "react";
import SectionThreeCard from "./SectionThreeCard";

// import logo from './../logo.svg';
import logo from '../logo.svg';
import tree from './../tree.jpg';

export default function SectionThree() {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Custom cards</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            // style={{ backgroundImage: 'url("concept2.jpg")' }}
                            style={{ backgroundImage: `url("${tree}")` }}
                        >
                            <SectionThreeCard title='Short title, that justify such a long story.' place='Earth' day='3d' />
                        </div>
                    </div>
                    <div className="col">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{ backgroundImage: 'url("https://www.webakruti.com/wp-content/themes/webakruti/img/logo.svg")' }}
                        >
                            <SectionThreeCard title='Much longer title that wraps to multiple lines' place='India' day='4d' />
                        </div>
                    </div>
                    <div className="col">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{ backgroundImage: 'url("https://webgurukul.co.in/wp-content/uploads/2020/03/TDC.png")' }}
                        >
                            <SectionThreeCard title='Another longer title belongs here' place='California' day='5d' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}