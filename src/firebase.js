// Firebase Configuration
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA3UDvrycqj7YhtxerpguJcrAe0yHaRJ1E",
  authDomain: "niaypeta.firebaseapp.com",
  databaseURL: "https://niaypeta-default-rtdb.firebaseio.com",
  projectId: "niaypeta",
  storageBucket: "niaypeta.firebasestorage.app",
  messagingSenderId: "580243372458",
  appId: "1:580243372458:web:c9294ad7b385e335c053d3"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database
export const database = getDatabase(app)

export default app
