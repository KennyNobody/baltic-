import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 520,
    md: 1100,
    full: Infinity
  },
  defaultBreakpoint: 'full'
});