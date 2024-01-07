<template>
  <div class="flex-col min-h-screen mx-auto max-w-full xs:mx-3">
    <RouterView />
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})
</script>
