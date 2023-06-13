<script setup>
import { ref, onMounted } from 'vue'
import About from './main/About.vue'
import Projects from './main/Projects.vue'
import Contact from './main/Contact.vue'

const emit = defineEmits(['changeSideList'])

const about = ref(null)
const projects = ref(null)
const contact = ref(null)
onMounted(() => {
    let current;
    let offsetTop = [about.value.offsetTop, projects.value.offsetTop, contact.value.offsetTop]

    document.addEventListener('scroll', (e) => {
        offsetTop.forEach((item, index) => {
            if (window.scrollY >= item-200) {
                current = index
            }
        })
        emit('changeSideList', current);
    })
})
</script>
<template>
    <main>
        <div class="about" id="about" ref="about">
            <About />
        </div>
        <div class="projects" id="projects" ref="projects">
            <Projects />
        </div>
        <div class="contact" id="contact" ref="contact">
            <Contact />
        </div>
    </main>
</template>
<style scoped lang="scss">
@use '../variables';

main {
    width: 100%;
    padding: 0 260px;
    max-width: 1600px;
    margin: auto;
}

.about {
    min-height: 100vh;
}

.projects {
    min-height: 100vh;
}

.contact {
    min-height: 100vh;
    padding: 10px 0;
}

@media (max-width: 1600px) {}

@media (max-width: 1400px) {
    main {
        padding: 0 160px;
    }
}

@media (max-width: 1200px) {
    main {
        padding: 0 100px;
    }
}

@media (max-width: 992px) {
    main {
        padding: 0 50px;
    }
}

@media (max-width: 811px) {
    main {
        padding: 0 10px;
    }
}

@media (max-width: 576px) {}</style>