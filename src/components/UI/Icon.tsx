import { useContext } from 'react'
import { motion } from 'framer-motion'
import AppContext from '../context/AppContext'
import type { AppContextType } from '../context/AppState'

type MenuItem = {
    name: string
    path: string
    deskIconSize: string
    link?: string
}

type IconProps = {
    menu: MenuItem
}

const Icon = ({ menu }: IconProps) => {
    const { openApp } = useContext(AppContext) as AppContextType

    const handleOpen = () => {
        if (menu.link) {
            window.open(menu.link, "_blank", "noopener,noreferrer")
        } else {
            openApp(menu.name)
        }
    }

    return (
        <motion.div
            aria-label={menu.name}
            tabIndex={-1}
            className={`flex flex-col items-center z-10 focus-within:bg-[rgba(50,94,160,0.56)]
        ${menu.name === 'Projects' ? 'gap-[10px]' : ''}`}
            dragMomentum={false}
            dragElastic={0.1}
            onDoubleClick={handleOpen}
            onTouchStart={handleOpen}
        >
            <img
                src={menu.path}
                alt={menu.name + ' Icon'}
                className={menu.deskIconSize}
                draggable="false"
            />
            <span className="text-[13px] text-white">{menu.name}</span>
        </motion.div>
    )
}

export default Icon
