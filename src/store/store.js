import { createStore, combineReducers } from 'redux';
import { initialState, getCompanyAdvertisementReducer } from '../reducers/companyAdvertisementReducer';

const allReducers = combineReducers({
    getCompanyAdvertisement: getCompanyAdvertisementReducer
});

const store = createStore(
    allReducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);

export default store;