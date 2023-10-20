<template>
    <div class="info-wrapper">
        <div class="info-col">
            <div class="info-title">Address</div>
            Castle Ravenwood<br>
            123 Enchanted Lane<br>
            Mysticshire, Fabled Kingdom<br>
            Realm of Dreams
        </div>
        <div class="info-col">
            <div class="info-title">Hotel info</div>
            Hotel Castle Ravenwood<br>
            Click here to reserve room.
        </div>
    </div>
</template>

<style scoped>
.info-wrapper {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--default-color);
    padding-top: 20px;
    padding-bottom: 20px;
}

.info-title {
    font-size: 20px;
    margin-bottom:10px;
}

.info-col {
    margin-top: 50px;
    text-align: center;
}

@media (min-width: 992px) {
    .info-col {
        width: 50%;
        text-align: center;
        margin-top: 0;
    }

    .info-wrapper {
        flex-direction: row;
        align-items: center;
    }
}
</style>