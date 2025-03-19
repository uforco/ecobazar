import React, { Suspense } from 'react'
import Orderhistory from './list_Items/Orderhistory'

interface Props {}

function Page(props: Props) {
  const {} = props

  return (
    <Suspense fallback={ <div>Loading... suspe</div> } >
      <div className=" border rounded-lg">
        <div className=" flex justify-between w-full p-4 px-5 ">
          <h2 className=" font-poppins font-semibold ">Order History</h2>
        </div>
        <Orderhistory></Orderhistory>
      </div>
    </Suspense>
  )
}

export default Page
