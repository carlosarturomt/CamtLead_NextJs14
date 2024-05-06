"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { collection, getDocs, getFirestore, doc, setDoc, orderBy, query } from "firebase/firestore"

import { app } from "../../../services/firebase/config"
import GetDate from "../../../Utils/GetDate"
import { ICONS } from "../../../assets/icons"

import Log from "@/components/templates/Log"

const auth = getAuth(app)
const db = getFirestore(app)

const char_alpha = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const char_email = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

const showPassword = () => {
  const pass = document.getElementById("password");
  if (pass.type == "password") {
    pass.type = "text"
    document.getElementById("eye").innerHTML = (
      `
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><g fill="#8b1fff"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" /><path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" /></g></svg>
      `
    )
  } else {
    pass.type = "password"
    document.getElementById("eye").innerHTML = (
      `
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><g fill="#8b1fff"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" /><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" /><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12z" /></g></svg>
      `
    )
  }
}

function Login() {
  const [error, setError] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  const navigate = useNavigate()
  const pathname = window.location
  const path = pathname.toString()

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (path.endsWith("login")) {
          navigate("/")
        }
      }).catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setError(true)
          setErrorUser(error)
        } else if (error.code === 'auth/wrong-password') {
          setError(true)
          setErrorPassword(error)
        }
        //console.log(error)
      })
  }

  /** Function to LogIn with GOOGLE using Firebase Authenticator*/
  const onSubmitGoogle = async (e) => {
    e.preventDefault()
    const infoUser = await signInWithPopup(auth, provider).then((userFirebase) => {
      return userFirebase
    })

    const docRef = doc(firestore, `users/${infoUser.user.uid}`)
    setDoc(docRef, {
      email: infoUser.user.email,
      displayName: infoUser.user.displayName,
      username: infoUser.user.displayName,
      rol: rol
      // rol: infoUser.user.rol,
    })
    //console.log(infoUser)
  }

  return (
    <Log>
      <section className="w-full flex flex-col justify-center items-center h-screen">
        <article className='w-full md:w-1/2 flex justify-center items-center max-w-[420px] z-[2]'>
          <article className="rounded-md w-full py-8 px-4 flex flex-col justify-center items-center bg-midnight dark:bg-blueAlternative">
            <form onSubmit={submitHandler} className="w-full">
              {/* <Link href={'/'} className="cursor-pointer">
                <i className='mx-auto flex items-center justify-center w-[50px] h-[50px]'>
                  {ICONS.logo.btc}
                </i>
              </Link> */}
              <Link href={'/'} className="cursor-pointer flex flex-col items-center mb-6 text-blueBtc dark:text-whiteAlternative">
                <hgroup className="text-8xl flex items-center">
                  <i className='mx-auto flex items-center justify-center mt-6 mr-1 w-[50px] h-[50px]'>
                    {ICONS.logo.btc}
                  </i>
                  <h1>btc</h1>
                </hgroup>
                <p className="text-xxs uppercase flex gap-[1px]">
                  Congress
                  <i className="text-redBtc">•</i>
                  Conventions
                  <i className="text-redBtc">•</i>
                  Events
                </p>
              </Link>
              {/* <hgroup className='flex flex-col justify-center items-center mb-6'>
              <h1 className='text-xs font-semibold text-center text-[#003195] dark:text-[#b2c1df] w-3/5'>btc.js</h1>
            </hgroup> */}
              {/* <button
              className="text-base p-2 cursor-pointer w-full flex items-center flex-wrap justify-center font-semibold rounded-md border-[1px] border-[#2f65c117] hover:border-[#003195] hover:text-white bg-[#2f65c117] hover:bg-[#003195] text-[#003195] dark:text-[#b2c1df]"
              type="submit"
              onClick={onSubmitGoogle}
            >
              <img
                className="w-5 h-5 mr-1"
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              />
              Entrar con Google
            </button> */}

              <div className='mt-2'>
                <input
                  required
                  placeholder="Correo Electrónico:"
                  className={(error && ' form-control-empty ') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                  id="email" type="email" name="email"
                />
              </div>
              <div className='mt-2 relative flex items-center'>
                <input
                  required
                  placeholder="Contraseña:"
                  className={(error && ' form-control-empty ') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                  id="password" type="password" name="password"
                />
                <a
                  className="absolute right-0 cursor-pointer flex items-center pr-2 no-seleccionable"
                >
                  <i onClick={showPassword} className='w-[20px] h-[20px] flex items-center justify-center' id="eye">
                    {ICONS.eye.close}
                  </i>
                </a>
              </div>
              {
                errorUser &&
                <span className='pr-1 text-xs text-red-700'>Usuario no encontrado.</span>
              }
              {
                errorPassword &&
                <span className='text-xs text-red-700'>La contraseña es incorrecta.</span>
              }
              <Link href={'/contacto'} className="w-full flex justify-center py-2 text-blueLight hover:text-[#00D8FF]">
                ¿Olvidaste tu contraseña?
              </Link>

              <input
                className="mt-2 rounded-md text-base p-2 w-full flex items-center flex-wrap justify-center cursor-pointer font-semibold animate-fadeIn--bg-blue text-[#00091d] bg-blueLight hover:bg-[#6EC093]"
                type="submit" value="Iniciar Sesión"
                onSubmit={submitHandler}
              />
            </form>

            <Link className="my-3 font font-semibold text-[#221397c9] hover:text-[#00D8FF] dark:text-[#b2c1df]" href={'/register'}>Quiero Registrarme</Link>
          </article>

          <style>
            {
              `
						.no-focus {
							outline: none;
							background: #f000;
						}

            .no-focus:focus {
							border: solid 1px #f8f9fa
						}
					`
            }
          </style>
        </article>
      </section>
    </Log>
  )
}

function Register() {
  const [user, setUser] = useState(null)
  const [character, setCharacter] = useState(false)
  const [minEmail, setMinEmail] = useState(false)
  const [minDisplayName, setMinDisplayName] = useState(false)
  const [minUserName, setMinUserName] = useState(false)
  const [minCharacter, setMinCharacter] = useState(false)
  const [available, setAvailable] = useState(true)
  const [error, setError] = useState(false)
  const [getUsername, setGetUsername] = useState(false)
  const [userAvailable, setUserAvailable] = useState(false)
  const [data, setData] = useState([])
  const [typingData, setTypingData] = useState([])

  const today = new Date()
  const date = GetDate(today)

  const DateToday = (value) => {
    if (value <= 9) {
      return '0' + value
    } else {
      return value
    }
  }

  const date_today = date.year + "-" + DateToday(date.month + 1) + "-" + DateToday(date.day)

  /**
   * Sign up with email and password
   */
  const registerUser = async (email, password, rol, firstName, username, registrationDate, gender, lastName, degree, country, school, phoneNumber) => {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password).then((userFirebase) => {
      return userFirebase
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setError(error)
      }
    })

    const docRef = doc(firestore, `users/${infoUser.user.uid}`)
    setDoc(docRef,
      {
        registrationDate: registrationDate,
        basicInf: {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
        },
        contactInf: {
          phoneNumber: phoneNumber,
          username: username,
          email: email,
          password: password,
          adress: {
            country: country,
          },
        },
        education: {
          degree: degree,
          school: school,
        },
        displayName: firstName + ' ' + lastName,
        rol: rol,
        uid: infoUser.user.uid,
      }
    )
    await updateProfile(infoUser.user, {
      firstName,
    })
    await setDoc(doc(firestore, "userChats", infoUser.user.uid), {})
    await setDoc(doc(firestore, "userPosts", username), {
      date: registrationDate,
      uid: infoUser.user.uid,
      username: username
    })
  }

  /**
   *
   * @param {*} e Register With Google
   */
  const onSubmitGoogle = async (e) => {
    e.preventDefault()
    const infoUser = await signInWithPopup(auth, provider).then((userFirebase) => {
      return userFirebase
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setError(error)
      }
    })

    const username = infoUser.user.email.toLowerCase().replace('@gmail.com', '-') + infoUser.user.displayName.toLowerCase().replace(/\s/g, '-')

    const rol = 'user'
    const docRef = doc(firestore, `users/${infoUser.user.uid}`)
    setDoc(docRef, {
      email: infoUser.user.email,
      displayName: infoUser.user.displayName,
      username: username,
      uid: infoUser.user.uid,
      registrationDate: date_today,
      rol: rol
    })
    await setDoc(doc(firestore, "userChats", infoUser.user.uid), {})
    await setDoc(doc(firestore, "userPosts", username), {
      date: date_today,
      uid: infoUser.user.uid
    })
  }

  const getData = async (username) => {
    const docRef = doc(db, `userPosts/${username}`)
    const data = await getDoc(docRef)
    //console.log('GET DATA')
    if (username != undefined) {
      if (data.data()) {
        setData(data.data())
        setUserAvailable(false)
        setAvailable(false)
        //console.log('ptm', data.data())
      } else {
        setData(data.data())
        setUserAvailable(true)
        //console.log(data.data())
      }
    }
    console.log('input: ', username)
    console.log('userAvailable: ', userAvailable)
  }


  /**
   *
   * @param {*} e Log up with Email and and Password
   */
  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const firstName = e.target.elements.firstName.value
    const username = e.target.elements.username.value
    const gender = e.target.elements.gender.value
    const lastName = e.target.elements.lastName.value
    const degree = e.target.elements.degree.value
    const country = e.target.elements.country.value
    const school = e.target.elements.school.value
    const phoneNumber = e.target.elements.phoneNumber.value
    const registrationDate = e.target.elements.registrationDate.value
    const rol = 'user'

    if (email.length >= 8 && password.length >= 8 && firstName.length >= 8 && username.length >= 6) {
      getData(username)
      if (password.match(char_alpha)) {
        setMinDisplayName(false)
        setMinCharacter(false)
        setCharacter(false)
        if (typingData.length === 0) {
          //console.log('Disponible :D', typingData)
          /* grecaptcha.ready(function () {
            grecaptcha.execute(env.RECAPTCHA_SITE_KEY_V3, { action: 'submit' }).then(function (token) { */
          setGetUsername(true)
          if (getUsername) {
            //console.log(getUsername)
            getData()
          }
          if (userAvailable) {
            if (username != undefined) {
              getData(username)
              setAvailable(true)
              console.log('DISPONIBLE: ', userAvailable)
              registerUser(email, password, rol, firstName, username, registrationDate, gender, lastName, degree, country, school, phoneNumber)
              console.log({
                'New User': {
                  registrationDate,
                  'displayName': firstName + ' ' + lastName,
                  'basicInf': {
                    firstName,
                    lastName,
                    gender,
                  },
                  'contactInf': {
                    phoneNumber,
                    username,
                    email,
                    password,
                    'adress': {
                      country,
                    },
                  },
                  'education': {
                    degree,
                    school,
                  },
                  rol,
                }
              })
            }
          } else {
            //console.log('No disponible: ', userAvailable)
            setAvailable(false)
          }
          setMinDisplayName(false)
          setMinCharacter(false)
          setCharacter(false)
          /* })
        }) */
        }
      } else {
        setCharacter(true)
      }
    } else if (email.length < 8 || !email.match(char_email)) {
      setMinEmail(true)
    } else {
      setMinEmail(false)
      if (displayName.length < 8) {
        setMinDisplayName(true)
      } else {
        setMinDisplayName(false)
        if (username.length < 6) {
          setMinUserName(true)
        } else {
          setMinUserName(false)
          if (password.length < 8) {
            setMinCharacter(true)
          } else {
            setMinCharacter(false)
            if (!password.match(char_alpha)) {
              setCharacter(true)
            }
          }
        }
      }
    }
  }

  /**
  * Log out
  */
  const LogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  }

  return (
    <Log>
      <section className="w-full flex flex-col justify-center items-center h-screen">
        <article className='w-full md:w-2/3 flex justify-center items-center max-w-[720px] z-[2]'>
          {user ?
            <section className='w-full flex flex-col justify-center items-center'>
              <div className="rounded-md w-full px-4 md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center bg-whiteAlternative dark:bg-blueAlternative">
                <h1 className="py-2 text-3xl text-dark">Importante</h1>
                <p className="text-xl text-center py-2 text-dark">Por favor recargue la página.</p>
                <p className="text-xl text-center py-2 text-blueLight">Si el problema persiste, es probable que se inició sesión sin antes haberse registrado, por favor de clic en el botón de
                  <span className="text-dark animate-pulse px-1" onClick={LogOut}>
                    cerrar sesión
                  </span>
                  y regístate llenando el formulario o haciendo clic en registrarse con Google, más NO en iniciar sesión.</p>

                <button onClick={LogOut} className="text-white rounded-md text-base p-2 w-full flex justify-center items-center flex-wrap bg-dark backdrop-blur border border-gray-300 shadow-lg hover:shadow-gray-500/50 cursor-pointer animate-pulse mb-6 uppercase">cerrar sesión</button>
              </div>
            </section>
            :
            <article className='rounded-md w-full py-8 px-4 flex flex-col justify-center items-center bg-whiteAlternative dark:bg-blueAlternative'>
              <Link href={'/'} className="cursor-pointer flex flex-col items-center text-blue dark:text-whiteAlternative">
                <hgroup className="text-8xl flex items-center">
                  <i className='mx-auto flex items-center justify-center mt-6 mr-1 w-[50px] h-[50px]'>
                    {ICONS.logo.btc}
                  </i>
                  <h1>btc</h1>
                </hgroup>
                <p className="text-xxs uppercase flex gap-[1px]">
                  Congress
                  <i className="text-redBtc">•</i>
                  Conventions
                  <i className="text-redBtc">•</i>
                  Events
                </p>
              </Link>
              <hgroup className='flex flex-col justify-center items-center'>
                <p className="text-xl font-medium text-center p-2 text-whiteAlternative">Regístrate y Accede a la App Web</p>
              </hgroup>

              <form onSubmit={submitHandler} className="w-full">
                {/* Registration */}
                <div className="flex justify-end items-center">
                  <input
                    required
                    type="date"
                    id="registrationDate"
                    name="registrationDate"
                    defaultValue={date_today}
                    className="hidden rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-indigo-900 bg-[#ffffff17]"
                  />
                </div>

                <div className='w-full flex items-center justify-between flex-wrap'>
                  {/* First Name */}
                  <div className='mt-2 w-full sm:w-[49.666%]'>
                    <input
                      required
                      placeholder="Nombre(s):"
                      className={(minDisplayName && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                      id="firstName" type="text" name="firstName"
                    />
                    {minDisplayName &&
                      <span className='text-xs text-blueLight'>Agrega tu nombre completo.</span>
                    }
                  </div>
                  {/* Last Name */}
                  <div className='mt-2 w-full sm:w-[49.666%]'>
                    <input
                      required
                      placeholder="Apellidos:"
                      className={(minDisplayName && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                      id="lastName" type="text" name="lastName"
                    />
                    {minDisplayName &&
                      <span className='text-xs text-blueLight'>Agrega tu apellido completo.</span>
                    }
                  </div>
                </div>

                <div className='w-full flex items-center justify-between'>
                  {/* Username */}
                  <div className='mt-2 w-[49.666%]'>
                    <input
                      required
                      //onChange={handleChange}
                      placeholder={`Usuario:`}
                      className={(minUserName || !available && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                      type="text"
                      id="username"
                      name="username"
                    />
                  </div>
                  {/* Gender */}
                  <div className='mt-2 w-[49.666%]'>
                    <select
                      required
                      className={(minEmail && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus py-[10px] p-2 rounded-md text-blueLight`}
                      id="gender" type="gender" name="gender">
                      <option value="male">Masculino</option>
                      <option value="female">Femenino</option>
                      <option value="did not say">Prefiero no decirlo</option>
                    </select>
                  </div>
                </div>
                {minUserName &&
                  <span className='text-xs text-blueLight'>Tu nombre de usuario debe tener un mínimo de 6 caracteres.</span>
                }
                {!available &&
                  <span className='text-xs text-red-400'>Este nombre de usuario no está disponible.</span>
                }

                {/* Email */}
                <div className='mt-2'>
                  <input
                    required
                    placeholder="Correo electrónico:"
                    className={(minEmail && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                    id="email" type="email" name="email"
                    pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]{2,16}"
                  />
                  {minEmail &&
                    <span className='text-xs text-blueLight'>Agrega un correo válido.</span>
                  }
                </div>
                {/* Password */}
                <div className='mt-2 relative flex items-center'>
                  <input
                    required
                    placeholder="Contraseña:"
                    className={(minCharacter && 'form-control-empty') + ` focus:outline-none w-full border-[1px] border-midnight no-focus p-2 rounded-md text-blueLight`}
                    id="password" type="password" name="password"
                  />
                  <a
                    className="absolute right-0 cursor-pointer flex items-center pr-2 no-seleccionable"
                  >
                    <i onClick={showPassword} className='w-[20px] h-[20px] flex items-center justify-center' id="eye">
                      {ICONS.eye.close}
                    </i>
                  </a>
                </div>
                {
                  minCharacter &&
                  <span className='text-xs pr-1 text-blueLight'>La contraseña debe tener mínimo 8 caracteres.</span>
                }
                {
                  character &&
                  <span className='text-xs pr-1 text-blueLight'>La contraseña debe tener caracteres especiales, numeros y letras, adempas de por lo menos una letra mayúscula.</span>
                }
                {
                  error &&
                  <span className='text-xs text-red-700'>Ya hay una cuenta registrada con éste correo.</span>
                }

                <input
                  className="mt-2 rounded-md text-base p-2 w-full flex items-center flex-wrap justify-center cursor-pointer font-semibold animate-fadeIn--bg-blue text-[#00091d] bg-blueLight hover:bg-[#6EC093]"
                  type="submit"
                  value="REGISTRARSE"
                  onSubmit={submitHandler}
                />

                {/* <div className="relative pb-5 text-center text-2xl text-blueLight">
                <span className="border-b-2 mr-[3px] px-20 md:px-16 border-blueLight"></span>
                <span className="mt-3 absolute">o</span>
                <span className="border-b-2 ml-[17px] px-20 md:px-16 border-blueLight"></span>
              </div> */}

                {/* <button
                className="text-base p-2 cursor-pointer w-full flex items-center flex-wrap justify-center font-semibold rounded-md border-[1px] border-[#2f65c117] hover:border-[#003195] hover:text-white bg-[#2f65c117] hover:bg-[#003195] text-[#003195] dark:text-[#b2c1df]"
                type="submit"
                onClick={onSubmitGoogle}
              >
                <img
                  className="w-5 h-5 mr-1"
                  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  alt='google'
                />
                Registrarse con Google
              </button> */}

                <p className="text-center py-2 text-blueLight ">
                  Al registrarte, aceptas nuestras
                  <a href="#" className="hover:text-[#00D8FF]"> Condiciones</a> así como la <a href="#" className="hover:text-[#00D8FF]"> Política de Privacidad</a>.
                </p>

              </form>

              <Link href={'/login'} className="my-3 font font-semibold text-[#221397c9] hover:text-[#00D8FF] dark:text-[#b2c1df]">Ya tengo una cuenta</Link>

            </article>
          }

          <style>
            {
              `
						.no-focus {
							outline: none;
							background: #f000;
						}

            .no-focus:focus {
							border: solid 1px #f8f9fa
						}
					`
            }
          </style>
        </article>
      </section>
    </Log>
  )
}

export { Login, Register }
