<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-2">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Results</h2>
            <p>Price and other details may vary based on product size and color.</p>

            <!-- search input -->
            <form class="lg:w-2/5 flex mt-7 me-2 lg:justify-start">
                <div class="pt-2 relative text-gray-600">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none mt-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" id="table-search"
                        class="block p-2 pe-10 text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Products...">
                </div>
            </form>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product"
                    class="relative m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md card-transit">
                    <router-link :to="product.route"
                        class="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md card-transit">
                        <img class="h-60 w-full object-cover object-center" :src="product.img" />
                        <div class="p-4">
                            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">
                                {{ product.title }}
                            </h2>
                            <div class="mt-2.5 mb-5 flex items-center">
                                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                <Rating />
                            </div>
                            <div class="flex items-center">
                                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    EGP{{ product.price }}
                                </p>
                                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300"
                                    v-if="product.originalPrice">
                                    EGP{{ product.originalPrice }}
                                </p>
                                <p class="ml-auto text-base font-medium text-green-500" v-if="product.discount">{{
                                    product.discount }}% off</p>
                            </div>
                            <p class="mt-2">Get it by <span class="font-semibold">{{ product.getBy }}</span></p>
                        </div>
                    </router-link>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
import Rating from "@/reusable/Rating.vue";
import Pagination from "@/reusable/Pagination.vue";

const products = ref([
    { title: 'Reebok Myt Imagiro Crossbody Bag Proud Pink/White', price: '900.00', originalPrice: '1.100.00', discount: '18', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0151.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Original Rabbit Design Anti-Theft Laptop Backpack Black', price: '2.500.00', originalPrice: '3.000.00', discount: '17', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0152.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Goodtimes El Born Backpack Black', price: '1.230.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0153.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Nike Futura Fuel Pack Crossbody Bag Indigo Force', price: '750.00', originalPrice: '1.100.00', discount: '33', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0154.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Fuerdanni Men Short Business Wallet', price: '300.00', originalPrice: '400.00', discount: '25', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0155.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Calvin Klein 79463 Leather Billfold with Coin Pocket Wallet', price: '1.285.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0156.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Men Minimalist Money Clip', price: '100.00', originalPrice: '200.00', discount: '50', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0157.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Tommy Hilfiger Men Leather Ranger Passcase Wallet', price: '1.280.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0158.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Ted Baker Cayle Shoulder Grab Bag', price: '3.350.00', originalPrice: '4.100.00', discount: '18', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0159.webp', category: 'Express Deals', route: '/accessories-and-bags/1' },
    { title: 'Tommy Hilfiger Men Leather Leif RFID Trifold Wallet with Double ID', price: '1.285.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0160.webp', category: 'Global Deals', route: '/accessories-and-bags/1' },
    { title: 'Nautica 31NU11X017-251 Capella Trifold Wallet for Men', price: '1.115.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0161.webp', category: 'Global Deals', route: '/accessories-and-bags/1' },
    { title: 'Dkny Paige Small Satchel', price: '3.500.00', originalPrice: '5.500.00', discount: '36', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0162.webp', category: 'Global Deals', route: '/accessories-and-bags/1' },
    { title: 'Tommy Hilfiger Men Leather Leif RFID Bifold Wallet with Flip ID', price: '1.285.00', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0163.webp', category: 'Global Deals', route: '/accessories-and-bags/1' },
    { title: 'XRAY Waterproof Expandable Backpack', price: '1.500.00', originalPrice: '2.800.00', discount: '46', getBy: 'Nov 14 - Nov 16', img: 'https://justfields.com/storage/projects/7M5rV059/0164.webp', category: 'Global Deals', route: '/accessories-and-bags/1' },
])
</script>