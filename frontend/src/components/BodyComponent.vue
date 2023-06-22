<template>
  <v-container id="container">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/PC.png')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="auto">
        <v-btn to="/about">Bienvenidos, pulsa para entrar</v-btn>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'BodyComponent',

  data: () => ({

  }),
}
</script>

<style>
#container {
    background-color: rgb(214, 211, 7);
    height: 100%;
}
</style>
