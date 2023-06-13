<script setup>

</script>
<template>
    <h1>About</h1>
    <div class="aboutinner">
        <div class="leftcontent">
            <h2>Let you know me</h2>
            <p>嗨!我是黃子謙，來自淡水。個性細心沉穩，喜歡主動學習，並擁有觀察、解決問題的能力。曾在豆花店打工期間發現點餐效率低落，因此自行學習建置了線上訂餐與管理訂單系統。在過程中，我發現實際解決問題可以成為我學習技術的動力，也是我踏上前端開發之路的初衷。
            </p>
            <h2>My skills</h2>
            <div class="myskills">
                <div class="skill"><span>HTML</span></div>
                <div class="skill"><span>JavaScripts</span></div>
                <div class="skill"><span>CSS</span></div>
                <div class="skill"><span>jQuery</span></div>
                <div class="skill"><span>Vue.js</span></div>
                <div class="skill"><span>Node.js</span></div>
                <div class="skill"><span>Express.js</span></div>
            </div>
        </div>
        <div class="rightavater">
            <div class="avater">
                <img src="../../assets/avater.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../variables';
@use '../../style.scss';
.aboutinner {
    display: flex;
    // flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
    // max-width: 900px;
    .leftcontent {
        width: 50%;
        margin-bottom: 15px;

        p {
            @extend %content;
        }

        .myskills {
            display: flex;
            flex-wrap: wrap;

            .skill {
                color: variables.$text-color-100;
                padding: 2px 10px;
                margin-right: 5px;
                margin-bottom: 12px;
                border-left: 5px solid variables.$text-color-B400;

            }
        }

    }

    .rightavater {
        max-width: 355px;
        min-width: 300px;
        align-self: center;

        .avater {
            width: 100%;
            position: relative;

            img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 3px;
                box-shadow: rgb(147 150 175) 1px 1px 4px;
            }

            &:before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: variables.$BG_color;
                opacity: 0.4;
                border-radius: 3px;
            }

            &:after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                border: 4px solid variables.$text-color-200;
                left: 7px;
                top: 7px;
                z-index: -1;
                border-radius: 3px;
            }
        }
    }

    @media (max-width: 811px) {
        flex-wrap: wrap;
        .leftcontent {
            width: 90%;
            padding: 0 5px;
            p {
                width: 100%;
            }
        }

        .rightavater {
            width: 90%;
            padding: 35px;
        }

    }
}

h1 {
    @extend %heading;
}

h2 {
    @extend %subheading;
}

@media (max-width: 1400px) {}

@media (max-width: 1200px) {}

@media (max-width: 992px) {}

@media (max-width: 811px) {

    .leftcontent {
        width: 90%;
    }

    .rightavater {
        width: 90%;
    }

    h1 {
        margin: 35px 0;
    }
}

@media (max-width: 576px) {}</style>