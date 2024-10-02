import type { PokemonStoryList } from "~/types/pokemon";

export default defineEventHandler(async (event) => {
    const query: { url: string} = getQuery(event);
    const pokemonURL: string = query.url;
    try {
        const response: PokemonStoryList = await $fetch(pokemonURL)
        const idealResponse = {
            flavor_text_entries: response.flavor_text_entries,
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