<template>
  <div class="flex flex-col antialiased min-h-full">
    <nav
      v-if="!isIndex"
      class="max-w-3xl w-full mx-auto px-4 py-8 sm:px-6 xl:max-w-5xl xl:px-0 flex justify-between items-center"
    >
      <a href="/">
        <h1
          class="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-700"
        >
          Ben Brown
        </h1>
      </a>
      <a
        href="https://github.com/brownben"
        class="font-medium text-gray-500 hover:text-blue-600 focus:text-blue-600 transition"
      >
        My Github
      </a>
    </nav>
    <main
      class="max-w-3xl w-full mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex-grow"
    >
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Footer from './Footer.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>
