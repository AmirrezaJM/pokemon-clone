// export default defineEventHandler(async (event) => {
//     try {
//         const response = await $fetch('');
//         const idealResponse = {
//             id: response.id,
//             name: response.name,
//             sprite: response.sprites.front_default,
//             types: response.types,
//             weight: response.weight,
//             height: response.height
//         }

//         return idealResponse
//     }
//     catch(error) {
//         throw  createError({
//             statusCode: 404,
//             message: "can't find the data"
//         })
//     }
// })