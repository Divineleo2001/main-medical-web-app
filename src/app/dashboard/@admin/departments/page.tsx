import DepartmentsList from '@/components/admin/departments/DepartmentsList'
import Loading from '@/components/shared/Loading'
import React, { Suspense } from 'react'

const DepartmentPage = () => {
  return (
    <>
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1>Hospitals</h1>
        </div>
          <Suspense fallback={<Loading />}>
          <DepartmentsList />
          </Suspense>
      </div>
    </main>
  </>
  )
}

export default DepartmentPage