<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-16 w-auto" src="/shopping-bags-svgrepo-com.svg" />
                    <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create free
                        account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="my-6 grid space-y-4">
                        <button @click="signUpWithGoogleAccount"
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

                    <div class="my-6 relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">or continue with</span>
                        </div>
                    </div>

                    <FormKit type="form" id="my-form" class="space-y-6" :actions="false" @submit="signUp">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                                address <span class="text-red-600">*</span>
                            </label>
                            <FormKit name="email" type="email" validation="required|email" v-model="email"
                                placeholder="your email" validation-visibility="dirty" message-class="text-red-600"
                                outer-class="mb-5" inner-class="max-w-md rounded-lg mb-1 overflow-hidden"
                                prefix-icon="email"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900" />
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="given-name" class="block text-sm font-medium leading-6 text-gray-900">Username
                                    <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="mt-2">
                                <FormKit name="username" type="text" validation="required|username|contains_alpha"
                                    v-model="username" placeholder="your username" validation-visibility="dirty"
                                    message-class="text-red-600" outer-class="mb-5"
                                    inner-class="max-w-md rounded-lg mb-1 overflow-hidden" prefix-icon="avatarMan"
                                    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password
                                    <span class="text-red-600">*</span>
                                </label>
                            </div>
                            <div class="mt-2">
                                <FormKit name="password" type="password" validation="required|password|length:6,10"
                                    v-model="password" validation-visibility="dirty" placeholder="your password"
                                    message-class="text-red-600" outer-class="mb-5"
                                    inner-class="max-w-md rounded-lg mb-1 overflow-hidden" prefix-icon="password"
                                    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                up</button>
                        </div>
                    </FormKit>
                </div>
            </div>

            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img src="https://justfields.com/storage/projects/7M5rV059/slider01.jpg"
                    class="absolute inset-0 h-full w-full object-cover" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue';

const store = useAuthStore()
const email = ref('')
const password = ref('')
const username = ref('')

const signUp = () => {
    store.userSignUp({
        email: email.value,
        password: password.value,
        username: username.value
    });
    email.value = ''
    password.value = ''
    username.value = ''
};

const signUpWithGoogleAccount = () => {
    store.signUpWithGoogle({
        email: email.value,
        username: username.value
    });
};
</script>