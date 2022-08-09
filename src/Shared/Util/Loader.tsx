import { Puff } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { State } from '../Types/Types';

export const Loader = () => {
    const { isLoading } = useSelector((state: State) => state);

    return (
        <>
            {isLoading && (
                <div
                    className='absolute z-50 flex h-full w-full 
        items-center justify-center bg-white/80'
                >
                    <Puff
                        height='80'
                        width='80'
                        radius={1}
                        color='#3285a8'
                        ariaLabel='puff-loading'
                        wrapperStyle={{}}
                        wrapperClass=''
                        visible={true}
                    />
                </div>
            )}
        </>
    );
};
