<script setup lang="ts">
import Job from "./components/Job.vue";
import store from "../store/store";
const { jobs } = store;
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-primary">
      <picture>
        <img src="/images/bg-header-desktop.svg" />
      </picture>
    </header>
    <main class="flex-1 bg-background pt-10">
      <section class="flex mx-auto max-w-7xl flex-col gap-4">
        <Job v-for="job in jobs" :job="job" :key="job.id" />
      </section>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
