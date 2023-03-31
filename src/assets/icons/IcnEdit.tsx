import * as React from "react"
interface props{
  color:string
}
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21.929}
    height={21.929}
    viewBox="0 0 23.929 23.929"
    {...props}
  >
    <g
      fill="none"
      stroke={props.color ? props.color : "#506588"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    >
      <path
        data-name="Path 37969"
        d="M10.766 2.996H2.859A2.259 2.259 0 0 0 .6 5.255v15.814a2.259 2.259 0 0 0 2.259 2.259h15.814a2.259 2.259 0 0 0 2.259-2.259v-7.907"
      />
      <path
        data-name="Path 37970"
        d="M19.239 1.302a2.4 2.4 0 0 1 3.389 3.389l-10.732 10.73-4.518 1.13 1.13-4.518Z"
      />
    </g>
  </svg>
)

export default SvgComponent
