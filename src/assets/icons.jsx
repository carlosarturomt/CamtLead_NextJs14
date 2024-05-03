"use client"
import { useEffect, useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export function Path(props) {
  const [fillColor, setFillColor] = useState(props.fill)
  const [colorTheme] = useDarkMode()

  useEffect(() => {
    if (colorTheme == 'light') {
      setFillColor('#0d0319')
    }
  }, [colorTheme])

  return (
    <path d={props.d} fill={fillColor} />
  )
}

export function GroupPolylinePath(props) {
  const [fillColor, setFillColor] = useState(props.fill)
  const [colorTheme] = useDarkMode()

  useEffect(() => {
    if (colorTheme == 'light') {
      setFillColor('#0d0319')
    }
  }, [colorTheme])

  return (
    <g>
      <polyline points={props.points} fill={fillColor} strokeWidth="0" />
      <path d={props.d} fill={fillColor} strokeWidth="0" />
    </g>
  )
}

export function GroupReact(props) {
  const [fillColor, setFillColor] = useState(props.fill)
  const [colorTheme] = useDarkMode()

  useEffect(() => {
    if (colorTheme == 'light') {
      setFillColor('#0d0319')
    }
  }, [colorTheme])

  return (
    <g>
      <g>
        <rect x={props.x} y={props.y} width={props.width} height={props.height} fill={fillColor} strokeWidth="0" />
        <rect x={props.x2} y={props.y2} width={props.width2} height={props.height2} fill={fillColor} transform={props.transform2} strokeWidth="0" />
        <rect x={props.x3} y={props.y3} width={props.width3} height={props.height3} fill={fillColor} transform={props.transform3} strokeWidth="0" />
        <rect x={props.x4} y={props.y4} width={props.width4} height={props.height4} fill={fillColor} transform={props.transform4} strokeWidth="0" />
      </g>
    </g>
  )
}

export const ICONS = {
  logo: {
    camt: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.15 199.81">
      <g>
        <GroupPolylinePath
          points='98.09 .57 86.49 .57 .24 44.01 .24 55.52 98.23 12.49'
          d='M.14,44.01v11.66l85.49,43.02c4.15,0,8.3.02,12.46.02,0-3.71.11-8,.11-11.71C65.55,72.48,32.79,58.54.14,44.01Z'
          fill='#8b1fff'
        />
        <GroupPolylinePath
          points='200.15 98.86 200.15 87.16 156.37 .1 144.76 .1 188.14 99'
          d='M156.37,0h-11.75l-43.36,86.28c0,4.19-.02,8.38-.02,12.57,3.74,0,8.06.11,11.8.11,14.64-32.95,28.7-66.01,43.34-98.97Z'
          fill='#8b1fff'
        />
        <GroupReact
          points='98.09 .57 86.49 .57 .24 44.01 .24 55.52 98.23 12.49'
          d='M.14,44.01v11.66l85.49,43.02c4.15,0,8.3.02,12.46.02,0-3.71.11-8,.11-11.71C65.55,72.48,32.79,58.54.14,44.01Z'
          fill='#8b1fff'
        />
        <GroupReact
          x="144.84" y="101" width="11.77" height="98.64"
          x2="144.48" y2="101" width2="11.77" height2="98.64" transform2="translate(-.27 300.37) rotate(-89.88)"
          fill='#8b1fff'
        />
        <GroupReact
          x="11.72" y="101.6" width="11.72" height="98.2"
          x2="43.61" y2="113.26" width2="11.72" height2="74.72"
          x3="75.21" y3="101.6" width3="11.72" height3="98.2"
          x4="43.26" y4="101.52" width4="11.72" height4="98.2" transform4="translate(-101.61 199.42) rotate(-89.88)"
          fill='#8b1fff'
        />
      </g>
    </svg>
  },

  home: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="m19.633 7.11l-6.474-4.02a2.228 2.228 0 0 0-2.362 0L4.324 7.133A2.228 2.228 0 0 0 3.31 9.362l1.67 10.027a2.228 2.228 0 0 0 2.228 1.86h9.582a2.229 2.229 0 0 0 2.229-1.86l1.67-10.027a2.228 2.228 0 0 0-1.058-2.251" />
        <path d="M12 10.818c-.894-2.024-2.973-2.203-3.94-1.32c-.789.707-1.168 2.405-.448 3.968C8.854 16.153 12 17.564 12 17.564s3.146-1.411 4.388-4.098c.72-1.563.341-3.26-.447-3.969c-.968-.882-3.047-.703-3.941 1.321" />
      </g>
    </svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
      <path fill="#fff" d="M21.184 7.765a2.93 2.93 0 0 0-1.16-1.28l-6.46-4a3 3 0 0 0-3.16 0l-6.48 4a3 3 0 0 0-1.12 1.29a3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 2.93 2.49h9.63a3.17 3.17 0 0 0 1.95-.7a3 3 0 0 0 1-1.79l1.67-10a2.91 2.91 0 0 0-.24-1.71m-4.73 6a9.18 9.18 0 0 1-4.18 3.91a.54.54 0 0 1-.27.07a.52.52 0 0 1-.27-.07a9.13 9.13 0 0 1-4.18-3.91a3.79 3.79 0 0 1 .55-4.25a2.52 2.52 0 0 1 2.25-.55a3 3 0 0 1 1.65 1a3 3 0 0 1 1.65-1a2.52 2.52 0 0 1 2.25.55a3.82 3.82 0 0 1 .55 4.22z" />
    </svg>
  },

  search: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 26 26"><path fill="#fff" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975zm-3.847-8.699a2 2 0 1 0 2.646 2.646a4 4 0 1 1-2.646-2.646" /></svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 26 26"><path fill="#fff" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-5.853-9.44a4 4 0 1 0 2.646 2.646a2 2 0 1 1-2.646-2.647" /></svg>
  },

  alert: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 20 20"><path fill="#fff" d="M9.998 2c3.149 0 5.744 2.335 5.984 5.355l.014.223l.004.224l-.001 3.596l.925 2.222q.034.081.053.167l.016.086l.008.132a1 1 0 0 1-.749.963l-.116.027l-.135.01l-3.501-.001l-.005.161a2.5 2.5 0 0 1-4.99 0l-.005-.161H3.999a1 1 0 0 1-.26-.034l-.124-.042a1 1 0 0 1-.603-1.052l.021-.128l.043-.128l.923-2.219L4 7.793l.004-.225C4.127 4.451 6.771 2 9.998 2M11.5 15.004h-3l.007.141a1.5 1.5 0 0 0 1.349 1.348L10 16.5a1.5 1.5 0 0 0 1.493-1.355zM9.998 3c-2.623 0-4.77 1.924-4.98 4.385l-.014.212L5 7.802V11.5l-.038.192l-.963 2.313l11.958.002l.045-.002l-.964-2.313L15 11.5V7.812l-.004-.204C14.891 5.035 12.695 3 9.998 3" /></svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M9.042 19.003h5.916a3 3 0 0 1-5.916 0m2.958-17a7.5 7.5 0 0 1 7.5 7.5v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004" /></svg>
  },

  user: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-8h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0" /></svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#fff" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" /></svg>
  },

  message: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10M7 8h6" /><path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z" /></g></svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="-1 -1 26 26"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="#8b1fff" d="M19 3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.333L4 21.5c-.824.618-2 .03-2-1V6a3 3 0 0 1 3-3zm-8 9H8a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m5-4H8a1 1 0 0 0-.117 1.993L8 10h8a1 1 0 0 0 .117-1.993z" /></g></svg>
  },

  people: {
    rect: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10M7 8h6" /><path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z" /></g></svg>,
    fill: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="-1 0 18 16"><path fill="#8b1fff" d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" /></svg>
  },

  theme: {
    light: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><circle cx="12" cy="32" r="6" fill="#8b1fff"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12" /></circle><g fill="none" stroke="#8b1fff" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0" /></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>,
    dark: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
      <g fill="none" stroke="#8b1fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
          </path><path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" />
          </path>
        </g>
        <path fill="#8b1fff" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="0"><set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="#8b1fff" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate id="IconifyId18f3f92816b5f51f58" fill="freeze" attributeName="fill-opacity" begin="0.6s;IconifyId18f3f92816b5f51f58.begin+6s" dur="0.4s" values="0;1" />
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+2.2s" dur="0.4s" values="1;0" />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+3s" dur="0.4s" values="0;1" />
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+5.2s" dur="0.4s" values="1;0" />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+0.4s" dur="0.4s" values="0;1" />
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+2.8s" dur="0.4s" values="1;0" />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+3.4s" dur="0.4s" values="0;1" />
          <animate fill="freeze" attributeName="fill-opacity" begin="IconifyId18f3f92816b5f51f58.begin+5.6s" dur="0.4s" values="1;0" />
        </path>
      </g>
      <mask id="IconifyId18f3f92816b5f51f59">
        <circle cx="12" cy="12" r="12" fill="#8b1fff" />
        <circle cx="22" cy="2" r="3" fill="#8b1fff">
          <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
        </circle>
      </mask>
      <circle cx="12" cy="12" r="6" fill="#fff" mask="url(#IconifyId18f3f92816b5f51f59)">
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
      </circle>
    </svg>
  },

}