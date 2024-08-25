import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Transfer = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  const currentPage = Number(page as string) || 1;
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title={"Payement Transfer"}
        subtext={
          "Please provide andy specific details or notes related to the payment transfer"
        }
      />
      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default Transfer;
