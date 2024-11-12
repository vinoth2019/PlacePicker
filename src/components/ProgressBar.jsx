import { useState, useEffect } from "react"

export default function ProgressBar({timer}){
    const [progressTimer, setProgressTimer] = useState(timer)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressTimer(prevTiming => prevTiming - 10)
    }, 10);
    return () => {
      clearInterval(interval)
    }
  }, [])
    return <progress value={progressTimer} max={timer} />
}