<template>
    <button class="custom-btn">{{ text }}</button>
</template>

<script setup>

    defineProps(['text']);

</script>


<style scoped>

    .custom-btn {
        font-family: sans-serif;
        display: inline-block;
        border: 1px solid var(--default-color-strong);
        text-transform: uppercase;
        color: var(--default-color-strong);
        border-radius: 3px;
        padding: 5px 20px;
        background: linear-gradient(to right, var(--default-color-strong) 50%, black 50%);
        background-size: 200% 100%;
        background-position: right;
        transition: all .5s ease-out;
    }

    .custom-btn:hover {
        cursor: pointer;
        background-position: left;
        color: var(--default-color-dark);
        border: 1px solid var(--default-color-strong);
    }
</style>