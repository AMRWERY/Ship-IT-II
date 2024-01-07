<template>
    <!-- Main navigation container -->
    <nav class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div>
                <div class="flex font-bold text-lg gap-2 items-center">
                    <router-link to="/">
                        <img src="/shopping-bags-svgrepo-com.svg" width="52" height="52">
                    </router-link>
                </div>
            </div>

            <!-- Hamburger button for mobile view -->
            <button
                class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent4"
                aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
                    <i class="fa-solid fa-bars fa-lg h-auto w-7"></i>
                </span>
            </button>

            <!-- Collapsible navbar container -->
            <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4" data-te-collapse-item>
                <!-- Left links -->
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                    <!-- Home link -->
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <router-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/" data-te-nav-link-ref>Home</router-link>
                    </li>
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <router-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/woo" data-te-nav-link-ref>Woo Products</router-link>
                    </li>
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <router-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/categories" data-te-nav-link-ref>Categories</router-link>
                    </li>
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <router-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/blog" data-te-nav-link-ref>Blogs</router-link>
                    </li>
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <router-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/contact-us" data-te-nav-link-ref>Contact</router-link>
                    </li>
                </ul>

                <div class="flex items-center space-x-5">
                    <router-link type="button" class="rounded-full p-1 text-gray-400 dark:text-white"
                        data-te-toggle="tooltip" title="Profile" to="/profile">
                        <i class="fa-solid fa-user fa-xl me-1 ms-1"></i>
                    </router-link>
                    <button type="button" class="rounded-full p-1 text-gray-400 dark:text-white" data-te-toggle="tooltip"
                        title="Change language" to="/profile">
                        <i class="fa-solid fa-earth-africa fa-xl me-1 ms-1"></i>
                    </button>

                    <CartDialog />

                    <Login />

                    <button type="button" class="rounded-full p-1 text-gray-400 dark:text-white" data-te-toggle="tooltip"
                        title="Logout" @click="logout">
                        <i class="fa-solid fa-right-from-bracket fa-xl me-1 ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from '@/stores/authStore'
import { Collapse, Dropdown, initTE } from "tw-elements";
import Login from '../../auth/Login.vue';
import CartDialog from '@/reusable/cart/CartDialog.vue'

const store = useAuthStore()

onMounted(() => {
    initTE({ Collapse, Dropdown });
})

const logout = () => {
    try {
        store.logout();
    } catch (error) {
        console.log(error);
    }
}
</script>