import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <MdIcons.MdReviews/>,
    cName: 'nav-text'
  },
  {
    title: 'Admin Settings',
    path: '/adminsettings',
    icon: <IoIcons.IoMdSettings/>,
    cName: 'nav-text'
  }
]