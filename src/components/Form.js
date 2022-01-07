import React, {useState} from 'react';


const Form = ({addCombinedSalary, addDeposit}) => {
    const [salary1, setSalary1] = useState("");
    const [salary2, setSalary2] = useState("");
    const [formDeposit, setFormDeposit] = useState("");

    const handleChangeSalary1 = function(event) {
        !event.target.value ? setSalary1(0) : setSalary1(parseInt(event.target.value));
    };

    const handleChangeSalary2 = function(event) {
        !event.target.value ? setSalary2(0) : setSalary2(parseInt(event.target.value));
    };

    const handleChangeDeposit = function(event) {
        !event.target.value ? setFormDeposit(0) : setFormDeposit(parseInt(event.target.value));
    }

    const handleFormSubmit = function(event) {
        event.preventDefault();
        const salaryTotal = salary1 + salary2;
        addCombinedSalary(salaryTotal);
        addDeposit(formDeposit);
        // setSalary1(0);
        // setSalary2(0);
    };
    

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="Salary 1"
            value={salary1}
            onChange={handleChangeSalary1}
            />
            <input
            type="text"
            placeholder="Salary 2 (Optional)"
            value={salary2}
            onChange={handleChangeSalary2}
            />
            <input
            type="text"
            placeholder="Deposit"
            value={formDeposit}
            onChange={handleChangeDeposit}
            />
            <input type="submit" value="Submit"/>
        </form>
    );

};

export default Form;