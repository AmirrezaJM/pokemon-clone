<template>
  <div>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="singleCharacter in props.pokemonList" :key="singleCharacter.id">
        <NuxtLink :to="`/pokemon/${singleCharacter.id}`">
          <PokemonCard
            :image="singleCharacter.sprites.front_default"
            :id="singleCharacter.id"
            :name="singleCharacter.name"
            :height="singleCharacter.height"
            :weight="singleCharacter.weight"
            :all-types="singleCharacter.types"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["pokemonList"]);
</script>
