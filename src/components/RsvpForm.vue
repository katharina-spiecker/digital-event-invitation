<template>
    <form class="rsvp-form">
        <h3 class="mb-3">{{ $t('rsvp.title') }}</h3>
        <div class="mb-4">
            <div class="d-flex justify-content-center">
                <div class="form-check me-3">
                    <input class="form-check-input" type="radio" name="rsvp" id="rsvp-attendance-true" value="true" checked>
                    <label class="form-check-label" for="rsvp-attendance-true">
                        {{ $t('rsvp.answerYes') }}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="rsvp" id="rsvp-attendance-false" value="false">
                    <label class="form-check-label" for="rsvp-attendance-false">
                        {{ $t('rsvp.answerNo') }}
                    </label>
                </div>
            </div>
        </div>

        <div class="mb-4">
            <label for="rsvp-names" class="form-label">{{ $t('rsvp.guestNames') }}</label>
            <input type="text" class="form-control" id="rsvp-names">
        </div>
        <div class="mb-4">
            <label for="rsvp-food" class="form-label">{{ $t('rsvp.foodRestrictions') }}</label>
            <input type="text" class="form-control" id="rsvp-food">
        </div>

        <CustomButton :text="buttonText"/>
        
    </form>
</template>

<script setup>
    import CustomButton from './CustomButton.vue';
    const buttonText = "Send";
</script>


<style scoped>
    .rsvp-form {
        text-align: center;
        font-size: 18px;
        margin-top: 50px;
    }
    .form-check-input {
        background-color: transparent;
        border: 1px solid var(--default-color);
    }

    .form-control {
        background-color: transparent;
        border: 1px solid var(--default-color);
        color: var(--default-color);
    }

    .form-check-label:hover, .form-check-input:hover {
        cursor: pointer;
    }

    label {
        font-size: 18px;
    }

    .form-control:focus {
        box-shadow: 0 0 0 2px var(--default-color);
    }

    @media (min-width: 992px) {
        .rsvp-form {
            width: 50%;
            margin-left: auto;
            margin-right: auto;
        }
    }

</style>