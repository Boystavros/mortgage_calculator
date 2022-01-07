import React, {useEffect, useState} from 'react';
import Form from '../components/Form';


const MortgageCalculatorContainer = () => {
    const [combinedSalary, setCombinedSalary] = useState(0);
    const [deposit, setDeposit] = useState("");
    const [mortgageValue, setMortgageValue] = useState(0);

    const addDeposit = function(submittedDeposit) {
        setDeposit(submittedDeposit);
    };

    const addCombinedSalary = function(submittedSalary) {
        setCombinedSalary(submittedSalary);
    };

    useEffect(() => {
        setMortgageValue(combinedSalary * 3.4 + deposit)
    },[combinedSalary]);

    return (
        <>
            <h1>Mortgage Calculator</h1>
            <Form addCombinedSalary={addCombinedSalary} addDeposit={addDeposit} deposit={deposit}/>
            <h2>Maximum mortgage value: {mortgageValue}</h2>
        </>
    )
};

export default MortgageCalculatorContainer;