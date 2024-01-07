<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none">
            <h2 class="text-4xl font-bold text-gray-900">Categories</h2>
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-12">
                <div v-for="category in categories" :key="category" class="group relative">
                    <div
                        class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img :src="category.poster" class="h-full w-full object-cover object-center" />
                        <div class="absolute inset-0 flex flex-col justify-end p-4">
                            <router-link :to="category.route">
                                <span class="absolute inset-0"></span>
                                <h3 class="text-2xl text-black font-semibold">{{ category.title }}</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from "vue";

const categories = reactive([
    { title: 'Women', poster: 'https://justfields.com/storage/projects/7M5rV059/women.webp', route: '/women' },
    { title: 'Men', poster: 'https://justfields.com/storage/projects/7M5rV059/men.jpg', route: '/men' },
    { title: 'Electronics', poster: 'https://justfields.com/storage/projects/7M5rV059/electronics.jpg', route: '/electronics' },
    { title: 'Beauty', poster: 'https://justfields.com/storage/projects/7M5rV059/beauty.jpg', route: '/beauty' },
    { title: 'Juniors & Kids', poster: 'https://justfields.com/storage/projects/7M5rV059/kids.jpg', route: '/juniors-kids' },
]);
</script>