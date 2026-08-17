import React from 'react';

export interface UsersProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Users
 * @description Automatically generated SVG icon component for Users.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOCAyMWE4IDggMCAwIDAtOC04bTAgMGE4IDggMCAwIDAtOCA4bTgtOGE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMFptMTIgN2MwLTMuMzctMi02LjUtNC04YTUgNSAwIDAgMC0uNDUtOC4zIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Users = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, UsersProps>(({
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
  ><path stroke={color || "currentColor"} strokeLinecap="square" strokeWidth="2" d="M18 21a8 8 0 0 0-8-8m0 0a8 8 0 0 0-8 8m8-8a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm12 7c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level `X.displayName = "X"` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "Users" }
);

export default Users;
