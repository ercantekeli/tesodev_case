import * as React from "react";
const BackArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#484848"
      d="M.94 10.94a1.5 1.5 0 0 0 0 2.12l9.544 9.548a1.5 1.5 0 0 0 2.122-2.122L4.12 12l8.486-8.484a1.5 1.5 0 1 0-2.12-2.122L.938 10.94ZM28 10.502 2 10.5v3l26 .003v-3Z"
    />
  </svg>
);
export default BackArrow;
