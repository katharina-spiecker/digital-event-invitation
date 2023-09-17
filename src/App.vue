<template>
    <div class="event-wrapper">
        <div class="event-info__main">
            <AnimatedElement fadedirection="down" speed="1" delay="1">
                <div>{{ welcomeText }}</div>
            </AnimatedElement>
            
            <AnimatedElement fadedirection="left" speed="1" delay="3">
                <div>{{ date }}</div>
            </AnimatedElement>

            <AnimatedElement fadedirection="right" speed="1" delay="2">
                <div>{{ details }}</div>
            </AnimatedElement>

            <AnimatedElement fadedirection="left" speed="1" delay="3">
                <div>{{ location }}</div>
            </AnimatedElement>
        </div>
        <AnimatedElement fadedirection="up" speed="1" delay="4">
            <RsvpForm />
        </AnimatedElement>
    </div>
</template>

<script setup>

    import AnimatedElement from './components/AnimatedElement.vue';
    import RsvpForm from './components/RsvpForm.vue';
    const welcomeText = "Celebrate with us!";
    const date = "Thursday | 12th of July 2023 | 8pm";
    const location = "At Schloss Neuschwanstein";
    const details = "30th birthday party";

</script>



<style scoped>
.event-info__main {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}

@media (min-width: 992px) {
    .event-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
    
</style>
