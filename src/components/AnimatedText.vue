<template>
    <div ref="target" class="animation-section-fade-in">{{ text }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    text: {
        type: String,
        default: "Celebrate with us!"
    },
    fadedirection: {
        type: String,
        default: "left"
    },
    speed: {
        type: Number,
        default: 1
    },
    delay: {
        type: Number,
        default: 1
    }
});
    
const target = ref(null);

onMounted(() => {
    animate();
})

function animate() {
    let animationStyle;

    if(props.fadedirection == "down") {
        animationStyle = "downwards-fade-in";
    } else if(props.fadedirection == "right") {
        animationStyle = "sideways-fade-in-right";
    } else {
        animationStyle = "sideways-fade-in-left";
    }

    target.value.style.animationDuration = props.speed + "s";
    target.value.style.animationDelay = props.delay + "s";
    target.value.classList.add(animationStyle);
}
</script>

<style scoped>
.animation-section-fade-in {
    margin-bottom: 50px;
    font-size: 30px;
    opacity: 0;
    font-weight: 300;
}

.downwards-fade-in {
    animation-name: downwards-fade-in;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    animation-timing-function: ease-in;
}

@keyframes downwards-fade-in {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}
.sideways-fade-in-right {
    animation-name: sideways-fade-in-right;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    animation-timing-function: ease-in;
}

@keyframes sideways-fade-in-right {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

.sideways-fade-in-left {
    animation-name: sideways-fade-in-left;
    animation-fill-mode: forwards;
    /* animation-duration: 1s; */
    animation-timing-function: ease-in;
}

@keyframes sideways-fade-in-left {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}
</style>