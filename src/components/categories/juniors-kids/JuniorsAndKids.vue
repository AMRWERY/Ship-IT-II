<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <div class="mb-12">
            <img src="https://justfields.com/storage/projects/7M5rV059/juniors-kids-1.webp">
        </div>
        <ShopByCategory />
        <Deals />
        <NewArrivals />
    </div>
</template>

<script setup>
import ShopByCategory from './ShopByCategory.vue'
import Deals from './Deals.vue'
import NewArrivals from './NewArrivals.vue'
</script>