import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		
		<div className="flex gap-3">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">350</strong>
						<span className="text-sm text-green-500 pl-2">7%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Income</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$500.000</strong>
						<span className="text-sm text-green-500 pl-2">11%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Property</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">500</strong>
						<span className="text-sm text-red-500 pl-2">3.5%</span>
					</div>
				</div>
			</BoxWrapper>
			
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}