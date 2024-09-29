<template>
  <div>
    <!-- ------------------ -->
    <UCard
      v-if="isloaded"
      :ui="UCardStyle"
      :class="{
        'ring-grass/25 bg-grass/25 dark:ring-grass/25': singleType.hasGrass,
        'ring-fire/25 bg-fire/25 dark:ring-fire/25': singleType.hasFire,
        'ring-bug/25 bg-bug/25 dark:ring-bug/25': singleType.hasBug,
        'ring-water/25 bg-water/25 dark:ring-water/25': singleType.hasWater,
        'ring-poison/25 bg-poison/25 dark:ring-poison/25': singleType.hasPoison,
        'ring-normal/25 bg-normal/25 dark:ring-normal/25':
          singleType.hasNormal || singleType.hasGround,
        'ring-electric/25 bg-electric/25 dark:ring-electric/25':
          singleType.hasElectric,
        'ring-fairy/25 bg-fairy/25 dark:ring-fairy/25': singleType.hasFairy,
        'ring-rocky/25 bg-rocky/25 dark:ring-rocky/25': singleType.hasRock,
        'ring-fighting/25 bg-fighting/25 dark:ring-fighting/25':
          singleType.hasFighting,
        'ring-ghost/25 bg-ghost/25 dark:ring-ghost/25': singleType.hasGhost,
        'ring-ice/25 bg-ice/25 dark:ring-ice/25': singleType.hasIce,
      }"
    >
      <template #header>
        <div
          class="w-4 h-4 rounded-2xl"
          :class="{
            'bg-grass': singleType.hasGrass,
            'bg-fire': singleType.hasFire,
            'bg-bug': singleType.hasBug,
            'bg-water': singleType.hasWater,
            'bg-poison': singleType.hasPoison,
            'bg-normal': singleType.hasNormal || singleType.hasGround,
            'bg-electric': singleType.hasElectric,
            'bg-fairy': singleType.hasFairy,
            'bg-rocky': singleType.hasRock,
            'bg-fighting': singleType.hasFighting,
            'bg-ghost': singleType.hasGhost,
            'bg-ice': singleType.hasIce,
          }"
        ></div>
      </template>

      <div class="flex flex-row justify-center">
        <img
          class="bg-gradient-to-b shadow-lg from-neutral-500/60 bg-transparent w-2/4 h-2/4 mx-auto rounded-full"
          :src="image"
          alt="test"
        />
      </div>

      <template #footer>
        <p class="text-xl font-semibold text-center text-primaryAccent-200 py-2">
          {{ name }}
        </p>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col items-center">
            <span class="text-base font-medium text-white">Weight</span>
            <span class="text-base font-bold text-secondaryAccent-300"
              >{{ weight }} kg</span
            >
          </div>
          <div class="flex flex-col items-center">
            <span class="text-base font-medium text-white">Height</span>
            <span class="text-base font-bold text-secondaryAccent-300"
              >{{ height }} m</span
            >
          </div>
        </div>
        <div
          class="my-2 flex justify-center items-center font-semibold text-white dark:text-gray-200"
        >
          <span>Type:</span>
          <div v-for="(types, index) in allTypes" :key="index">
            <span class="mx-1">{{ types.type.name }}</span>
            <span class="mr-1" v-if="index < allTypes.length - 1"> - </span>
          </div>
        </div>
      </template>
    </UCard>

    <!-- ------------------ -->
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

const getSingleType = ref<string | undefined>("");

const singleType = reactive({
  hasFire: false,
  hasWater: false,
  hasBug: false,
  hasGrass: false,
  hasPoison: false,
  hasNormal: false,
  hasElectric: false,
  hasRock: false,
  hasGround: false,
  hasFighting: false,
  hasGhost: false,
  hasFairy: false,
  hasIce: false,
});

// const SingleType = ref<any>('')

interface Props {
  name: string;
  weight: number;
  height: number;
  image: string;
  allTypes: PokemonTypes[];
  isloaded: boolean;
}

const { name, weight, height, image, allTypes, isloaded } =
  defineProps<Props>();

onMounted(() => {
  typeStatus();
});

function typeStatus() {
  const allTypesList = allTypes.map((types) => types.type.name);
  getSingleType.value = allTypesList.find((element) => element);
  switch (getSingleType.value) {
    case "grass":
      singleType.hasGrass = true;
      break;
    case "water":
      singleType.hasWater = true;
      break;
    case "bug":
      singleType.hasBug = true;
      break;
    case "fire":
      singleType.hasFire = true;
      break;
    case "poison":
      singleType.hasPoison = true;
      break;
    case "normal":
      singleType.hasNormal = true;
      break;
    case "ground":
      singleType.hasGround = true;
      break;
    case "rock":
      singleType.hasRock = true;
      break;
    case "electric":
      singleType.hasElectric = true;
      break;
    case "fighting":
      singleType.hasFighting = true;
      break;
    case "fairy":
      singleType.hasFairy = true;
      break;
    case "Ice":
      singleType.hasIce = true;
      break;
    case "ghost":
      singleType.hasGhost = true;
      break;
    default:
      break;
  }
}

// -- Styles
const UCardStyle = reactive({
  base: "py-2 !px-1",
  background:
    "bg-gradient-to-b from-neutral-900/70 to-neutral-950/75 hover:scale-90 transition-transform",
  divide: "",
  ring: "ring-1",
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

<!-- :class="{
  'bg-grass': singleType.hasGrass,
  'bg-fire': singleType.hasFire,
  'bg-bug': singleType.hasBug,
  'bg-water': singleType.hasWater,
  'bg-poison': singleType.hasPoison,
  'bg-normal': singleType.hasNormal,
}" -->
