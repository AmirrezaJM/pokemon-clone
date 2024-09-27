export interface PokemonData {
    count: number,
    next: string | null,
    previous: string | null,
    results: SinglePokmonResult[]
}


export interface PokemonResult {
    id: number,
    name: string,
    sprites: PokemonSprites,
    types: PokemonTypes[],
    weight: number,
    height: number,
}


export interface PokemonSprites {
    front_default: string,
}

export interface PokemonTypes {
    type: {name: string, url: string},
    slot?: string,
}

export interface SinglePokmonResult {
    name: string,
    url: string
}
