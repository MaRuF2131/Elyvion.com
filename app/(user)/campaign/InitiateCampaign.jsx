import React from 'react';

export default function InitiateCampaign() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-4 md:px-0 font-sans text-slate-800">
      {/* Main Container */}
      <main className="w-full max-w-3xl">
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-center mb-8 text-slate-900">
          Initiate Campaign
        </h1>

        {/* Campaign Type Label */}
        <div className="mb-3 text-sm font-medium">
          <span className="text-slate-900">Campaign Type: </span>
          <span className="text-slate-600 font-normal">
            Golden Egg Campaign
          </span>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Card 1: Account Balance */}
          <div className="border border-slate-300 rounded-xl p-5 bg-white flex flex-col justify-center h-28 shadow-sm">
            <p className="text-xs text-slate-400 mb-1">Account Balance</p>
            <p className="text-xl font-bold text-slate-900">RM -6,965.00</p>
            <p className="text-xs text-red-500 mt-1 font-medium">
              Insufficient Balance
            </p>
          </div>

          {/* Card 2: Number of Campaigns */}
          <div className="border border-slate-300 rounded-xl p-5 bg-white flex flex-col justify-center h-28 shadow-sm">
            <p className="text-xs text-slate-400 mb-1">Number of Campaigns</p>
            <p className="text-xl font-bold text-slate-900">30/30</p>
          </div>

          {/* Card 3: Today's Commission */}
          <div className="border border-slate-300 rounded-xl p-5 bg-white flex flex-col justify-center h-28 shadow-sm">
            <p className="text-xs text-slate-400 mb-1">Today's Commission</p>
            <p className="text-xl font-bold text-slate-900">RM 0.00</p>
          </div>

          {/* Card 4: Withdrawal Amount */}
          <div className="border border-slate-300 rounded-xl p-5 bg-white flex flex-col justify-center h-28 shadow-sm">
            <p className="text-xs text-slate-400 mb-1">Withdrawal Amount</p>
            <p className="text-xl font-bold text-slate-900">RM 24,427.50</p>
          </div>

          {/* Card 5: Trial Balance (Full Width) */}
          <div className="md:col-span-2 border border-slate-300 rounded-xl p-5 bg-[#FAF9F0] flex items-center justify-between h-20 shadow-sm">
            <p className="text-xs text-slate-500">Trial Balance</p>
            <p className="text-lg font-bold text-slate-900">RM 0.00</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <button className="w-full max-w-full md:max-w-2xl bg-[#F6BC48] hover:bg-[#e0ab41] text-white font-semibold py-3 rounded-full shadow-sm transition-colors duration-200">
            Insufficient Balance
          </button>
        </div>
      </main>
    </div>
  );
}
