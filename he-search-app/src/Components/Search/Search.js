import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getRepo, getRepos } from '../../store/repos';

import './Search.css';

const Search = () => {
    const [search, setSearch] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const reposFromStore = useSelector((state) => Object.values(state.repo));

    const dispatch = useDispatch();
    const history = useHistory();

    // const location = useLocation();
    // const query = location.search.split('=')[1];
    // const filtered = repos.filter(repo => repo.name.toLowerCase().includes(query.toLowerCase()));

    useEffect(() => {
        dispatch(getRepo())
        dispatch(getRepos())
    }, [dispatch]);


    useEffect(() => {
        setFilteredResults(
            reposFromStore.filter((repo) => 
            repo.label.toLowerCase().includes(search.toLowerCase()) ||
            repo.fork.toLowerCase().includes(search.toLowerCase()) ||
            repo.filename.toLowerCase().includes(search.toLowerCase()) ||
            repo.owner.toLowerCase().includes(search.toLowerCase()) ||
            repo.path.toLowerCase().includes(search.toLowerCase()) ||
            repo.language.toLowerCase().includes(search.toLowerCase()) ||
            repo.size.toLowerCase().includes(search.toLowerCase()) ||
            repo.extension.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])

if (!filteredResults) return null;

return (
    <>
        <div className='search__container'>
            <div className='search__input'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search or jump to...' />
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