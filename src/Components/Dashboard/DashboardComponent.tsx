import { AlertIcon, SensorIcon, SettingsIcon, UsersIcon } from "../../Shared/Icons/SVGIcons"

export const DashboardComponent = () => {

    return (
        <div className=" flex flex-col gap-6">
            <div className=" flex flex-row gap-6">
                <div className="border-2 border-solid w-1/3 h-32 p-4">
                    <div className="flex flex-row">
                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium dark:text-white">
                                    TOTAL SENSORS
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    182
                                </div>
                            </div>
                            <div className="text-gray-600 dark:text-gray-200">
                                <div className="h-12 w-12"><SensorIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-solid w-1/3 h-32 p-4">
                    <div className="flex flex-row">
                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium dark:text-white">
                                    OPEN ALERTS
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    2
                                </div>
                            </div>
                            <div className="text-gray-600 dark:text-gray-200">
                                <div className="h-12 w-12"><AlertIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-solid w-1/3 h-32 p-4">
                    <div className="flex flex-row">
                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium dark:text-white">
                                    TOTAL CUSTOMERS
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                    14
                                </div>
                            </div>
                            <div className="text-gray-600 dark:text-gray-200">
                                <div className="h-12 w-12"><UsersIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 border-solid w-full h-32">
                <div className=" flex flex-row justify-between p-5">
                    <p className="text-xl text-gray-600 font-semibold">SENSOR TEMPRATURES</p>
                    <button type="button" className="
                flex justify-center items-center  
                bg-gray-300 hover:bg-gray-400 focus:ring-gray-400 
                focus:ring-offset-blue-200 text-gray-700 transition ease-in 
                duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  w-6 h-6 rounded-lg ">
                        <SettingsIcon />
                    </button>
                </div>
            </div>

            <div>
                <div className=" flex flex-row justify-between p-2">
                    <p className="text-xl text-gray-600 font-semibold">SENSOR LIST</p>
                    <button type="button" className="
                flex justify-center items-center  
                bg-gray-300 hover:bg-gray-400 focus:ring-gray-400 
                focus:ring-offset-blue-200 text-gray-700 transition ease-in 
                duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  w-6 h-6 rounded-lg ">
                        <SettingsIcon />
                    </button>
                </div>
                <div className="border-2 border-solid w-full h-32">
                    <div className="flex flex-row p-5">
                        <div className="w-1/6 font-semibold text-lg text-gray-700">nrf-881256</div>
                        <div className="w-1/6 text-gray-600">
                            <div className="block">13 aug 2018</div>
                            <div className="block text-sm">Last Online</div>
                        </div>
                        <div className="w-1/6 text-gray-600">
                            <div className="block">21,5</div>
                            <div className="block text-sm">Temp</div>
                        </div>
                        <div className="w-1/6 text-gray-600">
                            <div className="block">Newyork</div>
                            <div className="block text-sm">Location</div>
                        </div>
                        <div className="w-1/6">
                            <button type="button" className="py-2 px-4 flex justify-center items-center  
                        bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 focus:ring-offset-gray-200 
                         text-gray-600 transition ease-in duration-200 text-center text-base font-normal 
                        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-52">
                                Options
                            </button>
                        </div>
                        <div className="w-1/6">
                            <button type="submit" className="py-2 px-4 flex justify-center items-center  
                        bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 
                        text-white transition ease-in duration-200 text-center text-base font-normal 
                        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-52">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}