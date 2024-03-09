<template>
  <div class="mx-auto max-w-4xl mt-16">
    <List />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
// import List from "@/components/Todo/List.vue";
import List from "@/components/User/List.vue";

export default {
    name: "App",
    components: {List, Counter}
}
</script>
