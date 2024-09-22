export interface pokemonResult {
    id: number,
    name: string,
    sprites: pokemonSprite,
    types: pokemonTypes[],
    weight: number,
    height: number
}

export interface pokemonTypes {
    slot?: number,
    type: pokemonInnerType
}

export interface pokemonSprite {
    back_default: string,
    front_shiny: string,
    front_default: string
}

export interface pokemonInnerType {
    name: string,
    url?: string
}

export interface pokemonListResponse {
    results: Array<{name: string, url: string}>
}