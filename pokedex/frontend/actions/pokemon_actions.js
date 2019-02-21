export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
});

export const requestPokemon = () => dispatch => {
    // do an ajax request
    // .then, when the server responds wit the pokemon
    // we use the passed in dispatch to start a new redux cycle with our pokemon data
    $.ajax({
        method: "get",
        url: '/pokemon'
    }).then(response => {
        const allPokemon = response;
        const action = receiveAllPokemon(allPokemon);
        dispatch(action);
    });
}

const mapDispatchToProps = dispatch => ({
    getAllPokemon: () => dispatch(requestPokemon())
})