/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import StudioDetailsBody from "./Components/StudioDetailsBody"
import { useDispatch } from "react-redux"
import { GetStudiosAction } from "../../store/action/StudiosAction"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"

export default function StudioDetailsScreen() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const getStudios = async () => {
    await GetStudiosAction(dispatch, { id: id })
    setLoading(false)
  }

  useEffect(() => {
    getStudios()
  }, [])

  return (
    <div>
      <div className="hide-mobile">
        <Header />
      </div>
      {loading ? <Loading /> : <StudioDetailsBody />}
    </div>
  )
}
