import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    viewBox="0 0 171.99 158.14"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path
          d="M111.85 0h-51.7C47.9 0 36.58 6.54 30.45 17.15L4.59 61.92a34.267 34.267 0 0 0 0 34.29l25.85 44.78a34.306 34.306 0 0 0 29.7 17.15h51.7c12.25 0 23.57-6.54 29.7-17.15l25.85-44.78a34.267 34.267 0 0 0 0-34.29l-25.85-44.78A34.29 34.29 0 0 0 111.85 0Z"
          style={{
            fill: "none",
            strokeWidth: 0,
          }}
        />
      </clipPath>
    </defs>
    <image
      xlinkHref="../Adobe/AISVG/2/ai17313108968/ai173131089681.png"
      width={528}
      height={319}
      style={{
        clipPath: "url(#a)",
      }}
      transform="scale(.32 .5)"
    />
  </svg>
)
export default SvgComponent
