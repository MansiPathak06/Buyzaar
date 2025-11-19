import React from 'react';
import { Store, Users, Package, TrendingUp, Clock, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BuyzaarMartFranchiseModels = () => {
  const models = [
    {
      name: 'FICO',
      title: 'Franchise Invested Company Operated',
      description: 'Franchisee provides capital investment for store setup and owns the outlet. Company manages all operations.',
      features: [
        'Franchisee Provides Capital Investment for store setup and owns the outlet.',
        'Franchisee is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs, compliance is ensured by our team.',
        'Franchisee is responsible for providing staffing, and store operational expenditure.',
        'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
        'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
        'Franchisor is responsible for timely delivering stock to the franchise at a fixed gross margin (18-20%) for the franchisee.',
        'No freight charges applicable to the franchise on delivery.',
        'Franchisor is responsible for handling backend operations such as managing inventory and supply chain, providing RTV/RTW service to the franchise in order to prevent its loss due to damage and expiry, conducting regular store surveys and audits to ensure compliance to our operating procedures and keep a check for pilferage, shrinkage, expiry and damage.',
        'Franchisor is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock on the right time to prevent wastage.',
        'No royalty on sales for the first 6 months',
        '2% royalty on sales after the completion of 6 months; if and only if, the franchise reaches the in-store sales target.',
        'Franchisor is responsible for BTL marketing activities, and promotional campaigns.',
        '40-60 Ratio of Branded and Non-Branded products (D2C Brands)',
      ],
    },
    {
      name: 'FOFO',
      title: 'Franchise Owned Franchise Operated',
      description: 'Franchisee invests and operates the store independently.',
      features: [
        'Franchisee Provides Capital Investment for store setup and owns the outlet.',
        'Franchisee is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs.',
        'Franchisee is responsible for providing staffing, and other store operational expenditure.',
        'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
        'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
        'Franchisor is only responsible for providing the first stock to the franchise at the time of store launch at fixed gross margin (18-20%) for the franchisee. Only for the first time',
        'Franchisee is responsible for communicating and dealing with vendors, managing purchase, negotiating margins, managing inventory, managing RTV/RTW to cut losses due to expiry and damage and keep a check for pilferage, shrinkage, expiry and damage.',
        'Franchisee is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock on the right time to prevent wastage.',
        'The Franchisor can help the franchisee set vendors and negotiate margin, if the franchisee requires so.',
        'The franchisee can purchase stock from the franchisor if it wishes to, making the franchisor the franchisee\'s stock vendor.',
        'In case the FOFO franchisee decides to purchase stock from the franchisor, the franchisor shall provide RTV/RTW to the franchisee.',
        'In case the FOFO franchisee decides to purchase stock from the franchisor, the franchisee shall be liable to pay freight charges as applicable.',
        '2% royalty on sales since the first month.',
        '40-60 Ratio of Branded and Non-Branded products (D2C Brands)',
      ],
    },
    {
      name: 'FICO Premium',
      title: 'Franchise Invested Company Operated (Premium)',
      description: 'Premium store with superior ambience and exclusive product mix.',
      features: [
        'Franchisee Provides Capital Investment for store setup, store operational expenditure (Electricity, water) and owns the outlet.',
        'Franchisor is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs.',
        'Franchisor is responsible for providing staffing.',
        'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
        'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
        'Franchisor is responsible for timely delivering stock to the franchise at a fixed gross margin (18-20%) for the franchisee.',
        'No freight charges applicable to the franchise on delivery.',
        'Franchisor is responsible for handling backend operations such as managing inventory and supply chain, providing RTV/RTW service to the franchise in order to prevent its loss due to damage and expiry, conducting regular store surveys and audits to ensure compliance to our operating procedures and keep a check for pilferage, shrinkage, expiry and damage.',
        'Franchisor is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock at the right time to prevent wastage.',
        'No royalty on sales for the first 6 months',
        '2% royalty on sales after the completion of 6 months; if and only if, the franchise reaches the in-store sales target.',
        'Franchisor is responsible for BTL marketing activities, and promotional campaigns.',
        'Store well equipped (More assets)',
        'Premium in store ambience/feel (Interior Design)',
        '50-50 Ratio of Branded and Non-Branded products (D2C Brands)',
      ],
    },
  ];

  const storeFormats = [
    {
      name: 'MINI MART',
      size: '600-1000 SQFT',
      products: [
        'Personal Care',
        'Beverages',
        'Grocery & Staples',
        'Homecare and Hygiene',
        'Stationery',
        'Snacks and Biscuits',
      ],
    },
    {
      name: 'SUPER MART',
      size: '1000-3000 SQFT',
      products: [
        'Personal Care',
        'Beverages',
        'Grocery & Staples',
        'Homecare and Hygiene',
        'Stationery',
        'Snacks and Biscuits',
        'Dairy Items',
        'F & V',
      ],
    },
    {
      name: 'HYPER MART',
      size: '3000-8000 SQFT',
      products: [
        'Personal Care',
        'Beverages',
        'Grocery & Staples',
        'Homecare and Hygiene',
        'Stationery',
        'Snacks and Biscuits',
        'Dairy Items',
        'F & V',
        'Gifts & Toys',
        'Frozen Ready to Eat',
      ],
    },
  ];

  const comparisonTable = [
    { feature: 'Investment by', fico: 'Franchisee', fofo: 'Franchisee', ficoPremium: 'Franchisee' },
    { feature: 'Operations by', fico: 'Company', fofo: 'Franchisee', ficoPremium: 'Company' },
    { feature: 'In-store Operations', fico: 'Company + Franchisee ', fofo: 'Franchisee', ficoPremium: 'Company' },
    { feature: 'Staffing', fico: 'Franchisee', fofo: 'Franchisee', ficoPremium: 'Company' },
    { feature: 'Initial Stock Supply', fico: 'Company', fofo: 'Company', ficoPremium: 'Company ' },
    { feature: 'Ongoing Stock Sourcing', fico: 'Company', fofo: 'Franchisee or Company', ficoPremium: 'Company' },
    { feature: 'Freight for Stock', fico: 'None', fofo: 'Franchisee (if from company)', ficoPremium: 'None' },
    { feature: 'Royalty', fico: '2% after 6 months on target basis', fofo: '2% ', ficoPremium: '2% after 6 months on target basis' },
    { feature: 'Marketing Support', fico: 'Yes (Company BTL)', fofo: 'Yes (Company)', ficoPremium: 'Yes (Company BTL)' },
    { feature: 'Store Ambience', fico: 'Standard', fofo: 'Standard', ficoPremium: 'Premium' },
    { feature: 'Product Mix', fico: '40-60 Branded/D2C', fofo: '40-60 Branded/D2C', ficoPremium: '50-50 Branded/D2C' },
    { feature: 'Ideal For', fico: 'Semi-active Investors', fofo: 'Owner-operators', ficoPremium: 'Passive Investors' },
    { feature: 'Margin', fico: '18-20 % Gross Margin', fofo: '18-20% gross margin (if stock purchased from company)', ficoPremium: '18-20 % Gross Margin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Franchise Models
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Choose the perfect model for your investment and operational style.
          </p>
        </div>

        {/* Models Section */}
        <div className="space-y-12 mb-16">
          {models.map((model, index) => (
            <div key={index} className="bg-[#44955f] rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="bg-red-800 text-white -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
                <h2 className="text-3xl font-bold text-center">
                  {model.name}
                </h2>
                <p className="text-gray-900 text-center text-lg mt-2">{model.title}</p>
              </div>
              <p className="text-gray-900 mb-6 text-lg">{model.description}</p>
              <ul className="space-y-3 text-gray-900">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-black font-bold text-xl">•</span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">
            Model Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-black text-white">
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">Feature</th>
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">FICO</th>
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">FOFO</th>
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">FICO Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border-2 border-gray-300 px-4 py-3 font-semibold text-gray-800">{row.feature}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.fico}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.fofo}</td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.ficoPremium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Store Format Options */}
        <div className="rounded-2xl p-8 shadow-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
          <h2 className="text-3xl font-bold text-center text-black mb-10">
            Store Formats & Product Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {storeFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Store className="text-black" size={28} />
                  <h3 className="text-2xl font-bold text-black">{format.name}</h3>
                </div>
                <p className="text-sm font-semibold text-gray-600 mb-4 bg-gray-100 inline-block px-3 py-1 rounded">{format.size}</p>
                <ul className="space-y-2 text-gray-700">
                  {format.products.map((product, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BuyzaarMartFranchiseModels;