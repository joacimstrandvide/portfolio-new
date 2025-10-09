import {
    MAXIMIZE_APP,
    MINIMIZE_APP,
    CLOSE_APP,
    OPEN_APP,
    ACTIVE_APP,
} from "./AppAction";
import type { AppStateType, AppActionType } from "./AppState";

type AppName = "About" | "Projects" | "Credits";

const AppReducer = (
    state: AppStateType,
    action: AppActionType
): AppStateType => {
    const appName = action.payload as AppName;
    const prev = state.previouslyActiveApp as AppName | "";

    switch (action.type) {
        case OPEN_APP: {
            if (prev === "") {
                return {
                    ...state,
                    taskbarAppStack: [...state.taskbarAppStack, appName],
                    previouslyActiveApp: appName,
                    [appName]: {
                        ...state[appName],
                        open: true,
                        top: true,
                        closed: false,
                    },
                };
            } else {
                return {
                    ...state,
                    [prev]: {
                        ...state[prev],
                        top: false,
                    },
                    taskbarAppStack: [...state.taskbarAppStack, appName],
                    previouslyActiveApp: appName,
                    [appName]: {
                        ...state[appName],
                        open: true,
                        top: true,
                        closed: false,
                    },
                };
            }
        }

        case CLOSE_APP: {
            const alteredStack = state.taskbarAppStack.filter(
                (app) => app !== appName
            );

            const newPrev = (alteredStack.slice(-1)[0] || "") as AppName | "";
            const newState: AppStateType = {
                ...state,
                taskbarAppStack: alteredStack,
                previouslyActiveApp: newPrev,
                [appName]: {
                    open: false,
                    minimize: false,
                    closed: true,
                    top: false,
                    fullscreen: false,
                },
            };

            if (newPrev) {
                const topValue = state[newPrev].minimize ? false : true;
                return {
                    ...newState,
                    [newPrev]: {
                        ...state[newPrev],
                        top: topValue,
                    },
                };
            }

            return newState;
        }

        case ACTIVE_APP: {
            if (!prev) return state;
            return {
                ...state,
                previouslyActiveApp: appName,
                [prev]: {
                    ...state[prev],
                    top: false,
                },
                [appName]: {
                    ...state[appName],
                    top: true,
                    minimize: false,
                },
            };
        }

        case MINIMIZE_APP: {
            if (!prev) return state;
            return {
                ...state,
                [prev]: {
                    ...state[prev],
                    top: true,
                },
                [appName]: {
                    ...state[appName],
                    top: false,
                    minimize: true,
                },
            };
        }

        case MAXIMIZE_APP: {
            return {
                ...state,
                [appName]: {
                    ...state[appName],
                    fullscreen: !state[appName].fullscreen,
                },
            };
        }

        default:
            return state;
    }
};

export default AppReducer;
