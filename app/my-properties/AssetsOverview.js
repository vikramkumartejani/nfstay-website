export default function AssetsOverview() {
  return (
    <div
      className="bg-white p-6 rounded-[14px] flex-grow"
      style={{
        boxShadow: `
      0px 18.1px 54.29px -3.39px #00000006,
      0px 5.78px 17.33px -2.55px #0000000F,
      0px 2.18px 6.55px -1.7px #00000012,
      0px 0.72px 2.16px -0.85px #00000012
  `,
      }}
    >
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Assets Overview</h2>

      {/* Properties Section */}
      <div className="py-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10V4a1 1 0 011-1h6a1 1 0 011 1v6m-9 10h12a1 1 0 001-1v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6a1 1 0 001 1z"
                />
              </svg>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                Properties
              </h3>
              <p className="text-xs text-purple-600">Current Price: $501</p>
            </div>
          </div>
          {/* Amount */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-gray-800">$27,4433.87</h3>
            <p className="text-xs text-gray-400">Amount: 32,236.77</p>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="relative pt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: "53%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
            ></div>
          </div>
          <div className="text-sm text-gray-400 mt-2">53%</div>
        </div>
      </div>

      {/* LP Token Section */}
      <div className="py-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              {/* Token Icon Placeholder */}
              <span className="text-white font-bold">LP</span>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">LP Token</h3>
              <p className="text-xs text-purple-600">Current Price: $2.18</p>
            </div>
          </div>
          {/* Amount */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-gray-800">$0</h3>
            <p className="text-xs text-gray-400">Amount: 0</p>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="relative pt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: "0%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
            ></div>
          </div>
          <div className="text-sm text-gray-400 mt-2">0%</div>
        </div>
      </div>

      {/* Stay Token Section */}
      <div className="py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Icon */}
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              {/* Stay Icon Placeholder */}
              <span className="text-white font-bold">ST</span>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Stay</h3>
              <p className="text-xs text-purple-600">Current Price: $0.00014</p>
            </div>
          </div>
          {/* Amount */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-gray-800">$0</h3>
            <p className="text-xs text-gray-400">Amount: 0</p>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="relative pt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: "0%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
            ></div>
          </div>
          <div className="text-sm text-gray-400 mt-2">0%</div>
        </div>
      </div>
    </div>
  );
}
