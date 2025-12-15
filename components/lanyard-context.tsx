"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface LanyardContextType {
    showLanyard: boolean
    toggleLanyard: () => void
}

const LanyardContext = createContext<LanyardContextType | undefined>(undefined)

export function LanyardProvider({ children }: { children: ReactNode }) {
    const [showLanyard, setShowLanyard] = useState(false)

    const toggleLanyard = () => {
        setShowLanyard((prev) => !prev)
    }

    return (
        <LanyardContext.Provider value={{ showLanyard, toggleLanyard }}>
            {children}
        </LanyardContext.Provider>
    )
}

export function useLanyard() {
    const context = useContext(LanyardContext)
    if (context === undefined) {
        throw new Error("useLanyard must be used within a LanyardProvider")
    }
    return context
}
