import React from 'react'
import Banner from '../component/banner'
import DescriptionPart from '../component/DescriptionPart'
import RightSideLayout from '../component/RightSideLayout'

const YourPageComponent = () => {
  return (
    <div className="container-fluid">
      <Banner />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
        <div className="col-span-1 md:col-span-3">
          <DescriptionPart />
        </div>
        <div className="col-span-1">
          <RightSideLayout />
        </div>
      </div>
    </div>
  )
}

YourPageComponent.displayName = 'YourPageComponent';

export default YourPageComponent;