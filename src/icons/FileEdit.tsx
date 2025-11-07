import React from 'react';

interface FileEditProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileEdit
 * @description Automatically generated SVG icon component for FileEdit.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0ibTE1IDIgLjcwNy0uNzA3TDE1LjQxNCAxSDE1em01IDVoMXYtLjQxNGwtLjI5My0uMjkzek00IDJWMUgzdjF6bTEwIDZoLTF2MWgxem02IDE0djFoMXYtMXpNMyA4djFoMlY4SDNtMTMgMTNoLTF2Mmgxdi0yTTIgMjJsLS45Ny0uMjQyYTEgMSAwIDAgMCAxLjIxMyAxLjIxMnptMS00LS43MDctLjcwN2ExIDEgMCAwIDAtLjI2My40NjV6bTMgMyAuMjQzLjk3YTEgMSAwIDAgMCAuNDY0LS4yNjN6bTktMTktLjcwNy43MDcgNSA1TDIwIDdsLjcwNy0uNzA3LTUtNXpNNCAydjFoMTBWMUg0em0xMCAwdjFoMVYxaC0xem0wIDBoLTF2NmgyVjJ6bTYgNWgtMXYxaDJWN3ptMCAxaC0xdjE0aDJWOHptLTYgMHYxaDZWN2gtNnpNNCA4aDFWMkgzdjZ6bTE2IDE0di0xaC00djJoNHpNMiAyMmwuOTcuMjQyIDEtNEwzIDE4bC0uOTctLjI0Mi0xIDR6bTEtNCAuNzA3LjcwNyA0LjUtNC41TDcuNSAxMy41bC0uNzA3LS43MDctNC41IDQuNXptLTEgNCAuMjQzLjk3IDQtMUw2IDIxbC0uMjQzLS45Ny00IDF6bTQtMSAuNzA3LjcwNyA0LjUtNC41LS43MDctLjcwNy0uNzA3LS43MDctNC41IDQuNXptNC41LTQuNS43MDcuNzA3YTMuMTIgMy4xMiAwIDAgMCAwLTQuNDE0bC0uNzA3LjcwNy0uNzA3LjcwN2ExLjEyIDEuMTIgMCAwIDEgMCAxLjU4NnptLTMtMyAuNzA3LjcwN2ExLjEyIDEuMTIgMCAwIDEgMS41ODYgMGwuNzA3LS43MDcuNzA3LS43MDdhMy4xMiAzLjEyIDAgMCAwLTQuNDE0IDB6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileEdit: React.FC<FileEditProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="m15 2 .707-.707L15.414 1H15zm5 5h1v-.414l-.293-.293zM4 2V1H3v1zm10 6h-1v1h1zm6 14v1h1v-1zM3 8v1h2V8H3m13 13h-1v2h1v-2M2 22l-.97-.242a1 1 0 0 0 1.213 1.212zm1-4-.707-.707a1 1 0 0 0-.263.465zm3 3 .243.97a1 1 0 0 0 .464-.263zm9-19-.707.707 5 5L20 7l.707-.707-5-5zM4 2v1h10V1H4zm10 0v1h1V1h-1zm0 0h-1v6h2V2zm6 5h-1v1h2V7zm0 1h-1v14h2V8zm-6 0v1h6V7h-6zM4 8h1V2H3v6zm16 14v-1h-4v2h4zM2 22l.97.242 1-4L3 18l-.97-.242-1 4zm1-4 .707.707 4.5-4.5L7.5 13.5l-.707-.707-4.5 4.5zm-1 4 .243.97 4-1L6 21l-.243-.97-4 1zm4-1 .707.707 4.5-4.5-.707-.707-.707-.707-4.5 4.5zm4.5-4.5.707.707a3.12 3.12 0 0 0 0-4.414l-.707.707-.707.707a1.12 1.12 0 0 1 0 1.586zm-3-3 .707.707a1.12 1.12 0 0 1 1.586 0l.707-.707.707-.707a3.12 3.12 0 0 0-4.414 0z"/></svg>
);

export default FileEdit;
