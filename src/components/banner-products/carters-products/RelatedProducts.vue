<template>
    <h3 class="text-xl font-semibold">Related Products</h3>
    <Carousel :wrapAround="true" v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="product in storeTwo.products" :key="product">
            <div class="carousel__item">
                <div class="relative m-10 w-[300px] max-w-[16rem] overflow-hidden rounded-lg bg-white shadow-md">
                    <div>
                        <img class="h-60 rounded-t-lg object-cover w-full transit" :src="product.productImg" />
                    </div>
                    <span
                        class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45  bg-black text-center text-sm text-white"
                        v-if="product.discount">{{ product.discount }}% off</span>
                    <div class="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 class="text-md font-semibold tracking-tight text-slate-900 truncate">
                                {{ product.title }}
                            </h5>
                        </a>
                        <div class="flex items-center justify-between">
                            <p>
                                <span class="text-md font-bold text-slate-900 mr-2">EGP{{ product.price }}</span>
                                <span class="text-md text-slate-600 line-through" v-if="product.originalPrice">EGP{{
                                    product.originalPrice
                                }}</span>
                            </p>
                        </div>
                        <p class="text-start mt-2">Get it by {{ product.getBy }}</p>
                    </div>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useCartersRelatedProductsStore } from '@/stores/banner-products/cartersRelatedProductsStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const storeTwo = useCartersRelatedProductsStore()

onMounted(() => {
    storeTwo.fetchProducts()
})

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    default: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    },
});
</script>