<template>
  <UCard :ui="UCardStyle">
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
          <span class="text-base font-bold text-white"
            >{{ weight }} kg</span
          >
        </div>
        <div class="flex flex-col items-center">
          <span class="text-base font-medium text-neutral-300">Height</span>
          <span class="text-base font-bold text-white"
            >{{ height }} m</span
          >
        </div>
      </div>
      <div class="mt-3 mb-1 flex justify-center items-center font-semibold">
        <span class="mr-1">Type:</span>
        <div v-for="(types,index) in allTypes" :key="index">
          <span>{{ types.type.name }}</span>
          <span class="mr-1" v-if="index < allTypes.length - 1"> - </span>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">

const {id,name,weight,height,image,allTypes} = defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    allTypes: {
      type: Array<String>,
      required: true
    }
})


// -- Styles
const UCardStyle = reactive({
  base: "py-2 !px-1",
  background: "bg-gradient-to-b from-neutral-900/85 to-neutral-950/95 hover:scale-90 transition-transform",
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
