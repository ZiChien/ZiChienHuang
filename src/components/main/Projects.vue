<script setup>
import project from './Projects/project.vue'
</script>
<template>
    <h1>Projects</h1>
    <project/>
</template>
<style scoped lang="scss">
@use '../../variables';
@use '../../style.scss';
h1{
    @extend %heading;
}
</style>