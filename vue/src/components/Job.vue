<script setup lang="ts">
import jobs from "../assets/data.json";
const { job } = defineProps<{ job: (typeof jobs)[0] }>();
</script>
<template>
  <article
    class="flex justify-between bg-white py-8 rounded-lg px-8 shadow-xl items-center"
    :class="{ 'border-l-[6px] border-l-primary': job.featured }"
  >
    <div class="flex gap-10 items-center">
      <figure class="max-w-20">
        <img :src="job.logo" class="aspect-square w-full" />
      </figure>
      <div class="flex flex-col gap-1">
        <div class="flex gap-3 items-center">
          <h2 class="text-primary font-bold text-main">{{ job.company }}</h2>
          <span
            class="block px-3 py-1 rounded-full uppercase text-white bg-primary text-xs text-center font-medium"
            v-if="job.new"
            >New</span
          >
          <span
            class="block px-3 py-1 rounded-full uppercase text-white bg-veryDarkGrayishCyan text-xs text-center font-medium"
            v-if="job.featured"
            >Featured</span
          >
        </div>
        <h2
          class="font-bold text-2xl text-veryDarkGrayishCyan hover:text-primary cursor-pointer transition-all duration-300 ease-in-out"
        >
          {{ job.position }}
        </h2>
        <div
          class="text-darkGrayishCyan font-medium text-main flex items-center gap-4"
        >
          <span>{{ job.postedAt }}</span>
          <span>&bull; </span>
          <span>{{ job.contract }}</span>
          <span>&bull; </span>
          <span>{{ job.location }}</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button
        class="bg-primary/20 text-primary font-bold text-main px-3 py-2 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
      >
        {{ job.role }}
      </button>
      <button
        class="bg-primary/20 text-primary font-bold text-main px-3 py-2 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
        v-for="tool in job.tools"
        :key="tool"
      >
        {{ tool }}
      </button>
      <button
        class="bg-primary/20 text-primary font-bold text-main px-3 py-2 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
        v-for="langauge in job.languages"
        :key="langauge"
      >
        {{ langauge }}
      </button>
    </div>
  </article>
</template>
