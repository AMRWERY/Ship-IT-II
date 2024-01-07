<template>
    <div class="bg-home/40 shadow-md pb-2 space-y-2 md:pb-4 md:space-y-4 flex flex-col items-center">
        <div class="relative w-full h-[100px] md:h-[180px] lg:h-[260px]">
            <canvas width="10" height="10"
                class="inset-0 object-contain object-center w-full h-full !absolute !object-cover !object-top w-full h-full">
            </canvas>
            <img src="https://justfields.com/storage/projects/7M5rV059/kids-clothes.webp" decoding="async"
                data-nimg="future-fill"
                class="!object-contain !object-center !w-full !h-full !object-cover !object-top w-full h-full img"
                loading="lazy" style="">
        </div>
        <p class="max-w-screen-lg px-4 text-gray-900 text-center">Explore our best selection of kids' clothes. Buy
            fashionable fun baby wear from top brands. We believe that every kid needs this cool items list...</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
}
</style>