import { Formik } from 'formik';
import { useParams } from 'react-router-dom';

export const EditSensorComponent = () => {
    const { sensorId } = useParams();

    return (
        <Formik
            initialValues={{ sensorId: sensorId, location: '', customer: '' }}
            validate={() => {}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                isSubmitting,
                handleSubmit,
                handleChange,
                handleBlur,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row gap-14'>
                        <div className='w-3/5'>
                            <h1 className=' border-b-2 pb-5 text-3xl font-thin'>
                                Edit Sensor -{' '}
                                <span className='font-bold text-gray-600'>
                                    nrf-881277
                                </span>
                            </h1>
                            <div className=' mt-5 flex w-1/2 flex-col gap-5'>
                                <h1 className='text-2xl font-semibold'>
                                    {sensorId}
                                </h1>

                                <input
                                    type='text'
                                    name='location'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                    id='location'
                                    className='w-full flex-1 
                                    appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 
                                    px-4 text-base text-gray-700 placeholder-gray-400 
                                    shadow-sm focus:border-transparent focus:outline-none focus:ring-2 
                                    focus:ring-purple-600'
                                    placeholder='Location'
                                />
                                <select
                                    id='Currency'
                                    name='currency'
                                    className='h-full rounded-lg border 
                                border-gray-300 border-transparent bg-transparent 
                                py-3 px-4 pl-2 pr-7 text-gray-500 
                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                >
                                    <option value='' disabled selected>
                                        Customer
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className='grow'>
                            <h1 className='border-b-2 pb-5 text-3xl font-thin'>
                                Alerts
                            </h1>
                            <div className=' mt-5 flex w-2/3 flex-col gap-5'>
                                <input
                                    type='text'
                                    name='minTempThreshold'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sensorId}
                                    id='minTempThreshold'
                                    className='w-full flex-1 
                                    appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 
                                    px-4 text-base text-gray-700 placeholder-gray-400 
                                    shadow-sm focus:border-transparent focus:outline-none focus:ring-2 
                                    focus:ring-purple-600'
                                    placeholder='Min Temp. Threshold'
                                />

                                <label className='mb-3 flex items-center space-x-3'>
                                    <input
                                        type='checkbox'
                                        name='checked-demo'
                                        checked
                                        className=' 
                                    bg-check h-6 w-6 rounded-md border border-gray-300 bg-white 
                                    checked:border-transparent checked:bg-gray-500 focus:outline-none'
                                    />
                                    <span className='font-normal text-gray-700 dark:text-white'>
                                        Monitor Min Temprature
                                    </span>
                                </label>

                                <input
                                    type='text'
                                    name='maxTempThreshold'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sensorId}
                                    id='maxTempThreshold'
                                    className='w-full flex-1 
                                    appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 
                                    px-4 text-base text-gray-700 placeholder-gray-400 
                                    shadow-sm focus:border-transparent focus:outline-none focus:ring-2 
                                    focus:ring-purple-600'
                                    placeholder='Max Temp. Threshold'
                                />

                                <label className='mb-3 flex items-center space-x-3'>
                                    <input
                                        type='checkbox'
                                        name='checked-demo'
                                        checked
                                        className='form-tick 
                                    bg-check h-6 w-6 rounded-md border border-gray-300 bg-white checked:border-transparent 
                                    checked:bg-blue-500 focus:outline-none'
                                    />
                                    <span className='font-normal text-gray-700 dark:text-white'>
                                        Monitor Max Temprature
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 flex flex-row gap-6 border-t-2 pt-6'>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='flex w-52 items-center justify-center rounded-lg  
                        bg-gray-600 py-2 px-4 text-center 
                        text-base font-normal text-white shadow-md transition duration-200 ease-in 
                        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200'
                        >
                            Update Sensor
                        </button>

                        <button
                            type='button'
                            className='flex w-52 items-center justify-center rounded-lg  
                        bg-gray-200 py-2 px-4 text-center 
                         text-base font-normal text-gray-600 shadow-md transition duration-200 ease-in 
                        hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-200'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};
