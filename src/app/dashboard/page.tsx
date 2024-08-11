"use client";

import BtnCreateOrder from "@/components/dashboard/btns/btnCreateOrder";
import AllRequests from "@/components/dashboard/lists/allRequests";
import FormOrder from "@/components/order/formOrder";
import React, { useState } from "react";
import styles from "./page.module.css";

function DashboardComponent() {
  const [listRequests, setListRequests] = useState<boolean>(true);
  const [orderType, setOrderType] = useState("all");

  const handlerFormRequest = () => {
    setListRequests(!listRequests);
  };

  return (
    <main className={styles.mainForm}>
      <div className="flex flex-row justify-between mb-5">
        <h1 className="text-3xl font-extrabold grid place-content-center dark:text-white">
          Tus Pedidos
        </h1>
        <BtnCreateOrder
          openEvent={handlerFormRequest}
          statusOpen={listRequests}
        />
      </div>

      {listRequests && (
        <>
          <div className="flex flex-row gap-4">
            <p
              onClick={() => setOrderType("all")}
              className={`cursor-pointer ${
                orderType === "all" ? "border-b-2 border-gray-500" : ""
              }`}
            >
              Tus pedidos
            </p>
            <p
              onClick={() => setOrderType("materials")}
              className={`cursor-pointer ${
                orderType === "materials" ? "border-b-2 border-gray-500" : ""
              }`}
            >
              Tienda de materiales
            </p>
          </div>

          {orderType === "all" && <AllRequests />}
        </>
      )}
      {!listRequests && <FormOrder />}
    </main>
  );
}

export default DashboardComponent;
