import React, {useState} from 'react';


const Form = () => {
    const [salaries, setSalaries] = useState({
        salary1 : "",
        salary2 : ""
    });

    const handleChange = function(event) {
        console.log(event);
        const newData 
        // setSalaries()
    };
    

// handle form change
    return (
        <form>
            <input 
            type="text"
            placeholder="Your salary"
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Your partner's salary"
            onChange={handleChange}
            />
            <input type="submit" value="Submit"/>
        </form>
    )

};

export default Form;