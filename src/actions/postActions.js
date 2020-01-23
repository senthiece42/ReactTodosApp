import axios from 'axios';

const fetchPostRequest = () => {
    return {
        type: 'FETCh_POST_REQUEST'
    };
};

const fetchPostSuccess = posts => {
    return {
        type: 'FETCH_POST_SUCCESS',
        payload: posts
    };
};
const fetchPostFailure = err => {
    return {
        type: 'FETCH_POST_FAILURE',
        payload: err
    };
};


export const getAllPosts = (dispatch) => {
    dispatch(fetchPostRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            let posts = res.data.slice(0, 10);
            dispatch(fetchPostSuccess(posts));
        })
        .catch(err => {
            dispatch(fetchPostFailure(err.message));
        });
}

export const fetchPosts = () => {
    return (dispatch, getState) => {
        dispatch(fetchPostRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                let posts = res.data.slice(0, 10);
                dispatch(fetchPostSuccess(posts));
            })
            .catch(err => {
                dispatch(fetchPostFailure(err.message));
            });
    }    
}


export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id
    };
}