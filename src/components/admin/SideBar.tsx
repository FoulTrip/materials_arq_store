import { pagesTypes } from "@/types/Dashboard";
import React, { useState } from "react";
import {
  TbChevronDown,
  TbChevronUp,
  TbClockDollar,
  TbCube,
  TbPuzzleFilled,
  TbShoppingCartPlus,
  TbStack2Filled,
  TbUsers,
} from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

function SideBar({
  setOption,
  option,
}: {
  setOption: (option: pagesTypes) => void;
  option: pagesTypes;
}) {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 900px)" });
  const [openOptionReq, setOpenOptionReq] = useState<boolean>(false);

  return (
    <div className="md:w-56 w-16 bg-gray-50 h-dvh p-2 flex flex-col gap-2 border-r border-gray-200">
      <div className="md:flex justify-start p-4 gap-1">
        <div className="grid place-content-center">
          <TbCube size={25} />
        </div>
        {isTabletOrMobile && <h3>ArquiApp</h3>}
      </div>

      <div
        className={`md:flex justify-start p-3 gap-1 rounded-md cursor-pointer ${
          option === "dashboard" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setOption("dashboard")}
      >
        <div className="grid place-content-center">
          <TbCube size={20} className="text-blue-500" />
        </div>
        {isTabletOrMobile && (
          <h3 className="grid place-content-center font-normal">Dashboard</h3>
        )}
      </div>

      <div
        className={`md:flex flex justify-between p-3 gap-1 rounded-md cursor-pointer ${
          option === "requests" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => {
          setOpenOptionReq(!openOptionReq);
        }}
      >
        <div className="flex flex-row gap-1">
          <div className="grid place-content-center">
            <TbClockDollar size={20} className="text-blue-500" />
          </div>
          {isTabletOrMobile && (
            <h3 className="grid place-content-center">Peticiones</h3>
          )}
        </div>
        {isTabletOrMobile && (
          <div className="grid place-content-center">
            {!openOptionReq && <TbChevronDown />}
            {openOptionReq && <TbChevronUp />}
          </div>
        )}
      </div>

      {openOptionReq && (
        <>
          <div
            className={`md:flex justify-start p-3 gap-1 rounded-md cursor-pointer ${
              option === "materials"
                ? "bg-gray-200"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setOption("materials")}
          >
            <div className="grid place-content-center">
              <TbPuzzleFilled size={20} className="text-blue-500" />
            </div>
            {isTabletOrMobile && (
              <h3 className="grid place-content-center">Materiales</h3>
            )}
          </div>

          <div
            className={`md:flex justify-start p-3 gap-1 rounded-md cursor-pointer ${
              option === "cuts" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setOption("cuts")}
          >
            <div className="grid place-content-center">
              <TbStack2Filled size={20} className="text-blue-500" />
            </div>
            {isTabletOrMobile && (
              <h3 className="grid place-content-center">Cortes</h3>
            )}
          </div>
        </>
      )}

      <div
        className={`md:flex justify-start p-3 gap-1 rounded-md cursor-pointer ${
          option === "clients" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setOption("clients")}
      >
        <div className="grid place-content-center">
          <TbUsers size={20} className="text-blue-500" />
        </div>
        {isTabletOrMobile && (
          <h3 className="grid place-content-center">Usuarios</h3>
        )}
      </div>

      <div
        className={`md:flex justify-start p-3 gap-1 rounded-md cursor-pointer ${
          option === "inventory" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setOption("inventory")}
      >
        <div className="grid place-content-center">
          <TbShoppingCartPlus size={20} className="text-blue-500" />
        </div>
        {isTabletOrMobile && (
          <h3 className="grid place-content-center">Inventario</h3>
        )}
      </div>
    </div>
  );
}

export default SideBar;
