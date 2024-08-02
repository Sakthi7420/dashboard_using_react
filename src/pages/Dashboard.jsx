import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import IncomeStatistics from '../components/IncomeStatistics'
import MyPropertyUnit from '../components/MyPropertyUnit'
import SalesAnalytics from '../components/SalesAnalytics'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<IncomeStatistics />
				<SalesAnalytics />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<MyPropertyUnit />
				<PopularProducts />
			</div>
		</div>
	)
}