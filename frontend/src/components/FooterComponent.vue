<template>
    <v-footer id="footer">
        <div class="bg-black text-center w-100">
          {{ new Date().getFullYear() }} — 💻 <strong>Adrián Santana Suárez</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style>
#footer {
    width: 100%;
}
</style>
