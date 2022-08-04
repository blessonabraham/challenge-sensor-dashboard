import { useDispatch, useSelector } from "react-redux"
import { setToggleDrawerAction } from "../../Store/Actions"
import { State } from "../../Store/Slice"
import { CloseIcon, ImageIcon, MenuIcon, UserIcon } from "../Icons/SVGIcons"

export const Header = () => {

    const { toggleDrawer } = useSelector((state: State) => state)
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-5">
                            <span onClick={() => dispatch(setToggleDrawerAction())}>
                                {toggleDrawer && <CloseIcon />}
                                {!toggleDrawer && <MenuIcon />}
                            </span>
                            <ImageIcon />
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="text-right font-light text-gray-600">
                                            <p className="text-lg font-bold leading-tight">JANE DOE</p>
                                            <p className="text-sm leading-tight">Account Settings</p>
                                        </div>
                                        <span className="text-gray-600">
                                            <UserIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}