"use client"

import { useContext } from "react"
import { UserDataContext } from "@/contexts/userDataContext"
import Home from "@/app/(home)/page"

export default function Log(props) {
  const context = useContext(UserDataContext)

  return (
    <>
      {context.user ? (
        <Home />
      ) : (
        <section className="w-full flex flex-col justify-center items-center h-screen dark:bg-[#00091d]">
          <div className="w-full flex flex-col justify-center items-center mb-14">
            {props.children}
          </div>
        </section>
      )}
    </>
  )
}