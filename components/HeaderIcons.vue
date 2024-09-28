<template>
    <NuxtLink target="_blank" :to="link" class="flex items-center">
        <UIcon :name="icon" class="w-6 h-6 transition-all duration-150 hover:scale-110 hover:text-opacity-100 hover:text-secondaryAccent-400 text-opacity-50 text-primaryAccent-500" />
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


