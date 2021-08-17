import {
  FETCH_POSTS,
  FETCH_USERS,
  FETCH_USER,
  FETCH_POST,
  FETCH_COMMENTS,
} from "../actions/type";

const initialState = {
  posts: [],
  users: [],
  comments: [],
  user: "",
  post: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    default:
      return state;
  }
}
