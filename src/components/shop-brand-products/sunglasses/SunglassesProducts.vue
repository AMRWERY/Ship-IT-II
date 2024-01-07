<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-2">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Results</h2>
            <p>Price and other details may vary based on product size and color.</p>

            <!-- search input -->
            <form class="lg:w-2/5 flex mt-7 me-2 lg:justify-start">
                <div class="pt-2 relative text-gray-600">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none mt-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" id="table-search"
                        class="block p-2 pe-10 text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Products...">
                </div>
            </form>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product"
                    class="relative m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md card-transit">
                    <router-link :to="product.route"
                        class="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md card-transit">
                        <img class="h-60 w-full object-cover object-center" :src="product.img" />
                        <div class="p-4">
                            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">
                                {{ product.title }}
                            </h2>
                            <div class="mt-2.5 mb-5 flex items-center">
                                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                <Rating />
                            </div>
                            <div class="flex items-center">
                                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    EGP{{ product.price }}
                                </p>
                                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300"
                                    v-if="product.originalPrice">
                                    EGP{{ product.originalPrice }}
                                </p>
                                <p class="ml-auto text-base font-medium text-green-500" v-if="product.discount">{{
                                    product.discount }}% off</p>
                            </div>
                            <p class="mt-2">Get it by <span class="font-semibold">{{ product.getBy }}</span></p>
                        </div>
                    </router-link>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
import Rating from "@/reusable/Rating.vue";
import Pagination from "@/reusable/Pagination.vue";

const products = ref([
    { title: 'Women Sunglasses Full Rim Oversized', price: '310.00', originalPrice: '500.00', discount: '38', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0139.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Tifosi Optics Veloce Golf', price: '3.059.00', originalPrice: '3.719.00', discount: '38', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0140.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Louis Vuitton Cyclone Sunglasses', price: '7.500.00', originalPrice: '6.300.00', discount: '15', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0141.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Spy Optic Crossway', price: '5.219.00', originalPrice: '6.259.00', discount: '17', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0142.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Daniel Klien Polarized Aviator Sunglasses', price: '750.00', originalPrice: '950.00', discount: '21', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0143.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Women Cat Eye Sunglasses', price: '500.00', originalPrice: '800.00', discount: '38', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0144.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Tifosi Optics Swick', price: '3.279.00', originalPrice: '3.949.00', discount: '17', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0145.webp', category: 'Express Deals', route: '/sunglasses/1' },
    { title: 'Guess® GU7295 classic aviator', price: '2.659.00', originalPrice: '3.269.00', discount: '19', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0146.webp', category: 'Global Deals', route: '/sunglasses/1' },
    { title: 'Tifosi Optics Alpe™ 2.0', price: '2.519.00', originalPrice: '3.079.00', discount: '18', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0147.webp', category: 'Global Deals', route: '/sunglasses/1' },
    { title: 'Cat eye sunglasses for women', price: '650.00', originalPrice: '1.100.00', discount: '41', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0148.webp', category: 'Global Deals', route: '/sunglasses/1' },
    { title: 'Guess® GF6099 sunglasses', price: '1.669.00', originalPrice: '2.069.00', discount: '19', getBy: 'Dec 4 - Dec 11', img: 'https://justfields.com/storage/projects/7M5rV059/0150.webp', category: 'Global Deals', route: '/sunglasses/1' },
])
</script>