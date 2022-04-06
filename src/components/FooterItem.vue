<template>
<v-footer  dark padless>
  <v-card flat  class=" ml-3  mt-1">


      <v-btn v-for="icon in icons" :key="icon" class="ml-10" icon>
        <v-icon size="25px">{{icon}}</v-icon>
      </v-btn>

  </v-card>
</v-footer>

</template>

<script>
export default {
    data:() => ({
      icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-instagram',
          'mdi-youtube',

      ],
    })
}
</script>


<style>

</style>