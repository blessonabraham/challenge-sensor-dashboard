import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from 'recharts';
import { BackIcon, SettingsIcon } from '../../Shared/Icons/SVGIcons';
import { State } from '../../Shared/Types/Types';
import { getRandomColor } from '../../Shared/Util/Utils';
import { fetchSensorDetailsAction, fetchSensorWeeklyStatsAction } from '../../Store/Actions';
import { AppDispatch } from '../../Store/Store';

export const SensorDetailComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { sensorId } = useParams();
    const { sensorDetails, sensorStats } = useSelector((state: State) => state);

    useEffect(() => {
        if (sensorId) {
            dispatch(fetchSensorDetailsAction(sensorId));
            dispatch(fetchSensorWeeklyStatsAction(sensorId));
        }
    }, [sensorId]);

    return (
        <div className=' flex flex-col gap-6'>
            <div className=' flex flex-row gap-4'>
                <Link
                    to='/'
                    type='button'
                    className='
                flex h-10 w-10  
                items-center justify-center rounded-lg 
                bg-gray-300 text-center text-base font-semibold 
                text-gray-700 shadow-md transition duration-200 ease-in 
                hover:bg-gray-400 focus:outline-none focus:ring-2  focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-blue-200 '
                >
                    <BackIcon />
                </Link>
                <h1 className='text-3xl font-thin'>
                    Sensor -{' '}
                    <span className='font-bold text-gray-600'> {sensorId}</span>
                </h1>
            </div>

            <div className='flex flex-row gap-6 border-2 border-solid'>
                <div className='w-1/2 border-r-2 border-solid'>
                    <div className='container mx-auto flex flex-col items-center justify-center bg-white dark:bg-gray-800'>
                        <ul className='divide flex w-full flex-col divide-y'>
                            <li className='flex flex-row'>
                                <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                                    <div className='mr-16 flex-1 pl-1'>
                                        <div className='font-medium dark:text-white'>
                                            TOTAL MESSAGES
                                        </div>
                                        <div className='text-sm text-gray-600 dark:text-gray-200'>
                                            Total Messages this week
                                        </div>
                                    </div>
                                    <div className='text-2xl text-gray-600 dark:text-gray-200'>
                                        {
                                            sensorDetails?.overview
                                                ?.total_messages
                                        }
                                    </div>
                                </div>
                            </li>
                            <li className='flex flex-row'>
                                <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                                    <div className='mr-16 flex-1 pl-1'>
                                        <div className='font-medium dark:text-white'>
                                            DOWN TIME
                                        </div>
                                        <div className='text-sm text-gray-600 dark:text-gray-200'>
                                            Total down time
                                        </div>
                                    </div>
                                    <div className='text-2xl text-gray-600 dark:text-gray-200'>
                                        {sensorDetails?.overview?.down_time}
                                        <span className='block text-sm'>
                                            Sec
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className='flex flex-row'>
                                <div className='flex flex-1 cursor-pointer select-none items-center p-4'>
                                    <div className='mr-16 flex-1 pl-1'>
                                        <div className='font-medium dark:text-white'>
                                            ALERTS
                                        </div>
                                        <div className='text-sm text-gray-600 dark:text-gray-200'>
                                            System alerts this week
                                        </div>
                                    </div>
                                    <div className='text-2xl text-gray-600 dark:text-gray-200'>
                                        {sensorDetails?.overview?.alerts}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-row justify-between p-5'>
                        <p className='text-xl font-semibold text-gray-600'>
                            WEEKLY AVERAGE TEMP
                        </p>
                    </div>

                    <div className='h-60 w-full pr-14'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart data={sensorStats?.statsList}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='date' />
                                <YAxis tickFormatter={(tick) => tick + ' ºC'} />
                                <Tooltip />
                                <Legend />
                                {sensorStats?.sensorIds?.map((data, i) => (
                                    <Line
                                        key={i}
                                        type='monotone'
                                        dataKey={data}
                                        stroke={getRandomColor()}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className='border-2 border-solid p-4'>
                <div className=' flex flex-row justify-between'>
                    <p className='text-xl font-semibold text-gray-600'>
                        TEMPRATURE DAILY
                    </p>
                    <button
                        type='button'
                        className='
                flex h-6 w-6  
                items-center justify-center rounded-lg 
                bg-gray-300 text-center text-base font-semibold 
                text-gray-700 shadow-md transition duration-200 ease-in 
                hover:bg-gray-400 focus:outline-none focus:ring-2  focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-blue-200 '
                    >
                        <SettingsIcon />
                    </button>
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>

            <div className='flex flex-row gap-14'>
                <div className='w-1/2'>
                    <p className='text-xl font-semibold text-gray-600'>
                        SYSTEM LOG
                    </p>
                    <div className='border-2 border-solid p-4'>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-xl font-semibold text-gray-600'>
                        ACTIVITY
                    </p>
                    <div className='border-2 border-solid p-4'>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};
