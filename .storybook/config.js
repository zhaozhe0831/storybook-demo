import { configure } from '@storybook/vue';
import Vue from 'vue';
import BaseButton from '../src/components/Button.vue';

Vue.component('base-button', BaseButton);

// automatically import all files ending in *.stories.js
function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
