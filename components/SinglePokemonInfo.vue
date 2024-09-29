<template>
  <div>
    <h4 class="font-bold text-black dark:text-secondaryAccent-200 text-sm">
      {{ title }}
    </h4>
    <div :class="className" class="my-3 flex flex-wrap justify-start items-start">
        <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  className?: string
}

const { title, className } = defineProps<Props>();

</script>

<style scoped></style>
