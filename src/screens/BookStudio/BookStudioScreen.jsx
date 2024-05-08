/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import DateRangePicker from "../../components/DateRangePicker"
import Header from "../../components/Header/Header"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { GetStudiosAction } from "../../store/action/StudiosAction"
import Loading from "../../components/Loading"
import { formatDayMonth, formatDate } from "../../config/utils/DateFormats"
import { toast } from "react-toastify"
import MyApi from "../../config/apis"
import { CreateReserveAction } from "../../store/action/ReservesAction"

export default function BookStudioScreen() {
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null
  })
  const [days, setDays] = useState(0)
  const [dateRange, setDateRange] = useState("")
  const { studios } = useSelector((state) => state.Studios)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const navigate = useNavigate()
  //
  const handleStartDateChange = (date) => {
    setSelectedRange(date)
    const diffTime = Math.abs(date.startDate - date.endDate)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
    if (date.startDate) {
      var startDate = formatDayMonth(date.startDate.toLocaleDateString())
      setDateRange(`${startDate} -`)
    }
    if (date.endDate) {
      var endDate = formatDayMonth(date.endDate.toLocaleDateString())
      setDateRange(`${startDate} - ${endDate}`)
    }
    if (date.startDate && date.endDate) {
      setDays(diffDays)
    } else {
      setDays(0)
    }
  }
  //
  const getStudios = async () => {
    await GetStudiosAction(dispatch, { id: id })
    setLoading(false)
  }
  useEffect(() => {
    getStudios()
  }, [])
  //
  const bookStudio = async () => {
    if (days !== 0) {
      if (days > studios[0].maximum_daily_capacity) {
        toast.error(`You can only book ${studios[0].maximum_daily_capacity} days at a time`, {
          position: "top-center"
        })
        return
      }
      setSubmitLoading(true)
      const data = {
        from_date: formatDate(selectedRange.startDate.toLocaleDateString()),
        to_date: formatDate(selectedRange.endDate.toLocaleDateString()),
        studio_id: studios[0].id
      }
      await CreateReserveAction(navigate, data)
      setSubmitLoading(false)
    } else {
      toast.error("Please select a date range", { position: "top-center" })
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  }
  if (studios.length === 0) {
    return (
      <>
        <Header />
        <div
          style={{ height: "85vh" }}
          className="d-flex align-items-center justify-content-center">
          <h2>No Data Found</h2>
        </div>
      </>
    )
  }
  if (MyApi.userType !== "customer") {
    return (
      <>
        <Header />
        <div
          style={{ height: "85vh" }}
          className="d-flex align-items-center justify-content-center">
          <h4>Only customer who can book studio</h4>
        </div>
      </>
    )
  }
  return (
    <div className="w-100">
      <Header />
      <Container className="pt-3">
        <div style={{ fontSize: 14 }}>Step 2 of 2</div>
        <div style={{ fontSize: 29, fontWeight: 600 }}>Availability</div>
        <Row className="g-0 d-flex justify-content-center pt-2">
          <DateRangePicker onDateChange={handleStartDateChange} />
          <div className="bg-white rounded" style={{ marginTop: 40 }}>
            <Row className="pt-3 px-3">
              <Col xs={3} md={2} lg={1}>
                <img className="rounded" width={70} height={70} src="./image6.png" alt="" />
              </Col>
              <Col className="align-self-center" xs={9} md={10} lg={11}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{studios[0].name}</div>
                <div style={{ fontSize: 15, fontWeight: 400 }}>123 Road, Egypt</div>
              </Col>
            </Row>
            <hr style={{ color: "grey" }} />
            <div style={{ fontSize: 14, fontWeight: 600 }} className="pb-3 px-3">
              <div>Total Days: {days} days</div>
              <div>Dates: {dateRange}</div>
            </div>
          </div>
        </Row>
        <div className="text-end w-100 py-3">
          {!submitLoading ? (
            <Button onClick={bookStudio} style={{ minWidth: 125 }} variant="primary">
              Book
            </Button>
          ) : (
            <Button style={{ minWidth: 125 }} variant="primary" disabled>
              <img height={40} src={"./loading.gif"} alt="" />
            </Button>
          )}
        </div>
      </Container>
    </div>
  )
}
