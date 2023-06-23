<template>
<v-container>
    <v-card
  title="Esto está en contrucción"
  subtitle="Subtitle"
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
  variant="tonal"
>
  <v-card-actions>
    <v-btn>Click me</v-btn>
  </v-card-actions>
</v-card>

  <v-row justify="center">
    <v-col cols="auto">
       <v-btn to="/">Volver al Home 🔥</v-btn>
    </v-col>
  </v-row>
</v-container>


  <FooterComponent/>
</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        FooterComponent,
    }
}

</script>

<style>

</style>
