"use client"
import './Style.css'
import { useState, useEffect } from "react"

export default function WatchComponent() {
    const [milli, setMilli] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        var intervals = setInterval(() => {
            if (milli < 1000 && milli > 0) {
                setMilli(milli + 1)
            }
            if (milli === 1000) {
                setMilli(1)
                setSeconds(seconds + 1)
            }
            if (seconds === 60) {
                setMilli(1)
                setSeconds(0)
                setMinutes(minutes + 1)
            }
            if (minutes === 60) {
                setMilli(1)
                setSeconds(0)
                setMinutes(0)
                setHours(hours + 1)
            }
            if (hours === 24) {
                setMilli(0)
                setSeconds(0)
                setMinutes(0)
                setHours(0)
            }
        }, 1)

        setIntervalId(intervals)
        return () => {
            clearInterval(intervalId);
        }
    }, [milli, seconds, minutes, hours])
    const start = () => {
        setMilli(milli + 1)
    }

    const stop = () => {
        clearInterval(intervalId)
    }
    const reset = () => {
        clearInterval(intervalId);
        setMilli(0)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Stopwatch by Abdul Wadood</h1>
            </div>

            <div className='watch'>

                <div className='disk'>{hours.toString().padStart(2, '0')}</div>
                <div className='disk'>{minutes.toString().padStart(2, '0')}</div>
                <div className='disk'>{seconds.toString().padStart(2, '0')}</div>

            </div>
            <div className='buttons'>
                <button onClick={(e) => start()}>Start</button>
                <button onClick={(e) => stop()}>Stop</button>
                <button onClick={(e) => reset()}>Reset</button>
            </div>
        </div>
    )
}
