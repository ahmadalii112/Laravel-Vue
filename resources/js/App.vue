<template>
    <List />
</template>

<script>
import Counter from './components/Counter.vue'
import List from "@/components/Todo/List.vue";

export default {
    name: "App",
    components: {List, Counter}
}
</script>
