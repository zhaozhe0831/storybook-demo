import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import withInfo from 'storybook-addon-vue-info';

// import DemoButton from '../stories/views/common/button.stories.vue';
import DemoButton from '../stories/views/common/button.stories.js';

storiesOf('first', module)
  .addDecorator(withKnobs)
  .add('button', () => DemoButton)
  .add('with render', () => ({
    render: (h) => h(DemoButton)
  }))

storiesOf('second', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('button', () => DemoButton)
  .add('with render', () => ({
    render: (h) => h(DemoButton)
  }))