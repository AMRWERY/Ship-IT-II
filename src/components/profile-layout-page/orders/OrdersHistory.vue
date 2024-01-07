<template>
    <div class="max-w-xl">
        <h1 class="text-3xl font-semibold">Order history</h1>
        <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and download
            invoices.</p>
    </div>
    <div class="flex items-center flex-1 h-full">
        <div class="w-full text-center flex-1">
            <img src="/list.svg" class="mx-auto h-12 w-12 text-gray-400">
            <h3 class="mt-2 text-sm font-medium text-gray-900">You do not have any orders yet!</h3>
            <p class="mt-1 text-sm text-gray-500">What are you waiting for? </p>
            <div class="mt-6">
                <router-link to="/woo"
                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center"
                    type="button">Start Shopping</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>