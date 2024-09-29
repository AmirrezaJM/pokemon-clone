<template>
    <header class="shadow-lg m-0 p-4 fixed top-0 z-10 bg-[#F5F5F5] dark:bg-[#1E1B1B] w-full">
        <UContainer :ui="{base: 'flex items-center justify-between'}">
            <NuxtLink to="/">
                <img class="w-auto h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"/>
            </NuxtLink>
            <h1 class="text-center text-lg font-semibold text-primaryAccent-800 dark:text-primaryAccent-300">
                Let's see characters in pokemon world
            </h1>
            <div class="flex items-center space-x-3 ">
                <!-- Make it seperate component -->
                <UIcon :name="iconName" @click="toggleMode" class="w-6 h-6 transition-all duration-150 hover:scale-110 hover:text-opacity-100 hover:text-secondaryAccent-400 text-opacity-50 text-primaryAccent-800 dark:text-primaryAccent-300 hover:cursor-pointer" />
                <HeaderIcons icon="mdi:linkedin" link="https://www.linkedin.com/in/amirreza-jolani-mameghani-b15084165/" />
                <HeaderIcons icon="mdi:twitter" link="https://x.com/ARJoolim" />
                <HeaderIcons icon="mdi:github" link="https://github.com/AmirrezaJM" />
            </div>
        </UContainer>
    </header>
  <slot />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const lightModeActive = ref<boolean>(false)


// -- ComputedFunctions
const iconName = computed(() => {
    return  lightModeActive.value ? "ph:sun-dim-thin" : "ph:moon-light" 
})

// -- Functions
const toggleMode = () => {
    lightModeActive.value = lightModeActive.value == true ? false : true;
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped></style>
