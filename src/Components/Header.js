import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Header(props) {

    const inputObj = {
        number_one: "",
        number_two: "",
        total: ""
    }

    const [ inputValues, setInputValues ] = useState(inputObj);

    const handleChangeCommon = (e) => {
        const { name, value } = e.target;

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     switch (name) {
    //         case 'number_one':
    //             setInputOne(value);
    //             break;

    //         case 'number_two':
    //             setInputTwo(value);
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    const handleClick = (op) => {
        let total = "";
        
        const { number_one, number_two } = inputValues;

        if( number_one === "" ) {
            return alert('Please enter number one');
        }

        if( number_two === "" ) {
            return alert('Please enter number two');
        }

        if( op === 'div' && number_two == 0 ) {
            return alert('cannot divide by ${number_two}');
        }

        switch (op) {
            case 'add':
                total = parseInt(number_one) + parseInt(number_two);
                break;

            case 'sub':
                total = parseInt(number_one) - parseInt(number_two);
                break;

            case 'mul':
                total = parseInt(number_one) * parseInt(number_two);
                break;

            case 'div':
                total = parseInt(number_one) / parseInt(number_two);
                break;
        
            default:
                break;
        }
        
        setInputValues({
            ...inputValues,
            total
        })
    }

    const handleClear = () => {
        setInputValues(inputObj);
    }

    return (
        <div className='container'>
            <h1>{ props.heading }</h1>
            <Row>
                <Link to="card">Card</Link>
                <Col></Col>
                <Col>
                    <Input 
                        placeholder='Number One'
                        type='number'
                        name="number_one"
                        onChange={handleChangeCommon}
                        value={inputValues.number_one}
                    />
                    <Input 
                        placeholder='Number Two'
                        type='number'
                        name="number_two"
                        className='mt-2'
                        onChange={handleChangeCommon}
                        value={inputValues.number_two}
                    />
                    <div className='mt-2'>
                        <Button 
                            className='mx-1' 
                            size='sm' 
                            color='primary'
                            onClick={() => handleClick('add')}
                        >
                            Add
                        </Button>                    
                        <Button 
                            className='mx-1' 
                            size='sm'
                            color='secondary'
                            onClick={() => handleClick('sub')}
                        >
                            Sub
                        </Button>                    
                        <Button 
                            className='mx-1' 
                            size='sm' 
                            color='warning'
                            onClick={() => handleClick('mul')}
                            >
                                Mul
                        </Button>                    
                        <Button 
                            className='mx-1' 
                            size='sm' 
                            color='success'
                            onClick={() => handleClick('div')}
                            >
                                Div
                        </Button>                    
                        <Button 
                            className='mx-1' 
                            size='sm' 
                            color='danger'
                            onClick={handleClear}
                            >
                                Clear
                        </Button>                    
                    </div>
                    <Input 
                        placeholder='Total'
                        type='number'
                        className='mt-2'
                        value={inputValues.total}
                        disabled
                    />
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}