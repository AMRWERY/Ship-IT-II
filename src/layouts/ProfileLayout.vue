<template>
    <nav class="top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="flex items-center mr-5">
                    <router-link to="/" class="cursor-pointer relative mr-4" data-te-toggle="tooltip" title="Home">
                        <i class="fa-solid fa-house fa-xl text-gray-400 mr-1 md:mr-0" width="20px" height="20px"></i>
                    </router-link>

                    <div class="relative">
                        <span
                            class="absolute top-0 end-2 -mt-2 -mr-2 inline-flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white text-xs">
                            {{ cartStore.cart.length }}
                        </span>
                        <router-link type="button" class="rounded-full p-1 text-gray-400 dark:text-white"
                            data-te-toggle="tooltip" title="Cart" to="/cart">
                            <i class="fa-solid fa-cart-shopping fa-xl me-2 ms-2"></i>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <div class="flex flex-wrap flex-col justify-center items-center">
                <div
                    class="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-lg">
                    A
                </div>
                <div class="text-center mt-4">
                    <p class="text-lg font-semibold text-gray-800">Hello, {{ store.getUsername }}</p>
                    <router-link class="text-md font-medium text-gray-600" to="" @click="logout">Log out</router-link>
                </div>
            </div>
            <hr class="mt-6 border-gray-300" />

            <ul class="space-y-2 mt-4 font-medium">
                <li>
                    <router-link to="/profile"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i
                            class="fa-solid fa-user w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">Profile</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/addresses"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i
                            class="fa-solid fa-location-dot flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Addresses</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/orders-history"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i
                            class="fa-solid fa-clipboard-list flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="flex-1 ms-3 whitespace-nowrap">Orders</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>

    <div class="p-4 sm:ml-64">
        <RouterView />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import { RouterView } from 'vue-router'
import { initDrawers } from 'flowbite'

onMounted(() => {
    initDrawers();
})

const store = useAuthStore()
const cartStore = useCartStore()

onMounted(() => {
    cartStore.cart = cartStore.getCart();
});

onMounted(() => {
    const username = sessionStorage.getItem('username');
    if (username) {
        store.username = username;
    }
});

const logout = () => {
    try {
        store.logout();
        location.reload()
    } catch (error) {
        console.log(error);
    }
}
</script>