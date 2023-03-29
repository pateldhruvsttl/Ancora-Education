import * as React from "react"

const SvgComponent = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        transform="rotate(360)"
        width={10} height={5} viewBox="0 0 10 6"
        {...props}>
        <path
            data-name="Icon ionic-ios-arrow-back"
            d="M5 4.191 1.218.22a.688.688 0 0 0-1.009 0 .78.78 0 0 0 0 1.062l4.284 4.5a.689.689 0 0 0 .985.018l4.314-4.514a.781.781 0 0 0 0-1.062.688.688 0 0 0-1.009 0Z"
            fill="white"
        />
    </svg>
)

export default SvgComponent
