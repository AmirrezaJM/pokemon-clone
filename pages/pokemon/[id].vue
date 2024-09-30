<template>
  <main class="pt-24">
    <UContainer>
      <div class="flex h-screen">
        <section class="flex-1 mx-auto">
          <div class="flex items-end space-x-4">
            <h1 class="text-4xl font-bold">{{ getName }}</h1>
            <span class="text-xl text-neutral-800/40 dark:text-neutral-300/40"> # {{ getID }} </span>
          </div>
          <div class="flex justify-center">
            <img class="w-3/4" :src="getImage" alt="medium" />
          </div>
        </section>
        <section class="flex-1">
          <UTabs :ui="UItabStyle" :items="items">
            <template #about>
              <SinglePokemonInfo title="Abilities">
                <div v-for="(ability,index) in showAbilities" :key="index">
                  <span class="text-sm px-6 py-1 rounded-md shadow-xl mx-2">{{ ability }}</span>
                </div>
              </SinglePokemonInfo>
              <SinglePokemonInfo title="Story">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nesciunt asperiores quia incidunt possimus soluta enim
                  doloribus vel quas facilis perspiciatis voluptatibus ratione
                  molestias quisquam tenetur illum rem, minus voluptate!
                </p>
              </SinglePokemonInfo>
              <SinglePokemonInfo
                className="max-w-full overflow-hidden"
                title="Versions"
              >
                <div v-for="(ver, index) in showAllVersions" :key="index">
                  <div
                    class="px-8 rounded-full py-0.5 border-2 mr-2 my-2 shadow-md border-secondaryAccent-500 hover:bg-secondaryAccent-500 hover:text-white"
                  >
                    <span class="text-sm">{{ ver }}</span>
                  </div>
                </div>
              </SinglePokemonInfo>
              <div class="grid justify-start grid-flow-col columns-3 gap-5">
                <div
                  class="flex flex-col px-6 h-28 rounded-2xl place-content-center text-center w-full shadow-[rgba(219,89,51,0.5)_1px_1px_5px_2px] dark:bg-neutral-800"
                >
                  <span class="text-base font-semibold my-2">Height</span>
                  <span class="text-sm">{{ getHeight }} m</span>
                </div>
                <div
                  class="flex flex-col px-6 h-28 rounded-2xl place-content-center text-center w-full shadow-[rgba(219,89,51,0.5)_1px_1px_5px_2px] dark:bg-neutral-800"
                >
                  <span class="text-base font-semibold my-2">Weight</span>
                  <span class="text-sm">{{ getWeight }} kg</span>
                </div>
              </div>

              <SinglePokemonInfo class="mt-6" title="stats">
                <div
                  class="contents"
                  v-for="(singleStat, index) in getStats"
                  :key="index"
                >
                  <div class="flex my-2 w-full items-center justify-center">
                    <span class="flex-1 text-xs font-semibold dark:text-white/60"
                      >{{singleStat.stat.name.toUpperCase()}}</span
                    >
                    <span class="flex-1 text-xs mx-4 font-semibold dark:text-white/90"
                      >{{singleStat.base_stat}}</span
                    >
                    <UProgress class="flex-7" size="sm" :value="singleStat.base_stat" :color="getColor(singleStat.base_stat)"/>
                  </div>
                </div>
              </SinglePokemonInfo>
            </template>

            <template #moves>
              <h1>Hello</h1>
            
            </template>
          </UTabs>
        </section>
      </div>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const singlePokemonCard = ref<any>({});
const items = [
  {
    slot: "about",
    label: "About",
  },
  {
    slot: "moves",
    label: "Moves",
  },
];


onMounted(() => {
  getSinglePokemonData();
});


// -- Computed
const showAbilities = computed(() => {
  const abilities =  singlePokemonCard.value.abilities || [];
  const abilitiesNames =  abilities.map((item: {ability: {name: string}}) => item.ability.name);
  return abilitiesNames;
});

const showAllTypes = computed(() => {
  const types = singlePokemonCard.value.types || [];
  const typeNames = types.map(
    (singleType: { type: { name: string } }) => singleType.type.name
  );
  return typeNames;
});

const showAllVersions = computed(() => {
  const versions = singlePokemonCard.value.game_indices || [];
  const versionNames = versions.map(
    (singleVersion: { version: { name: string } }) => singleVersion.version.name
  );
  return versionNames.slice(0, 7);
});

const getHeight = computed(() => {
  const height = singlePokemonCard.value.height || 0;
  return height;
});

const getWeight = computed(() => {
  const weight = singlePokemonCard.value.weight || 0;
  return weight;
});

const getName = computed(() => {
  const name = singlePokemonCard.value.name || "";
  return name;
});

const getStats = computed(() => {
  const stats = singlePokemonCard.value.stats || [];
  return stats;
});

const getImage = computed(() => {
  const image = singlePokemonCard.value.sprites?.front_default || "";
  return image
})

const getID = computed(() => {
  const id = singlePokemonCard.value.id || 0;
  return String(id).padStart(3, '0');
})



// -- Style
const UItabStyle = reactive({
  wrapper: "relative",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "dark:bg-transparent",
    shadow: "",
    padding: "",
    height: "h-10",
    width: "w-2/6",
    marker: {
      wrapper: "duration-200 ease-out focus:outline-none",
      base: "!w-[60px] relative !left-[21%] h-full border-b-2 border-secondaryAccent-500",
      background: "bg-transparent dark:bg-transparent",
      rounded: "",
      shadow: "",
    },
    tab: {
      base: "relative flex items-center justify-center w-full",
      background: "bg-transparent dark:bg-transparent",
      active: "text-black dark:text-primaryAccent-100",
      inactive: "text-secondaryAccent-600/50 dark:text-primaryAccent-100/50",
      rounded: "",
      height: "h-8",
      padding: "",
      size: "text-sm",
      font: "font-bold",
    },
  },
});

// -- Functions
async function getSinglePokemonData() {
  const response = await $fetch(
    `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
  );
  singlePokemonCard.value = response;
  return response;
}

function getColor(number: number): any {
  switch (true) {
    case number <= 25: return 'red'
    case number <= 50: return 'orange'
    case number <= 80: return 'yellow'
    default: return 'green'
  }
}

</script>
