import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/User/Profile.vue'
import SignIn from '../views/User/SignIn.vue'
import SignUp from '../views/User/SignUp.vue'
import ChatRooms from '../views/User/ChatRooms.vue'
import CreateEvent from '../views/User/CreateEvent.vue'
import Forum from '../views/User/Forum.vue'
import store from '../store.js'
import Chat from '../components/Chat.vue'
import AddRoom from '../components/AddRoom.vue'
import firebase from 'firebase/app'


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
    path: '/chatrooms/:nickname',
    name: 'ChatRooms',
    component: ChatRooms,
    meta: {
      needsUser: true,
     
    }
  },
  {
    path: '/CreateEvent',
    name: 'CreateEvent',
    component: CreateEvent,
    meta: {
      needsUser: true,
      needAdmin:true
    }
  },
  {
    path: '/Forum',
    name: 'Forum',
    component: Forum,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/chat/:nickname/:roomid/:roomname',
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
  const currentUser = firebase.auth().currentUser;
  const needAdmin = to.matched.some(record => record.meta.needAdmin)
  if (noUser && to.meta.needsUser){
    next('signin');
  }else if(needAdmin && currentUser){
    firebase.firestore().collection("users").where("id", "==", currentUser.uid).get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        if(doc.data().typeOfUser == "Admin"){
          next()
        }else{
          next('/')
        }
      })
    })
  }
  else{
    next();
  }
});

export default router
