<template>
    <div class="pt-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mt-8 items-center justify-center" v-if="cartStore.cart.length === 0">
            <div class="text-center">
                <p class="text-gray-500 text-4xl">Your cart is empty</p>
                <router-link to="/woo" type="button" class="font-medium text-indigo-600 hover:text-indigo-500 mt-16">
                    Start Shopping
                    <span aria-hidden="true"> &rarr;</span>
                </router-link>
            </div>
        </div>

        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" v-else>
            <div class="rounded-lg md:w-2/3">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    v-for="product in cartStore.cart" :key="product">
                    <img :src="product.productImg" class="w-full rounded-lg sm:w-40 lg:h-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ product.title }}</h2>
                            <p class="my-2 text-lg text-gray-700">EGP{{ product.price }}</p>
                            <strong class="text-sm text-gray-700">{{ product.quantity }} pieces</strong>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center">
                                <i @click="removeProduct(product.id)"
                                    class="fa-solid fa-xmark h-5 w-5 cursor-pointer duration-150 hover:text-red-500 ml-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub total -->
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">EGP{{ calculateSubtotal() }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">EGP14.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">EGP{{ calculateTotal }}</p>
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
import { ref, onMounted, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => {
    cartStore.cart = cartStore.getCart();
});

const totalQuantity = computed(() => {
    return cartStore.cart.reduce((total, product) => total + product.quantity, 0)
})

const removeProduct = (productId) => {
    const updatedCart = cartStore.cart.filter(product => product.id !== productId);
    cartStore.cart = updatedCart;
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
};

const calculateSubtotal = () => {
    return cartStore.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0).toFixed(2);
}

const calculateTotal = computed(() => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 14.99;
    const total = subtotal + shipping;
    return total.toFixed(2);
});
</script>