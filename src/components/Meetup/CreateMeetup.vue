<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1>Llena el siguiente formulario y revisaremos tu solicitud</h1>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateMeetup">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="contacto" label="Nombre de contacto" id="contacto" v-model="contacto" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="title" label="Titulo de la charla" id="title" v-model="title" required></v-text-field>
              </v-flex>
            </v-layout>            
             <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="bio" label="Cuéntanos de ti" id="bio" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="location"
                  label="Ubicación"
                  id="location"
                  v-model="location"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="description"
                  label="Describe tu evento"
                  id="description"
                  v-model="description"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn raised class="primary" @click="onPickFile">Subir Imagen</v-btn>
                <input 
                type="file" 
                style="display:none" 
                ref="fileInput" 
                accept="image/*"
                @change="onFilePicked">
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <img :src="imageUrl" height="150">
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <!-- <h4>Fecha y hora de tu charla</h4> -->
              </v-flex>
            </v-layout>
            <v-layout row class="mb-2">
              <v-flex xs12 sm6 offset-sm3>
                <v-date-picker v-model="date"></v-date-picker>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-time-picker v-model="time"></v-time-picker>
              </v-flex>
            </v-layout>
             <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field name="social" label="Redes Sociales (opcional)" id="social"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn class="primary" :disabled="!formIsValid" type="submit">Enviar</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: new Date().toISOString().substr(0, 10),
      time: new Date(),
      image: null
    }
  },
  computed: {
    formIsValid () {
      return (
        this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
      )
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        let hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      if (!this.image) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert ('Extension de archivo invalida')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener ('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
