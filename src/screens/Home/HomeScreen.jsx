/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import BottomBar from "../../components/BottomBar/BottomBar"
import StudiosBody from "./Components/StudiosBody"
import { useDispatch } from "react-redux"
import { GetStudiosAction } from "../../store/action/StudiosAction"
import Loading from "../../components/Loading"

export default function HomeScreen() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const getStudios = async () => {
    await GetStudiosAction(dispatch)
    setLoading(false)
  }
  useEffect(() => {
    getStudios()
  }, [])

  return (
    <div>
      <Header />
      {loading ? <Loading /> : <StudiosBody />}
      <BottomBar />
    </div>
  )
}
