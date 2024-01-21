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
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
        <AuditCard formUrl={"https://forms.gle/6GENJDVFqczJyLocA"}/>
      </section>
    </>
  )
}

export default Audit
