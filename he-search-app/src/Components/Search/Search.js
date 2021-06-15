import { useState } from 'react';


import './Search.css';

const Search = () => {
    const [query, setQuery] = useState("");
   

return (
    <>
        <div className='search__container'>
            <div className='search__input'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search or jump to...' />
            </div>
        </div>
        <div className='search__results-container'>
            {filteredResults.map((repository) => {
                const { id, name, description, starredNumber, language, owner } = repository;
                return (
                    <div className='search__results' key={id}>
                        
                            <div className='repo__container'>
                                <div className='repo__container-info'>
                                    <h3>{name}</h3>
                                    <h3>{description}</h3>
                                    <h3>{starredNumber}</h3>
                                    <h3>{language}</h3>
                                    <h3>{owner}</h3>
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