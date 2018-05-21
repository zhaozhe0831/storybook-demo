import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('rounded', () => ({
    template: '<base-button :rounded="true">A Button with rounded edges</base-button>',
  }))
  .add('square', () => ({
    template: '<base-button :rounded="false">A Button with square edges</base-button>',
  }));
