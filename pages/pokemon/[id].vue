<template>
    <UContainer class="grid">
      <pre>
        {{  response }}
      </pre>
    </UContainer>
</template>

<script setup lang="ts">
import type { pokemonResult } from '~/types/pokemon';

const router = useParam();
const { data: response } = await useFetch<pokemonResult>(`https://pokeapi.co/api/v2/pokemon/${router}`);

// -- Functions

</script>
