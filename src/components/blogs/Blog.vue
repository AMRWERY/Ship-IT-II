<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 class="text-center text-3xl font-normal italic">Read About Fashion</h1>
        <h4 class="text-center"><b class="text-red-500">Amr Mohamed</b> | December 17,2023</h4>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:py-12 lg:max-w-none lg:py-16">

                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div v-for="card in cards" :key="card" class="group relative">
                        <div
                            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                                data-te-ripple-color="light">
                                <img class="rounded-t-lg transit" :src="card.img" />
                                <a href="#!">
                                    <div
                                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    </div>
                                </a>
                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {{ card.title }}
                                </h5>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>

                                <PostsDialog :card="card" :dialog="dialog" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 mb-10">
            <Reviews />
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import PostsDialog from './PostsDialog.vue'
import Reviews from './Reviews.vue';

const cards = reactive([
    { title: 'Top 10 Fashion of the Week', img: 'https://justfields.com/storage/projects/7M5rV059/slider3.jpg' },
    { title: 'Best brands for fashion', img: 'https://justfields.com/storage/projects/7M5rV059/slider01.jpg' },
    { title: 'Fashion Tips & Tricks', img: 'https://justfields.com/storage/projects/7M5rV059/slider04.jpg' },
])
</script>