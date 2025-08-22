// Importa las funciones que necesitas de los SDKs de Firebase
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// La configuración de tu aplicación web de Firebase
const firebaseConfig = {
  apiKey: 'tu-api-key-aquí',
  authDomain: 'tu-proyecto.firebaseapp.com',
  projectId: 'tu-proyecto-id',
  storageBucket: 'tu-proyecto.appspot.com',
  messagingSenderId: '123456789',
  appId: 'tu-app-id',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp)

// Exporta lo que quieras usar en tu app
export { auth, db }
