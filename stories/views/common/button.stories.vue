<template>
    <base-button :class="className">{{ label }}</base-button>
</template>

<script>
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import BaseButton from '@/components/MyButton.vue';

export default {
    data(){
        return {
            className:'btn',
            label:  text('text', 'Hello 123')
        }
    },

    components:{
        BaseButton
    }
}
</script>
