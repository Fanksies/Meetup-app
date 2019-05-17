<template>
  <v-app class="grey lighten-3">
    <v-container>
      <v-layout row wrap class>
        <v-flex x12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/Meetups" class="primary">Explore Meetups</v-btn>
        </v-flex>
        <v-flex x12 sm6 class="text-xs-center text-sm-left">
          <v-btn large router to="/Meetups/Create" class="primary">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
          <v-carousel>
            <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
              <div class="title">{{ meetup.title }}</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style lang="scss">
html {
    background:#000 !important;
}
.title {
  background: rgba(0, 0, 0, 0.25);
  padding: 1em;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 50px;
}
</style>


<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl: "https://via.placeholder.com/1920x1080",
          id: "123abc",
          title: "title 1"
        },
        {
          imageUrl: "https://via.placeholder.com/1920x1080",
          id: "1234abc",
          title: "title 2"
        }
      ]
    };
  }
};
</script>

