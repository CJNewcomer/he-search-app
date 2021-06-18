

const Repo = ({filteredResults}) => {    
    return (
        <>
            <div className='repos__container'>
                {filteredResults.map((repository) => {
                    const { id, name, description, stargazers_count, language, owner:{ login }} = repository;
                    return (
                        <div className='repos__container-info' key={id}>
                            <h3>{login} / {name}</h3>
                            <h4>{language}</h4>
                            <h4>{description}</h4>
                            <h3>⭐️  {stargazers_count} </h3>
                        </div> 
                    )
                })}
            </div>
        </>
    )
}

export default Repo;