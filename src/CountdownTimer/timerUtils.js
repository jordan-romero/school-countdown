export const calculateTimeLeft = () => {
  let year = new Date.getFullYear()

  const timeDifference = +new Date(`05/26/${year}`) - +new Date()

  let timeLeft ={}

  if (timeDifference > 0) {
    timeLeft = {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / 1000 / 60) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60)
    }
  }

  return timeLeft
}