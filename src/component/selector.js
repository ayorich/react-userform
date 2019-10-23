import { createSelector } from 'reselect'


// const detailSelector = state => state.userDetails;
export const getDetailSelectorState = createSelector(
    state => state.userDetails,
    userDetails => userDetails
)