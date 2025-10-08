import { useState, useContext } from "react";
import StartMenu from "./StartMenu";
import { Menu } from "./content/menu";
import TaskbarAppBtn from "./UI/TaskbarAppBtn";
import AppContext from "../components/context/AppContext";
import type { AppContextType } from "./context/AppState"; // Import correct type

const Taskbar = () => {
  const { state, activeApp, minimizeApp } = useContext(AppContext) as AppContextType;
  const [isStartClicked, setIsStartClicked] = useState(false);

  const taskbarAppStack = Menu.map((app) => {
    const appState = state[app.name];
    if (
      !appState ||
      typeof appState !== "object" ||
      Array.isArray(appState) ||
      !("open" in appState)
    )
      return null;
    if (!appState.open) return null;
    return (
      <TaskbarAppBtn
        key={app.name}
        appName={app.name}
        iconSrc={app.path}
        isActive={appState.top && !appState.minimize}
        activeHandler={() => activeApp(app.name)}
        minimizeApp={() => minimizeApp(app.name)}
      />
    );
  });

  return (
    <>
      {isStartClicked && <StartMenu setCloseStartMenu={setIsStartClicked} />}
      <div className="fixed bottom-0 left-0 w-screen h-[40px] sm:h-[35px] bg-[#c0c0c0] border-t-2 border-[#fafafa] border-solid p-[5px] z-[100] flex justify-between items-center overflow-hidden">
        <div className="flex items-center justify-center gap-[5px] p-1">
          <button
            className={`flex items-center justify-center bg-inherit border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] w-[80px] text-[15px] sm:text-[13px] p-1 gap-1  h-[32px] sm:h-[28px] cursor-default
            ${isStartClicked && "BtnClicked"}`}
            style={{ boxShadow: "0.5px 0.5px #000" }}
            onClick={() => {
              setIsStartClicked((prev) => !prev);
            }}
          >
            <img
              src="/assets/start.ico"
              alt="start button"
              className="h[20px] w-[20px]"
            />
            Start
          </button>
          <div className=" border-s-[1px] border-s-[grey] border-s-[solid]  border-e-[1px] border-e-[white] border--[solid] h-[25px] my-[2px] " />
          {taskbarAppStack}
        </div>
      </div>
    </>
  );
};

export default Taskbar;
