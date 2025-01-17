"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/slices/UserSlice';
import iqac from '../assets/iqac2.png'
import Image from 'next/image';

const Login = () => {
    const router = useRouter()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
  const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/login", {
            email,password
           });
           if(res.status==200){
            console.log(res.data.user)
            
            dispatch(logIn(res?.data?.userDoc))
            router.push("/")
        }


    }

  return (
    <>
<section className="gradient-form h-full bg-neutral-700 flex justify-center items-center">
  <div className="container h-full p-10">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* Left column container*/}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/*Logo*/}
                <div className="text-center">
                  <Image className="mx-auto w-48" src={iqac} alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                  INTERNAL QUALITY ASSURANCE CELL
                  </h4>
                </div>
                <form>
                  <p className="mb-4">Please login to your account</p>
                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <input 
                    type="text" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   " 
                    id="exampleFormControlInput1" 
                    placeholder="Email " 
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                    />
                  </div>
                  {/*Password input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                  <input 
                    type="password" 
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   " 
                    id="exampleFormControlInput1" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
                    />
                  </div>
                  {/*Submit button*/}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}
                    onClick={handleLogin}
                    >
                      Log in
                    </button>
                    {/*Forgot password link*/}
                  </div>
                  {/*Register button*/}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Dont have an account?</p>
                    <button type="button" className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light"
                    onClick={() => router.push('/register')}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right column container with background and description*/}
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a audit committee
                </h4>
                <p className="text-sm">
                We transcend the role of a mere audit committee. Our commitment extends beyond financial oversight to encompass strategic planning, risk management, and ethical governance. We are dedicated to contributing to the organization&apos;s holistic success and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Login
