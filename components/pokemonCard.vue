<template>
  <div>
    <UCard v-if="isloaded" :ui="UCardStyle">
      <template #header>
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
        <div class="my-2 flex justify-center items-center font-semibold">
          <span>Type:</span>
          <div v-for="(types, index) in allTypes" :key="index">
            <span class="mx-1">{{ types.type.name }}</span>
            <span class="mr-1" v-if="index < allTypes.length - 1"> - </span>
          </div>
        </div>
      </template>
    </UCard>

    <UCard v-else :ui="UCardStyle">
      <template #header>
        <USkeleton :ui="{ base: 'h-4 w-4', rounded: 'rounded-2xl' }" />
      </template>

      <div class="flex flex-row justify-center">
        <USkeleton
          :ui="{ base: 'w-32 h-32 mx-auto shadow-lg', rounded: 'rounded-full' }"
        />
      </div>

      <template #footer>
        <USkeleton
          :ui="{ base: 'w-[100px] h-4 mx-auto mb-4', rounded: 'rounded-2xl' }"
        />
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col items-center space-y-2">
            <USkeleton :ui="{ base: 'w-[100px] h-4', rounded: 'rounded-xl' }" />
            <USkeleton :ui="{ base: 'w-[50px] h-4', rounded: 'rounded-xl' }" />
          </div>
          <div class="flex flex-col items-center space-y-2">
            <USkeleton :ui="{ base: 'w-[100px] h-4', rounded: 'rounded-xl' }" />
            <USkeleton :ui="{ base: 'w-[50px] h-4', rounded: 'rounded-xl' }" />
          </div>
        </div>
        <div class="mt-4 flex justify-center items-center font-semibold">
          <USkeleton :ui="{ base: 'w-[100px] h-4', rounded: 'rounded-xl' }" />
        </div>
      </template>
    </UCard>

  </div>
</template>

<script setup lang="ts">
import type { PokemonTypes } from "~/types/pokemon";

interface Props {
  name: string;
  weight: number;
  height: number;
  image: string;
  allTypes: PokemonTypes[];
  isloaded: any;
}

const { name, weight, height, image, allTypes, isloaded } =
  defineProps<Props>();

// -- Styles
const UCardStyle = reactive({
  base: "py-2 !px-1",
  background:
    "bg-gradient-to-b from-neutral-900/85 to-neutral-950/95 hover:scale-90 transition-transform",
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

<style scoped></style>
