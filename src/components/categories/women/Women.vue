<template>
    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <div class="mb-12">
            <img src="https://justfields.com/storage/projects/7M5rV059/women categories.webp">
        </div>
        <ShopByBrand />
        <Deals />
        <ShopByCategory />
        <NewArrivals />
    </div>
</template>

<script setup>
import ShopByBrand from './ShopByBrand.vue'
import Deals from './Deals.vue'
import ShopByCategory from './ShopByCategory.vue'
import NewArrivals from './NewArrivals.vue'
</script>