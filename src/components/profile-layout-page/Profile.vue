<template>
    <div>
        <h1 class="text-3xl font-semibold">Profile</h1>
        <span class="text-gray-500">manage your profile details</span>
    </div>

    <div class="max-w-7xl bg-slate-50 shadow-md rounded-md overflow-hidden mt-6">
        <div class="p-4">
            <p>Edit your Profile</p>
            <form class="space-y-4 mt-4">
                <div class="sm:col-span-full">
                    <label for="full-name" class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">Full
                        Name <span class="text-red-600">*</span></label>
                    <div class="mt-2">
                        <input type="text" name="full-name" id="first-name" autocomplete="full-name"
                            v-model="store.getUsername"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-full">
                    <label for="first-name"
                        class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">Email address <span
                            class="text-red-600">*</span></label>
                    <div class="mt-2">
                        <div class="rounded-lg border border-gray-300 shadow-sm bg-white text-black py-1.5">
                            <p class="ml-2">{{ store.getUserEmail }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-full">
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                        <div class="mt-1 relative rounded-md shadow-sm flex">
                            <span
                                class="inline-flex items-center px-3 rounded-is-md border border-ie-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">+20</span>
                            <input id="phone" name="phone"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="tel" placeholder="1234567891" autocomplete="tel" value="">
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="date" class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">Date
                            Of Birth</label>
                        <div class="mt-2">
                            <input type="date" name="date" id="date" autocomplete="date"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                        <div class="mt-2">
                            <select id="gender" name="gender" autocomplete="gender"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option selected>--Select Gender--</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mt-8 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md mt-5 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    </div>

    <div class="max-w-7xl bg-slate-50 shadow-md rounded-md overflow-hidden mt-6">
        <div class="p-4">
            <p>Change your Password</p>
            <form class="space-y-4 mt-4">
                <div class="sm:col-span-full">
                    <label for="old-password"
                        class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">Old Password <span
                            class="text-red-600">*</span></label>
                    <div class="mt-2">
                        <input type="password" name="old-password" id="old-password" autocomplete="old-password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-full">
                    <label for="new-password"
                        class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">New Password <span
                            class="text-red-600">*</span></label>
                    <div class="mt-2">
                        <input type="password" name="new-password" id="new-password" autocomplete="new-password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="sm:col-span-full">
                    <label for="confirm-password"
                        class="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-400">Password Confirmation
                        <span class="text-red-600">*</span></label>
                    <div class="mt-2">
                        <input type="password" name="confirm-password" id="confirm-password" autocomplete="confirm-password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="mt-8 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md mt-5 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const store = useAuthStore()

onMounted(() => {
    const username = sessionStorage.getItem('username');
    if (username) {
        store.username = username;
    }

    const userEmail = sessionStorage.getItem('email');
    if (userEmail) {
        store.email = userEmail;
    }
});
</script>