import { createSelector } from 'reselect'

//SERVE AS A MEMOIZING SELECTOR 
export const getDetailSelectorState = createSelector(
    state => state.userDetails,
    userDetails => userDetails
)