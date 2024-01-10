<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-semibold mb-10">Express Deals</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in storeTwo.expressDeals" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative m-10 w-[300px] max-w-[16rem] xs:max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="h-60 rounded-t-lg object-cover w-full transit"
                                    :src="getImageUrlExpress(card.img)" />
                            </div>
                            <span
                                class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45  bg-black text-center text-sm text-white"
                                v-if="card.discount">{{ card.discount }}% off</span>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 class="text-md font-semibold tracking-tight text-slate-900 truncate">
                                        {{ card.title }}
                                    </h5>
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class=" mt-2">
                                        <span class="text-lg font-bold text-slate-900 mr-1">{{ card.price }} EGP</span>
                                        <span class="text-sm text-slate-900 line-through" v-if="card.originalPrice">{{
                                            card.originalPrice }} EGP</span>
                                    </p>
                                </div>
                                <p class="text-start mt-2">Get it by {{ card.getBy }}</p>
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

    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-semibold mb-10">Global Deals</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.globalDeals" :key="index">
                    <div class="carousel__item">
                        <div
                            class="relative m-10 w-[300px] max-w-[16rem] xs:max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="h-60 rounded-t-lg object-cover w-full transit" :src="getImageUrl(card.img)" />
                            </div>
                            <span
                                class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45  bg-black text-center text-sm text-white"
                                v-if="card.discount">{{ card.discount }}% off</span>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 class="text-md font-semibold tracking-tight text-slate-900 truncate">
                                        {{ card.title }}
                                    </h5>
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class=" mt-2">
                                        <span class="text-lg font-bold text-slate-900 mr-1">{{ card.price }} EGP</span>
                                        <span class="text-sm text-slate-900 line-through" v-if="card.originalPrice">{{
                                            card.originalPrice }} EGP</span>
                                    </p>
                                </div>
                                <p class="text-start mt-2">Get it by {{ card.getBy }}</p>
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
        <img src="https://justfields.com/storage/projects/7M5rV059/sec-4-kids-banner.gif">
    </section>

    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full lg:px-8 mb-7">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            <div v-for="card in cards" :key="card" class="group relative">
                <div
                    class="block max-w-96 xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="p-6 text-center">
                        <p class="truncate mb-2">{{ card.title }}</p>
                        <p class="text-base text-neutral-600 dark:text-neutral-200">
                            {{ card.subtitle }}
                        </p>
                    </div>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img class="transit w-full" :src="card.img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useKidsGlobalDealsStore } from '@/stores/categories/kidsGlobalDealsStore'
import { useKidsExpressDealsStore } from '@/stores/categories/kidsExpressDealsStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useKidsGlobalDealsStore()
const storeTwo = useKidsExpressDealsStore()

const fetchAllImages = () => {
    store.fetchAllImages();
};

onMounted(() => {
    fetchAllImages();
});

const fetchAllExpressImages = () => {
    storeTwo.fetchAllExpressImages();
};

onMounted(() => {
    fetchAllExpressImages();
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

onMounted(() => {
    for (let i = 0; i < store.files.length; i++) {
        const file = store.files[i];
        store.fetchImgExpress(file.name);
    }
});

const getImageUrlExpress = (imgPath) => {
    const image = storeTwo.images.find((image) => image.name === imgPath);
    return image ? image.url : '';
};

const cards = reactive([
    { title: 'Shop for charming Baby Boy apparel', img: 'https://justfields.com/storage/projects/7M5rV059/baby-boy-collection.webp' },
    { title: 'Shop for charming Baby Girl apparel', img: 'https://justfields.com/storage/projects/7M5rV059/baby-girl-collection.webp' }
])

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