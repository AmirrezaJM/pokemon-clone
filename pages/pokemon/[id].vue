<template>
  <main class="pt-28">
    <pre>
      {{ singlePokemonCard }}
    </pre>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const singlePokemonCard = ref<any>({})


onMounted(() => {
  getSinglePokemonData()
})


// -- Functions
async function getSinglePokemonData() {
  const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  singlePokemonCard.value = response
  return response
}

</script>

<style scoped>

</style>