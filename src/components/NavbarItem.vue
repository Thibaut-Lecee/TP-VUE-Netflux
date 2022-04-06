<template>
  <nav>
    <v-app-bar app dark color="black">
      <v-icon class="mr-2">fas fa-video</v-icon>
      <v-toolbar-title class="">Netflux</v-toolbar-title>
      <v-btn text class="ml-4" to="/">Accueil</v-btn>
      <v-btn text class="ml-4" to="/">Film</v-btn>

      <v-spacer></v-spacer>

      <v-autocomplete
          clearable
          hide-no-data
          hide-selected
          color="white"
          class="mt-7 mr-7 col-sm-3 col-md-3 col-lg-3"
          label="Rechercher"
          flat
          prepend-inner-icon="search"
          :items="movies"
          item-text="title"
          item-value="id"
          id="search"
      >
        <template v-slot:item="{item}">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template>
      </v-autocomplete>

      <v-btn icon>
        <v-badge color="black" content="1" overlap>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
      <v-badge  bottom color="green" dot offset-x="5" offset-y="5">
        <v-avatar size="30">
          <v-img src="../assets/Netflix-avatar.png" alt="avatar"></v-img>
        </v-avatar>
      </v-badge>
      </v-btn>
    </v-app-bar>
  </nav>

</template>

<script>

export default {
  data: () => ({
    model: '',
    search: null,
    movies: []
  }),
  mounted() {
    this.searchMovies()
  },
  methods: {
    searchMovies: async function () {
      try {
        const response = await this.$request.get("/movie/popular")
        this.movies = response.data.results
        console.log(response.data.results)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
#search {
  width: 60px;
}
</style>