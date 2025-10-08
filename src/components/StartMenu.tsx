import { useContext } from 'react'
import { Menu } from './content/menu'
import AppContext from './context/AppContext'

type StartMenuProps = {
    setCloseStartMenu: React.Dispatch<React.SetStateAction<boolean>>
}

type AppState = {
    [key: string]: {
        open: boolean
    }
}

type AppContextType = {
    state: AppState
    openApp: (appName: string) => void
}

const StartMenu = ({ setCloseStartMenu }: StartMenuProps) => {
    const { state, openApp } = useContext(
        AppContext
    ) as unknown as AppContextType
    return (
        <>
            <div
                className="w-screen h-screen z-[99] absolute top-0 left-0"
                onClick={() => setCloseStartMenu((prev) => !prev)}
            />
            <div
                aria-label="startMenu"
                className=" flex z-[999] h-[300px] w-[200px] bg-[#fff] border-t-[#fff]  border-b-[grey] border-s-[#fff] border-[1px] border-e-0 p-[2px] absolute left-[2px] bottom-[36px]"
            >
                <div className="flex justify-between flex-col">
                    <ul
                        aria-label="startMenu_menuList"
                        className=" list-none ms-1 pointer-events-auto "
                    >
                        {Menu.map((app, i) => {
                            return (
                                <li
                                    key={i}
                                    className=" cursor-pointer flex gap-2 justify-start items-center p-[3px] h-[38px] border-b-[1px] border-b-white hover:bg-[#dedede] hover:border-b-black"
                                    onClick={() => {
                                        if (state[app.name].open !== true)
                                            openApp(app.name)
                                        setCloseStartMenu((prev) => !prev)
                                    }}
                                >
                                    <img
                                        src={app.path}
                                        alt={app.name + 'Icon'}
                                        className={app.startIconSize}
                                    />
                                    <span className="text-[15px] sm:text-[13px] pt-[1px]">
                                        {app.name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                    <div className=" cursor-pointer flex gap-2 justify-start p-[3px] border-t border-t-black w-[169px] pt-3 hover:bg-[#dedede]">
                        <img
                            src="/assets/shutdown.png"
                            alt="ShutdownIcon"
                            className=" w-[25px] h-[25px]"
                        />
                        <span className="text-[14px] sm:text-[13px]">
                            Shut Down...
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartMenu
