<template>
    <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text mb-6">Shop by Brand</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.shopByBrand" :key="index">
                    <div class="carousel__item">
                        <div
                            class="h-56 relative flex-shrink-0 flex justify-center w-44 overflow-hidden rounded-xl border border-white mx-2">
                            <div class="relative overflow-hidden bg-cover bg-no-repeat transit">
                                <img class="rounded-full" :src="getImageUrl(card.img)" />
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </section>
    </div>

    <section class="container mt-8 mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <img src="https://justfields.com/storage/projects/7M5rV059/promo.webp">
    </section>

    <div class="grid gap-4 md:gap-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="relative md:aspect-w-4 md:aspect-h-2 aspect-w-3 aspect-h-2">
            <img src="https://justfields.com/storage/projects/7M5rV059/global-deals.gif" class="rounded-lg shadow"
                loading="lazy">
        </div>
        <div class="relative md:aspect-w-4 md:aspect-h-2 aspect-w-3 aspect-h-2">
            <img src="https://justfields.com/storage/projects/7M5rV059/Express-deals.gif" class="rounded-lg shadow"
                loading="lazy">
        </div>
    </div>
</template>
  
 
<script setup>
import { ref, onMounted } from "vue";
import { useShopByBrandStore } from '@/stores/shopByBrandStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useShopByBrandStore()

const fetchAllImages = () => {
    store.fetchAllImages();
};

onMounted(() => {
    fetchAllImages();
});

onMounted(() => {
    for (let i = 0; i < store.files.length; i++) {
        const file = store.files[i];
        store.fetchImg(file.name);
    }
});

const getImageUrl = (imgPath) => {
    const image = store.images.find((image) => image.name === imgPath);
    return image ? image.url : '';
};

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
});
</script>