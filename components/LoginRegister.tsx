"use client";
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FormRegister from './FormRegister';
import FormLogin from './FormLogin';
import Toast from 'react-bootstrap/Toast';

type Props = {}

function LoginRegister({ }: Props) {

    const [isLogin, setIsLogin] = useState(true);
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [mensajeError, setMensajeError] = useState('');

    const toggleShowA = () => setShowA(!showA);

    const toggleShowB = () => setShowB(!showB);

    const mensajeErrorFunction = (error: string) => {
        setMensajeError(error);
    }

    const formRegistro = () => {
        setIsLogin(false)
    }

    const formLogin = () => {
        setIsLogin(true)
    }

    return (
        <div className="flex flex-col w-full items-center justify-center lg:w-1/2">
            <AnimatePresence mode="wait">
                {isLogin ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35 }}
                        className="text-center w-full"
                    >
                        <FormLogin onClick={formRegistro} funciones={{mensajeError: mensajeErrorFunction, toggleShowB  }}/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="register"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.35 }}
                        className=" text-center w-full"
                    >
                        <FormRegister funciones={{
                            mensajeError: mensajeErrorFunction,
                            toggleShowA,
                            toggleShowB,
                            formLogin
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>
            <Toast show={showA} onClose={toggleShowA} className='mt-10'>
                <Toast.Header className="[background-color:#16ae63!important] text-white">
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Planit</strong>
                </Toast.Header>
                <Toast.Body className='bg-[#F7F9F8]'>Te has registrado correctamente!</Toast.Body>
            </Toast>
            <Toast show={showB} onClose={toggleShowB} className='mt-10'>
                <Toast.Header className="[background-color:#dc3545!important] text-white">
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Planit</strong>
                </Toast.Header>
                <Toast.Body className='bg-[#F7F9F8]'>Error: {mensajeError}</Toast.Body>
            </Toast>
        </div>
    )
}

export default LoginRegister