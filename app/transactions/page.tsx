import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/add_transaction-button";

const TransactionsPage = async () => {
  //  const { userId } = await auth()
  //  console.log("🚀 ~ TransactionsPage ~ userId:", userId)
  // if (!userId) {
  //   redirect("/")
  // }
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
