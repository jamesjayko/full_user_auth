import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from './user_reducer';
import movieReducer from './movie_reducer';

export default combineReducers({ // reducers will hit in the order
    user: userReducer,
    form: formReducer,
    movie: movieReducer
});