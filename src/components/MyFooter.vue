<script setup>

</script>
<template>
    <div class="foot">
        <h4>Designed & Built by Chien</h4>
    </div>
</template>
<style scoped lang="scss">
@use '../variables';

.foot {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
        margin: 0;
        color: variables.$text-color-100;
        font-size: clamp(13px, 2vw, 15px);
        font-weight: 500;
    }
}
</style>