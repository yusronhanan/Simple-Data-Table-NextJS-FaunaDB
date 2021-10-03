import React, { useState, useEffect } from "react";
import Heading from "../Atoms/Heading";
import SectionWrapper from "../Molecules/SectionWrapper";
import ContentWrapper from "../Molecules/ContentWrapper";
import AddOrder from "../Organisms/AddOrder";
import DataTable, {
  ConvertToIDR,
  StatusPayment,
  StatusFulfillment,
  PaymentColumnFilter,
  ConvertUseMoment,
} from "../Molecules/DataTable";

export default function DataOrder() {
  let [shows, setShows] = useState([]);

  useEffect(async () => {
    let showData = await fetch("/api/getOrders");
    let res = await showData.json();
    setShows(res.data);
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Invoice Number",
        accessor: "invoice_number",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        id: "payment_status",
        Header: "Payment Status",
        accessor: (d) => {
          return d.payment_status ? "Fully Paid" : "Unpaid";
        },
        Cell: StatusPayment,
        Filter: PaymentColumnFilter, // new
        filter: "includes",
      },
      {
        id: "fulfillment_status",
        Header: "Fulfillment Status",
        accessor: (d) => {
          return d.fulfillment_status ? "Fulfilled" : "Unfulfilled";
        },
        Cell: StatusFulfillment,
      },
      {
        Header: "Total Amount",
        accessor: "total_amount",
        Cell: ConvertToIDR,
      },
      {
        Header: "Date",
        accessor: "created_at",
        Cell: ConvertUseMoment,
      },
    ],
    []
  );

  return (
    <SectionWrapper>
      {/* Card list container */}
      <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-700">
        {/* Top section */}
        <Heading text="All Orders" />
        <AddOrder setShows={setShows} />
      </div>
      <ContentWrapper>
        {shows.length ? (
          <DataTable columns={columns} data={shows} />
        ) : (
          "Loading..."
        )}
      </ContentWrapper>
    </SectionWrapper>
  );
}
