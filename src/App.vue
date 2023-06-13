<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import MainContent from './components/MainContent.vue'
import MyFooter from './components/MyFooter.vue'
import SideList from './components/SideList.vue'

const currentSideList = ref(0)
const changeCurrentSideList = (current) => {
  currentSideList.value = current
}
</script>

<template>
  <Hero />
  <Navbar />
  <MainContent @changeSideList="(current) => { changeCurrentSideList(current) }" />
  <MyFooter />
  <SideList />
</template>

<style scoped lang="scss"></style>
