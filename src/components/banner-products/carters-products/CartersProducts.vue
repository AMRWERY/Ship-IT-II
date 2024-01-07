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
                    <router-link :to="{ name: 'CartersProductDetails', params: { id: product.id } }">
                        <div>
                            <img class="h-60 rounded-t-lg object-cover w-full" :src="product.productImg" />
                        </div>
                        <span
                            class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white"
                            v-if="product.discount">{{ product.discount }}% off</span>
                        <div class="mt-4 px-5 pb-5">
                            <h5 class="text-lg font-semibold tracking-tight text-slate-900 truncate">
                                {{ product.title }}
                            </h5>
                            <div class="mt-2.5 mb-5 flex items-center space-x-2">

                                <Rating :rating="product.rating" />

                                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
                                    product.rating }}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <p>
                                    <span class="text-md font-bold text-slate-900 mr-2">EGP{{ product.price }}</span>
                                    <span class="text-md text-slate-600 line-through" v-if="product.originalPrice">EGP{{
                                        product.originalPrice
                                    }}</span>
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
import { useCartersProductsStore } from '@/stores/banner-products/cartersProductsStore'
import Pagination from "@/reusable/Pagination.vue";
import Rating from "@/reusable/Rating.vue";

const store = useCartersProductsStore()

onMounted(() => {
    store.fetchProducts()
})
</script>