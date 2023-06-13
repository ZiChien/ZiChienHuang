<script setup>
import { onMounted, ref } from 'vue';
import { init3D, nextScene } from '../../../ahya3D';
import { initOsbbit3D ,OsbbitnextScene } from '../../../osbbit3D';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import procontent from './procontent.vue'
import { contents } from './contents'
library.add(faChevronRight)
onMounted(() => {
    // init3D()
    // initOsbbit3D()
})
const clickNextSene = () => {
    nextScene()
}
const clickNextSeneOsbbit = () => {
    OsbbitnextScene()
}
const content = contents;
</script>
<template>
    <div class="project">
        <procontent v-bind="content[0]" />
        <!-- <div class="proimg" id="ahya3D">
        </div>
        <div class="controls">
            <div class="nextscene">
                <button @click="clickNextSene"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
            </div>
        </div> -->
        <div class="proCover">
            <img src="../../../assets/ahyaCover6.png" alt="">
        </div>
    </div>
    <div class="project">
        <procontent v-bind="content[1]" />
        <div class="proCover">
            <img src="../../../assets/panukuCover.png" alt="">
        </div>
    </div>
    <div class="project">
        <procontent v-bind="content[2]" />
        <!-- <div class="proimg" id="osbbit3D">
        </div>
        <div class="controls">
            <div class="nextscene">
                <button @click="clickNextSeneOsbbit"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
            </div>
        </div> -->
        <div class="proCover">
            <img src="../../../assets/osbbitCover3.png" alt="">
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../../variables';
@use '../../../style.scss';

.project {
    // height: 430px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10vh 0;
}


.proimg {
    position: relative;
    width: 26%;
    min-width: 250px;
    min-height: 430px;
    height: 50vw;
    max-height: 430px;
    margin-left: 10px;

    img {
        width: 100%;
    }


}

.proCover {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    margin-top: 4%;
    z-index: -1;
    
    img {
        width: 150%;
        height: 100%;
        filter: saturate(60%) opacity(90%);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 5px;
    }
}

.controls {
    display: flex;
    justify-content: flex-end;
    align-self: center;

    .nextscene {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            min-width: 50px;
            border: none;
            background-color: transparent;
            font-size: 30px;
            color: variables.$text-color-B400;
            padding: 0;
            font-weight: 600;

            svg {
                transition: 0.3s;
                color: variables.$text-color-B400;
                margin: 0 10px;
            }

            &:hover {
                cursor: pointer;

                svg {
                    transform: translateX(50%);
                    color: variables.$text-color-100;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .proimg {}

    .proCover {
        width: 32%;
        margin-top: 6%;

    }
}

@media (max-width: 992px) {
    .project {}

    .proCover {
        margin-top: 9%;
    }
}

@media (max-width: 811px) {
    .project {
        flex-wrap: wrap;
        justify-content: center;

        .proimg {
            display: none;
        }

        .controls {
            display: none;
        }
    }

    .proimg {
        width: 90%;
    }

    .proCover {
        display: none;
    }

    .controls {
        width: 90%;
    }
}</style>