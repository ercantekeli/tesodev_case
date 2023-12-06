import * as React from "react"
export const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={49}
    fill="none"
    {...props}
  >
    <rect
      width={48}
      height={48}
      fill="#EEE"
      rx={24}
      transform="matrix(-1 0 0 1 48.515 .5)"
    />
    <path
      stroke="#8A8A8A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.7}
      d="m18.515 36.5 12-12-12-12"
    />
  </svg>
)
