import React from 'react';

// Mock data to represent the stocks in the watchlist.
// In a real application, this would come from an API.
const watchlistData = [
  {
    name: 'INFY',
    exchange: 'BSE',
    change: -36.80,
    percentageChange: -2.37,
    price: 1515.70,
  },
  {
    name: 'TCS',
    exchange: 'BSE',
    change: -15.80,
    percentageChange: -0.50,
    price: 3134.35,
  },
  {
    name: 'ONGC',
    exchange: '',
    change: -4.54,
    percentageChange: -1.85,
    price: 240.29,
  },
  {
    name: 'HINDUNILVR',
    exchange: 'BSE',
    change: -21.60,
    percentageChange: -0.89,
    price: 2415.10,
  },
  {
    name: 'GOLDBEES',
    exchange: '',
    change: -0.20,
    percentageChange: -0.24,
    price: 82.10,
  },
];

const Sidebar = () => {
  const activeTab = 1; // Example of an active tab

  return (
    // The main container for the sidebar.
    // It's fixed to the left of the screen, starting below the header (top-16).
    // A flex column layout is used to structure its children.
    <aside className='fixed top-8 left-0 h-[calc(100vh-4rem)] w-123 bg-white border-r border-gray-200 flex flex-col'>
      
      {/* Top section of the sidebar containing search and watchlist */}
      <div className="flex-grow">
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search eg: infy bse, nifty fut, index fund, et"
              className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
              <span className="text-xs text-gray-400">Ctrl + K</span>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-6h-2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        {/* Watchlist Header */}
        <div className="px-4 py-2 flex justify-between items-center">
          <span className="text-xs text-gray-500">Watchlist 1 (5 / 250)</span>
          <button className="text-xs text-blue-600 hover:text-blue-800">+ New group</button>
        </div>

        {/* Stock List */}
        <div>
          {watchlistData.map((stock, index) => (
            <div key={index} className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer border-t border-gray-100">
              <div className="flex items-baseline">
                <span className={`text-sm font-medium ${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`}>{stock.name}</span>
                {stock.exchange && <span className="ml-2 text-xs text-gray-400">{stock.exchange}</span>}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-right">
                  <span className={`${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`}>{stock.change.toFixed(2)}</span>
                  <span className={`${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`}>{stock.percentageChange.toFixed(2)}%</span>
                   <svg className={`h-4 w-4 ${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className={`w-20 text-right font-semibold text-sm ${stock.change < 0 ? 'text-red-500' : 'text-green-500'}`}>{stock.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Watchlist Tabs */}
      <div className="flex items-center border-t border-gray-200">
        {[1, 2, 3, 4, 5, 6, 7].map(tabNumber => (
          <button 
            key={tabNumber}
            className={`px-4 py-2 text-sm ${activeTab === tabNumber ? 'text-orange-500 border-t-2 border-orange-500' : 'text-gray-500'}`}
          >
            {tabNumber}
          </button>
        ))}
        <button className="px-4 py-2 text-gray-500">
          +
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
