import React from "react";
import { TbCubePlus, TbCubeOff } from "react-icons/tb";

function BtnCreateOrder({
  openEvent,
  statusOpen,
}: {
  openEvent: () => void;
  statusOpen: boolean;
}) {
  return (
    <>
      <button
        onClick={openEvent}
        type="button"
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
      >
        <div className="mr-1">
          {!statusOpen && <TbCubeOff size={20} />}
          {statusOpen && <TbCubePlus size={20} />}
        </div>
        {!statusOpen && "Cancelar"}
        {statusOpen && "Crear pedido"}
      </button>
    </>
  );
}

export default BtnCreateOrder;
