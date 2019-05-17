<template>
    <v-app>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <h1 class="primary--text">My Meetup</h1>
                        </v-card-title>
                        <v-card-media src="https://via.placeholder.com/1920x1080" height="320px">
                        </v-card-media>
                        <v-card-text>
                            <div class="info--text">Date</div>
                            <div>Place</div>
                            <div>Description</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="primary">Register</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
