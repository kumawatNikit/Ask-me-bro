"use client";
import React, { useState } from "react";
import { ListSettings } from "@styled-icons/remix-line";
import Banner from "./component/banner";
import DescriptionPart from "./component/DescriptionPart";
import RightSideLayout from "./component/RightSideLayout";

const YourPageComponent = () => {
  const [layout, setLayout] = useState("default");

  const handleIconClick = () => {
    if (layout === "default") {
      setLayout("leftbar");
    } else if (layout === "leftbar") {
      setLayout("fullwidth");
    } else {
      setLayout("default");
    }
  };

  return (
    <>
      <div className="container mx-auto px-md-4">
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:py-4 lg:px-20 hidden md:block">
          <div className="text-right col-span-12">
            <ListSettings
              height={30}
              width={30}
              onClick={handleIconClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Layouts */}
        {layout === "default" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
            <div className="col-span-1 md:col-span-3">
              <DescriptionPart />
            </div>
            <div className="col-span-1">
              <RightSideLayout />
            </div>
          </div>
        )}

        {layout === "leftbar" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
            <div className="col-span-1">
              <RightSideLayout />
            </div>
            <div className="col-span-1 md:col-span-3">
              <DescriptionPart />
            </div>
          </div>
        )}

        {layout === "fullwidth" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
            <div className="col-span-12">
              <DescriptionPart />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

YourPageComponent.displayName = "YourPageComponent";

export default YourPageComponent;
