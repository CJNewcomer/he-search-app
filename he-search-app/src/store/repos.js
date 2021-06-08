export const SET_REPO = 'repos/SET_REPO';
const SET_REPOS = 'repos/SET_REPOS';

const setRepos = (repos) => ({
    type: SET_REPOS,
    payload: { repos },
});

const setRepo = ({ repo }) => ({
    type: SET_REPO,
    payload: { repo },
});

export const getRepo = (id) => async (dispatch) => {
    const response = await fetch(`https://api.github.com/search/${id}`);
    if (response.ok) {
        dispatch(setRepo(response.data.repo));
        return response;
    }
}

export const getRepos = (query) => async (dispatch) => {
    const response = await fetch(`https://api.github.com/search/${query}`);
    if (response.ok) {
        dispatch(setRepos(response.data.repos));
        return response;
    }
}

const initialState = {};

const repoReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_REPO:
            newState[action.payload.id] = action.payload;
            return newState;
        case SET_REPOS:
            for (let repo of action.payload) {
                newState[repo.id] = repo;
            }
            return newState;
        default:
            return state;
    }
}

export default repoReducer;