<template>
    <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-medium mb-6">Shop by Brand</h2>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500" :autoplay="3000">
                <Slide v-for="(card, index) in store.shopByBrand" :key="index">
                    <div class="carousel__item">
                        <div class="carousel__item">
                            <div
                                class="h-56 relative flex-shrink-0 flex justify-center w-44 overflow-hidden rounded-xl border border-white mx-2">
                                <div class="relative overflow-hidden bg-cover bg-no-repeat transit">
                                    <img class="rounded-t-lg" :src="getImageUrl(card.img)" />
                                </div>
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

    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full lg:px-8">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="card in cards" :key="card" class="group relative">
                <router-link :to="card.route"
                    class="block max-w-96 lg:max-w-96 xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="p-6 text-center">
                        <p class="truncate mb-2">{{ card.title }}</p>
                        <p class="text-base text-neutral-600 dark:text-neutral-200">
                            {{ card.subtitle }}
                        </p>
                    </div>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img class="transit" :src="card.img" />
                    </div>
                </router-link>
            </div>
        </div>
    </div>

    <section class="container mt-8 mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <img src="https://justfields.com/storage/projects/7M5rV059/expressss.webp">
    </section>
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

const cards = ref([
    { title: 'Activewear For Your Coolness', subtitle: 'Large collections of activewear. Explore the outside!', img: 'https://justfields.com/storage/projects/7M5rV059/activewear.jpg', route: '/active-wear' },
    { title: 'Too cool hipster kids clothes', subtitle: 'Every kid needs this place. It’s fun inside! Check out the coolest kids.', img: 'https://justfields.com/storage/projects/7M5rV059/4-Kids.jpg', route: '/kids-clothes' },
    { title: 'A Never-Ending Sunglasses Season', subtitle: 'On any and all occasions, the right pair of shades will elevate your days out.', img: 'https://justfields.com/storage/projects/7M5rV059/6-sunglasses.jpg', route: '/sunglasses' },
    { title: 'Accessories and Bags', subtitle: 'Sharpening up your fashion look with these statement.', img: 'https://justfields.com/storage/projects/7M5rV059/bagssss.jpg', route: '/accessories-and-bags' },
])
</script>