<template>
  <div class="flex-col min-h-screen mx-auto max-w-full xs:mx-3">
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <div :key="route.path">
          <component :is="Component" :key="route.path" />
        </div>
      </transition>
    </router-view>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>