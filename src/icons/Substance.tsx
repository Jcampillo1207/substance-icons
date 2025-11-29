import React from 'react';
import ArrowDown from './ArrowDown';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUp from './ArrowUp';
import Ban from './Ban';
import BigChevronDown from './BigChevronDown';
import BigChevronDownDashed from './BigChevronDownDashed';
import BigChevronLeft from './BigChevronLeft';
import BigChevronLeftDashed from './BigChevronLeftDashed';
import BigChevronRight from './BigChevronRight';
import BigChevronRightDashed from './BigChevronRightDashed';
import BigChevronUp from './BigChevronUp';
import BigChevronUpDashed from './BigChevronUpDashed';
import BookLetter from './BookLetter';
import Building from './Building';
import Buildings from './Buildings';
import Check from './Check';
import ChevronDown from './ChevronDown';
import ChevronDownDashed from './ChevronDownDashed';
import ChevronLeft from './ChevronLeft';
import ChevronLeftDashed from './ChevronLeftDashed';
import ChevronRight from './ChevronRight';
import ChevronRightDashed from './ChevronRightDashed';
import ChevronUp from './ChevronUp';
import ChevronUpDashed from './ChevronUpDashed';
import ChevronsLeftRight from './ChevronsLeftRight';
import ChevronsUpDown from './ChevronsUpDown';
import Circle from './Circle';
import CircleCheck from './CircleCheck';
import CircleX from './CircleX';
import Copy from './Copy';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import Dashboard5 from './Dashboard5';
import File from './File';
import FileCog from './FileCog';
import FileEdit from './FileEdit';
import FileLock from './FileLock';
import FileUnlock from './FileUnlock';
import FileZip from './FileZip';
import Files from './Files';
import Home from './Home';
import Info from './Info';
import LayoutSidebarLeft from './LayoutSidebarLeft';
import LayoutSidebarRight from './LayoutSidebarRight';
import Loader from './Loader';
import Loader2 from './Loader2';
import Lock from './Lock';
import LockOpen from './LockOpen';
import LogIn from './LogIn';
import LogOut from './LogOut';
import Map from './Map';
import Menu from './Menu';
import Monitor from './Monitor';
import Moon from './Moon';
import MoreHorizontal from './MoreHorizontal';
import MoreVertical from './MoreVertical';
import PanelLeft from './PanelLeft';
import PanelLeftClose from './PanelLeftClose';
import PanelLeftOpen from './PanelLeftOpen';
import PanelRight from './PanelRight';
import PanelRightClose from './PanelRightClose';
import PanelRightOpen from './PanelRightOpen';
import Pen from './Pen';
import Pencil from './Pencil';
import Pin from './Pin';
import Plus from './Plus';
import PlusDashed from './PlusDashed';
import Search from './Search';
import SearchDashed from './SearchDashed';
import Settings from './Settings';
import Sun from './Sun';
import Ticket from './Ticket';
import TicketCheck from './TicketCheck';
import TicketMinus from './TicketMinus';
import TicketPlus from './TicketPlus';
import Tickets from './Tickets';
import Trash from './Trash';
import User from './User';
import UserCog from './UserCog';
import UserMinus from './UserMinus';
import UserPlus from './UserPlus';
import Users from './Users';
import X from './X';
import XDashed from './XDashed';
import { IconName } from './types';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Substance
 * @description Universal icon component that renders any icon by name.
 * @param {object} props - Component props.
 * @param {IconName} props.name - The name of the icon to render.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element | null} JSX element representing the SVG icon.
 */

const Substance: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  ...props
}) => {
  const icons: Record<string, React.ComponentType<any>> = { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Ban, BigChevronDown, BigChevronDownDashed, BigChevronLeft, BigChevronLeftDashed, BigChevronRight, BigChevronRightDashed, BigChevronUp, BigChevronUpDashed, BookLetter, Building, Buildings, Check, ChevronDown, ChevronDownDashed, ChevronLeft, ChevronLeftDashed, ChevronRight, ChevronRightDashed, ChevronUp, ChevronUpDashed, ChevronsLeftRight, ChevronsUpDown, Circle, CircleCheck, CircleX, Copy, Dashboard, Dashboard2, Dashboard3, Dashboard4, Dashboard5, File, FileCog, FileEdit, FileLock, FileUnlock, FileZip, Files, Home, Info, LayoutSidebarLeft, LayoutSidebarRight, Loader, Loader2, Lock, LockOpen, LogIn, LogOut, Map, Menu, Monitor, Moon, MoreHorizontal, MoreVertical, PanelLeft, PanelLeftClose, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightOpen, Pen, Pencil, Pin, Plus, PlusDashed, Search, SearchDashed, Settings, Sun, Ticket, TicketCheck, TicketMinus, TicketPlus, Tickets, Trash, User, UserCog, UserMinus, UserPlus, Users, X, XDashed };
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Substance;
