import React, {useEffect, useState} from 'react';
import Form from '../components/Form';


const MortgageCalculatorContainer = () => {
    const [combinedSalary, setCombinedSalary] = useState("0");
    const [mortgageValue, setMortgageValue] = useState("0");

    const addCombinedSalary = function(submittedSalary) {
        setCombinedSalary(submittedSalary)
    };

    useEffect(() => {
        setMortgageValue(combinedSalary * 3.4)
    },[combinedSalary]);

    return (
        <>
            <h1>Mortgage Calculator</h1>
            <Form onFormSubmit={addCombinedSalary}/>
            <h2>Maximum mortgage value: {mortgageValue}</h2>
        </>
    )
};

export default MortgageCalculatorContainer;