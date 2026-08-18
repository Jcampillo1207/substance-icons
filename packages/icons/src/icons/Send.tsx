import React from 'react';

export interface SendProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Send
 * @description Automatically generated SVG icon component for Send.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgY2xpcC1wYXRoPSJ1cmwoI1NlbmRfYSkiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjEgMyAxMC45MTQgMTMuMDg1bTAgMEwxNS4wMTMgMjIgMjEgMyAyIDguOTg3eiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9IlNlbmRfYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Send = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, SendProps>(({
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
  ><g clipPath="url(#Send_a)"><path stroke={color || "currentColor"} strokeLinecap="square" strokeWidth="2" d="M21 3 10.914 13.085m0 0L15.013 22 21 3 2 8.987z"/></g><defs><clipPath id="Send_a"><path fill={color || "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "Send" }
);

export default Send;
