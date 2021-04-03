export default async function sleep (second, count) {
  if (count) {
    let interval
    let num = 0
    return new Promise((resolve) => {
      interval = setInterval(() => {
        num++
        if (num >= second) {
          clearInterval(interval)
          resolve()
        }
        console.log(num)
      }, 1000)
    })
  } else {
    return new Promise((resolve) => setTimeout(resolve, second * 1000))
  }
}
