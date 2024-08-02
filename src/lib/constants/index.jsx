import { GrAppsRounded } from "react-icons/gr";
import { LuChurch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Overview',
		label: 'Overview',
		// path: '/',
		icon: <GrAppsRounded />
	},
	{
		key: 'My Unit',
		label: 'My Unit',
		// path: '/products',
		icon: <LuChurch />
	},
	{
		key: 'Messages',
		label: 'Messages',
		// path: '/orders',
		icon: <AiOutlineMessage  />
	},
	{
		key: 'Analytics',
		label: 'Analytics',
		// path: '/customers',
		icon: <MdOutlineAnalytics />
	},
	{
		key: 'Client Data',
		label: 'Client Data',
		// path: '/transactions',
		icon: <MdGroups />
	},
	{
		key: 'Documents',
		label: 'Documents',
		// path: '/messages',
		icon: <IoDocumentTextOutline />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		// path: '/settings',
		icon: <IoSettingsOutline />
	},
]