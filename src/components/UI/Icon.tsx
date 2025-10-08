import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import AppContext from '../context/AppContext'

type MenuItem = {
    name: string
    path: string
    deskIconSize: string
}

type IconProps = {
    menu: MenuItem
}

const Icon = ({ menu }: IconProps) => {
    const { state, openApp } = useContext(AppContext)

    return (
        <motion.div
            aria-label={menu.name}
            tabIndex={-1}
            className={`flex flex-col items-center z-10 focus-within:bg-[rgba(50,94,160,0.56)]
        ${menu.name === 'Projects' ? 'gap-[10px]' : ''}`}
            dragMomentum={false}
            dragElastic={0.1}
            onDoubleClick={() => openApp(menu.name)}
            onTouchStart={() => openApp(menu.name)}
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
