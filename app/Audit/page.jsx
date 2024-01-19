import React from 'react'
import AuditCard from '../component/AuditCard'

const Audit = () => {
  return (
    <>
    <section className="px-10  py-10 sm:px-20 text-gray-600 body-font bg-[#fefae0]  sm:grid grid-cols-3 grid-rows-2 gap-2 flex flex-col">
        <AuditCard/>
        <AuditCard/>
        <AuditCard/>
        <AuditCard/>
        <AuditCard/>
        <AuditCard/>
      </section>
    </>
  )
}

export default Audit
