import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/User/Profile.vue'
import SignIn from '../views/User/SignIn.vue'
import SignUp from '../views/User/SignUp.vue'
import ChatRooms from '../views/User/ChatRooms.vue'
import Calendar from '../views/User/Calendar.vue'
import store from '../store.js'
import Chat from '../components/Chat.vue'
import AddRoom from '../components/AddRoom.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
    {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      needsUser: true
    }
  },
    {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/chatrooms',
    name: 'ChatRooms',
    component: ChatRooms,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      needsUser: true
    }
  },
   {
    path: '/addroom',
    name: 'AddRoom',
    component: AddRoom,
    meta: {
      needsUser: true
    }
  },

]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) =>{
  console.log("stara ruta je ", from.name, "nova ruta je", to.name,"i korisnik je", store.currentUser)
  const noUser = (store.currentUser === null);

  if (noUser && to.meta.needsUser){
    next('signin');
    
  }else{
    next();
  }
});

export default router
