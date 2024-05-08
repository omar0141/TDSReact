/* eslint-disable no-unused-vars */
export function formatDayMonth(dateString) {
  // Split the date string into components
  const [month, day, year] = dateString.split("/")
  // Function to get the month name from its index (0-11)
  const getMonthName = (monthIndex) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    return monthNames[monthIndex]
  }
  // Format the date to 'day Month'
  return `${parseInt(day)} ${getMonthName(parseInt(month) - 1)}`
}

export function formatDayMonthYear(dateString) {
  // Split the date string into components
  const [year, month, day] = dateString.split("-")
  // Function to get the month name from its index (0-11)
  const getMonthName = (monthIndex) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    return monthNames[monthIndex]
  }
  // Format the date to 'day Month'
  return `${parseInt(day)} ${getMonthName(parseInt(month) - 1)} ${year}`
}

export function formatDate(dateString) {
  // Split the date string into components
  const [month, day, year] = dateString.split("/")
  // Format the date to 'day Month'
  return `${year}-${month}-${day}`
}
