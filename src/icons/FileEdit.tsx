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
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0ibTE1IDMgLjcwNy0uNzA3TDE1LjQxNCAySDE1em01IDVoMXYtLjQxNGwtLjI5My0uMjkzek00IDNWMkgzdjF6bTEwIDZoLTF2MWgxem02IDEydjFoMXYtMXpNMyA5djFoMlY5SDNtMTMgMTFoLTF2Mmgxdi0yTTMgMjFsLS45Ny0uMjQyYTEgMSAwIDAgMCAxLjIxMyAxLjIxMnptMS00LS43MDctLjcwN2ExIDEgMCAwIDAtLjI2My40NjV6bTMgMyAuMjQzLjk3YTEgMSAwIDAgMCAuNDY0LS4yNjN6bTgtMTctLjcwNy43MDcgNSA1TDIwIDhsLjcwNy0uNzA3LTUtNXpNNCAzdjFoMTBWMkg0em0xMCAwdjFoMVYyaC0xem0wIDBoLTF2NmgyVjN6bTYgNWgtMXYxaDJWOHptMCAxaC0xdjEyaDJWOXptLTYgMHYxaDZWOGgtNnpNNCA5aDFWM0gzdjZ6bTE2IDEydi0xaC00djJoNHpNMyAyMWwuOTcuMjQyIDEtNEw0IDE3bC0uOTctLjI0Mi0xIDR6bTEtNCAuNzA3LjcwNyAzLjUtMy41TDcuNSAxMy41bC0uNzA3LS43MDctMy41IDMuNXptLTEgNCAuMjQzLjk3IDQtMUw3IDIwbC0uMjQzLS45Ny00IDF6bTQtMSAuNzA3LjcwNyAzLjUtMy41LS43MDctLjcwNy0uNzA3LS43MDctMy41IDMuNXptMy41LTMuNS43MDcuNzA3YTMuMTIgMy4xMiAwIDAgMCAwLTQuNDE0bC0uNzA3LjcwNy0uNzA3LjcwN2ExLjEyIDEuMTIgMCAwIDEgMCAxLjU4NnptLTMtMyAuNzA3LjcwN2ExLjEyIDEuMTIgMCAwIDEgMS41ODYgMGwuNzA3LS43MDcuNzA3LS43MDdhMy4xMiAzLjEyIDAgMCAwLTQuNDE0IDB6Ii8+PC9zdmc+)
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
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="m15 3 .707-.707L15.414 2H15zm5 5h1v-.414l-.293-.293zM4 3V2H3v1zm10 6h-1v1h1zm6 12v1h1v-1zM3 9v1h2V9H3m13 11h-1v2h1v-2M3 21l-.97-.242a1 1 0 0 0 1.213 1.212zm1-4-.707-.707a1 1 0 0 0-.263.465zm3 3 .243.97a1 1 0 0 0 .464-.263zm8-17-.707.707 5 5L20 8l.707-.707-5-5zM4 3v1h10V2H4zm10 0v1h1V2h-1zm0 0h-1v6h2V3zm6 5h-1v1h2V8zm0 1h-1v12h2V9zm-6 0v1h6V8h-6zM4 9h1V3H3v6zm16 12v-1h-4v2h4zM3 21l.97.242 1-4L4 17l-.97-.242-1 4zm1-4 .707.707 3.5-3.5L7.5 13.5l-.707-.707-3.5 3.5zm-1 4 .243.97 4-1L7 20l-.243-.97-4 1zm4-1 .707.707 3.5-3.5-.707-.707-.707-.707-3.5 3.5zm3.5-3.5.707.707a3.12 3.12 0 0 0 0-4.414l-.707.707-.707.707a1.12 1.12 0 0 1 0 1.586zm-3-3 .707.707a1.12 1.12 0 0 1 1.586 0l.707-.707.707-.707a3.12 3.12 0 0 0-4.414 0z"/></svg>
);

export default FileEdit;
