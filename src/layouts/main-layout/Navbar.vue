<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <i class="fa-solid fa-bars fa-xl block" aria-hidden="true" v-if="!open"></i>
                        <i class="fa-solid fa-bars-staggered fa-xl block" aria-hidden="true" v-else></i>
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <router-link v-for="item in navigation" :key="item.name" :to="item.route"
                                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                    <router-link type="button" to="/profile"
                        class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View Profile</span>
                        <i class="fa-solid fa-user fa-xl" aria-hidden="true"></i>
                    </router-link>

                    <CartDialog />

                    <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View Profile</span>
                        <i class="fa-solid fa-earth-africa fa-xl" aria-hidden="true"></i>
                    </button>

                    <Login />

                    <button type="button" @click="logout"
                        class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View Profile</span>
                        <i class="fa-solid fa-right-from-bracket fa-xl" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <router-link v-for="item in navigation" :key="item.name" :to="item.route"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined" active-class="bg-gray-900 text-white">
                    {{ item.name }}
                </router-link>
            </div>

        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from '@/stores/authStore'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Login from '@/auth/Login.vue';
import CartDialog from '@/reusable/cart/CartDialog.vue'

const store = useAuthStore()

const navigation = reactive([
    { name: 'Home', route: '/', current: true },
    { name: 'Woo Products', route: '/woo', current: false },
    { name: 'Categories', route: '/categories', current: false },
    { name: 'Blogs', route: '/blog', current: false },
    { name: 'Contact', route: '/contact-us', current: false },
])

const logout = () => {
    try {
        store.logout();
    } catch (error) {
        console.log(error);
    }
}
</script>