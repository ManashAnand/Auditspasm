"use client"
import React, { useEffect } from 'react'
import AuditCard from '../component/AuditCard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const Audit = () => {



  const state = useSelector(state => state.user)
  console.log(state)
  
  const router = useRouter()

  useEffect(() => {
    if(Object.keys(state).length == 0 ){
      router.push("/")
    } 
  },[])
  
  return (
    <>
    <section className="px-10  py-10 sm:px-20 text-gray-600 body-font bg-[#fefae0]  sm:grid grid-cols-3 grid-rows-2 gap-2 flex flex-col">
        <AuditCard formUrl={"https://forms.gle/REnBQP4KKG9H49fx5"} title={"Year 2021-2022"} descp={"Fill the form for fiscal year 2021-2022 for odd session"}/>
        <AuditCard formUrl={"https://forms.gle/Sqwdv5SgGiEpHFhE7"} title={"Year 2021-2022"} descp={"Fill the form for fiscal year 2021-2022 for even session"}/>
        <AuditCard formUrl={"https://forms.gle/BxEip4gCfJa2qQZU7"} title={"Year 2022-2023"} descp={"Fill the form for fiscal year 2022-2023 for odd session"}/>
        <AuditCard formUrl={"https://forms.gle/4xa41P646GtpEngP8"} title={"Year 2022-2023"} descp={"Fill the form for fiscal year 2022-2023 for even session"}/>
      </section>
    </>
  )
}

export default Audit
