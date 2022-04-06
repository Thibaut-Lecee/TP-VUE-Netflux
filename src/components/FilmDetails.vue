<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" class="mt-3 ml-0">
          <v-hover v-slot="{hover}"
                   open-delay="200">
            <v-card :elevation="hover ? 16:2" :class="{'on-hover': hover}">
              <router-link :to="`/movie/${movie.id}`">
                <v-img :src="afficheFilm" alt="affiche" >

                </v-img>
              </router-link>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="10" sm="6">
          <h1 class=" grey--text text--darken-3 subheader">
            {{ this.movie.title }}
          </h1>
          <v-row>
            <v-col cols="12" sm="2">
              <v-rating :value="movie.vote_average / 2"
                        color="#FFD700"
                        dense
                        half-increments
                        readonly
                        size="14">

              </v-rating>
            </v-col>
            <v-col cols="10" sm="4">
              <span class="mt-6 ml-4 grey--text text--darken subheader">
                {{ movie.vote_average}}/10 {{ movie.release_date }}
              </span>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="grey--text text--darken-3 subheader">
              <span v-for="(film,index) in movie.genres" :key="index">
                {{ film.name }}
              <span v-if="(movie.genres.length -1 !== index)">,</span>
              </span>
              </div>
            </v-col>
            <p class="grey--text text--darken-2 subheader">{{ this.movie.overview }}</p>
            <div class="mr-8">
              <h2 class=" grey--text text--darken-3">Acteurs et Réalisateur</h2>
              <div :key="index" v-for="(group, index) in movie.credits.crew" class="mt-2">
                <div v-if="index < 4" class="">
                  <h3>{{ group.name }}</h3>
                  <span class="grey--text">{{ group.job }}</span>
                </div>
              </div>

            </div>
            <v-dialog
                v-model="dialog"
                max-width="800px"
            class="ml-3">

              <template v-slot:activator="{on, attributs}">
                <v-btn  color="warning" class="white--text" v-bind="attributs" v-on="on" @click.prevent="videoModel">
                  <v-icon>mdi-play</v-icon>
                  Play
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="header">{{ this.movie.title }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="">
                        <div class="video-container">
                          <img :src="mediaURL" v-if="!isVideo"/>
                          <iframe allowfullscreen v-if="isVideo" :src="mediaURL"></iframe>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="purple" text @click="dialog = false">Fermer</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        credits: {
          group: {}
        },
        images: {
          backdrops: {}
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false
    }


  },

  mounted() {
    this.getFilmId(this.$route.params.id)

  },
  watch: {
    "$route.params.id": {
      handler() {
        this.getFilmId(this.$route.params.id)
      },
      immediate: true,
    }
  },
  computed: {
    afficheFilm() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
    }
  },
  methods: {
    async getFilmId(filmId) {
      const response = await this.$request.get('/movie/' + filmId + "?append_to_response=credits,videos,images")

      this.movie = response.data
      console.log(response.data)

    },
    videoModel() {
      this.mediaURL = this.youtubeVideo()
      this.isVideo = true;
    },
    openLecteur() {
      this.isVideo = false
    },

    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
          "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      )
    },
  },
}
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}


.video-container iframe {
  border: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>