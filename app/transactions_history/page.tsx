import SearchTrasaction from "@/components/transactions_history/search_transaction";
import TransactionTable from "@/components/transactions_history/transaction_table";
import Select from "@/ui/select";
import React from "react";

interface searchTransactionSelector {
  name: string;
}

const selector: searchTransactionSelector[] = [
  {
    name: "Recent",
  },
  {
    name: "Month",
  },
];

interface Transactions {
  transactionId: number;
  receverName: string;
  receverId: number;
  date: string;
  action: JSX.Element;
  path: string;
}

const body: Transactions[] = [
  {
    transactionId: 54651,
    receverName: "Different size for clothes",
    receverId: 6545,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 text-center cursor-pointer w-max">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
  {
    transactionId: 35431,
    receverName: "childer, Watches",
    receverId: 35431,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 w-max text-center cursor-pointer">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
];

const Transactions = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <div className="w-full pt-[100px] pl-[90px] pr-[20px] pb-[20px]">
        <div className="mb-5 xl:mb-0">
          <h1 className="text-3xl font-semibold">Transactions History</h1>
        </div>
        <div className="bg-white shadow-md rounded-md p-5 my-10 border-blue-300 border-2">
          <SearchTrasaction />
          <div className="flex w-full gap-5 my-5 items-center">
            <p className="w-[70px] text-[12px]">Stored By</p>
            <div className="flex w-full xl:w-[400px] gap-3">
              {selector?.map((item, index) => (
                <Select key={index} name={item?.name} />
              ))}
            </div>
          </div>
          <div className="my-10 ">
            <TransactionTable body={body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
