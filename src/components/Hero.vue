<script setup>
import threeBG from './threeBG.vue'

</script>
<template>
    <threeBG />

    <div class="hero">

        <div class="heroTitleM">
            <h2 class="Bluetext">嗨!我是</h2>
        </div>
        <div class="heroTitleL">
            <h1>ZiChien子謙 </h1>
        </div>
        <div class="heroTitleM">
            <h2>Building things for the web is my way of life.</h2>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../variables';


.hero {
    height: 100vh;
    width: 100vw;
    min-width: 300px;
    background-color: transparent;
    padding: 0 15%;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    .heroTitleL,
    .heroTitleM {
        width: 100%;

        .Bluetext {
            color: variables.$text-color-B400;
            font-weight: 600;
            font-size: clamp(18px, 3vw, 28px);
        }

        h1 {
            // text-align: center;
            font-size: clamp(40px, 12vw, 85px);
            color: variables.$text-color-000;
            margin: 0;
        }

        h2 {
            // text-align: center;

            font-size: clamp(13px, 3vw, 35px);
            font-weight: 500;
            color: variables.$text-color-100;
            margin: 0;
        }
    }

    @media (max-width: 811px) {
        padding: 0 28px;
    }
}</style>