import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/List'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import SignUp from '@/components/User/SignUp'
import SignIn from '@/components/User/SignIn'
import MeetupDetail from '@/components/Meetup/MeetupDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Meetups',
      name: 'Find a Meetup',
      component: Meetups
    },
    {
      path: '/Meetups/create',
      name: 'Create a Meetup',
      component: CreateMeetup
    },
    {
      path: '/Meetups/:id',
      name: 'Meetup Detail',
      component: MeetupDetail
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/SignUp',
      name: 'Create an Account',
      component: SignUp
    },
    {
      path: '/SignIn',
      name: 'Login',
      component: SignIn
    }
  ],
  mode: 'history'
})
