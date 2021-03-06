import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [error, setError] = useState("");
    const [language, setLanguage] = useState("");
    const [sort, setSort] = useState("");

    const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "Java", "Objective-C", "Python", "Ruby", "PHP", "C#", "C", "C++"];
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const queryString = encodeURIComponent(`${query}${language.length ? `+language:${language}` : ""}`);

        const sortString = sort.length ? `&sort=stars&order=${sort}` : "" ;

        const response = await fetch(`https://api.github.com/search/repositories?q=${queryString}${sortString}`);

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
                {error.length ? (<div className='search__error'>{error}</div>) : null}
                <select 
                    className='search__dropdown-language'
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}>
                        <option value=""></option>
                    {languages.map((language) => {
                        return (
                            <option
                                value={language} key={language}>{language}</option>
                        )
                    })}
                </select>
                <select className='search__dropdown-bestmatch'
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}>
                        <option value="">Sort: Best match</option>
                        <option value="desc">Sort: Most stars</option>
                        <option value="asc">Sort: Least stars</option>
                </select>
                <button className='search__submit' type='submit'>Submit</button>
            </form>
        </div>
        <div className='search__results-container'>
            {filteredResults.map((repository) => {
                const { id, name, description, stargazers_count, language, owner:{ login } } = repository;
                return (
                    <div className='search__results' key={id}>
                            <div className='repo__container'>
                                <div className='repo__container-info'>
                                <NavLink className='repo__url' to={`/${login}/${name}`}>
                                    <h3>{login} / {name}</h3>
                                </NavLink>
                                    <h4>{language}</h4>
                                    <h4>{description}</h4>
                                    <h3>??????  {stargazers_count} </h3>
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