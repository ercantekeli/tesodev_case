import * as React from "react"
export const MapPinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g
      stroke="#090A0A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M21.081 10.697c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <path d="M12.081 13.697a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.081.697h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)