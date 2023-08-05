import Gallery from "./Gallery"
import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

export default function StudyContextHook() {
    const contextTheme = useContext(ThemeContext)

    return (
        <div>
            <button onClick={contextTheme.handleChangeTheme}>Toggle</button>
            <Gallery />
        </div>
    )
}