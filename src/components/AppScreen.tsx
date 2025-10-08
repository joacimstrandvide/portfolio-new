import { useContext } from 'react'
import AppScreenFrame from './UI/AppScreenFrame'
import { Menu } from './content/menu'
import AppContext from './context/AppContext'
import About from './Apps/About'
import Projects from './Apps/Projects'

type AppWindowState = {
    open: boolean
    top: boolean
    fullscreen: boolean
    minimize: boolean
}

type AppState = {
    About: AppWindowState
    Projects: AppWindowState
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
        </>
    )
}

export default AppScreen
