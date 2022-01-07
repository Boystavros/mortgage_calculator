import React, {useState} from 'react';
import Form from '../components/Form';


const MortgageCalculatorContainer = () => {
    const [combinedSalary, setCombinedSalary] = useState(0);
    const [multiplier, setMultiplier] = useState(3);

    const addCombinedSalary = function(submittedSalary) {
        setCombinedSalary(submittedSalary)
    };

    return (
        <>
            <h1>Working</h1>
            <Form/>
        </>
    )
};

// onFormSubmit={addCombinedSalary}

export default MortgageCalculatorContainer;