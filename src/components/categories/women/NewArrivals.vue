<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text mb-6">New Arrivals</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.newArrivals" :key="index">
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useNewArrivalsWomenStore } from '@/stores/categories/newArrivalsWomenStore'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useNewArrivalsWomenStore()

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