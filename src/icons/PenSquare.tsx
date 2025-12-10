import React from 'react';

interface PenSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name PenSquare
 * @description Automatically generated SVG icon component for PenSquare.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDRoMVYyaC0xdjJNMyAzVjJIMnYxem0wIDE4SDJ2MWgxem0xOCAwdjFoMXYtMXptMS05di0xaC0ydjFoMm0tMy42MjUtOS4zNzUtLjcwNy0uNzA3em0xLjUtLjYyMXYtMXptMi4xMjEgMi4xMjFoMXptLS42MjEgMS41LS43MDctLjcwN3ptLTkuMDEzIDkuMDE0LjI5OC45NTUuMjM1LS4wNzQuMTc0LS4xNzR6TTggMTZsLS45NTUtLjI5OGExIDEgMCAwIDAgMS4yNTMgMS4yNTN6bTEuMzYyLTQuMzYxLS43MDctLjcwNy0uMTc0LjE3NC0uMDc0LjIzNXpNMTIgM1YySDN2Mmg5ek0zIDNIMnYxOGgyVjN6bTAgMTh2MWgxOHYtMkgzem0xOCAwaDF2LTloLTJ2OXpNMTguMzc1IDIuNjI1bC43MDcuNzA3Yy4yMS0uMjEuNDk2LS4zMjguNzkzLS4zMjh2LTJjLS44MjggMC0xLjYyMi4zMjktMi4yMDcuOTE0em0xLjUtLjYyMXYxYy4yOTcgMCAuNTgzLjExOC43OTMuMzI4bC43MDctLjcwNy43MDctLjcwN2EzLjEyIDMuMTIgMCAwIDAtMi4yMDctLjkxNHptMS41LjYyMS0uNzA3LjcwN2MuMjEuMjEuMzI4LjQ5Ni4zMjguNzkzaDJjMC0uODI4LS4zMjgtMS42MjItLjkxNC0yLjIwN3ptLjYyMSAxLjVoLTFjMCAuMjk3LS4xMTguNTgzLS4zMjguNzkzbC43MDcuNzA3LjcwNy43MDdjLjU4NS0uNTg1LjkxNC0xLjM4LjkxNC0yLjIwN3ptLS42MjEgMS41LS43MDctLjcwNy05LjAxMyA5LjAxNC43MDcuNzA3LjcwNy43MDcgOS4wMTMtOS4wMTR6TTkuMzYyIDExLjYzOWwuNzA3LjcwNyA5LjAxMy05LjAxNC0uNzA3LS43MDctLjcwNy0uNzA3LTkuMDEzIDkuMDE0ek04IDE2bC4yOTguOTU1IDQuMzYyLTEuMzYxLS4yOTgtLjk1NS0uMjk4LS45NTUtNC4zNjIgMS4zNjF6bTAgMCAuOTU1LjI5OCAxLjM2MS00LjM2LS45NTQtLjI5OS0uOTU1LS4yOTgtMS4zNjIgNC4zNnoiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const PenSquare: React.FC<PenSquareProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="M12 4h1V2h-1v2M3 3V2H2v1zm0 18H2v1h1zm18 0v1h1v-1zm1-9v-1h-2v1h2m-3.625-9.375-.707-.707zm1.5-.621v-1zm2.121 2.121h1zm-.621 1.5-.707-.707zm-9.013 9.014.298.955.235-.074.174-.174zM8 16l-.955-.298a1 1 0 0 0 1.253 1.253zm1.362-4.361-.707-.707-.174.174-.074.235zM12 3V2H3v2h9zM3 3H2v18h2V3zm0 18v1h18v-2H3zm18 0h1v-9h-2v9zM18.375 2.625l.707.707c.21-.21.496-.328.793-.328v-2c-.828 0-1.622.329-2.207.914zm1.5-.621v1c.297 0 .583.118.793.328l.707-.707.707-.707a3.12 3.12 0 0 0-2.207-.914zm1.5.621-.707.707c.21.21.328.496.328.793h2c0-.828-.328-1.622-.914-2.207zm.621 1.5h-1c0 .297-.118.583-.328.793l.707.707.707.707c.585-.585.914-1.38.914-2.207zm-.621 1.5-.707-.707-9.013 9.014.707.707.707.707 9.013-9.014zM9.362 11.639l.707.707 9.013-9.014-.707-.707-.707-.707-9.013 9.014zM8 16l.298.955 4.362-1.361-.298-.955-.298-.955-4.362 1.361zm0 0 .955.298 1.361-4.36-.954-.299-.955-.298-1.362 4.36z"/></svg>
);

export default PenSquare;
