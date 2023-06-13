<script setup>
import { onMounted } from 'vue';
import BG from '../threeBG';
onMounted(() => {
    BG()
})
</script>
<template>
    <div class="threeBG" id="threeBG"><div class="linear"></div></div>
    
</template>
<style>

.threeBG {
    background-color: rgb(18, 19, 70);
    width: 100vw;
    min-width: 300px;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    z-index: -5;
}
.linear{
    width: 100%;
    height: 90%;
    background-image: linear-gradient(to bottom, #100b3000, #0e1827);
    position: absolute;
    bottom: 0;
}
</style>