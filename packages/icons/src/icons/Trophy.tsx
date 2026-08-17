import React from 'react';

export interface TrophyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Trophy
 * @description Automatically generated SVG icon component for Trophy.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik03IDIxLjk3OGE1IDUgMCAwIDEgMi4wMjQtMy45OTZBMiAyIDAgMCAwIDEwIDE2LjI4NnYtMS42M203IDcuMzIyYTUgNSAwIDAgMC0yLjAyNC0zLjk5NkEyIDIgMCAwIDEgMTQgMTYuMjg2di0xLjYzTTE4IDloMS41YTIuNSAyLjUgMCAwIDAgMC01SDE4bS04IDEwLjY1N0E2IDYgMCAwIDAgMTggOW0wIDBWMkg2djdNNCAyMmgxNk02IDlhNiA2IDAgMCAwIDQgNS42NTdNNiA5SDQuNWEyLjUgMi41IDAgMSAxIDAtNUg2Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Trophy = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, TrophyProps>(({
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
  ><path stroke={color || "currentColor"} strokeLinecap="square" strokeWidth="2" d="M7 21.978a5 5 0 0 1 2.024-3.996A2 2 0 0 0 10 16.286v-1.63m7 7.322a5 5 0 0 0-2.024-3.996A2 2 0 0 1 14 16.286v-1.63M18 9h1.5a2.5 2.5 0 0 0 0-5H18m-8 10.657A6 6 0 0 0 18 9m0 0V2H6v7M4 22h16M6 9a6 6 0 0 0 4 5.657M6 9H4.5a2.5 2.5 0 1 1 0-5H6"/></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "Trophy" }
);

export default Trophy;
