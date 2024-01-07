<template>
    <div>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
            <div class="max-w-xl">
                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Addresses</h1>
                <p class="mt-2 text-sm text-gray-500">Add a new address</p>
            </div>
            <div class="mt-8 bg-white border-b sm:border sm:rounded-lg border-gray-200 p-4 rounded-md shadow-sm">
                <form class="space-y-6">
                    <div class="mt-4 p-4 bg-white rounded-md grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                            <label for="fullName"
                                class="block text-sm font-medium text-gray-700 after:content-['*'] after:mis-0.5 after:text-red-500">Full
                                name</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="fullName" name="fullName"
                                    class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm px-3 py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                    required placeholder="Mahmoud Ahmed" autocomplete="name" value="">
                            </div>
                        </div>
                        <div>
                            <label for="phone"
                                class="block text-sm font-medium text-gray-700 after:content-['*'] after:mis-0.5 after:text-red-500">Phone</label>
                            <div class="mt-1 relative rounded-md shadow-sm flex">
                                <input id="phone" name="phone"
                                    class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm px-3 py-2 rounded-ie-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                    required type="tel" placeholder="1234567891" autocomplete="tel" value="">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <div>
                                <label for="streetNumber"
                                    class="block text-sm font-medium text-gray-700 after:content-['*'] after:mis-0.5 after:text-red-500">Address</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="streetNumber" name="streetNumber"
                                        class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm px-3 py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                        required placeholder="Street 3" autocomplete="street-address">
                                        </textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="apartment"
                                class="block text-sm font-medium text-gray-700 after:content-['*'] after:mis-0.5 after:text-red-500">Apartment,
                                suite, etc.</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="apartment" name="apartment"
                                    class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm px-3 py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                    required placeholder="Apartment 2, Building name" value="">
                            </div>
                        </div>
                        <div>
                            <label for="city"
                                class="block text-sm font-medium text-gray-700 after:content-['*'] after:mis-0.5 after:text-red-500">City</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <select id="city" name="city"
                                    class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                    required placeholder="Alexandria" autocomplete="city">
                                    <option hidden="" class="hidden" value="" label="-- select a city --"></option>
                                    <option v-for="country in countriesData" :key="country" :value="country">
                                        {{ country.name }} - {{ country.code }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <button
                            class="sm:col-span-2 mis-auto mt-6 inline-flex items-center justify-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                            type="submit">
                            <span class="py-2 px-2 text-base font-medium">Add a new address</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import dataBase from '/public/countries.json';

const countriesData = ref(dataBase.countries);
</script>