/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

// get the formatted month name
const getMonthName = (month, year) => {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(year, month, 1)
  )
}

export default function DateRangePicker({ onDateChange }) {
  const today = new Date()
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null
  })

  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const days = getDaysInMonth(currentMonth, currentYear)

  const handleDayClick = (day) => {
    if (day < today) {
      return // Disable past dates
    }

    const { startDate, endDate } = selectedRange

    if (!startDate || (startDate && endDate)) {
      // If there is no start date or a complete range, set the new start date and clear the end date
      setSelectedRange({ startDate: day, endDate: null })
    } else if (startDate) {
      // If a start date exists and there's no end date, set the end date only if it's after the start date
      if (day >= startDate) {
        setSelectedRange({ startDate, endDate: day })
      } else {
        // If the selected day is before the start date, reset the start date
        setSelectedRange({ startDate: day, endDate: null })
      }
    }
  }
  useEffect(() => {
    onDateChange(selectedRange)
  })
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }
  return (
    <div className="calender">
      <Row className="my-3">
        <Col xs={8}>
          <h4>{getMonthName(currentMonth, currentYear)}</h4>
        </Col>
        <Col className="text-end" xs={4}>
          <Button className="d-inine text-black" variant="link" onClick={handlePrevMonth}>
            <AiOutlineLeft />
          </Button>
          <Button className="d-inine text-black" variant="link" onClick={handleNextMonth}>
            <AiOutlineRight />
          </Button>
        </Col>
      </Row>
      <Row className="g-0 mt-3">
        {days.map((day) => (
          <Col xs={2} key={day}>
            <div
              style={{
                textAlign: "center",
                padding: 10,
                border: "1px solid #D5D4DF",
                color:
                  selectedRange.startDate &&
                  selectedRange.startDate.toDateString() === day.toDateString()
                    ? "white" // Highlight only the selected start date
                    : selectedRange.startDate &&
                      selectedRange.endDate &&
                      day >= selectedRange.startDate &&
                      day <= selectedRange.endDate
                    ? "white"
                    : "black",
                backgroundColor:
                  day < today
                    ? "#f0f0f0" // Gray background for disabled past dates
                    : selectedRange.startDate &&
                      selectedRange.startDate.toDateString() === day.toDateString()
                    ? "#1faae3" // Highlight only the selected start date
                    : selectedRange.startDate &&
                      selectedRange.endDate &&
                      day >= selectedRange.startDate &&
                      day <= selectedRange.endDate
                    ? "#1faae3"
                    : "white",
                cursor: day < today ? "" : "pointer"
              }}
              onClick={() => handleDayClick(day)}>
              {day.getDate()}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
