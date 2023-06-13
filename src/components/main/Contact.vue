<script setup>

</script>
<template>
    <h1>Contact</h1>
    <h2>希望我的網站及作品你會喜歡！<br />有任何問題或是關於網站的意見都可以在下方告訴我喔！</h2>
    <div class="contact-form">
        <form action="">
            <div class="form-row">
                <input type="text" name="name" placeholder="你的名字">
                <input type="email" name="email" placeholder="郵件">
            </div>
            <div class="form-row">
                <textarea name="content" id="" cols="30" rows="10" placeholder="想說什麼都可以！"></textarea>
            </div>
            <div class="form-row">
                <button>
                    <h2>發送！</h2>
                </button>
            </div>
        </form>
    </div>
</template>
<style scoped lang="scss">
@use '../../variables';
@use '../../style.scss';

h1 {
    @extend %heading;
    margin-bottom: 20px;
}

h2 {
    font-size: clamp(16px, 1.2vw, 35px);
    text-align: center;
    padding: 0 15%;
}

.contact-form {
    margin: 50px 5%;

    .form-row {
        display: flex;
        justify-content: space-between;
        width: 65%;
        margin: auto;

        input,
        textarea {
            width: 49%;
            padding: 0 12px;
            height: 60px;
            background-color: #0f1621;
            border: 3px solid #56718c;
            border-radius: 10px;
            color: variables.$text-color-100;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            font-size: clamp(14px, 0.9vw, 35px);
            transition: 0.2s;
            margin-bottom: 12px;

            &:focus {
                outline: none;
                border: 3px solid #93b5d8;
            }

            &::placeholder {}
        }

        textarea {
            width: 100%;
            height: 150px;
            padding: 10px 12px;
            resize: none;
        }

        button {
            width: 100%;
            height: 60px;
            border-radius: 30px;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            background-color: #575896;
            font-family: 'Open Sans', sans-serif;
            font-size: clamp(20px, 0.9vw, 35px);
            font-weight: 700;
            color: black;
            transition: 0.3s;

            h2 {
                margin: 0;
                font-family: "Open Sans", sans-serif;
                font-size: clamp(20px, 0.9vw, 35px);
                font-weight: 700;
                background-image: url("/src/assets/giphy.gif");
                background-size: cover;
                -webkit-background-clip: text;
                -webkit-text-fill-color: #ffffffb3;
            }
        }
    }

}

@media (max-width: 811px) {
    .form-row {
        flex-wrap: wrap;
        width: 90% !important;

        input {
            width: 100% !important;
            height: 45px !important;
        }

        textarea {
            height: 100px !important;
        }
        button{
            height: 45px !important;
        }
    }
}
</style>