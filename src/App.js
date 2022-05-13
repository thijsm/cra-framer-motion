import React from "react"
import { motion } from "framer-motion"

import "./App.css"
import Logo from "./Logo"

function App() {
    const colors = {
        motionMagenta: "#f08",
        motionBlue: "#05f",
        motionPurple: "#70f",
    }

    return (
        <div className="App">
            <header className="App-header">
                <Logo className="App-logo" />
                <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                        delay: 4,
                        duration: 2,
                    }}
                >
                    Edit <code>src/App.js</code> and save to reload.
                </motion.p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <motion.a
                    style={{
                        background: `linear-gradient(to right,
                          ${colors.motionBlue} 20%,
                          ${colors.motionMagenta}, 
                          ${colors.motionPurple})`,
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                        textDecorationColor: colors.motionPurple,
                        marginTop: 5,
                    }}
                    href="https://www.framer.com/docs/"
                    target="_blank"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 4,
                        duration: 2,
                    }}
                >
                    & Framer Motion
                </motion.a>
            </header>
        </div>
    )
}

export default App
