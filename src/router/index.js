import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ScenarioView from '../views/ScenarioView.vue';
import ConfirmationView from '../views/ConfirmationView.vue';
import Example12View from '../views/scenarios/Example12View.vue';
import Example13View from '../views/scenarios/Example13View.vue';
import FrameTargetView from '../views/scenarios/FrameTargetView.vue';
import { SCENARIOS } from '../data/scenarios';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'ED Filler Test Suite - Form Runner & Extension Validation Matrix'
    }
  },
  {
    path: '/scenarios/:id',
    name: 'scenario',
    component: ScenarioView,
    props: true
  },
  {
    path: '/examples/3/confirmation',
    name: 'example3-confirmation',
    component: ConfirmationView,
    meta: {
      title: 'Submission Confirmed (302 Redirect Target) - Example 3 | ED Filler Test Suite'
    }
  },
  {
    path: '/examples/12',
    name: 'example12',
    component: Example12View,
    meta: {
      title: 'Two Forms Across Different URLs (Part 1) - Example 12-13 | ED Filler Test Suite'
    }
  },
  {
    path: '/examples/13',
    name: 'example13',
    component: Example13View,
    meta: {
      title: 'Two Forms Across Different URLs (Part 2) - Example 12-13 | ED Filler Test Suite'
    }
  },
  {
    path: '/frames/:id',
    name: 'frame-target',
    component: FrameTargetView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  if (to.name === 'scenario') {
    const scenario = SCENARIOS.find((s) => s.id === to.params.id);
    if (scenario) {
      document.title = `${scenario.title} (${scenario.displayId}) | ED Filler Test Suite`;
    } else {
      document.title = `Form Sandbox (${to.params.id}) | ED Filler Test Suite`;
    }
  } else if (to.name === 'frame-target') {
    document.title = `Encapsulated Frame Context (${to.params.id}) | ED Filler Test Suite`;
  } else if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'ED Filler Test Suite - Form Runner & Extension Validation Matrix';
  }
});

export default router;
