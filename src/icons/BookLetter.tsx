import React from 'react';

export interface BookLetterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name BookLetter
 * @description Automatically generated SVG icon component for BookLetter.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJIMjB2MjBINi41QTIuNSAyLjUgMCAwIDEgNCAxOS41Wm0wIDBBMi41IDIuNSAwIDAgMSA2LjUgMTdIMjBtLTUuMTQzLTZMMTIgNmwtMi44NTcgNUw4IDEzbTggMC0xLjE0My0ybS01LjcxNCAwaDUuNzE0Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const BookLetter = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, BookLetterProps>(({
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
  ><path stroke={color || "currentColor"} strokeLinecap="square" strokeWidth="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Zm0 0A2.5 2.5 0 0 1 6.5 17H20m-5.143-6L12 6l-2.857 5L8 13m8 0-1.143-2m-5.714 0h5.714"/></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "BookLetter" }
);

export default BookLetter;
