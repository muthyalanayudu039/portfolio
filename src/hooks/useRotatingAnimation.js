import { useEffect, useRef } from 'react'

function useRotatingAnimation({ initialAngle = 0, rotationStep = 30, interval = 1500 } = {}) {
    const ellipseRef = useRef(null)
    const ellipseAngle = useRef(initialAngle)

    useEffect(() => {
        const rotateEllipse = () => {
            if (ellipseRef.current) {
                ellipseRef.current.style.transform = `rotate(${ellipseAngle.current}deg)`
            }
            requestAnimationFrame(rotateEllipse)
        }

        const intervalId = setInterval(() => {
            ellipseAngle.current = ellipseAngle.current < 90 ? ellipseAngle.current + rotationStep : 0
        }, interval)

        const frameId = requestAnimationFrame(rotateEllipse)

        return () => {
            clearInterval(intervalId)
            cancelAnimationFrame(frameId)
        }
    }, [rotationStep, interval])

    return ellipseRef
}

export default useRotatingAnimation
