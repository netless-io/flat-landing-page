<template>
    <p>Hello, world!</p>
    <button @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<style>
#app {
    text-align: center;
}
</style>
