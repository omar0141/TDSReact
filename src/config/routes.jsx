import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginScreen from "../screens/login/LoginScreen"
import AccessLayout from "../components/AccessLayout"
import RegisterScreen from "../screens/register/RegisterScreen"
import HomeScreen from "../screens/Home/HomeScreen"
import StudioDetailsScreen from "../screens/StudioDetails.jsx/StudioDetailsScreen"
import BookStudioScreen from "../screens/BookStudio/BookStudioScreen"
import ReservesScreen from "../screens/Reserves/ReservesScreen"
import NotFoundPage from "../screens/NotFoundPage/NotFoundPage"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen />} />
        <Route path="/studios" element={<HomeScreen />} />
        <Route path="/login" element={<AccessLayout top="10%" body={<LoginScreen />} />} />
        <Route path="/register" element={<AccessLayout top="5%" body={<RegisterScreen />} />} />
        <Route path="/studio_details/:id" element={<StudioDetailsScreen />} />
        <Route path="/book_studio/:id" element={<BookStudioScreen />} />
        <Route path="/bookings" element={<ReservesScreen />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
