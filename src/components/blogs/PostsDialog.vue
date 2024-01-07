<template>
    <button type="button" @click="openModal" class="text-orange-500 font-medium leading-normal shadow-md">
        Read More
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex items-center">
                                Best brands for fashion
                                <button type="button" class="ml-auto" @click="closeModal">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </DialogTitle>

                            <div class="mt-2">
                                <div>
                                    <div class="h-96 w-full bg-white shadow-md rounded-lg overflow-hidden">
                                        <div class="w-full h-1/2 transit">
                                            <img class="w-full h-96 object-cover" :src="card.img">
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <p class="text-2xl font-semibold text-blue-600 mb-4">{{ card.title }}</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu
                                            fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt
                                            mollit
                                            anim id est laborum.</p>
                                        <ul class="list-disc my-4 ml-8">
                                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                            <li>Aliquam tincidunt mauris eu risus.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu
                                            fugiat
                                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt
                                            mollit
                                            anim id est laborum.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="mt-4">
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Got it, thanks!
                                </button>
                            </div> -->
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { ref, defineProps } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps(["dialog", "card"]);

const isOpen = ref(false)

const closeModal = () => {
    isOpen.value = false
}
const openModal = () => {
    isOpen.value = true
}
</script>  