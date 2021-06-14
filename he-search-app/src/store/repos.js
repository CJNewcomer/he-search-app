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
    const response = await fetch(`/api/search/${id}`);
    if (response.ok) {
        dispatch(setRepo(response.data.repo));
        return response;
    }
}

export const getRepos = (query) => async (dispatch) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    console.log("is this working?", response);
    const repos = response.data;
    if (response.ok) {
        dispatch(setRepos(repos));
    }    

};

const initialState = {};

const repoReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_REPO:
            newState[action.payload.id] = action.payload;
            return newState;
        case SET_REPOS:
            newState = { ...state};
            return newState;
        default:
            return state;
    }
}

export default repoReducer;