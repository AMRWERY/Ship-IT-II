<template>
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <nav class="flex">
                <ol role="list" class="flex items-center">
                    <li class="text-left">
                        <div class="-m-1">
                            <a href="#"
                                class=" rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                Home
                            </a>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Products
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                    aria-current="page">
                                    Coffee
                                </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img class="max-w-xl overflow-hidden rounded-lg h-[650px] xs:w-[400px] lg:w-[550px]" :src="selectedImg" />
            <div class="mt-4 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div class="flex items-start">
                    <button type="button" @click="selectCard('imgFront')" v-if="productDetails?.imgFront != null"
                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center me-3 transit">
                        <img class="h-full w-full object-cover" :src="productDetails?.productImg" />
                    </button>
                    <button type="button" @click="selectCard('imgBack')" v-if="productDetails?.imgBack != null"
                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center ms-2 transit">
                        <img class="h-full w-full object-cover" :src="productDetails?.imgBack" />
                    </button>
                </div>
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div class="flex">
                    <h2 class="text-md title-font text-blue-500 tracking-widest font-medium">
                        {{ productDetails?.brand }}
                    </h2>
                    <span class="ml-auto bg-green-100 text-sm rounded-lg p-1 font-semibold text-green-600"
                        v-if="productDetails?.discount">{{ productDetails?.discount }}% off</span>
                </div>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                    {{ productDetails?.title }}
                </h1>
                <div class="flex mb-4">
                    <span class="flex items-center">

                        <Rating :rating="productDetails?.rating" :reviews="productDetails?.reviews" />

                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a class="text-gray-500">
                            <i class="fa-brands fa-facebook-f w-5 h-5"></i>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <i class="fa-brands fa-x-twitter w-5 h-5"></i>
                        </a>
                        <a class="ml-2 text-gray-500">
                            <i class="fa-brands fa-whatsapp w-5 h-5"></i>
                        </a>
                    </span>
                </div>
                <div class="my-3">
                    <p>SKU: <strong>{{ productDetails?.sku }}</strong></p>
                </div>
                <div class="mb-4">
                    <p>Availability: <strong>{{ productDetails?.availability }}</strong></p>
                </div>
                <p class="leading-relaxed">
                    {{ productDetails?.description }}
                </p>
                <div class="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                    <div class="flex">
                        <div class="items-center" v-if="productDetails?.color != null">
                            <p class="mr-3 items-center flex">Color: <strong
                                    class="relative ml-3 flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer">{{
                                        productDetails?.color }}</strong></p>
                        </div>
                        <div class="items-center" v-if="productDetails?.colors != null">
                            <p class="mr-3 items-center flex">Color: <strong v-for="color in store.selectedProduct?.colors"
                                    :key="color"
                                    class="relative ml-3 flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer">{{
                                        color }}</strong></p>
                        </div>
                    </div>
                    <div class="flex ml-16 items-center" v-if="productDetails?.size != null">
                        <span class="mr-3">Size</span>
                        <div class="ml-auto">
                            <div class="relative">
                                <select
                                    class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                    <option>--Select--</option>
                                    <option v-for="size in store.selectedProduct?.size" :key="size">{{ size }}</option>
                                </select>
                                <span
                                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <i class="fa-solid fa-angle-down w-4 h-4"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="ml-16 items-center" v-if="productDetails?.oneSize != null">
                        <p class="mr-3 items-center flex">Size: <strong
                                class="relative ml-3 flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer">{{
                                    productDetails?.oneSize }}</strong></p>
                    </div>
                    <div class="ml-16 items-center" v-if="productDetails?.package != null">
                        <p class="mr-3 items-center flex">Package: <strong
                                class="relative ml-3 flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer">{{
                                    productDetails?.package }}</strong></p>
                    </div>
                    <div class="flex ml-16 items-center" v-if="productDetails?.styles != null">
                        <span class="mr-3">Style</span>
                        <div class="ml-auto">
                            <div class="relative">
                                <select
                                    class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                    <option>--Select--</option>
                                    <option v-for="style in store.selectedProduct?.styles" :key="style">{{ style }}</option>
                                </select>
                                <span
                                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <i class="fa-solid fa-angle-down w-4 h-4"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-3" v-if="productDetails?.type != null">
                    <p>Type: <strong>{{ productDetails?.type }}</strong></p>
                </div>
                <div class="my-3">
                    <p>Category: <strong>{{ productDetails?.category }}</strong></p>
                </div>

                <div class="flex items-center">
                    <label for="quantity"
                        class="mt-5 mr-4 text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                    <div class="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                        <button
                            class="w-7 h-full text-white bg-red-500 rounded-l outline-none cursor-pointer dark:hover:bg-red-700 hover:text-white  hover:bg-red-600">
                            <span class="m-auto text-2xl  font-thin">-</span>
                        </button>
                        <input type="number" class="h-10 w-14 rounded border-gray-200 text-center sm:text-sm"
                            placeholder="1" />
                        <button
                            class="w-7 h-full text-white bg-blue-500 rounded-r outline-none cursor-pointer dark:hover:bg-blue-700 hover:text-white hover:bg-blue-700">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>

                <hr class="mt-4">
                <div class="flex mt-6">
                    <span class="title-font font-medium text-2xl text-gray-900">EGP{{ productDetails?.price }}</span>
                    <span class="font-medium text-md mt-1 ml-1 line-through text-gray-500"
                        v-if="productDetails?.originalPrice">EGP{{ productDetails?.originalPrice
                        }}</span>
                    <button type="button"
                        class="ml-auto inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition-all duration-200 ease-in-out focus:shadow">
                        <i class="fa-solid fa-basket-shopping shrink-0 mr-3 h-5 w-5"></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">

        <RelatedProducts />

        <!-- <div class="lg:col-span-3">
            <div class="border-b border-gray-300">
                <nav class="flex gap-4">
                    <a href="#" title=""
                        class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                        Description
                    </a>

                    <a href="#" title=""
                        class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                        Reviews
                        <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                            1,209
                        </span>
                    </a>
                </nav>
            </div>

            <div class="mt-8 flow-root sm:mt-12">
                <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                    accusantium nesciunt fuga.
                </p>
                <h1 class="mt-8 text-3xl font-bold">
                    From the Fine Farms of Brazil
                </h1>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                    numquam enim facere.
                </p>
                <p class="mt-4">
                    Amet consectetur adipisicing elit. Optio numquam enim facere.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                    rerum nostrum eius facere, ad neque.
                </p>
            </div>
        </div> -->
    </div>
</template>


<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from 'vue-router';
import { useExpressProductsStore } from '@/stores/banner-products/expressProductsStore'
import RelatedProducts from "./RelatedProducts.vue";
import Rating from "@/reusable/Rating.vue";

const store = useExpressProductsStore()
const router = useRouter()
const productDetails = ref(null);
const productId = ref('');
const selectedImg = ref(null);

onMounted(() => {
    productId.value = router.currentRoute.value.params.id;
    store.getProductById(productId.value);
});

watch(() => store.selectedProduct, (newProduct) => {
    if (newProduct) {
        productDetails.value = newProduct;
    }
    selectedImg.value = productDetails.value['productImg'];
});

const selectCard = (imgProperty) => {
    selectedImg.value = productDetails.value[imgProperty];
};
</script>