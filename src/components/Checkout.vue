<template>
    <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                            href="#">
                            <i class="fa-solid fa-check fa-lg mt-3.5 h-4 w-4"></i>
                        </a>
                        <span class="font-semibold text-gray-900">Shop</span>
                    </li>
                    <i class="fa-solid fa-angle-right h-4 w-4 text-gray-400"></i>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                            href="#">2</a>
                        <span class="font-semibold text-gray-900">Shipping</span>
                    </li>
                    <i class="fa-solid fa-angle-right h-4 w-4 text-gray-400"></i>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                            href="#">3</a>
                        <span class="font-semibold text-gray-500">Payment</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">
                Check your items. And select a suitable shipping method.
            </p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <div class="flex w-full flex-col px-4 py-4">
                        <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                        <span class="float-right text-gray-400">42EU - 8.5US</span>
                        <p class="text-lg font-bold">EGP138.99</p>
                    </div>
                </div>
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <div class="flex w-full flex-col px-4 py-4">
                        <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                        <span class="float-right text-gray-400">42EU - 8.5US</span>
                        <p class="mt-auto text-lg font-bold">EGP238.99</p>
                    </div>
                </div>
            </div>

            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            <form class="mt-5 grid gap-6">
                <div class="relative">
                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1">
                        <img class="w-14 object-contain"
                            src="https://justfields.com/storage/projects/7M5rV059/download.png" />
                        <div class="ml-5">
                            <span class="mt-2 font-semibold">Fedex Delivery</span>
                            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                        </div>
                    </label>
                </div>
                <div class="relative">
                    <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2">
                        <img class="w-14 object-contain"
                            src="https://justfields.com/storage/projects/7M5rV059/download.png" />
                        <div class="ml-5">
                            <span class="mt-2 font-semibold">Fedex Delivery</span>
                            <p class="text-slate-500 text-sm leading-6">Delivery: 3-6 Days</p>
                        </div>
                    </label>
                </div>
            </form>
        </div>

        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400">
                Complete your order by providing your payment details.
            </p>
            <div>
                <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                <div class="relative">
                    <input type="text" id="email" name="email"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <i class="fa-solid fa-at h-4 w-4 text-gray-400"></i>
                    </div>
                </div>
                <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                <div class="relative">
                    <input type="text" id="card-holder" name="card-holder"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name here" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <i class="fa-regular fa-address-card h-4 w-4 text-gray-400"></i>
                    </div>
                </div>
                <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                <div class="flex">
                    <div class="relative w-7/12 flex-shrink-0">
                        <input type="text" id="card-no" name="card-no"
                            class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="xxxx-xxxx-xxxx-xxxx" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <i class="fa-regular fa-credit-card h-4 w-4 text-gray-400"></i>
                        </div>
                    </div>
                    <input type="text" name="credit-expiry"
                        class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY" />
                    <input type="text" name="credit-cvc"
                        class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC" />
                </div>
                <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                <div class="flex flex-col sm:flex-row">
                    <div class="relative flex-shrink-0 sm:w-7/12">
                        <input type="text" id="billing-address" name="billing-address"
                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Street Address" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <img class="h-4 w-4 object-contain"
                                src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" />
                        </div>
                    </div>
                    <select type="text" name="billing-state"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                        <option value="State">State</option>
                    </select>
                    <input type="text" name="billing-zip"
                        class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="ZIP" />
                </div>

                <!-- Total -->
                <div class="mt-6 border-t border-b py-2">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Subtotal</p>
                        <p class="font-semibold text-gray-900">EGP399.00</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Shipping</p>
                        <p class="font-semibold text-gray-900">EGP8.00</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">EGP408.00</p>
                </div>
            </div>
            <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                Place Order
            </button>
        </div>
    </div>
</template>

<script setup>

</script>