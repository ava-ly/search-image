import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Enter search eg: car, ocean, clothes...</label>
                <input className="input is-info" type="text" value={term} onChange={handleChange}/>
            </form>
        </div>
    )
};

export default SearchBar;
