<template>
  <div class="mx-8">
    <h2 class="mt-2  grey--text">Films Populaires</h2>
    <v-container fluid class="mt-2" >
      <v-row class="grey">
        <v-col cols="10" sm="3"   v-for="movie in movies" :key="movie.id">
          <FilmCard :movie="movie" :genres="genres"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FilmCard from "./FilmCard"

export default {

  components: {
    FilmCard
  },
  data: () => {
    return {
      movies: [],
      genres: [],

    }
  },
  async mounted() {
    this.getGenres();
    try {
      const response = await this.$request.get("/movie/popular")
      this.movies = response.data.results


    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    async getGenres() {
      try {
        const response = await this.$request.get("/genre/movie/list")
        this.genres = response.data.genres
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>