import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setToggleDrawerAction } from '../../Store/Actions';
import {
    HomeIcon,
    ReportDocumentIcon,
    ChartIcon,
    UsersIcon,
    SettingsIcon,
    AddIcon,
    SearchIcon,
} from '../Icons/SVGIcons';
import { State } from '../Types/Types';

export const SideMenu = () => {
    const { toggleDrawer } = useSelector((state: State) => state);
    const dispatch = useDispatch();

    const toggleDrawerAction = () => {
        dispatch(setToggleDrawerAction());
    };

    return (
        <>
            {!toggleDrawer && (
                <div className='flex flex-row bg-gray-100 shadow'>
                    <nav className=' flex w-20 flex-col justify-between'>
                        <div className='mt-1 mb-10'>
                            <div className='mt-10'>
                                <ul>
                                    <li className='my-12 ml-7 cursor-pointer text-center'>
                                        <span
                                            onClick={toggleDrawerAction}
                                            className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'
                                        >
                                            <div className='h-6 w-6'>
                                                <SearchIcon />
                                            </div>
                                        </span>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <Link to='/'>
                                            <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                                <div className='h-6 w-6'>
                                                    <HomeIcon />
                                                </div>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <Link to='/add-sensor'>
                                            <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                                <div className='h-6 w-6'>
                                                    <AddIcon />
                                                </div>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                            <div className='h-6 w-6'>
                                                <ReportDocumentIcon />
                                            </div>
                                        </span>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                            <div className='h-6 w-6'>
                                                <ChartIcon />
                                            </div>
                                        </span>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                            <div className='h-6 w-6'>
                                                <UsersIcon />
                                            </div>
                                        </span>
                                    </li>
                                    <li className='my-12 ml-7 text-center'>
                                        <span className='mx-auto text-gray-500 transition-colors duration-200 hover:text-gray-800'>
                                            <div className='h-6 w-6'>
                                                <SettingsIcon />
                                            </div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )}

            {toggleDrawer && (
                <div className='relative w-1/5 bg-gray-100 shadow'>
                    <div className='flex flex-col sm:flex-row sm:justify-around'>
                        <div className='h-screen w-72'>
                            <nav className='mt-10 px-6 '>
                                <div className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'>
                                    <div className='relative flex '>
                                        <span className='inline-flex items-center rounded-l-md bg-white px-3 text-sm text-gray-500 shadow-sm'>
                                            <div className='h-4 w-4'>
                                                <SearchIcon />
                                            </div>
                                        </span>
                                        <input
                                            type='text'
                                            id='search'
                                            className=' w-full flex-1 appearance-none rounded-r-lg  bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
                                            name='search'
                                            placeholder='Search...'
                                        />
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                >
                                    <div className='h-6 w-6'>
                                        <HomeIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Dashboard
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                                <Link
                                    to='/add-sensor'
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                >
                                    <div className='h-6 w-6'>
                                        <AddIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Add Sensor
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                                <Link
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                    to={''}
                                >
                                    <div className='h-6 w-6'>
                                        <ReportDocumentIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Reports
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                                <Link
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                    to={''}
                                >
                                    <div className='h-6 w-6'>
                                        <ChartIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Sensors
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                                <Link
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                    to={''}
                                >
                                    <div className='h-6 w-6'>
                                        <UsersIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Users
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                                <Link
                                    className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800'
                                    to={''}
                                >
                                    <div className='h-6 w-6'>
                                        <SettingsIcon />
                                    </div>
                                    <span className='mx-4 text-lg font-normal'>
                                        Settings
                                    </span>
                                    <span className='flex-grow text-right'></span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
