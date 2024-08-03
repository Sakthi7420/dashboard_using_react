import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaHandsHolding } from "react-icons/fa6";
import { IoDiscOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiNotificationLight } from "react-icons/pi";
import 'react-circular-progressbar/dist/styles.css';

export default function SalesAnalytics() {
    const progressValue = 50; // Example progress value

    return (
        <div className="w-[20rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col">
            <strong className="text-gray-700 font-medium mb-3">Sales Analytics</strong>


            <div className="flex items-center mb-4">

                <div className="relative">
                    <CircularProgressbar
                        id="circular-container"
                        type="Circular"
                        height="180px"
                        width="180px"
                        value={progressValue}
                        animation={{ enable: true, duration: 2000, delay: 0 }}
                        progressThickness={15}
                        trackThickness={15}
                        cornerRadius="Round"
                    />

                    <div
                        className="absolute inset-0 flex items-center justify-center text-3xl font-semibold"
                        style={{ color: '#4a4a4a' }}
                    >
                        {progressValue}%
                    </div>
                </div>

                {/* Text next to the Progress Bar */}
				<div className="p-4">
            		<div className="flex flex-col items-start">
                		<h5 className='text-sm'>
                    		Total Income
               		 	</h5>
                	<span className='text-lg font-semibold mt-1'>
                    	$150.00
                	</span>
            		</div>
        		</div>
            </div>

           
			<div className="p-4">
            <div className="flex flex-wrap gap-2">
                <div className="flex-1 min-w-[calc(50%-0.5rem)] text-gray-600 mb-1 flex flex-col items-start">
                  
                    <div className="text-sm font-medium mb-1 ml-6">$40,000</div>
                  
                    <div className="flex items-center">
                        <FaHandsHolding className="text-gray-500 mr-2" /> 
                        <span>Agent Sales</span>
                    </div>
                </div>
                <div className="flex-1 min-w-[calc(50%-0.5rem)] text-gray-600 mb-1 flex flex-col items-start">
                  
                    <div className="text-sm font-medium mb-1 ml-6">$10,000</div>
                  
                    <div className="flex items-center">
                        <IoDiscOutline className="text-gray-500 mr-2" /> 
                        <span>Marketing Sales</span>
                    </div>
                </div>
                <div className="flex-1 min-w-[calc(50%-0.5rem)] text-gray-600 mb-1 flex flex-col items-start">
                    
                    <div className="text-sm font-medium mb-1 ml-6">$20,000</div>
                   
                    <div className="flex items-center">
                        <MdOutlineAnalytics className="text-gray-500 mr-2" /> 
                        <span>Offline Sales</span>
                    </div>
                </div>
                <div className="flex-1 min-w-[calc(50%-0.5rem)] text-gray-600 flex flex-col items-start">
                 
                    <div className="text-sm font-medium mb-1 ml-6">$30,000</div>
                    
                    <div className="flex items-center">
                        <PiNotificationLight className="text-gray-500 mr-2" /> 
                        <span>Online Sales</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}



