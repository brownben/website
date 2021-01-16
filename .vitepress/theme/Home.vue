<template>
  <div class="divide-y divide-gray-200">
    <header class="text-center py-28">
      <p class="text-gray-500 font-bold text-2xl">Hi I'm</p>
      <h1
        class="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-700 tracking-tight"
      >
        Ben Brown
      </h1>
      <h2 class="text-gray-500 mt-2 font-medium text-lg">
        and I like Solving Problems
      </h2>
      <a
        href="https://github.com/brownben"
        class="outline-none border border-gray-300 mt-8 inline-block px-4 py-2 rounded font-bold text-gray-500 transition duration-300 hover:border-blue-400 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 focus:ring-2 focus:ring-blue-300"
        >Checkout My GitHub</a
      >
    </header>
    <ul class="divide-y divide-gray-200">
      <li
        class="py-12"
        v-for="{ title, href, date, excerpt } of $site.customData.posts"
      >
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
        >
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-gray-900" :href="href">{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose max-w-none text-gray-500"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <a
                class="text-blue-600 hover:text-blue-800 transition"
                aria-label="read more"
                :href="href"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Date from './Date.vue'
</script>
