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
                <div v-for="product in store.products" :key="product"
                    class="relative m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md card-transit">
                    <router-link :to="'/active-wear/' + product.id"
                        class="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md card-transit">
                        <img class="h-60 w-full object-cover object-center" :src="product.productImg" />
                        <div class="p-4">
                            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">
                                {{ product.title }}
                            </h2>
                            <div class="flex">
                                <div class="mt-2.5 mb-5 flex items-center space-x-2">
                                    <i class="fa-solid fa-star text-yellow-300 [&>svg]:h-5 [&>svg]:w-5"></i>
                                    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
                                        product.rating }}</span>
                                </div>
                                <p class="ml-auto text-base font-medium text-green-500 mt-1" v-if="product.discount">{{
                                    product.discount }}% off</p>
                            </div>
                            <div class="flex items-center">
                                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    EGP{{ product.price }}
                                </p>
                                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300"
                                    v-if="product.originalPrice">
                                    EGP{{ product.originalPrice }}
                                </p>
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
import { onMounted } from "vue";
import { useActiveWearProductsStore } from '@/stores/products/activeWearProductsStore'
import Pagination from "@/reusable/Pagination.vue";

const store = useActiveWearProductsStore()

onMounted(() => {
    store.fetchProducts()
})
</script>