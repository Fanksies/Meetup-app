<template>
  <v-app>
    <v-layout row wrap>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/" tag="span" style="cursor:pointer">{{appTitle}}</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
           <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed flat dark class="grey darken-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor:pointer">{{appTitle}}</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menuItems" :key="item.title" router :to="item.link" flat>
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
            <v-icon left>exit_to_app</v-icon>
            Log Out
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-layout>
    <main class="mt-5">
      <router-view></router-view>
    </main>
  </v-app>
</template>
<style lang="scss">
* {
  transition: 150ms linear;
}
</style>

<script>
 export default {
    data () {
      return {
        drawer:null,
        appTitle: 'yea boi',
        sideNav: false
      }
    },
   computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
