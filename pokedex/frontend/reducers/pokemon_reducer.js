import {
    RECEIVE_ALL_POKEMON
} from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            const newState = Object.assign({}, state, action.pokemon)
            return newState;
        default:
            return state;
    }
}