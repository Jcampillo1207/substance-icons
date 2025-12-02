import React from 'react';

interface UserCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name UserCog
 * @description Automatically generated SVG icon component for UserCog.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xNC4zMDUgMTkuNTMuOTIzLS4zODJtMC0yLjI5Ni0uOTIzLS4zODNtMi41NDctMS4yNDEtLjM4My0uOTIzbS4zODMgNi40NjctLjM4My45MjRtMi42NzktNi40NjguMzgzLS45MjNtLS4wMDEgNy4zOTEtLjM4Mi0uOTI0TTIgMjFhOCA4IDAgMCAxIDEwLjQzNC03LjYybTguMzM4IDMuNDcyLjkyNC0uMzgzbS0uOTI0IDIuNjc5LjkyNC4zODNNMTUgOEE1IDUgMCAxIDEgNSA4YTUgNSAwIDAgMSAxMCAwWm02IDEwYTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMFoiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const UserCog: React.FC<UserCogProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472.924-.383m-.924 2.679.924.383M15 8A5 5 0 1 1 5 8a5 5 0 0 1 10 0Zm6 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
);

export default UserCog;
