const SET_ACCOUNTS = "SET_ACCOUNTS";

let initialState = {
    accountData : [],
};

let accountReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_ACCOUNTS:
            return {
                ...state,
                accountData : action.accounts
            }
        default:
            return state;
    }
};

export let setAccounts = (accounts) => ({type : SET_ACCOUNTS,accounts})

export default accountReducer;