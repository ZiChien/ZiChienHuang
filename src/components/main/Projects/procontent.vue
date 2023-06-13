<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faArrowUpRightFromSquare, faChevronRight, faGithub, faLine)
defineProps({
    number: String,
    Name: String,
    coverImg: String,
    des: String,
    tec: Array,
    QRcode: Array,
    Line: String,
})
const getImageUrl = (img) => {
    return new URL(`../../../assets/${img}`, import.meta.url).href
}
</script>
<template>
    <div class="procontent">
        <h2><span>{{ number }}</span>{{ Name }}</h2>
        <div class="procover">
            <img :src="getImageUrl(coverImg)" alt="">
        </div>
        <div class="desc">
            <p>{{ des }}</p>
        </div>
        <div class="usetech">
            <div class="tech" v-for="item in tec"><span>{{ item }}</span></div>
            <!-- <div class="tech"><span>Express.js</span></div>
            <div class="tech"><span>MongoDB</span></div>
            <div class="tech"><span>Line Messaging API</span></div> -->
        </div>
        <div class="prolink">
            <div class="link" v-for="item in QRcode">
                <div class="arrow">
                    <font-awesome-icon :icon="item.icon" style="color: #dddee9;" />
                </div>
                <a :href="item.link" target="_blank" :title="item.name"><img :src="getImageUrl(item.img)" alt=""></a>
            </div>
            <div class="mobileLink">
                <a v-for="item in QRcode" :href="item.link" target="_blank" :title="item.name"><font-awesome-icon
                        :icon="item.icon" style="color: #dddee9;" /></a>
            </div>
            <!-- <div class="link">
                    <div class="arrow">
                        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" style="color: #dddee9;" />
                    </div>
                    <a href=""><img src="../../../assets/ahyaLine.png" alt=""></a>
                </div> -->
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../../variables';
@use '../../../style.scss';

h1 {
    @extend %heading;
}

.procontent {
    width: 60%;
    display: flex;
    flex-wrap: wrap;

    .procover {
        display: none;
        margin: 5px 0 20px 0;

        img {
            width: 100%;
            border-radius: 5px;
        }
    }

    .desc {
        width: 100%;

        p {
            @extend %content;
            width: 100%;
        }
    }

    .usetech {
        width: 100%;
        margin: 13px;
        padding: 0 15px;
        display: flex;
        flex-wrap: wrap;

        .tech {
            margin-bottom: 10px;

            &:first-child {
                span {
                    border-left: none;
                    padding: 0 10px 0 0;
                }

            }

            span {
                padding: 0 10px;
                border-left: 2px solid variables.$text-color-200;
                color: variables.$text-color-200;
                font-size: clamp(13px, 2vw, 15px);
                font-weight: 700;
            }
        }
    }

    .prolink {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 26px;

        a {
            display: flex;
            width: 100%;
            height: 100%;

            img {
                border-radius: 5px;
                transition: 0.2s;
            }

            &:hover {
                img {
                    opacity: 0;
                }
            }
        }

        .link {
            position: relative;
            width: 90px;
            height: 90px;
            margin-right: 15px;
        }

        .arrow {
            position: absolute;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-size: 30px
        }

        .mobileLink {
            display: none;

            a {
                display: inline;
                background-color: transparent;
                border: none;
                font-size: 20px;
                color: variables.$text_color_B400;
                font-weight: 600;

                svg {
                    font-size: 23px;
                    margin-right: 14px
                }
            }
        }
    }

    h2 {
        @extend %subheading;

        span {
            font-family: 'Righteous', cursive;
            color: variables.$text-color-100;
            font-size: clamp(15px, 1vw, 24px);
            margin-right: 8px;
        }
    }
}

@media (max-width: 811px) {
    .procontent {
        width: 90%;
        margin-bottom: 50px;

        .procover {
            display: block;
        }

        .prolink {
            margin: 5px 0;

            .link {
                display: none;
            }

            .mobileLink {
                display: block;
            }
        }
        .usetech{
            padding: 0;
        }
        .prolink{
            padding: 0 12px;
        }
        .tech {
            margin-bottom: 2px !important;
        }
    }

    p {
        font-size: clamp(14px, 2vw, 19px) !important;
        padding: 10px 10px !important;
        line-height: 24px !important;
    }
}

@media (max-width: 992px) {
    .link {
        width: 78px !important;
        height: 78px !important;
    }
}</style>