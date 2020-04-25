const SET_ACCOUNTS = "SET_ACCOUNTS";
const SEARCH_ACCOUNTS = "SEARCH_ACCOUNTS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ACCOUNT_COUNT = 'SET_TOTAL_ACCOUNT_COUNT';
const TOOGLE_ACCOUNT_FETCHING = 'TOOGLE_ACCOUNT_FETCHING';
const NEW_ACCOUNT_TEXT = 'NEW_ACCOUNT_TEXT';

let initialState = {
    accountData : [],
    isFetching : true,
    addAccountData : {
        id : null,
        name : '',
        surname : '',
        department : '',
        position : '',
        student_id : '',
        gender : '',
        email : '',
        advisor : ''
    },
    newAccountText : ''
};

let accountReducer = (state=initialState,action) => {

    switch (action.type) {
        case SET_ACCOUNTS:
            return {
                ...state,
                accountData : action.accounts
            }
        case TOOGLE_ACCOUNT_FETCHING:
            return {
                ...state,
                isFetching : action.isFetching
            }
        case NEW_ACCOUNT_TEXT:
            return {
                ...state,
                newAccountText : action.newText
            }
        default:
            return state;
    }
};

export const setAccounts = (accounts) => ({type : SET_ACCOUNTS,accounts})
export const setToogleAccountFetching = (isFetching) => ({type : TOOGLE_ACCOUNT_FETCHING,isFetching})
export const newAccountTextAC = (text) => ({type : NEW_ACCOUNT_TEXT, newText : text})

export default accountReducer;