import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRepos } from '../../store/repos';

import './Search.css';

const Search = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const reposFromStore = useSelector((state) => Object.values(state.repos));

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // dispatch(getRepo())
        dispatch(getRepos())
    }, [dispatch]);


    useEffect(() => {
        setFilteredResults(
            reposFromStore.filter((repo) => 
            repo.label.toLowerCase().includes(query.toLowerCase()) ||
            repo.fork.toLowerCase().includes(query.toLowerCase()) ||
            repo.filename.toLowerCase().includes(query.toLowerCase()) ||
            repo.owner.toLowerCase().includes(query.toLowerCase()) ||
            repo.path.toLowerCase().includes(query.toLowerCase()) ||
            repo.language.toLowerCase().includes(query.toLowerCase()) ||
            repo.size.toLowerCase().includes(query.toLowerCase()) ||
            repo.extension.toLowerCase().includes(query.toLowerCase()))
        )
        // eslint-disable-next-line
    }, [query]);

if (!filteredResults) return null;

return (
    <>
        <div className='search__container'>
            <div className='search__input'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search or jump to...' />
            </div>
        </div>
        <div className='search__results-container'>
            {filteredResults.map((repo) => {
                const { id, name, description, starredNumber, language, owner } = repo;
                return (
                    <div className='search__results' key={id}>
                        <div onClick={() => {
                            history.push(`/search/${id}`)
                        }}>
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
                    </div>
                )
            })}
        </div>
    </>
)
}

export default Search;