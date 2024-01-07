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

            <div class="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product" class="group relative">
                    <router-link :to="product.route">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-96 relative">
                            <img :src="product.img" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            <div class="absolute top-0 right-0 mt-2 mr-2">
                                <span
                                    class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white"
                                    v-if="product.discount">-{{ product.discount }}%</span>
                            </div>
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.title }}
                                </h3>
                                <p class="mt-2">
                                    <Rating />
                                </p>
                            </div>
                            <div class="flex">
                                <p class="text-sm font-medium text-gray-900 mr-1">EGP{{ product.price }}</p>
                                <p class="text-sm font-medium text-gray-500 line-through dark:text-gray-300"
                                    v-if="product.originalPrice">
                                    EGP{{ product.originalPrice }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <Pagination />
        </div>
    </div>
</template>
    
<script setup>
import { reactive } from "vue";
import Rating from "@/reusable/Rating.vue";
import Pagination from "@/reusable/Pagination.vue";

const products = reactive([
    { title: 'Woo Ninja', price: '30.00', originalPrice: '35.00', discount: '14', img: 'https://justfields.com/storage/projects/7M5rV059/hoodie_2_front.jpg', category: 'Express Deals', route: '/woo/1' },
    { title: 'Ship your idea', price: '18.00', img: 'https://justfields.com/storage/projects/7M5rV059/poster_1_up.jpg', category: 'Express Deals', route: '/woo/1' },
    { title: 'Patient Ninja', price: '36.00', img: 'https://justfields.com/storage/projects/7M5rV059/hoodie_3_front.jpg', category: 'Express Deals', route: '/woo/1' },
    { title: 'Flying Ninja', price: '15.00', originalPrice: '12.00', discount: '20', img: 'https://justfields.com/storage/projects/7M5rV059/poster_2_up.jpg', category: 'Express Deals', route: '/woo/1' },
])
</script>