<template>
    <header class="shadow-lg m-0 p-4 fixed top-0 z-10 bg-[#1E1B1B] w-full">
        <UContainer :ui="{base: 'flex items-center justify-between'}">
            <div>
                <img class="w-auto h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"/>
            </div>
            <h1 class="text-center text-lg font-semibold">
                Let's see characters in pokemon world
            </h1>
            <div class="flex items-center space-x-3 ">
                <!-- Make it seperate component -->
                <UIcon name="ph:moon-light" class="w-6 h-6 transition-all duration-150 hover:scale-110 hover:text-opacity-100 text-opacity-50 text-primary-500" />
                <HeaderIcons icon="mdi:linkedin" link="https://www.linkedin.com/in/amirreza-jolani-mameghani-b15084165/" />
                <HeaderIcons icon="mdi:twitter" link="https://x.com/ARJoolim" />
                <HeaderIcons icon="mdi:github" link="https://github.com/AmirrezaJM" />
            </div>
        </UContainer>
    </header>
  <slot />
</template>

<script setup lang="ts"></script>

<style scoped></style>
