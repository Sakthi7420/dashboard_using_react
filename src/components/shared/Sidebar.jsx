import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineApartment } from "react-icons/md";
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

// Define common class names for links
const linkClass =
  'flex items-center gap-4 font-light px-3 py-2  hover:no-underline active:bg-neutral-700 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className="bg-white w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3 ">
        <MdOutlineApartment fontSize={25} />
        <span className="text-neutral-600 text-lg">Gwc Data.ai</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1">
        <span className="text-neutral-600 text-lg">Main Menus</span>
      </div>
      <div className="py-3 flex flex-1 flex-col gap-2">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer font-medium border-neutral-700')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Log Out
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ link }) {
  const { pathname } = useLocation()

  if (!link) {
    return null; // Handle cases where link might be undefined or null
  }

  return (
    <Link
      to={link.path}
      className={classNames(pathname === link.path ? ' text-white' : 'text-neutral-400', linkClass)}
    >
      <span className="text-xl text-neutral-700">{link.icon}</span>
      <span className="text-neutral-700 font-medium">{link.label}</span>
    </Link>
  )
}
