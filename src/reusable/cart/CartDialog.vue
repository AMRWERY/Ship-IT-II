<template>
    <div class="relative">
        <span
            class="absolute top-0 end-2 -mt-2 -mr-2 inline-flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white text-xs">
            {{ store.cart.length }}
        </span>
        <button type="button" class="rounded-full p-1 text-gray-400 dark:text-white" data-te-toggle="tooltip" title="Cart"
            @click="open = !open">
            <i class="fa-solid fa-cart-shopping fa-xl me-2 ms-2"></i>
        </button>
    </div>

    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50" @close="open = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900"><router-link to="/cart"
                                                    @click="open = false">Shopping cart</router-link>
                                            </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button"
                                                    class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="open = false">
                                                    <span class="absolute -inset-0.5" />
                                                    <i class="fa-solid fa-xmark h-6 w-6" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="mt-8 flex items-center justify-center" v-if="store.cart.length === 0">
                                            <p class="text-center text-gray-500 text-xl">Your cart is empty</p>
                                        </div>
                                        <div class="mt-8" v-else>
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="product in store.cart" :key="product" class="flex py-6">
                                                        <div
                                                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img :src="product.productImg"
                                                                class="h-full w-full object-cover object-center" />
                                                        </div>

                                                        <div class="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div
                                                                    class="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <router-link to="">{{ product.title }}</router-link>
                                                                    </h3>
                                                                    <p class="ml-4">EGP{{ product.price }}</p>
                                                                </div>
                                                                <p class="mt-1 text-sm text-gray-500">Quantity: {{
                                                                    product.quantity }}
                                                                </p>
                                                            </div>
                                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                                <!-- <p class="text-gray-500">Qty {{ product.quantity }}</p> -->

                                                                <div class="flex">
                                                                    <button type="button" @click="removeProduct(product.id)"
                                                                        class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6" v-if="store.cart.length > 0">
                                        <!-- Coupon -->
                                        <div>
                                            <form class="space-y-6">
                                                <div>
                                                    <div class="mt-1 relative rounded-md shadow-sm flex"><input
                                                            class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm px-3 py-2 rounded-is-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                                                            placeholder="Coupon Code" value="">
                                                        <span
                                                            class="inline-flex items-center px-3 rounded-ie-md border border-is-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm !bg-transparent !p-0 !border-none !rounded-none">
                                                            <button
                                                                class="w-full h-full rounded-none rounded-ie-md px-5 py-3 inline-flex items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                                                                type="submit">Apply</button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-gray-700"></p>
                                            </form>
                                        </div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>EGP{{ calculateSubtotal() }}</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.
                                        </p>
                                        <div class="mt-6">
                                            <router-link to="/checkout" @click="open = false"
                                                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</router-link>
                                        </div>
                                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button type="button"
                                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                                    @click="open = false">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-6 flex justify-center text-center text-sm text-gray-500" v-else>

                                        <router-link to="/checkout" type="button"
                                            class="font-medium text-indigo-600 hover:text-indigo-500" @click="open = false">
                                            Start Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </router-link>

                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useCartersProductsStore } from '@/stores/banner-products/cartersProductsStore'

const store = useCartersProductsStore()

onMounted(() => {
    store.cart = store.getCart();
});

const totalQuantity = computed(() => {
    return store.cart.reduce((total, product) => total + product.quantity, 0)
})

const open = ref(false)

const removeProduct = (productId) => {
    const updatedCart = store.cart.filter(product => product.id !== productId);
    store.cart = updatedCart;
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
};

const calculateSubtotal = () => {
    return store.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0).toFixed(2);
}
</script>