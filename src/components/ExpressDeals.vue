<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8 space-y-6">
        <section class="container m-10 mx-auto max-w-full sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-medium mb-6">Express Deals</h2>
            <Carousel :wrapAround="true" v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="card in expressOne" :key="card">
                    <div class="carousel__item">
                        <div class="relative m-10 w-[300px] max-w-[16rem] overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="h-60 rounded-t-lg object-cover w-full transit" :src="card.img" />
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
                                <div class="mt-2.5 mb-2 flex items-center">
                                    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class=" mt-2">
                                        <span class="text-lg font-bold text-slate-900 mr-1">EGP{{ card.price }}</span>
                                        <span class="text-sm text-slate-900 line-through" v-if="card.originalPrice">EGP{{
                                            card.originalPrice }}</span>
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

            <Carousel :wrapAround="true" v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="card in expressTwo" :key="card">
                    <div class="carousel__item">
                        <div class="relative m-10 w-[300px] max-w-[16rem] overflow-hidden rounded-lg bg-white shadow-md">
                            <div>
                                <img class="h-60 rounded-t-lg object-cover w-full transit" :src="card.img" />
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
                                <div class="mt-2.5 mb-2 flex items-center">
                                    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class=" mt-2">
                                        <span class="text-lg font-bold text-slate-900 mr-1">EGP{{ card.price }}</span>
                                        <span class="text-sm text-slate-900 line-through" v-if="card.originalPrice">EGP{{
                                            card.originalPrice }}</span>
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
        <img src="https://justfields.com/storage/projects/7M5rV059/ck_banner.webp">
    </section>
</template>
  
 
<script setup>
import { ref } from "vue"
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const expressOne = ref([
    { img: 'https://justfields.com/storage/projects/7M5rV059/01.webp', title: 'Lace Wig cap for making wigs with adjustable strap', price: '50.00', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/012.webp', title: "Victoria's secret Pink - one size -  freedom of speech T-Shirt", price: '950.00', originalPrice: '1.250.00', discount: '24', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/03.webp', title: "Polo Ralph Lauren Liquid Cotton T-Shirt, White", price: '950.00', originalPrice: '1.600.00', discount: '41', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/04.webp', title: 'Gold Colored Festoon Necklace - Summer 2023 Collection - Multiple Styles Available', price: '230.00', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/05.webp', title: 'MARY-LOU MANIZER® - HIGHLIGHTER', price: '370.00', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/06.webp', title: "Hoops 3.0 Low Classic Sneakers", price: '2.650.00', originalPrice: '3.400.00', discount: '22', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/08.webp', title: 'Sue sunglasses', price: '1.590.00', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/09.webp', title: 'INC Cold-Shoulder Sweater - Burnt Olive', price: '890.00', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/010.webp', title: "Nike Men's Jordan DRI-FIT Sport Diamond Pattern Woven Basketball Shorts", price: '1.950.00', originalPrice: '2.30.00', discount: '15', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/011.webp', title: 'Crochet top', price: '715.00', getBy: 'Nov 07 - Nov 09' },
])

const expressTwo = ref([
    { img: 'https://justfields.com/storage/projects/7M5rV059/012.webp', title: 'Michael Kors Combat Booties Alistair For Women With All Over Logo Print', price: '4.800.00', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/013.webp', title: 'NAUTICA - Pajamas sets', price: '930.00', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/014.webp', title: "DOOGEE S99 Smartphone 8GB 128GB 108MP AI Camera Mobile Phone 64MP Night Vision 6000mAh 6.3 Inch Octa Core Android 12 Cellphone", price: '10.200.00', originalPrice: '14.000.00', discount: '27', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/016.webp', title: 'GUESS Dixon Small Satchel', price: '2.735.00', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/017.webp', title: "Women Elegant With Belt Bodycon Midi Casual Feminine Y2K Print Long Sleeve Tie Detail Work The Dress", price: '890.00', originalPrice: '1.350.00', discount: '34', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/018.webp', title: "Alex Pilot Sunglasses - RB4201F - Lens Size: 59mm - Black", price: '2.950.00', originalPrice: '3.500.00', discount: '16', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/019.webp', title: "Luxe High-Neck Swing Tank Top for Women", price: '600.00', originalPrice: '800.00', discount: '25', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/020.webp', title: 'Knotted Front Top', price: '650.00', getBy: 'Nov 08 - Nov 10' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/021.webp', title: "Nike Dunk High 1985", price: '4.500.00', originalPrice: '5.500.00', discount: '18', getBy: 'Nov 07 - Nov 09' },
    { img: 'https://justfields.com/storage/projects/7M5rV059/022.webp', title: "Men's Silicone Digital Wrist Watch W-96H-2AVDF - 36 mm - Black", price: '750.00', getBy: 'Nov 08 - Nov 10' },
])

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