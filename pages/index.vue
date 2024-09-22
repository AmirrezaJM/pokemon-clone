<template>
  <main class="h-screen w-screen">
    <UContainer v-if="!error">
      <h1 class="text-xl font-semibold text-gray-200 text-center py-4">
        There are all the pokemon characters
      </h1>

      <div v-if="status === 'pending'">
        Loading ...
      </div>
      <div v-else>
        <PokemonCardList :number-of-pokemon="getLengthOfPokemonList" />
        <PokemonPagination />
      </div>
    </UContainer>

    <UContainer v-else>
      Something is went wrong!
    </UContainer>
    
  </main>
</template>

<script setup lang="ts">

import type { pokemonListResponse } from '~/types/pokemon';


const {data: response, error, status} = await useLazyFetch<pokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')

// -- Functions
const getLengthOfPokemonList = computed(() => {
  return response.value?.results.length || 0;
});
</script>
