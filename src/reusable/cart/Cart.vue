<template>
    <div class="pt-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                                <input class="h-8 w-12 border bg-white text-center text-xs outline-none" type="number"
                                    value="2" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">EGP259.000</p>
                                <i class="fa-solid fa-xmark h-5 w-5 cursor-pointer duration-150 hover:text-red-500"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                        class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                        </div>
                        <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                                <input class="h-8 w-12 border bg-white text-center text-xs outline-none" type="number"
                                    value="2" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">EGP259.000</p>
                                <i class="fa-solid fa-xmark h-5 w-5 cursor-pointer duration-150 hover:text-red-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub total -->
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">EGP129.99</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">EGP4.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">EGP134.98 USD</p>
                        <p class="text-sm text-gray-700 ml-4">including VAT</p>
                    </div>
                </div>
                <router-link to="/checkout">
                    <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Check out
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>