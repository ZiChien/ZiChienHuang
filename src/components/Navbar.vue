<script setup>
import { onMounted, ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faBarsStaggered, faXmark)

const IsHideScrollnavbar = ref(false)
const IsScrollTop = ref(true)
onMounted(() => {
    let current;
    document.addEventListener('scroll', (e) => {
        let windowScrollY = window.scrollY;
        if (windowScrollY < current) {//scroll up
            if (windowScrollY > 0) {
                IsScrollTop.value = false;
            } else if (windowScrollY == 0) {
                IsScrollTop.value = true;
            }
            IsHideScrollnavbar.value = false;
        } else {
            IsHideScrollnavbar.value = true;
        }
        current = windowScrollY;
    })

})
const addOverflowHidden = () => {
    document.body.classList.add('overflow-hidden');
}

const removeOverflowHidden = () => {
    document.body.classList.remove('overflow-hidden');
}
const isShowMenu = ref(false)
const changeShowMenu = () => {
    isShowMenu.value = !isShowMenu.value
    if(isShowMenu.value){
        console.log("!!");
        addOverflowHidden()
    }else{
        removeOverflowHidden()
    }
}

</script>
<template>
    <div class="navbar" :class="{ scrollnavbar: IsHideScrollnavbar, scrollnavbarBG: !IsScrollTop }">
        <div class="logo">
            <a href="#">ZiChien</a>
        </div>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="barBtn" @click="changeShowMenu">
            <font-awesome-icon icon="fa-solid fa-bars-staggered" style="color: #c2c3db;" />
        </div>
    </div>
    <div class="fixednavbar" v-show="isShowMenu">
        <div class="closebtn" @click="changeShowMenu">
            <font-awesome-icon icon="fa-solid fa-xmark" style="color: #c2c3db;" />
        </div>
        <div class="fixedmenu">
            <div class="atag">
                <a href="#about" @click="changeShowMenu">About</a>
            </div>
            <div class="atag">
                <a href="#projects" @click="changeShowMenu">Projects</a>
            </div>
            <div class="atag">
                <a href="#contact" @click="changeShowMenu">Contact</a>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../variables';

.navbar {
    // display: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    padding: 0 50px;
    transition: 0.3s;
    z-index: 5;

    ul {
        padding: 0;
        margin: 30px 0;
        display: flex;
        justify-content: flex-end;
        list-style: none;

    }

    li {
        margin: 0px 10px;
    }

    a {
        padding: 5px 10px;
        text-decoration: none;
        color: variables.$text-color-100;
        font-size: variables.$fz-md;
        font-weight: 500;
    }

    .logo {
        a {
            font-weight: 700;
            font-size: clamp(19px, 4vw, 26px);
        }
    }

    .barBtn {
        display: none;
        font-size: 26px;
        margin: 0 5px;
    }

}

.scrollnavbar {
    transform: translateY(-100%);
}

.scrollnavbarBG {
    background-color: #0e18279e;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 25px 20px -20px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

@media (max-width: 811px) {
    li {
        display: none;
    }

    .navbar {
        padding: 0 20px;
        height: 50px;
    }

    .barBtn {
        display: block !important;
    }
}

.fixednavbar {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 8;
    top: 0;
    background-color: variables.$BG_color;

    display: flex;
    flex-wrap: wrap;

    .closebtn {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        padding: 15px 20px;
        font-size: 45px;
    }

    .fixedmenu {
        width: 100%;
        margin: auto;

        .atag {
            display: flex;
            justify-content: flex-end;
            margin: 105px;

            a {
                font-size: 40px;
                font-family: 'Open Sans', sans-serif;
                color: variables.$text-color-100;
                text-decoration: none;
                font-weight: 800;
            }
        }
    }


}
</style>