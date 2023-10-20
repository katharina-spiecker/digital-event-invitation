<template>
    <div class="event-wrapper">
        <div class="event-info__main mb-big">
            <AnimatedElement fadedirection="down" speed="1" delay="0.1">
                <div>{{ welcomeText }}</div>
            </AnimatedElement>
            
            <AnimatedElement fade-direction="left" speed="1" delay="3">
                <div>{{ date }}</div>
            </AnimatedElement>

            <AnimatedElement fade-direction="right" speed="1" delay="2">
                <div>{{ details }}</div>
            </AnimatedElement>

            <AnimatedElement fade-direction="left" speed="1" delay="3">
                <div>{{ location }}</div>
            </AnimatedElement>
        </div>

        <Timeline class="mb-big"/>

        <Info class="mb-big"/>

        <AnimatedElement fade-direction="up" speed="1" delay="4" class="mt-5">
            <RsvpForm />
        </AnimatedElement>
    </div>

</template>

<script setup>

    import AnimatedElement from './components/AnimatedElement.vue';
    import RsvpForm from './components/RsvpForm.vue';
    import Timeline from './components/Timeline.vue';
    import Info from './components/Info.vue';

    const welcomeText = "Celebrate with us!";
    const date = "Thursday | 12th of July 2028 | 8pm";
    const location = "At Schloss Neuschwanstein";
    const details = "Our wedding";

</script>



<style scoped>
.event-info__main {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}

.mb-big {
    margin-bottom: 50px;
}



@media (min-width: 992px) {
    .mb-big {
        margin-bottom: 100px;
    }
}
    
</style>