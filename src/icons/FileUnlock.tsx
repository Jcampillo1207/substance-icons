import React from 'react';

interface FileUnlockProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileUnlock
 * @description Automatically generated SVG icon component for FileUnlock.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0ibTE1IDIgLjcwNy0uNzA3TDE1LjQxNCAxSDE1em01IDVoMXYtLjQxNGwtLjI5My0uMjkzek00IDJWMUgzdjF6bTEwIDZoLTF2MWgxem02IDE0djFoMXYtMXpNMyA4djFoMlY4SDNtMTMgMTNoLTF2Mmgxdi0yTTMgMjJIMnYxaDF6bTcgMHYxaDF2LTF6bTAtNWgxdi0xaC0xem0tNyAwdi0xSDJ2MXpNMTUgMmwtLjcwNy43MDcgNSA1TDIwIDdsLjcwNy0uNzA3LTUtNXpNNCAydjFoMTBWMUg0em0xMCAwdjFoMVYxaC0xem0wIDBoLTF2NmgyVjJ6bTYgNWgtMXYxaDJWN3ptMCAxaC0xdjE0aDJWOHptLTYgMHYxaDZWN2gtNnpNNCA4aDFWMkgzdjZ6bTE2IDE0di0xaC00djJoNHpNMyAyMnYxaDd2LTJIM3ptNyAwaDF2LTVIOXY1em0tNy01SDJ2NWgydi01em0xIDB2LTFIM3YyaDF6bTYgMHYtMUg5djJoMXptLTYgMHYxaDV2LTJINHptMy00di0xSDZ2Mmgxem0tMyAySDN2Mmgydi0yem0zLTJ2MWExIDEgMCAwIDEgMSAxaDJhMyAzIDAgMCAwLTMtM3ptLTEgMHYtMWEzIDMgMCAwIDAtMyAzaDJhMSAxIDAgMCAxIDEtMXoiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileUnlock: React.FC<FileUnlockProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="m15 2 .707-.707L15.414 1H15zm5 5h1v-.414l-.293-.293zM4 2V1H3v1zm10 6h-1v1h1zm6 14v1h1v-1zM3 8v1h2V8H3m13 13h-1v2h1v-2M3 22H2v1h1zm7 0v1h1v-1zm0-5h1v-1h-1zm-7 0v-1H2v1zM15 2l-.707.707 5 5L20 7l.707-.707-5-5zM4 2v1h10V1H4zm10 0v1h1V1h-1zm0 0h-1v6h2V2zm6 5h-1v1h2V7zm0 1h-1v14h2V8zm-6 0v1h6V7h-6zM4 8h1V2H3v6zm16 14v-1h-4v2h4zM3 22v1h7v-2H3zm7 0h1v-5H9v5zm-7-5H2v5h2v-5zm1 0v-1H3v2h1zm6 0v-1H9v2h1zm-6 0v1h5v-2H4zm3-4v-1H6v2h1zm-3 2H3v2h2v-2zm3-2v1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-1 0v-1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z"/></svg>
);

export default FileUnlock;
