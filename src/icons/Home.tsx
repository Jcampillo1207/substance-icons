import React from 'react';

interface HomeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Home
 * @description Automatically generated SVG icon component for Home.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTMgMjFIMnYxaDF6bTE4IDB2MWgxdi0xek05IDE0di0xYTEgMSAwIDAgMC0xIDF6bTYgMGgxYTEgMSAwIDAgMC0xLTF6bS02IDd2MWgxdi0xem02IDBoLTF2MWgxek0zIDExbC0uNzA3LS43MDctLjI5My4yOTNWMTF6bTE4IDBoMXYtLjQxNGwtLjI5My0uMjkzem0tOS05IC43MDctLjcwN2ExIDEgMCAwIDAtMS40MTQgMHpNOSAxNHYxaDZ2LTJIOXptLTYgN3YxaDZ2LTJIM3ptNiAwaDF2LTdIOHY3em02LTdoLTF2N2gydi03em0wIDd2MWg2di0yaC02ek0zIDIxaDFWMTFIMnYxMHptMTggMGgxVjExaC0ydjEwem0wLTEwIC43MDctLjcwNy05LTlMMTIgMmwtLjcwNy43MDcgOSA5ek0zIDExbC43MDcuNzA3IDktOUwxMiAybC0uNzA3LS43MDctOSA5eiIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Home: React.FC<HomeProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="M3 21H2v1h1zm18 0v1h1v-1zM9 14v-1a1 1 0 0 0-1 1zm6 0h1a1 1 0 0 0-1-1zm-6 7v1h1v-1zm6 0h-1v1h1zM3 11l-.707-.707-.293.293V11zm18 0h1v-.414l-.293-.293zm-9-9 .707-.707a1 1 0 0 0-1.414 0zM9 14v1h6v-2H9zm-6 7v1h6v-2H3zm6 0h1v-7H8v7zm6-7h-1v7h2v-7zm0 7v1h6v-2h-6zM3 21h1V11H2v10zm18 0h1V11h-2v10zm0-10 .707-.707-9-9L12 2l-.707.707 9 9zM3 11l.707.707 9-9L12 2l-.707-.707-9 9z"/></svg>
);

export default Home;
