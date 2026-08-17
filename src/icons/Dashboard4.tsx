import React from 'react';

export interface Dashboard4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Dashboard4
 * @description Automatically generated SVG icon component for Dashboard4.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMCAxNEgzdjdoN3pNMjEgMTRoLTd2N2g3ek0yMSAzSDN2N2gxOHoiLz48L2c+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Dashboard4 = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, Dashboard4Props>(({
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
  ><g stroke={color || "currentColor"} strokeWidth="2"><path d="M10 14H3v7h7zM21 14h-7v7h7zM21 3H3v7h18z"/></g></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "Dashboard4" }
);

export default Dashboard4;
