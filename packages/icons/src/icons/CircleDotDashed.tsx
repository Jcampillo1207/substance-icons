import React from 'react';

export interface CircleDotDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name CircleDotDashed
 * @description Automatically generated SVG icon component for CircleDotDashed.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgY2xpcC1wYXRoPSJ1cmwoI0NpcmNsZURvdERhc2hlZF9hKSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMC4xIDIuMThhOS45IDkuOSAwIDAgMSAzLjggMG0zLjcgMS41M2ExMCAxMCAwIDAgMSAyLjY5IDIuN20xLjUzIDMuNjlhOS45IDkuOSAwIDAgMSAwIDMuOG0tMS41MyAzLjdhMTAgMTAgMCAwIDEtMi43IDIuNjltLTMuNjkgMS41M2E5LjkgOS45IDAgMCAxLTMuOCAwbS0zLjctMS41M2ExMCAxMCAwIDAgMS0yLjY5LTIuN00yLjE4IDEzLjlhOS45IDkuOSAwIDAgMSAwLTMuOG0xLjUzLTMuN2ExMCAxMCAwIDAgMSAyLjctMi42OU0xMyAxMmExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iQ2lyY2xlRG90RGFzaGVkX2EiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const CircleDotDashed = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, CircleDotDashedProps>(({
  size = 24,
  color = "currentColor",
  className,
  style,
  ...props
}, ref) => (
    <svg
    ref={ref}
    className={className}
    width={size}
    height={size}
    style={style}
    fill="none" viewBox="0 0 24 24"
    {...props}
  ><g clipPath="url(#CircleDotDashed_a)"><path stroke={color || "currentColor"} strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></g><defs><clipPath id="CircleDotDashed_a"><path fill={color || "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "CircleDotDashed" }
);

export default CircleDotDashed;
