<template>
  <div>
    <Banner />
    <ShopByBrand />
    <ExpressDeals />
    <NewArrivals />
    <UsersFeedback />
  </div>
</template>

<script setup>
import Banner from './Banner.vue';
import ShopByBrand from '../components/ShopByBrand.vue';
import ExpressDeals from '../components/ExpressDeals.vue';
import NewArrivals from '../components/NewArrivals.vue';
import UsersFeedback from '../components/UsersFeedback.vue';
</script>