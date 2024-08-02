import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Karen Hope',
		product_price: '$150K',
		City: "Jarkartia"
	},
	{
		id: '7633',
		Agent_name: 'Brandon',
		product_price: '$100K',
		City: "Bali"
	},
	{
		id: '6534',
		Agent_name: 'Marcus',
		product_price: '$90K',
		City: "Yogyakarta"
	},
	{
		id: '9234',
		Agent_name: 'Alfonso',
		product_price: '$80K',
		City: "Bandung"
	},
	{
		id: '4314',
		Agent_name: 'Cristorfer',
		product_price: '$70K',
		City: "Yogyakarta"
	},
	{
		id: '4342',
		Agent_name: 'Geroge',
		product_price: '$80K',
		City: "Bandung"
	}
]

function PopularProducts() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-md border border-gray-200">
			<strong className="text-gray-700 font-medium">Top Agents</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.Agent_name}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.Agent_name}</p>
							<span
								className={classNames(
									product.City === 0
										? 'text-neutral-800'
										: product.City > 50
										? 'text-neutral-800'
										: 'text-neutral-800',
									'text-xs font-medium'
								)}
							>
								{product.City === 0 ? 'Out of Stock' : product.City }
							</span>
						</div>
						<div className="text-xs text-neutral-950 pl-1.5 font-bold">{product.product_price}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts