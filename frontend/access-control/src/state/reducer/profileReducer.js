const SET_ACCOUNT_PROFILE = 'SET_ACCOUNT_PROFILE';

let initialState = {
    profileData : [],
    profile : null,
    editAccountData : {
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
};

let profileReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_ACCOUNT_PROFILE:
            return {
                ...state,
                profile : action.profile
            }
        default:
            return state;
    }
};

export const setAccountProfile = (profile) => ({type : SET_ACCOUNT_PROFILE, profile})

export default profileReducer;