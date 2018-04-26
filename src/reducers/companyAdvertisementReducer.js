export const initialState = {
    getCompanyAdvertisement: {}
};

export const getCompanyAdvertisementReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COMPANY_ADVERTISEMENT':
            return action.payLoad;
        default:
            return state;
    }
};
