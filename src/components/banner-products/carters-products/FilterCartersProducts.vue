<template>
    <div class="bg-white">
        <div>
            <!-- Mobile filter dialog -->
            <TransitionRoot as="template" :show="mobileFiltersOpen">
                <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                        enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                        leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-40 flex">
                        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel
                                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div class="flex items-center justify-between px-4">
                                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button"
                                        class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        @click="mobileFiltersOpen = false">
                                        <i class="fa-solid fa-xmark h-6 w-6" aria-hidden="true"></i>
                                    </button>
                                </div>

                                <!-- Filters -->
                                <form class="mt-4 border-t border-gray-200">
                                    <!-- Price -->
                                    <Disclosure as="div" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                                        <h3 class="-my-3 flow-root">
                                            <DisclosureButton
                                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span class="font-medium text-gray-900">Price (EGP)</span>
                                                <span class="ml-6 flex items-center">
                                                    <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                                    <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel class="pt-6">
                                            <div class="space-y-4">
                                                <form class="relative space-x-1 flex items-center"
                                                    @submit.prevent="filterProducts">
                                                    <div>
                                                        <div class="mt-1 relative rounded-md shadow-sm">
                                                            <input id="minPrice" name="minPrice" v-model="minPrice"
                                                                class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 px-2 flex-1 h-9"
                                                                type="number" step="100" placeholder="min">
                                                        </div>
                                                    </div>
                                                    <span class="text-gray-600">To</span>
                                                    <div>
                                                        <div class="mt-1 relative rounded-md shadow-sm">
                                                            <input id="maxPrice" name="maxPrice" v-model="maxPrice"
                                                                class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm  py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 px-2 flex-1 h-9"
                                                                step="100" type="number" placeholder="max">
                                                        </div>
                                                    </div>
                                                    <button
                                                        class="py-1 px-2 mt-1 inline-flex items-center justify-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500"
                                                        type="submit">Go</button>
                                                </form>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <!-- fulfillment -->
                                    <Disclosure as="div" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                                        <h3 class="-my-3 flow-root">
                                            <DisclosureButton
                                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span class="font-medium text-gray-900">Fulfillment</span>
                                                <span class="ml-6 flex items-center">
                                                    <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                                    <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel class="pt-6">
                                            <div class="space-y-4">
                                                <div v-for="ful in fulfillment" :key="ful.value" class="flex items-center">
                                                    <input id="category" name="category" :value="ful.label" type="checkbox"
                                                        :checked="ful.checked"
                                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="category" class="ml-3 text-sm text-gray-600">{{ ful.label
                                                    }}</label>
                                                </div>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <!-- Categories -->
                                    <Disclosure as="div" class="border-b border-gray-200 px-4 py-6" v-slot="{ open }">
                                        <h3 class="-my-3 flow-root">
                                            <DisclosureButton
                                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span class="font-medium text-gray-900">Categories</span>
                                                <span class="ml-6 flex items-center">
                                                    <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                                    <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel class="pt-6">
                                            <div class="space-y-4">
                                                <div v-for="category in categories" :key="category.value"
                                                    class="flex items-center">
                                                    <input id="category" name="category" :value="category.label"
                                                        type="checkbox" :checked="category.checked"
                                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        @change="category.checked = !category.checked; updateSelectedCategories(category.label, category.checked)" />
                                                    <label for="category" class="ml-3 text-sm text-gray-600">{{
                                                        category.label
                                                    }}</label>
                                                </div>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <!-- Colors -->
                                    <Disclosure as="div" class="border-b border-gray-200 px-4 py-6" v-slot="{ open }">
                                        <h3 class="-my-3 flow-root">
                                            <DisclosureButton
                                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span class="font-medium text-gray-900">Colors</span>
                                                <span class="ml-6 flex items-center">
                                                    <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                                    <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel class="pt-6">
                                            <div class="space-y-4">
                                                <div v-for="color in colors" :key="color.value" class="flex items-center">
                                                    <input id="color" name="color" :value="color.label" type="checkbox"
                                                        :checked="color.checked"
                                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        @change="color.checked = !color.checked; updateSelectedColor(color.label, color.checked)" />
                                                    <label for="color" class="ml-3 text-sm text-gray-600">{{ color.label
                                                    }}</label>
                                                </div>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>

            <main class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                    <p>1 - 2 pages over 43 items for <span
                            class="text-blue-700 font-semibold tracking-tight underline">carters</span>
                    </p>
                    <div class="flex items-center">
                        <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span class="sr-only">View grid</span>
                            <i class="fa-solid fa-square h-5 w-5" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            @click="mobileFiltersOpen = true">
                            <span class="sr-only">Filters</span>
                            <i class="fa-solid fa-filter h-5 w-5" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" class="pb-24 pt-6">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                        <!-- Filters -->
                        <form class="hidden lg:block">
                            <!-- Price -->
                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Price (EGP)</span>
                                        <span class="ml-6 flex items-center">
                                            <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                            <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <form class="relative space-x-1 flex items-center" @submit.prevent="filterProducts">
                                            <div>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="minPrice" name="minPrice" v-model="minPrice"
                                                        class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 px-2 flex-1 h-9"
                                                        type="number" step="100" placeholder="min">
                                                </div>
                                            </div>
                                            <span class="text-gray-600">To</span>
                                            <div>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="maxPrice" name="maxPrice" v-model="maxPrice"
                                                        class="appearance-none block w-full border shadow-sm focus:outline-none sm:text-sm  py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 px-2 flex-1 h-9"
                                                        step="100" type="number" placeholder="max">
                                                </div>
                                            </div>
                                            <button
                                                class="py-1 px-2 mt-1 inline-flex items-center justify-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500"
                                                type="submit">Go</button>
                                        </form>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>

                            <!-- fulfillment -->
                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Fulfillment</span>
                                        <span class="ml-6 flex items-center">
                                            <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                            <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="ful in fulfillment" :key="ful.value" class="flex items-center">
                                            <input id="category" name="category" :value="ful.label" type="checkbox"
                                                :checked="ful.checked"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label for="category" class="ml-3 text-sm text-gray-600">{{ ful.label
                                            }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>

                            <!-- Categories -->
                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Categories</span>
                                        <span class="ml-6 flex items-center">
                                            <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                            <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="category in categories" :key="category.value" class="flex items-center">
                                            <input id="category" name="category" :value="category.label" type="checkbox"
                                                :checked="category.checked"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                @change="category.checked = !category.checked; updateSelectedCategories(category.label, category.checked)" />
                                            <label for="category" class="ml-3 text-sm text-gray-600">{{ category.label
                                            }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>

                            <!-- Colors -->
                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Colors</span>
                                        <span class="ml-6 flex items-center">
                                            <i class="fa-solid fa-plus h-5 w-5" aria-hidden="true" v-if="!open"></i>
                                            <i class="fa-solid fa-minus h-5 w-5" aria-hidden="true" v-else></i>
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="color in colors" :key="color.value" class="flex items-center">
                                            <input id="color" name="color" :value="color.label" type="checkbox"
                                                :checked="color.checked"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                @change="color.checked = !color.checked; updateSelectedColor(color.label, color.checked)" />
                                            <label for="color" class="ml-3 text-sm text-gray-600">{{ color.label
                                            }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </form>

                        <!-- Product grid -->
                        <div class="lg:col-span-4">
                            <CartersProducts :filteredProducts="filterProducts" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import CartersProducts from './CartersProducts.vue';
import { useCartersProductsStore } from '@/stores/banner-products/cartersProductsStore'

const minPrice = ref('');
const maxPrice = ref('');
const store = useCartersProductsStore()
const selectedCategories = ref([]);
const selectedColor = ref([]);

const filterProducts = () => {
    store.filterProductsByPrice(minPrice.value, maxPrice.value);
};

const updateSelectedCategories = (categoryId, checked) => {
    if (checked) {
        selectedCategories.value.push(categoryId);
    } else {
        selectedCategories.value = selectedCategories.value.filter((id) => id !== categoryId);
    }
    store.filterProductsByCategory(selectedCategories.value);
    // console.log(updateSelectedCategories)
};

const updateSelectedColor = (color, checked) => {
    if (checked) {
        selectedColor.value.push(color);
    } else {
        selectedColor.value = selectedColor.value.filter((id) => id !== color);
    }
    store.filterProductsByColor(selectedColor.value);
    // console.log(updateSelectedCategories)
};

const fulfillment = ref([
    { value: "carter's", label: "Carter's", checked: true },
])

const categories = reactive([
    { value: 'women', label: 'Women', checked: false },
    { value: 'men', label: 'Men', checked: false },
    { value: 'kids', label: 'Juniors & Kids', checked: false },
    { value: 'electronics', label: 'Electronics', checked: false },
    { value: 'beauty', label: 'Beauty', checked: false },
])

const colors = reactive([
    { value: 'yellow', label: 'Yellow', checked: false },
    { value: 'white', label: 'White', checked: false },
    { value: 'turquoise', label: 'Turquoise', checked: false },
    { value: 'silver', label: 'Silver', checked: false },
    { value: 'red', label: 'Red', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
    { value: 'pink', label: 'Pink', checked: false },
    { value: 'orange', label: 'Orange', checked: false },
    { value: 'off-white', label: 'Off-White', checked: false },
    { value: 'grey', label: 'Grey', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'gold', label: 'Gold', checked: false },
    { value: 'blue', label: 'Blue', checked: false },
    { value: 'black', label: 'Black', checked: false },
])

const mobileFiltersOpen = ref(false)
</script>