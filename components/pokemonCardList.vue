<template>
  <div class="grid grid-cols-1 gap-3  sm:grid-cols-3 lg:grid-cols-4">
    <div v-for="item in numberOfPokemon" :key="item.name">
      <PokemonCard
        :name="response!.name"
        :height="response!.height"
        :weight="response!.weight"
        :link="response!.id"
        :image="response!.sprite"
        :pokemonNumber="response!.id"
      >
        <div class="flex justify-center items-center space-x-1 py-2">
          <span class="text-sm text-neutral-300">Type:</span>
          <div
            v-for="(type, index) in getAllTypes"
            :key="index"
            class="font-bold text-center text-white"
          >
            <span>{{ type }}</span>
            <span class="mx-1" v-if="index < getAllTypes!.length - 1"> - </span>
          </div>
        </div>
      </PokemonCard>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['numberOfPokemon'])

import type { pokemonTypes } from '~/types/pokemon';

const { data: response } = await useFetch("/api/pokemon");

// -- Functions
const getAllTypes = computed((response: any) => {
  const types = response.value?.types.map((type: pokemonTypes) => type.type.name);
  return types;
});
</script>
