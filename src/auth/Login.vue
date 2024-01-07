<template>
    <button type="button" @click="openModal"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto mt-24">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div class="mt-2 text-center space-y-4">

                                <div class="space-y-4">
                                    <div class="flex items-center justify-center">
                                        <img src="/shopping-bags-svgrepo-com.svg" class="w-12" />
                                    </div>
                                    <p class="text-2xl font-semibold">Sign in to your account</p>
                                </div>

                                <div class="mt-6 grid space-y-4">
                                    <button @click="signInWithGoogleAccount"
                                        class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                        <div class="relative flex items-center space-x-4 justify-center">
                                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                                class="absolute left-0 w-5" />
                                            <span
                                                class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                                with Google</span>
                                        </div>
                                    </button>
                                </div>

                                <div class="mt-5">
                                    <p>or <router-link to="/sign-up" @click="closeModal" class="text-blue-600">Create free
                                            account</router-link>
                                    </p>
                                </div>

                                <div class="mt-6 relative">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm">
                                        <span class="px-2 bg-white text-gray-500">or continue with</span>
                                    </div>
                                </div>

                                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <FormKit type="form" id="my-form" class="space-y-6" :actions="false" @submit="signIn()">
                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="email"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Email
                                                    address <span class="text-red-600">*</span></label>
                                            </div>
                                            <div class="mt-2">
                                                <FormKit name="email" type="email" validation="required|email"
                                                    v-model="email" placeholder="your email" validation-visibility="dirty"
                                                    message-class="text-red-600" outer-class="mb-5"
                                                    inner-class="max-w-md rounded-lg mb-1 overflow-hidden"
                                                    prefix-icon="email"
                                                    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="password"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Password <span
                                                        class="text-red-600">*</span></label>
                                            </div>
                                            <div class="mt-2">
                                                <FormKit name="password" type="password"
                                                    validation="required|password|length:6,10" v-model="password"
                                                    validation-visibility="dirty" placeholder="your password"
                                                    message-class="text-red-600" outer-class="mb-5"
                                                    inner-class="max-w-md rounded-lg mb-1 overflow-hidden"
                                                    prefix-icon="password"
                                                    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit"
                                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                                in</button>
                                        </div>
                                    </FormKit>
                                </div>
                            </div>
                        </DialogPanel>

                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

const isOpen = ref(false)

const closeModal = () => {
    isOpen.value = false
}
const openModal = () => {
    isOpen.value = true
}

const store = useAuthStore()
const email = ref('')
const password = ref('')

const signIn = () => {
    store.userSignIn({
        email: email.value,
        password: password.value,
    });
    email.value = ''
    password.value = ''
    isOpen.value = false
};

const signInWithGoogleAccount = () => {
    store.signInWithGoogle({
        email: email.value,
    });
};
</script>