export interface PokemonData {
    count: number,
    next: string | null,
    previous: string | null,
    results: SinglePokmonResult[]
}

export interface SinglePokmonResult {
    name: string,
    url: string
}

export interface 