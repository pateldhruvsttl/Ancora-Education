import * as React from "react"

const SvgComponent = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={22}
        viewBox="0 0 20 22"
        style={{ transform: 'rotate(90deg)' }}
         {...props}>
        <path
            d="M1 1v20l9.46-8H17l2-4h-8.54Z"
            fill="none"
            stroke="#7d98af"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
    </svg>
)

export default SvgComponent
