<template>
    <div class="flex flex-col gap-2 sm:flex-row">
        <div class="flex-1">
            <h1 class="text-3xl font-semibold">Addresses</h1>
            <p class="mt-2 text-sm text-gray-500">Add, edit, and remove addresses</p>
        </div>
    </div>
    <div class="flex items-center flex-1 h-full">
        <div class="w-full text-center flex-1 mt-12">
            <img src="/map.svg" class="mx-auto h-12 w-12 text-gray-400">
            <h3 class="mt-2 text-sm font-medium text-gray-900">Your Addresses Book looks empty</h3>
            <p class="mt-1 text-sm text-gray-500">What are you waiting for?</p>
            <div class="mt-6">
                <router-link to="/addresses/create"
                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  justify-center"
                    type="button">Create an Address</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>