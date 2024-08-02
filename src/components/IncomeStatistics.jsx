import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Expense: 4000, Income: 2400 },
    { name: 'Feb', Expense: 3000, Income: 1398 },
    { name: 'Mar', Expense: 2000, Income: 9800 },
    { name: 'Apr', Expense: 2780, Income: 3908 },
    { name: 'May', Expense: 1890, Income: 4800 },
    { name: 'Jun', Expense: 2390, Income: 3800 },
    { name: 'Jul', Expense: 3490, Income: 4300 },
    { name: 'Aug', Expense: 2000, Income: 9800 },
    { name: 'Sep', Expense: 2780, Income: 3908 },
    { name: 'Oct', Expense: 1890, Income: 4800 },
    { name: 'Nov', Expense: 2390, Income: 3800 },
    { name: 'Dec', Expense: 3490, Income: 4300 },
];

export default function IncomeStatistics() {
    return (
        <div className="h-[27rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-800 font-medium">Income Statistics</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                            type="monotone" 
                            dataKey="Income" 
                            stroke="#0ea5e9" 
                            strokeWidth={3}
                            dot={false} 
                        />
                        <Line 
                            type="monotone" 
                            dataKey="Expense" 
                            stroke="#463BAC" 
                            strokeWidth={3}
                            dot={false} 
						
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

