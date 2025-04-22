import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [targetDate, setTargetDate] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  })
  const intervalRef = useRef(null)

  // calculate the remaining time parts
  const calculateTimeLeft = (endTime) => {
    const now = Date.now()
    const diff = endTime - now
    if (diff <= 0) {
      return { expired: true }
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false
    }
  }

  // start the ticking interval
  const startCountdown = () => {
    if (!targetDate) return
    const endTime = new Date(targetDate).getTime()
    // clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current)

    // set initial
    setTimeLeft(calculateTimeLeft(endTime))

    intervalRef.current = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTime)
      setTimeLeft(newTimeLeft)
      if (newTimeLeft.expired) {
        clearInterval(intervalRef.current)
      }
    }, 1000)
  }

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-20 md:w-24">
      <div className="text-3xl md:text-4xl font-bold text-indigo-600">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mt-1">
        {label}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 tracking-tight">
          Countdown Timer
        </h1>
        
        <div className="space-y-4">
          <label htmlFor="target-date" className="block text-sm font-medium text-gray-700">
            Set your target date and time:
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="target-date"
              type="datetime-local"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={startCountdown}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Start
            </button>
          </div>
        </div>

        {timeLeft.expired ? (
          <div className="flex items-center justify-center p-8">
            <div className="text-3xl font-bold text-red-600 animate-pulse">
              Time's up!
            </div>
          </div>
        ) : (
          <div className="pt-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <TimeUnit value={timeLeft.days} label="days" />
              <TimeUnit value={timeLeft.hours} label="hours" />
              <TimeUnit value={timeLeft.minutes} label="minutes" />
              <TimeUnit value={timeLeft.seconds} label="seconds" />
            </div>
          </div>
        )}
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        Track important events and deadlines with precision
      </p>
    </div>
  )
}

export default App 