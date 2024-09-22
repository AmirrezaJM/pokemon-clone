<template>
  <NuxtLink :to="`pokemon/${link}`">
    <UCard :ui="UCardStyle">
      <template #header>
        <h4 class="block bg-neutral-800 rounded-2xl px-2 text-xs text-white">
          # {{ pokemonNumber }}
        </h4>
        <div class="w-4 h-4 rounded-2xl bg-green-400"></div>
      </template>

      <div class="flex flex-row justify-center">
        <img
          class="bg-gradient-to-b shadow-lg from-neutral-500/60 bg-transparent w-2/4 h-2/4 mx-auto rounded-full"
          :src="image"
          alt="test"
        />
      </div>

      <template #footer>
        <p
          class="text-xl font-bold text-center text-white dark:text-gray-200 py-2"
        >
          {{ name }}
        </p>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col items-center">
            <span class="text-base font-medium text-neutral-300">Weight</span>
            <span class="text-base font-bold text-white">{{ weight }} kg</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-base font-medium text-neutral-300">Height</span>
            <span class="text-base font-bold text-white">{{ height }} m</span>
          </div>
        </div>
        <slot />
      </template>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { pokemonTypes } from '~/types/pokemon';

const props = defineProps({
    pokemonNumber: {
      required: false,
      type: Number
    },
    height: {
        required: true,
        type: Number
    },
    weight: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    link: {
        required: false,
        type: Number,
    },
    image: {
        required: true,
        type: String
    }
})

// -- Function

const getAllTypes = computed((response: any) => {
  const types = response.value?.types.map((type: pokemonTypes) => type.type.name);
  return types;
});

// -- Styles
const UCardStyle = reactive({
  base: "py-2 !px-1",
  background: "bg-gradient-to-b from-neutral-900/85 to-neutral-950/95",
  divide: "",
  ring: "ring-1 ring-green-800 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "sm:px-1 sm:py-2",
  },
  header: {
    base: "flex flex-row justify-between",
    padding: "!px-2 py-1",
  },
  footer: {
    base: "",
    padding: "p-1.5",
  },
});
</script>
