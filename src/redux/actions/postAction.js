import {FETCH_POSTS, FETCH_USERS, FETCH_USER, FETCH_POST, FETCH_COMMENTS} from './type';
import {api} from '../Api';
import {comments, posts, users} from '../../services/URL';

export const fetchPosts = () => async (dispatch) => {
    const response = await api('GET', posts)
    response.data.length = 30
    return dispatch({ type: FETCH_POSTS, payload: response.data})
}

export const fetchUsers = () => async (dispatch) => {
    const response = await api('GET', users)
    return dispatch({ type: FETCH_USERS, payload:response.data})
}

export const fetchUser = (id) => async (dispatch) => {
    const userApi = users+id
    const response = await api('GET', userApi)
    return dispatch({ type: FETCH_USER, payload:response.data})
}

export const fetchPost = (id) => async (dispatch) => {
    const userApi = posts+"/"+id
    const response = await api('GET', userApi)
    return dispatch({ type: FETCH_POST, payload:response.data})
}

export const fetchComments = (id) => async (dispatch) => {
    const userApi = comments+"?postId="+id
    const response = await api('GET', userApi)
    return dispatch({ type: FETCH_COMMENTS, payload:response.data})
}