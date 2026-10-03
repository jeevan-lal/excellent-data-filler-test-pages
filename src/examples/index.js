import Example1A from './Example1A.vue';
import Example1B from './Example1B.vue';
import Example1 from './Example1.vue';
import Example2 from './Example2.vue';
import Example3 from './Example3.vue';
import Example4 from './Example4.vue';
import Example5 from './Example5.vue';
import Example6 from './Example6.vue';
import Example7 from './Example7.vue';
import Example8 from './Example8.vue';
import Example9 from './Example9.vue';
import Example10 from './Example10.vue';
import Example10_1 from './Example10_1.vue';
import Example11 from './Example11.vue';
import Example12 from './Example12.vue';
import Example13 from './Example13.vue';
import Example12_13 from './Example12_13.vue';
import Example14 from './Example14.vue';
import Example15 from './Example15.vue';
import Example16 from './Example16.vue';
import Example17 from './Example17.vue';
import Example18 from './Example18.vue';
import Example18_1 from './Example18_1.vue';
import Example19 from './Example19.vue';
import Example20 from './Example20.vue';
import Example21 from './Example21.vue';
import Example22 from './Example22.vue';
import Example23 from './Example23.vue';
import Example24 from './Example24.vue';
import Example25 from './Example25.vue';
import Example26 from './Example26.vue';
import Example27 from './Example27.vue';
import Example28 from './Example28.vue';
import Example29 from './Example29.vue';
import Example30 from './Example30.vue';
import Example31 from './Example31.vue';
import Example32 from './Example32.vue';
import Example33 from './Example33.vue';
import Example34 from './Example34.vue';
import Example35 from './Example35.vue';
import Example36 from './Example36.vue';
import Example37 from './Example37.vue';
import Example38 from './Example38.vue';
import Example39 from './Example39.vue';

export const EXAMPLE_COMPONENTS = {
  '1A': Example1A,
  '1a': Example1A,
  '1B': Example1B,
  '1b': Example1B,
  '1': Example1,
  '2': Example2,
  '3': Example3,
  '4': Example4,
  '5': Example5,
  '6': Example6,
  '7': Example7,
  '8': Example8,
  '9': Example9,
  '10': Example10,
  '10-1': Example10_1,
  '10_1': Example10_1,
  '11': Example11,
  '12': Example12,
  '13': Example13,
  '12-13': Example12_13,
  '12_13': Example12_13,
  '14': Example14,
  '15': Example15,
  '16': Example16,
  '17': Example17,
  '18': Example18,
  '18-1': Example18_1,
  '18_1': Example18_1,
  '19': Example19,
  '20': Example20,
  '21': Example21,
  '22': Example22,
  '23': Example23,
  '24': Example24,
  '25': Example25,
  '26': Example26,
  '27': Example27,
  '28': Example28,
  '29': Example29,
  '30': Example30,
  '31': Example31,
  '32': Example32,
  '33': Example33,
  '34': Example34,
  '35': Example35,
  '36': Example36,
  '37': Example37,
  '38': Example38,
  '39': Example39
};

export function getExampleComponent(id) {
  if (!id) return Example1A;
  const key = String(id).trim();
  return EXAMPLE_COMPONENTS[key] || Example1A;
}

export {
  Example1A,
  Example1B,
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  Example7,
  Example8,
  Example9,
  Example10,
  Example10_1,
  Example11,
  Example12,
  Example13,
  Example12_13,
  Example14,
  Example15,
  Example16,
  Example17,
  Example18,
  Example18_1,
  Example19,
  Example20,
  Example21,
  Example22,
  Example23,
  Example24,
  Example25,
  Example26,
  Example27,
  Example28,
  Example29,
  Example30,
  Example31,
  Example32,
  Example33,
  Example34,
  Example35,
  Example36,
  Example37,
  Example38,
  Example39
};
