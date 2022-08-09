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
    AreaChart,
    Area,
} from 'recharts';
import {
    ActivityIcon,
    BackIcon,
    SettingsIcon,
} from '../../Shared/Icons/SVGIcons';
import { State } from '../../Shared/Types/Types';
import { getRandomColor } from '../../Shared/Util/Utils';
import {
    fetchSensorDetailsAction,
    fetchSensorEventsAction,
    fetchSensorLogsAction,
    fetchSensorWeeklyAvgStatsAction,
    fetchSensorWeeklyStatsAction,
} from '../../Store/Actions';
import { AppDispatch } from '../../Store/Store';

export const SensorDetailComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { sensorId } = useParams();
    const {
        sensorDetails,
        sensorWeeklyStats,
        sensorWeeklyAvgStats,
        sensorLogs,
        sensorEvents,
    } = useSelector((state: State) => state);

    useEffect(() => {
        if (sensorId) {
            dispatch(fetchSensorDetailsAction(sensorId));
            dispatch(fetchSensorWeeklyStatsAction(sensorId));
            dispatch(fetchSensorWeeklyAvgStatsAction(sensorId));
            dispatch(fetchSensorLogsAction(sensorId));
            dispatch(fetchSensorEventsAction(sensorId));
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
                    <div>
                        <ul className='divide flex flex-col justify-center divide-y gap-6'>
                            <li>
                                <div className='flex flex-row justify-between p-4'>
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
                            <li>
                                <div className='flex flex-row justify-between p-4'>
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
                            <li>
                                <div className='flex flex-row justify-between p-4'>
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
                    <div className='mb-5 h-60 w-full pr-14'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <AreaChart data={sensorWeeklyStats}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='date' />
                                <YAxis tick={false} />
                                <Tooltip />
                                <Area
                                    type='monotone'
                                    dataKey='sensor'
                                    stroke={getRandomColor()}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className='border-2 border-solid p-4'>
                <div className='flex flex-row justify-between  mb-5'>
                    <p className='text-xl font-semibold text-gray-600'>
                        TEMPRATURE DAILY
                    </p>
                    <button
                        type='button'
                        className='flex h-6 w-6 items-center justify-center rounded-lg 
                        bg-gray-300 text-center text-base font-semibold text-gray-700 shadow-md'
                    >
                        <SettingsIcon />
                    </button>
                </div>
                <div className='h-60 mr-12'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart
                            width={500}
                            height={300}
                            data={sensorWeeklyAvgStats?.statsList}
                        >
                            <CartesianGrid
                                horizontal={true}
                                vertical={true}
                                strokeDasharray='5 5'
                            />
                            <XAxis tick={false} dataKey='date' />
                            <YAxis tick={false} />
                            <Tooltip />
                            <Legend />
                            {sensorWeeklyAvgStats?.sensorIds?.map((data, i) => (
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

            <div className='flex flex-row gap-14'>
                <div className='w-1/2'>
                    <p className='text-xl font-semibold text-gray-600 mb-5'>
                        SYSTEM LOG
                    </p>
                    <div className='border-2 border-solid p-5'>
                        <ol className='relative border-l border-gray-400'>
                            {sensorLogs?.map((data, i) => (
                                <li className='mb-10 ml-4' key={i}>
                                    <div className='absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-400'></div>
                                    <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                                        {data.time}
                                    </time>
                                    <p className='text-base font-normal text-gray-500'>
                                        {data.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-xl font-semibold text-gray-600 mb-5'>
                        ACTIVITY
                    </p>
                    <div className='border-2 border-solid p-5'>
                        {sensorEvents?.map((data) => (
                            <div className='relative w-full overflow-hidden p-4 '>
                                <div className='mb-6 flex items-start justify-between rounded'>
                                    <span className='rounded-full bg-green-400 p-2 text-white dark:text-gray-800'>
                                        <ActivityIcon />
                                    </span>
                                    <div className='flex w-full items-center justify-between'>
                                        <div className='ml-2 flex w-full flex-col items-start justify-between text-sm'>
                                            <p className='font-bold text-gray-700 dark:text-white'>
                                                {data?.event_name}
                                            </p>
                                            <p className='text-gray-300'>
                                                {data?.time}
                                            </p>

                                            <p className='text-gray-700 dark:text-white'>
                                                {data?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
