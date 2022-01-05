import React from 'react'
export default function SectionThreeCard(props) {
    return (
        <div>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {props.title}
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img
                            src="https://github.com/twbs.png"
                            alt="Bootstrap"
                            width={32}
                            height={32}
                            className="rounded-circle border border-white"
                        />
                    </li>
                    <li className="d-flex align-items-center me-3">
                        <svg className="bi me-2" width="1em" height="1em">
                            <use xlinkHref="#geo-fill" />
                        </svg>
                        <small>{props.place}</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <svg className="bi me-2" width="1em" height="1em">
                            <use xlinkHref="#calendar3" />
                        </svg>
                        <small>{props.day}</small>
                    </li>
                </ul>
            </div>
        </div>
    )
}