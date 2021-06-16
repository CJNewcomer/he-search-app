import { useState } from 'react';
import { NavLink } from 'react-router-dom';


import './Search.css';

const Search = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [error, setError] = useState("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`);
        if (response.ok) {
            const data = await response.json();
            setFilteredResults(data.items);
        } else {
            setError("Something went wrong, please try again...");
        } 
    };

return (
    <>
        <div className='search__container'>
            <form className='search__form' onSubmit={handleSubmit}>
                <div className='search__input'>
                    <input type='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search' />
                </div>
                {error.length ? (<div className='search_error'>{error}</div>) : null}
                <select>
                    <option></option>
                </select>
            </form>
        </div>
        <div className='search__results-container'>
            {filteredResults.map((repository) => {
                const { id, name, description, stargazers_count, language, owner:{ login } } = repository;
                return (
                    <div className='search__results' key={id}>
                            <div className='repo__container'>
                                <div className='repo__container-info'>
                                <NavLink to={`/${login}/${name}`}>
                                    <h3>{name}</h3>
                                </NavLink>
                                    <h3>{description}</h3>
                                    <h3>{stargazers_count}</h3>
                                    <h3>{language}</h3>
                                    <h3>{login}</h3>
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
    </>
)
}

export default Search;