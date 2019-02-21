const thunk = ({
    dispatch,
    getState
}) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

export default thunk;

action => dispatch => m1 => m2 => ... => rootReducer => updates  store => broadcasts changes to subscribed components