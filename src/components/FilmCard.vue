<template>
  <v-hover
      v-slot="{hover}"
      open-delay="250"
  >
    <v-card :elevation="hover ? 12:2" :class="{'on-hover' : hover}">
      <router-link :to="`/movie/${movie.id}`">
        <v-img :src="afficheFilm" alt="Affiche film"></v-img>
      </router-link>
      <v-card-title class="subtitle-2 ">{{ movie.title }}</v-card-title>
      <v-card-text>
        <v-row align="center" justify-sm="4" class="mx-2">
          <v-rating :value="movie.vote_average / 2" color="#FFD700" dense half-increments readonly size="14">
          </v-rating>
          <div class="grey--text">
            {{ movie.vote_average }}/10 | {{ movie.release_date }}
          </div>
        </v-row>
        <div class="my-4 mx-2 subtitle-2">
              <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                  {{ typeGenre(genre, index) }}
              </span>
        </div>
      </v-card-text>
    </v-card>

  </v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
    genres: {
      required: true,
    }
  },
  computed: {
    afficheFilm() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
    }
  },
  methods: {
    typeGenre(genreId, index) {
      for (const item of this.genres) {
        if (item.id === genreId) {
          if (this.movie.genre_ids.length - 1 === index) {
            return item.name;
          } else {
            return item.name + ",";
          }

        }
      }
    }
  }
}
</script>

<style scoped>

</style>