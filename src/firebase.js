// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66ynB_Ar0t0dL6yF0tXPjV0DgW5OUxJk",
  authDomain: "penukaran-poin.firebaseapp.com",
  projectId: "penukaran-poin",
  storageBucket: "penukaran-poin.appspot.com",
  messagingSenderId: "38672054149",
  appId: "1:38672054149:web:d65dcd1763ab0a041276ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

const db = getFirestore(app);
const citiesColRef = collection(db, "riwayat");
export default citiesColRef;

export { app, auth }