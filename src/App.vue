<template>
    <div class="event-wrapper">
        <div class="event-info__main mb-big">
            <AnimatedElement fadedirection="down" speed="1" delay="0.1">
                <div>{{ $t('welcomeText') }}</div>
            </AnimatedElement>
            
            <AnimatedElement fade-direction="left" speed="1" delay="3">
                <div>{{ $t('date') }}</div>
            </AnimatedElement>

            <AnimatedElement fade-direction="right" speed="1" delay="2">
                <div>{{ $t('details') }}</div>
            </AnimatedElement>

            <AnimatedElement fade-direction="left" speed="1" delay="3">
                <div>{{ $t('location') }}</div>
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