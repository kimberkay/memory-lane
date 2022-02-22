import formVisibleReducer from './form-visible-reducer';
import entryListReducer from './entry-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainEntryList: entryListReducer,
  firestore: firestoreReducer
});

export default rootReducer;