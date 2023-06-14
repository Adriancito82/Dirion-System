<template>
  <HelloWorld />
  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
      HelloWorld,
      FooterComponent,
  },
});
</script>
