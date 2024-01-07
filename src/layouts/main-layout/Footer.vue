<template>
    <footer
        class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-12">
        <div
            class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div class="mr-12 hidden lg:block">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Social network icons container -->
            <div class="flex justify-center">
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-facebook-f h-4 w-4"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-instagram h-4 w-4"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-twitter h-4 w-4"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-whatsapp h-4 w-4"></i>
                </a>
                <a href="" class="mr-6 text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-github h-4 w-4"></i>
                </a>
                <a href="" class="text-neutral-600 dark:text-neutral-200 transit">
                    <i class="fa-brands fa-linkedin-in h-4 w-4"></i>
                </a>
            </div>
        </div>

        <div class="mx-6 py-10 text-center md:text-left">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:space-x-36">
                <div class="">
                    <h6 class="mb-4 flex items-center justify-center font-semibold md:justify-start">
                        <img class="h-6 w-auto mr-1" src="/shopping-bags-svgrepo-com.svg" />
                        <span class="text-2xl">Ship-IT</span>
                    </h6>
                    <p class="text-lg">
                        Online to make your journey even more memorable access or meet
                    </p>
                </div>

                <!-- Useful links section -->
                <div class="">
                    <h6 class="mb-4 flex justify-center font-semibold md:justify-start">
                        Categories
                    </h6>
                    <p class="mb-4">
                        <router-link to="/women" class="text-neutral-600 dark:text-neutral-200">Women</router-link>
                    </p>
                    <p class="mb-4">
                        <router-link to="/men" class="text-neutral-600 dark:text-neutral-200">Men</router-link>
                    </p>
                    <p class="mb-4">
                        <router-link to="/juniors-kids" class="text-neutral-600 dark:text-neutral-200">Juniors &
                            Kids</router-link>
                    </p>
                    <p class="mb-4">
                        <router-link to="/electronics"
                            class="text-neutral-600 dark:text-neutral-200">Electronics</router-link>
                    </p>
                    <p>
                        <router-link to="/beauty" class="text-neutral-600 dark:text-neutral-200">Beauty</router-link>
                    </p>
                </div>
                <!-- Contact section -->
                <div>
                    <h6 class="mb-4 flex justify-center font-semibold md:justify-start">
                        Contact
                    </h6>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <i class="fa-solid fa-house mr-3 h-5 w-5"></i>
                        Maadi, Cairo, Egypt
                    </p>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <i class="fa-solid fa-envelope mr-3 h-5 w-5"></i>
                        amrmounir2@gmail.com
                    </p>
                    <p class="mb-4 flex items-center justify-center md:justify-start">
                        <i class="fa-solid fa-phone mr-3 h-5 w-5"></i>
                        +201022655742
                    </p>
                </div>
            </div>
        </div>

        <!--Copyright section-->
        <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span class="mr-1">© 2023 Copyright:</span>
            <a class="font-semibold text-neutral-600 dark:text-neutral-400"
                href="https://tailwind-elements.com/">Ship-IT</a>
        </div>
    </footer>
</template>

<script setup>

</script>