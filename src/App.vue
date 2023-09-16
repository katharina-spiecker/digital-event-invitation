<template>
    <div class="event-info__main">
        <AnimatedText :text="welcomeText" fadedirection="down" speed="1" delay="1"/>
        <AnimatedText :text="date" fadedirection="left" speed="1" delay="4"/>
        <AnimatedText :text="details" fadedirection="right" speed="1" delay="2"/>
        <AnimatedText :text="location" fadedirection="left" speed="1" delay="5"/>
    </div>
</template>

<script setup>

import AnimatedText from './components/AnimatedText.vue'
const welcomeText = "Celebrate with us!";
const date = "Thursday | 12th of July 2023 | 8pm";
const location = "At Schloss Neuschwanstein";
const details = "30.  birthday party";

</script>



<style scoped>
.event-info__main {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}
    
</style>
