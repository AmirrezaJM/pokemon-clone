<template>
  <div>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="singleCharacter in pokemonList" :key="singleCharacter.id">
        <NuxtLink :to="`/pokemon/${singleCharacter.id}`">
          <PokemonCard
            :image="singleCharacter.sprite"
            :id="singleCharacter.id"
            :name="singleCharacter.name"
            :height="singleCharacter.height"
            :weight="singleCharacter.weight"
            :all-types="singleCharacter.types"
            :isloaded="isCardloaded"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pokemonList, isCardloaded } = defineProps(["pokemonList",'isCardloaded']);
</script>
