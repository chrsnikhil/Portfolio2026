"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface LanyardContextType {
    showLanyard: boolean
    toggleLanyard: () => void
    bounceTrigger: number
    triggerBounce: () => void
}

const LanyardContext = createContext<LanyardContextType | undefined>(undefined)

export function LanyardProvider({ children }: { children: ReactNode }) {
    const [showLanyard, setShowLanyard] = useState(false)
    const [bounceTrigger, setBounceTrigger] = useState(0)

    const toggleLanyard = () => {
        setShowLanyard((prev) => !prev)
    }

    const triggerBounce = () => {
        setBounceTrigger((prev) => prev + 1)
    }

    return (
        <LanyardContext.Provider value={{ showLanyard, toggleLanyard, bounceTrigger, triggerBounce }}>
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
