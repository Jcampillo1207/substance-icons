import React from 'react';

export interface FileCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileCog
 * @description Automatically generated SVG icon component for FileCog.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xNCAySDR2Nm0xMC02aDFsNSA1djFtLTYtNnY2aDZtMCAwdjE0aC00Ii8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTMuMDAxIDE4LjgzNC45MjMtLjM4Mm0wLTIuMjk2TDMgMTUuNzczbTIuNTQ4LTEuMjQxLS4zODMtLjkyM20uMzgzIDYuNDY3TDUuMTY1IDIxbTIuNjc5LTYuNDY4LjM4My0uOTIzTTguMjI2IDIxbC0uMzgyLS45MjRtMS42MjUtMy45Mi45MjItLjM4M20tLjkyMiAyLjY3OS45MjIuMzgzbS0uNjk1LTEuNTMxYTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMFoiLz48L2c+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileCog = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, FileCogProps>(({
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
  ><g stroke={color || "currentColor"} strokeLinecap="square" strokeWidth="2"><path d="M14 2H4v6m10-6h1l5 5v1m-6-6v6h6m0 0v14h-4"/><path strokeLinejoin="round" d="m3.001 18.834.923-.382m0-2.296L3 15.773m2.548-1.241-.383-.923m.383 6.467L5.165 21m2.679-6.468.383-.923M8.226 21l-.382-.924m1.625-3.92.922-.383m-.922 2.679.922.383m-.695-1.531a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></g></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "FileCog" }
);

export default FileCog;
