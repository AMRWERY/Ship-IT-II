<template>
    <Navbar />
    <main>
        <div class="flex-col min-h-screen mx-auto max-w-full xs:mx-3">
            <RouterView />
        </div>
    </main>
    <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>