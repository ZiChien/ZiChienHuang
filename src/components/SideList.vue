<script setup>
import { onMounted, ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
library.add(faInstagram,faGithub,faEnvelope)

const props = defineProps({
    currentSideList: {
        type: Number,
        default: 0
    }
})

const IsShowSideList = ref(true)
onMounted(() => {

    let about = document.querySelector('.about');
    document.addEventListener('scroll', (e) => {

        console.log(props.currentSideList);
        if(about.getBoundingClientRect().top>500){
            IsShowSideList.value = false
        }else{
            IsShowSideList.value = true
        }
    })

})
</script>
<template>
    <div class="side-list" :class="{trasparent:!IsShowSideList}">
        <ul>
            <li>
                <a href="https://www.instagram.com/zchian__nnn/"><font-awesome-icon icon="fa-brands fa-instagram" style="color: #dddee9;" /></a>
            </li>
            <li>
                <a href="https://github.com/ZiChien"><font-awesome-icon icon="fa-brands fa-github" style="color: #dddee9;" /></a>
            </li>
            <li>
                <a href="mailto: zichienhuang@example.com"><font-awesome-icon icon="fa-regular fa-envelope" style="color: #dddee9;"/></a>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
@use '../variables';
@media (max-width: 1200px) {
    .side-list{
        display: none;
    }
}
.side-list{
    position: fixed;
    bottom: 0;
    padding: 0 50px;
    transition: 0.3s;
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0px;
        padding: 0px;
        li{
            a{
                display: inline-block;
                padding: 10px;
                svg{
                    width: 26px;
                    height: 26px;
                    transition: 0.2s;
                }
                &:hover{
                    svg{
                        color: variables.$text-color-B400 !important;
                    }
                }
            }
            &:nth-last-of-type(1){
                margin-bottom: 15px;
            }
        }
        &::after{
            content: '';
            display: block;
            width: 2px;
            height: 150px;
            margin: 0px auto;
            background-color: variables.$text-color-000;
        }
    }
}
.trasparent{
    opacity: 0;
    transform: translateX(-100%);
}

</style>