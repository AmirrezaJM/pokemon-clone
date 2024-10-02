import type { PokemonResult } from "~/types/pokemon";

export default defineEventHandler(async (event) => {
    const query: {url: string} = getQuery(event);
    const pokemonURL: string = query.url;
    try {
        const response: PokemonResult = await $fetch(pokemonURL)
        const idealResponse = {
            id: response.id,
            name: response.name,
            sprite: response.sprites.front_default,
            types: response.types,
            weight: response.weight,
            height: response.height
        }
        return idealResponse
    } 
    catch(error) {
        throw createError({
            statusCode: 404,
            message: 'Failed to fetch data',
        });
        
    }
})