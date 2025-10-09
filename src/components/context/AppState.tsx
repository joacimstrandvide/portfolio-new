import React, { ReactNode, useReducer } from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import {
    MAXIMIZE_APP,
    MINIMIZE_APP,
    CLOSE_APP,
    OPEN_APP,
    ACTIVE_APP
} from './AppAction'

export interface AppWindowState {
    open: boolean
    minimize: boolean
    closed: boolean
    top: boolean
    fullscreen: boolean
}

export interface AppStateType {
    About: AppWindowState
    Projects: AppWindowState
    Credits: AppWindowState
    previouslyActiveApp: string
    taskbarAppStack: string[]
    [key: string]: AppWindowState | string | string[]
}

export type AppActionType =
    | { type: typeof OPEN_APP; payload: string }
    | { type: typeof CLOSE_APP; payload: string }
    | { type: typeof ACTIVE_APP; payload: string }
    | { type: typeof MINIMIZE_APP; payload: string }
    | { type: typeof MAXIMIZE_APP; payload: string }


export interface AppContextType {
    state: AppStateType
    openApp: (appName: string) => void
    closeApp: (appName: string) => void
    activeApp: (appName: string) => void
    minimizeApp: (appName: string) => void
    toggleFullScreen: (appName: string) => void
}

interface AppStateProps {
    children: ReactNode
}

const initialState: AppStateType = {
    About: {
        open: false,
        minimize: false,
        closed: true,
        top: false,
        fullscreen: false
    },
    Projects: {
        open: false,
        minimize: false,
        closed: true,
        top: false,
        fullscreen: false
    },
    Credits: {
        open: false,
        minimize: false,
        closed: true,
        top: false,
        fullscreen: false
    },
    previouslyActiveApp: '',
    taskbarAppStack: []
}

const AppState: React.FC<AppStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const openApp = (appName: string) =>
        dispatch({ type: OPEN_APP, payload: appName })
    const closeApp = (appName: string) =>
        dispatch({ type: CLOSE_APP, payload: appName })
    const activeApp = (appName: string) =>
        dispatch({ type: ACTIVE_APP, payload: appName })
    const minimizeApp = (appName: string) =>
        dispatch({ type: MINIMIZE_APP, payload: appName })
    const toggleFullScreen = (appName: string) =>
        dispatch({ type: MAXIMIZE_APP, payload: appName })

    return (
        <AppContext.Provider
            value={{
                state,
                openApp,
                closeApp,
                activeApp,
                minimizeApp,
                toggleFullScreen
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState
