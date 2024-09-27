<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()



async function getSinglePokemonData() {
  const {data:response} = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params}`)
  return response
}

</script>

<style scoped>

</style>