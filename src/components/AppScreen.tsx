import { useContext } from 'react'
import AppScreenFrame from './UI/AppScreenFrame'
import { Menu } from './content/menu'
import AppContext from './context/AppContext'
import About from './Apps/About'
import Projects from './Apps/Projects'
import Credits from './Apps/Credits'

type AppWindowState = {
    open: boolean
    top: boolean
    fullscreen: boolean
    minimize: boolean
}

type AppState = {
    About: AppWindowState
    Projects: AppWindowState
    Credits: AppWindowState
}

type AppContextType = {
    state: AppState
}

const AppScreen = () => {
    const { state } = useContext(AppContext) as AppContextType

    return (
        <>
            {state.About.open && (
                <AppScreenFrame
                    appInfo={Menu[0]}
                    className=""
                    isActive={state.About.top}
                    isMaximized={state.About.fullscreen}
                    isMinimized={state.About.minimize}
                >
                    <About isMaximized={state.About.fullscreen} />
                </AppScreenFrame>
            )}
            {state.Projects.open && (
                <AppScreenFrame
                    appInfo={Menu[1]}
                    className=""
                    isActive={state.Projects.top}
                    isMaximized={state.Projects.fullscreen}
                    isMinimized={state.Projects.minimize}
                >
                    <Projects isMaximized={state.Projects.fullscreen} />
                </AppScreenFrame>
            )}
            {state.Credits.open && (
                <AppScreenFrame
                    appInfo={Menu[2]}
                    className=""
                    isActive={state.Credits.top}
                    isMaximized={state.Credits.fullscreen}
                    isMinimized={state.Credits.minimize}
                >
                    <Credits isMaximized={state.Credits.fullscreen} />
                </AppScreenFrame>
            )}
        </>
    )
}

export default AppScreen
