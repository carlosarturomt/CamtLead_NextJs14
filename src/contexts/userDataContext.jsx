"use client"

import { createContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { app } from "@/services/firebase/config"

const db = getFirestore(app)
const auth = getAuth(app)

export const UserDataContext = createContext()

export function UserDataProvider({ children }) {
  const [user, setUser] = useState([])
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (user != null) {
      onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
          setUser(userFirebase)

          const userID = user.uid
          const docRef = doc(db, `users/${userID}`)

          const post = async () => {
            const dataDetail = await getDoc(docRef)
            setUserData({
              ...dataDetail.data()
            })
          }

          if (Object.entries(userData).length === 0) {
            post()
          }

          //console.log(userData)
        } else {
          setUser(null)
        }
      })
    }
  }, [user])

  const imag_user_undefined = 'https://cdn-icons-png.flaticon.com/256/149/149071.png'

  return (
    <UserDataContext.Provider value={{ user, userData, imag_user_undefined }}>
      {children}
    </UserDataContext.Provider>
  )
}
