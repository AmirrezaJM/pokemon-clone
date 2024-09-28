<template>
  <main class="pt-28">
    <UContainer>
      <!-- ------------------------------- -->
      <PokemonList :pokemonList="pokemonCharacters" :isCardloaded="statusPokemonData" />

    </UContainer>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { PokemonData } from "~/types/pokemon";

// ! fix the issue
const pokemonResults = ref<any[]>([]);
const pokemonCharacters = ref<any[]>([]);
const statusPokemonData = ref<any>('')
const offset = ref(0);

onMounted(() => {
  getAllData();
});

watchEffect(() => {
  EndOfThePage();
});


// -- Functions
async function getAllData() {
  const { data: response, error, status } = await useFetch<PokemonData>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=20`
  );

  statusPokemonData.value = status

  if (error.value) {
    console.error("Error fetching initial data:", error.value);
    return;
  }

  if (response.value?.results) {
    pokemonResults.value = response.value.results;
    await fetchAllPokemonData(pokemonResults.value);
  }
}

async function fetchAllPokemonData(
  pokemonList: { name: string; url: string }[]
) {
  for (const pokemon of pokemonList) {
    await fetchPokemonData(pokemon);
  }
}

async function fetchPokemonData(pokemon: { name: string; url: string }) {
  const { data: response, error } = await useFetch('/api/SinglePokemon', {
    params: {url: pokemon.url}
  });

  if (error.value) {
    console.error("Failed to fetch Pokémon data:", error.value);
    return;
  }
  if (response.value) {
    pokemonCharacters.value.push(response.value);
  }
}

// -- Computed Functions

function EndOfThePage() {
  window.onscroll = async () => {
    let bottomOfWindow =
      Math.abs(
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight -
          document.documentElement.offsetHeight
      ) < 1;

    if (bottomOfWindow) {
      offset.value += 20;
      await getAllData();
    }
  };
}
</script>
