<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <section class="body-font">
            <h2 class="text-center text-3xl font-medium mb-6">
                Latest from Blogs
            </h2>
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3" v-for="card in cards" :key="card">
                        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center transit" :src="card.img">
                            <div class="p-6">
                                <h2
                                    class="tracking-widest text-lg title-font font-medium text-gray-500 dark:text-zinc-200 mb-1 text-center">
                                    {{ card.title }}</h2>
                                <br>
                                <p class="leading-relaxed mb-3 text-gray-500 dark:text-white">{{ card.subtitle }}</p>
                                <div class="flex items-center flex-wrap ">
                                    <a class="text-indigo-700 dark:text-zinc-400 inline-flex items-center md:mb-2 lg:mb-0">
                                        Learn more
                                    </a>
                                    <span
                                        class="text-gray-500 dark:text-white me-3 inline-flex items-center lg:ms-auto md:ms-0 ms-auto leading-none text-sm pe-3 py-1 border-e-2 border-gray-800 dark:border-gray-400">
                                        <i class="fa-regular fa-eye"></i>
                                        <p class="ms-1">1.2K</p>
                                    </span>
                                    <span
                                        class="text-gray-500 dark:text-white inline-flex items-center leading-none text-sm">
                                        <i class="fa-regular fa-comment"></i>
                                        <p class="ms-1">8</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
    { subtitle: 'Here are some of best online shopping sites for you in the world', title: 'Billy Wade', img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg' },
    { subtitle: 'Get awesome offers on new collection is available at all stores', title: 'Demean Phil', img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg' },
    { subtitle: 'Festival sale has lots of amazing offer for men and women', title: 'Luke Hobbs', img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg' },
]);
</script>