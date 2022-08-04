import { useSelector } from "react-redux"
import { State } from "../../Store/Slice"
import { HomeIcon, ReportDocumentIcon, ChartIcon, UsersIcon, SettingsIcon } from "../Icons/SVGIcons"

export const SideMenu = () => {

    const { toggleDrawer } = useSelector((state: State) => state)

    return (
      <>
        {!toggleDrawer && (
          <div className="flex flex-row h-full">
            <nav className="bg-gray-100 dark:bg-gray-800 w-20 h-screen justify-between flex flex-col">
              <div className="mt-1 mb-10">
                <div className="mt-10">
                  <ul>
                    <li className="my-12 ml-7 text-center">
                      <a href="#">
                        <span className="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                          <HomeIcon />
                        </span>
                      </a>
                    </li>
                    <li className="my-12 ml-7 text-center">
                      <a href="#">
                        <span className="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                          <ReportDocumentIcon />
                        </span>
                      </a>
                    </li>
                    <li className="my-12 ml-7 text-center">
                      <a href="#">
                        <span className="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                          <ChartIcon />
                        </span>
                      </a>
                    </li>
                    <li className="my-12 ml-7 text-center">
                      <a href="#">
                        <span className="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                          <UsersIcon />
                        </span>
                      </a>
                    </li>
                    <li className="my-12 ml-7 text-center">
                      <a href="#">
                        <span className="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                          <SettingsIcon />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}

        {toggleDrawer && (
          <div className="relative bg-gray-100 dark:bg-gray-800 w-1/5">
            <div className="flex flex-col sm:flex-row sm:justify-around">
              <div className="w-72 h-screen">
                <nav className="mt-10 px-6 ">
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <HomeIcon />
                    <span className="mx-4 text-lg font-normal">
                      Dashboard
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <ReportDocumentIcon />
                    <span className="mx-4 text-lg font-normal">
                      Reports
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <ChartIcon />
                    <span className="mx-4 text-lg font-normal">
                      Sensors
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <UsersIcon />
                    <span className="mx-4 text-lg font-normal">
                      Users
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <SettingsIcon />
                    <span className="mx-4 text-lg font-normal">
                      Settings
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }