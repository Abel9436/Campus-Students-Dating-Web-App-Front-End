import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from '../component/Home'
import LandingPage from '../pages/LandingPage/LandingPage'
import SignUp from '../pages/Auth/SignUp'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import VerifyEmail from '../pages/Auth/VerifyEmail'
import VerificationSuccess from '../pages/Auth/VerificationSuccess'
import Chat from '../pages/Chat'
import authService from '../services/authService'

const PrivateRoute = ({ children }) => {
    const user = authService.getCurrentUser();
    return user ? children : <Navigate to="/login" />;
};

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/verification-success" element={<VerificationSuccess />} />
            <Route path="/chat" element={
                <PrivateRoute>
                    <Chat />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default Router