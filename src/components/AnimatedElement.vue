<template>
    <div ref="target" class="animation-section-fade-in">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    fadeDirection: {
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

    if(props.fadeDirection == "down") {
        animationStyle = "fade-in-down";
    } else if(props.fadeDirection == "right") {
        animationStyle = "sideways-fade-in-right";
    } else if(props.fadeDirection == "up") {
        animationStyle = "fade-in-up";
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
}

.fade-in-down {
    animation-name: downwards-fade-in;
    animation-fill-mode: forwards;
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
.fade-in-up {
    animation-name: upwards-fade-in;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}

@keyframes upwards-fade-in {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}
.sideways-fade-in-right {
    animation-name: sideways-fade-in-right;
    animation-fill-mode: forwards;
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