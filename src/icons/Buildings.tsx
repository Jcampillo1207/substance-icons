import React from 'react';

interface BuildingsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Buildings
 * @description Automatically generated SVG icon component for Buildings.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTMgMjBIMnYyaDF2LTJtMTggMmgxdi0yaC0xdjJtLTEtMTFoMXYtMWgtMXptLTctOGgxYTEgMSAwIDAgMC0xLjQ4Ni0uODc0ek00IDhsLS40ODYtLjg3NEwzIDcuNDEyVjh6bTIgMTB2MWgydi0xSDZtMi0ydi0xSDZ2MWgybS0yLTN2MWgydi0xSDZtMi0ydi0xSDZ2MWgybTEgN3YxaDJ2LTFIOW0yLTJ2LTFIOXYxaDJtLTItM3YxaDJ2LTFIOW0yLTJ2LTFIOXYxaDJtOSAxMHYxaDF2LTJoLTF6bTAgMGgxVjExaC0ydjEwem0wLTEwdi0xaC03djJoN3ptLTcgMTB2MWg3di0yaC03em0wLTEwaC0xdjEwaDJWMTF6bTAgMGgxVjNoLTJ2OHptMC04LS40ODYtLjg3NC05IDVMNCA4bC40ODYuODc0IDktNXpNMyAyMXYxaDF2LTJIM3ptMSAwdjFoOXYtMkg0ek00IDhIM3YxM2gyVjh6bTMgMTBoMXYtMkg2djJ6bTAtNWgxdi0ySDZ2MnptMyA1aDF2LTJIOXYyem0wLTVoMXYtMkg5djJ6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Buildings: React.FC<BuildingsProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="M3 20H2v2h1v-2m18 2h1v-2h-1v2m-1-11h1v-1h-1zm-7-8h1a1 1 0 0 0-1.486-.874zM4 8l-.486-.874L3 7.412V8zm2 10v1h2v-1H6m2-2v-1H6v1h2m-2-3v1h2v-1H6m2-2v-1H6v1h2m1 7v1h2v-1H9m2-2v-1H9v1h2m-2-3v1h2v-1H9m2-2v-1H9v1h2m9 10v1h1v-2h-1zm0 0h1V11h-2v10zm0-10v-1h-7v2h7zm-7 10v1h7v-2h-7zm0-10h-1v10h2V11zm0 0h1V3h-2v8zm0-8-.486-.874-9 5L4 8l.486.874 9-5zM3 21v1h1v-2H3zm1 0v1h9v-2H4zM4 8H3v13h2V8zm3 10h1v-2H6v2zm0-5h1v-2H6v2zm3 5h1v-2H9v2zm0-5h1v-2H9v2z"/></svg>
);

export default Buildings;
