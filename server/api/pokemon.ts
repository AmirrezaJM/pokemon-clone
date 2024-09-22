import { pokemonResult } from "~/types/pokemon";

// import {pokemonResponse} from '~/types/pokemon';
export default defineEventHandler(async event => {
    try {
        const response: pokemonResult = await $fetch(
            `https://pokeapi.co/api/v2/pokemon/1/`
        );
        const idealResponse = {
            id: response.id,
            name: response.name,
            sprite: response.sprites.front_default,
            types: response.types,
            weight: response.weight,
            height: response.height
        }

        return idealResponse
    } catch (error) {
        throw createError({
            statusCode: 404,
            message: "can't find the data"
        })
    }
})