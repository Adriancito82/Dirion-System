<template>
  <BodyComponent />
  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import BodyComponent from '../components/BodyComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
      BodyComponent,
      FooterComponent,
  },
});
</script>
