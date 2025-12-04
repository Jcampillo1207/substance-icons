import React from 'react';
import AlertCircle from './AlertCircle';
import AlertTriangle from './AlertTriangle';
import ArrowDown from './ArrowDown';
import ArrowDownLeft from './ArrowDownLeft';
import ArrowDownRight from './ArrowDownRight';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUp from './ArrowUp';
import ArrowUpLeft from './ArrowUpLeft';
import ArrowUpRight from './ArrowUpRight';
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
import Bookmark from './Bookmark';
import Building from './Building';
import Buildings from './Buildings';
import Calendar from './Calendar';
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
import CircleDot from './CircleDot';
import CircleDotDashed from './CircleDotDashed';
import CircleX from './CircleX';
import Clock from './Clock';
import ContactRound from './ContactRound';
import Copy from './Copy';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import Dashboard5 from './Dashboard5';
import Download from './Download';
import ExternalLink from './ExternalLink';
import Eye from './Eye';
import EyeOff from './EyeOff';
import File from './File';
import FileCog from './FileCog';
import FileEdit from './FileEdit';
import FileLock from './FileLock';
import FileUnlock from './FileUnlock';
import FileZip from './FileZip';
import Files from './Files';
import Filter from './Filter';
import Flag from './Flag';
import FlagLeft from './FlagLeft';
import FlagRight from './FlagRight';
import Hashtag from './Hashtag';
import Home from './Home';
import Info from './Info';
import Key from './Key';
import LayoutSidebarLeft from './LayoutSidebarLeft';
import LayoutSidebarRight from './LayoutSidebarRight';
import ListTree from './ListTree';
import Loader from './Loader';
import Loader2 from './Loader2';
import Lock from './Lock';
import LockOpen from './LockOpen';
import LogIn from './LogIn';
import LogOut from './LogOut';
import Mail from './Mail';
import Map from './Map';
import Menu from './Menu';
import Monitor from './Monitor';
import Moon from './Moon';
import MoreHorizontal from './MoreHorizontal';
import MoreVertical from './MoreVertical';
import OctagonMinus from './OctagonMinus';
import PanelLeft from './PanelLeft';
import PanelLeftClose from './PanelLeftClose';
import PanelLeftOpen from './PanelLeftOpen';
import PanelRight from './PanelRight';
import PanelRightClose from './PanelRightClose';
import PanelRightOpen from './PanelRightOpen';
import PaperClip from './PaperClip';
import Pen from './Pen';
import Pencil from './Pencil';
import Pin from './Pin';
import Plus from './Plus';
import PlusDashed from './PlusDashed';
import Reply from './Reply';
import Save from './Save';
import Search from './Search';
import SearchDashed from './SearchDashed';
import Send from './Send';
import Settings from './Settings';
import SlidersHorizontal from './SlidersHorizontal';
import Smartphone from './Smartphone';
import Sun from './Sun';
import SwatchBook from './SwatchBook';
import Tag from './Tag';
import Ticket from './Ticket';
import TicketBlocked from './TicketBlocked';
import TicketCheck from './TicketCheck';
import TicketFlag from './TicketFlag';
import TicketMinus from './TicketMinus';
import TicketPlus from './TicketPlus';
import TicketSub from './TicketSub';
import Tickets from './Tickets';
import Trash from './Trash';
import Trash2 from './Trash2';
import Upload from './Upload';
import User from './User';
import UserCog from './UserCog';
import UserMinus from './UserMinus';
import UserPlus from './UserPlus';
import Users from './Users';
import Workflows from './Workflows';
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
  color = "currentColor",
  className = "",
  ...props
}) => {
  const icons: Record<string, React.ComponentType<any>> = { AlertCircle, AlertTriangle, ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpLeft, ArrowUpRight, Ban, BigChevronDown, BigChevronDownDashed, BigChevronLeft, BigChevronLeftDashed, BigChevronRight, BigChevronRightDashed, BigChevronUp, BigChevronUpDashed, BookLetter, Bookmark, Building, Buildings, Calendar, Check, ChevronDown, ChevronDownDashed, ChevronLeft, ChevronLeftDashed, ChevronRight, ChevronRightDashed, ChevronUp, ChevronUpDashed, ChevronsLeftRight, ChevronsUpDown, Circle, CircleCheck, CircleDot, CircleDotDashed, CircleX, Clock, ContactRound, Copy, Dashboard, Dashboard2, Dashboard3, Dashboard4, Dashboard5, Download, ExternalLink, Eye, EyeOff, File, FileCog, FileEdit, FileLock, FileUnlock, FileZip, Files, Filter, Flag, FlagLeft, FlagRight, Hashtag, Home, Info, Key, LayoutSidebarLeft, LayoutSidebarRight, ListTree, Loader, Loader2, Lock, LockOpen, LogIn, LogOut, Mail, Map, Menu, Monitor, Moon, MoreHorizontal, MoreVertical, OctagonMinus, PanelLeft, PanelLeftClose, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightOpen, PaperClip, Pen, Pencil, Pin, Plus, PlusDashed, Reply, Save, Search, SearchDashed, Send, Settings, SlidersHorizontal, Smartphone, Sun, SwatchBook, Tag, Ticket, TicketBlocked, TicketCheck, TicketFlag, TicketMinus, TicketPlus, TicketSub, Tickets, Trash, Trash2, Upload, User, UserCog, UserMinus, UserPlus, Users, Workflows, X, XDashed };
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
