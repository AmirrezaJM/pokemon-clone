<template>
    <NuxtLink target="_blank" :to="link">
        <UIcon :name="icon" class="w-6 h-6 transition-transform duration-150 hover:scale-110 hover:text-opacity-100 text-opacity-50 text-primary-500" />
    </NuxtLink>
</template>

<script setup lang="ts">
    interface props {
        icon: string,
        link: string,
    }
    const {icon,link} = defineProps<props>()
    
</script>

<style scoped>

</style>


