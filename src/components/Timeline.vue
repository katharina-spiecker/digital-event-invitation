<template>
    <div class="timeline">
        <div class="timeline-dots-wrapper">
            <span
                v-for="(point, index) in timeline"
                :key="index"
                class="timeline-dot">
            </span>
        </div>
        <div
            v-for="(point, index) in timeline"
            :key="index"
            class="timeline-point">
            {{ point.time }}<br>
            {{ point.name }}
        </div>
    </div>
</template>

<script setup>
    const timeline = [
        {
            name: "Ceremony",
            time: "2pm"
        },
        {
            name: "Reception",
            time: "3pm"
        },
        {
            name: "Cake",
            time: "4pm"
        },
        {
            name: "Dinner",
            time: "6pm - 9pm"
        },
        {
            name: "Dance",
            time: "10pm - 1am"
        }
    ]
</script>

<style scoped>

    .timeline {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .timeline-dots-wrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-dots-wrapper:after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        height: calc(100% - 80px);

        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--default-color);
        z-index: -1;
    }

    .timeline-point {
        margin-bottom: auto;
        font-size: 18px;
        line-height: 1;
        align-self: flex-end;
        text-align: left;
        width: 100px;
        height: 100px;
        margin-top: -2px;
    }

    /* left side of timeline point */
    .timeline-point:nth-child(even) {
        align-self: flex-start;
        text-align: right;
    }

    .timeline-dot {
        display: block;
        border: 2px solid var(--default-color);
        border-radius: 50%;
        height: 20px;
        width: 20px;
        margin-bottom: 80px;
        background: var(--default-color-dark);
    }

    @media (min-width: 768px) {
        .timeline {
            width: 50%;
        }
    }

    @media (min-width: 992px) {
        .timeline {
            width: 30%;
        }
    }
</style>