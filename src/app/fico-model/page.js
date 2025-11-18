import React from 'react';
import { Store, Users, Package, TrendingUp, Clock, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const GramShreeFicoModel = () => {
  return (
    <div className="pt-30 min-h-screen bg-white">
      <Navbar/>
      
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
           FICO 
              <span className='text-gray-800'> Model</span>
          </h1>
          <p className='text-sm md:text-lg lg:text-2xl text-gray-700 leading-relaxed px-2'>( Franchise Invested Company Operated )</p>
          
        </div>


        {/* Responsibilities Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 mb-12" style={{borderColor: '#000000'}}>
          <h2 className="text-3xl font-bold text-white -mx-8 -mt-8 p-6 rounded-t-3xl mb-6 text-center" style={{backgroundColor: '#000000'}}>
            निवेश आपका, दायित्व हमारा
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="mt-1 flex-shrink-0" style={{color: '#000000'}} size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Store Location & Rent:</h3>
                <p className="text-gray-600 text-justify">Franchisees are responsible for securing and paying rent for their store location. GramShree provides location selection guidance and support.</p>
              </div>
            </div>


           


            <div className="flex items-start space-x-3">
              <TrendingUp className="mt-1 flex-shrink-0" style={{color: '#000000'}} size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Marketing & Brand Promotion:</h3>
                <p className="text-gray-600 text-justify">Complete marketing support including TV advertisements, radio campaigns, social media marketing, promotional materials, and local area brand building activities.</p>
              </div>
            </div>


            <div className="flex items-start space-x-3">
              <Package className="mt-1 flex-shrink-0" style={{color: '#000000'}} size={20} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Inventory & Supply Chain:</h3>
                <p className="text-gray-600 text-justify">Fully managed inventory with regular stock replenishment, quality products sourced directly from manufacturers, and automated supply chain management.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Store Format Options */}
        <div className="rounded-3xl p-8 shadow-lg border-2 mb-8" style={{background: 'linear-gradient(135deg, #00000020, #00000030)', borderColor: '#000000'}}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Store Formats & Product Categories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mini Mart */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2" style={{borderColor: '#000000'}}>
              <div className="flex items-center space-x-2 mb-4">
                <Store style={{color: '#000000'}} size={24} />
                <h3 className="text-xl font-bold" style={{color: '#000000'}}>MINI MART</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">(600-1000 SQFT)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Personal Care</li>
                <li>• Beverages</li>
                <li>• Grocery & Staples</li>
                <li>• Homecare and Hygiene</li>
                <li>• Stationery</li>
                <li>• Snacks and Biscuits</li>
              </ul>
            </div>


            {/* Super Mart */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2" style={{borderColor: '#000000'}}>
              <div className="flex items-center space-x-2 mb-4">
                <Store style={{color: '#000000'}} size={24} />
                <h3 className="text-xl font-bold" style={{color: '#000000'}}>SUPER MART</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">(1000-3000 SQFT)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Personal Care</li>
                <li>• Beverages</li>
                <li>• Grocery & Staples</li>
                <li>• Homecare and Hygiene</li>
                <li>• Stationery</li>
                <li>• Snacks and Biscuits</li>
                
                <li>• Dairy Items</li>
                 <li>• F & V</li>
              </ul>
            </div>


            {/* Hyper Mart */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2" style={{borderColor: '#000000'}}>
              <div className="flex items-center space-x-2 mb-4">
                <Store style={{color: '#000000'}} size={24} />
                <h3 className="text-xl font-bold" style={{color: '#000000'}}>HYPER MART</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">(3000-8000 SQFT)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Personal Care</li>
                <li>• Beverages</li>
                <li>• Grocery & Staples</li>
                <li>• Homecare and Hygiene</li>
                <li>• Stationery </li>
                <li>• Snacks and Biscuits</li>
                <li>• Dairy Items</li>
                <li>• F & V </li>
                <li>• Gifts & Toys</li>
                <li>• Frozen Ready to Eat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


     <Footer/>
    </div>
  );
};


export default GramShreeFicoModel;