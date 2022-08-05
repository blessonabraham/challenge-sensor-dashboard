import { Formik } from "formik";

export const EditSensorComponent = () => {

    return (
        <Formik
            initialValues={{ sensorId: '', location: '', customer: '' }}
            validate={() => { }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-row gap-14">
                        <div className="w-3/5">
                            <h1 className=" border-b-2 pb-5 text-3xl font-thin">Edit Sensor - <span className="font-bold text-gray-600">nrf-881277</span></h1>
                            <div className=" flex flex-col gap-5 w-1/2 mt-5">

                                <h1 className="text-2xl font-semibold">nrf-881277</h1>

                                <input
                                    type="text"
                                    name="location"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                    id="location"
                                    className="rounded-lg border-transparent 
                                    flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                                    bg-white text-gray-700 placeholder-gray-400 shadow-sm 
                                    text-base focus:outline-none focus:ring-2 focus:ring-purple-600 
                                    focus:border-transparent"
                                    placeholder="Location"
                                />
                                <select id="Currency" name="currency" className="focus:ring-indigo-500 py-3 px-4 
                                border border-gray-300 focus:border-indigo-500 
                                h-full pl-2 pr-7 border-transparent bg-transparent 
                                text-gray-500 sm:text-sm rounded-lg">
                                    <option value="" disabled selected>Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="grow">
                            <h1 className="border-b-2 pb-5 text-3xl font-thin">Alerts</h1>
                            <div className=" flex flex-col gap-5 w-2/3 mt-5">

                                <input
                                    type="text"
                                    name="minTempThreshold"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sensorId}
                                    id="minTempThreshold"
                                    className="rounded-lg border-transparent 
                                    flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                                    bg-white text-gray-700 placeholder-gray-400 shadow-sm 
                                    text-base focus:outline-none focus:ring-2 focus:ring-purple-600 
                                    focus:border-transparent"
                                    placeholder="Min Temp. Threshold"
                                />

                                <label className="flex items-center space-x-3 mb-3">
                                    <input type="checkbox" name="checked-demo" checked className=" 
                                    bg-white bg-check h-6 w-6 border border-gray-300 rounded-md 
                                    checked:bg-gray-500 checked:border-transparent focus:outline-none" />
                                    <span className="text-gray-700 dark:text-white font-normal">
                                        Monitor Min Temprature
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="maxTempThreshold"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sensorId}
                                    id="maxTempThreshold"
                                    className="rounded-lg border-transparent 
                                    flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                                    bg-white text-gray-700 placeholder-gray-400 shadow-sm 
                                    text-base focus:outline-none focus:ring-2 focus:ring-purple-600 
                                    focus:border-transparent"
                                    placeholder="Max Temp. Threshold"
                                />

                                <label className="flex items-center space-x-3 mb-3">
                                    <input type="checkbox" name="checked-demo" checked className="form-tick 
                                    bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 
                                    checked:border-transparent focus:outline-none" />
                                    <span className="text-gray-700 dark:text-white font-normal">
                                        Monitor Max Temprature
                                    </span>
                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row gap-6 border-t-2 pt-6 mt-6">

                        <button type="submit" disabled={isSubmitting} className="py-2 px-4 flex justify-center items-center  
                        bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 
                        text-white transition ease-in duration-200 text-center text-base font-normal 
                        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-52">
                            Update Sensor
                        </button>


                        <button type="button" className="py-2 px-4 flex justify-center items-center  
                        bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 focus:ring-offset-gray-200 
                         text-gray-600 transition ease-in duration-200 text-center text-base font-normal 
                        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-52">
                            Cancel
                        </button>

                    </div>
                </form>
            )}
        </Formik>

    )
}