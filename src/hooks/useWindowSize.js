import { useEffect, useState } from "react"

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        windowWidth: null,
        windowHeight: null
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            })
        }

        handleResize();

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize;
}

export default useWindowSize