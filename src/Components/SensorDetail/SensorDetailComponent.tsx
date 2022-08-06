import { BackIcon, SettingsIcon } from "../../Shared/Icons/SVGIcons"

export const SensorDetailComponent = () => {

    return (
        <div className=" flex flex-col gap-6">

            <div className=" flex flex-row gap-4">
                <a href="/" type="button" className="
                flex justify-center items-center  
                bg-gray-300 hover:bg-gray-400 focus:ring-gray-400 
                focus:ring-offset-blue-200 text-gray-700 transition ease-in 
                duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  w-10 h-10 rounded-lg ">
                    <BackIcon />
                </a>
                <h1 className="text-3xl font-thin">Sensor - <span className="font-bold text-gray-600">nrf-881277</span></h1>
            </div>

            <div className="flex flex-row gap-6 border-2 border-solid">
                <div className="w-1/2 border-r-2 border-solid">
                    <div className="container flex flex-col mx-auto items-center justify-center bg-white dark:bg-gray-800">
                        <ul className="flex flex-col divide divide-y w-full">
                            <li className="flex flex-row">
                                <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            TOTAL MESSAGES
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            Total Messages this week
                                        </div>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-200 text-2xl">
                                        1340
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-row">
                                <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            DOWN TIME
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            Total down time
                                        </div>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-200 text-2xl">
                                        67
                                        <span className="text-sm block">Sec</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-row">
                                <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            ALERTS
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            System alerts this week
                                        </div>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-200 text-2xl">
                                        74
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2">
                </div>
            </div>

            <div className="border-2 border-solid p-4">
                <div className=" flex flex-row justify-between">
                    <p className="text-xl text-gray-600 font-semibold">TEMPRATURE DAILY</p>
                    <button type="button" className="
                flex justify-center items-center  
                bg-gray-300 hover:bg-gray-400 focus:ring-gray-400 
                focus:ring-offset-blue-200 text-gray-700 transition ease-in 
                duration-200 text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  w-6 h-6 rounded-lg ">
                        <SettingsIcon />
                    </button>
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>

            <div className="flex flex-row gap-14">
                <div className="w-1/2">
                    <p className="text-xl text-gray-600 font-semibold">SYSTEM LOG</p>
                    <div className="border-2 border-solid p-4">
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-xl text-gray-600 font-semibold">ACTIVITY</p>
                    <div className="border-2 border-solid p-4">
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>


        </div>
    )
}