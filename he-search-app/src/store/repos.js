export const SET_REPO = 'repos/SET_REPO';
const SET_REPOS = 'repos/SET_REPOS';

const setRepos = (repositories) => ({
    type: SET_REPOS,
    payload: { repositories },
});

const setRepo = ({ repository }) => ({
    type: SET_REPO,
    payload: { repository },
});

export const getRepo = (id) => async (dispatch) => {
    const response = await fetch(`/api/search/${id}`);
    if (response.ok) {
        dispatch(setRepo(response.data.repository));
        return response;
    }
}

export const getRepos = (query) => async (dispatch) => {
    const response = await fetch(`https://api.github.com/${query}`);
    console.log("is this working?");
    const repositories = response.data;
    const res = await fetch(`/api/search/repositories`, {
        method: 'POST',
        body: JSON.stringify({ repositories }),
    });
    dispatch(setRepos(res.data));
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