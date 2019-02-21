class Api::PokemonController < ApplicationController
    def index
        @pokemons = Pokemon.all
        render :index
    end

    def show
        @pokemon = Pokemon.find_by(id: params[:id])
        @items = @pokemon.item_ids.map do |item_id|
            Item.find_by(id: item_id)
        end
        render :show
    end
end
