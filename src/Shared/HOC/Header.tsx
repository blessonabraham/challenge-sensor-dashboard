import { useDispatch, useSelector } from 'react-redux';
import { setToggleDrawerAction } from '../../Store/Actions';
import { CloseIcon, ImageIcon, MenuIcon, UserIcon } from '../Icons/SVGIcons';
import { State } from '../Types/Types';

export const Header = () => {
    const { toggleDrawer } = useSelector((state: State) => state);
    const dispatch = useDispatch();

    const toggleDrawerAction = () => {
        dispatch(setToggleDrawerAction());
    };

    return (
        <div>
            <nav className='bg-white shadow'>
                <div className='mx-auto px-8'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center gap-5'>
                            <span onClick={toggleDrawerAction}>
                                {toggleDrawer && (
                                    <div className='h-8 w-8'>
                                        <CloseIcon />
                                    </div>
                                )}
                                {!toggleDrawer && (
                                    <div className='h-8 w-8'>
                                        <MenuIcon />
                                    </div>
                                )}
                            </span>
                            <div className='h-8 w-8'>
                                <ImageIcon />
                            </div>
                        </div>
                        <div className='block'>
                            <div className='ml-4 flex items-center md:ml-6'>
                                <div className='relative ml-3'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <div className='text-right font-light text-gray-600'>
                                            <p className='text-lg font-bold leading-tight'>
                                                JANE DOE
                                            </p>
                                            <p className='text-sm leading-tight'>
                                                Account Settings
                                            </p>
                                        </div>
                                        <span className='text-gray-600'>
                                            <div className='h-10 w-10'>
                                                <UserIcon />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
