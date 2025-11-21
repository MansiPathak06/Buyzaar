'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "How to start a Supermarket Franchise in India?",
          answer: "Look for a respectable and reputed franchise supermarket brand. Talk to the team about your requirements, their operating strategy, market analysis, financial plans, and company plan. Choose an area that shows promise for your market business. Obtain every licensing and permit. Sign a carefully Drafted contract. Finish the training course that the franchisor has supplied. Before opening, set up your store, hire employees, and organize your marketing efforts."
        },
        {
          question: "What Licenses Do I Need to Open a Supermarket in India?",
          answer: "Here is a list of licenses you will need to open a supermarket in India:\n• Business Registration (as a proprietorship, partnership, LLP, or Pvt Ltd company)\n• Trade License from the local municipality\n• FSSAI License (mandatory if selling food items)\n• GST Registration\n• Shops and Establishment Act registration\n• Franchise Agreement with the franchisor"
        },
        {
          question: "Is a supermarket Franchise a Good investment option?",
          answer: "Yes, a supermarket franchise has a well-known identity, tested business plans, and continuous franchisor support. They are therefore a more secure investment than starting a brand-new store. Franchised supermarkets can turn a profit if the management is solid and experienced."
        },
        {
          question: "What is the minimum requirement To Open a Supermarket in India?",
          answer: "Some characteristics are nearly universal, even though the answer to the least requirement may vary from company to firm. For small businesses, the minimum investment is ₹5 lakh; for large urban shops, it might reach ₹2 crore. Appropriate business space in a permitted area, basic infrastructure includes inventory, billing counters, shelving, and refrigeration if necessary. The licenses and permits mentioned above are necessary. Personnel with operational training."
        },
        {
          question: "Is the Supermarket profitable in India?",
          answer: "Yes! In India, supermarkets are hugely profitable. But this relies on the supermarket's size, management, and location! Because of their enormous sales volume and variety of products, well-managed stores can generate significant returns. In India, supermarket franchises typically have a 10-15% net profit margin. The industry offers consistent earning potential and is thought to be recession-resistant."
        },
        {
          question: "How to start a Mini Supermarket Franchise?",
          answer: "To start your own franchise: Select a franchise brand that provides express or tiny store formats. Create a business plan and find funding (usually ₹10-20 lakh for urban mini-stores, ₹1-3 lakh for rural locations). Obtain all required licenses, particularly the FSSAI if you are selling food. Choose a small area with lots of foot traffic and set up the business according to franchise regulations. Employ a small crew, train them, and concentrate on effective inventory control."
        }
      ]
    },
    {
      title: "The Buyzaar Mart",
      faqs: [
        {
          question: "How Much Money Do I need to Start a The Buyzaar Mart?",
          answer: "Your total investment might range between ₹15 lakhs to ₹20 lakhs, to start a TThe Buyzaar Mart Mini Store (600-1000 sq ft). However, the total investment required is also dependent on store size and arrangement, location, and the amount of work to be done in it."
        },
        {
          question: "How much Space is needed for a The Buyzaar Mart Franchise?",
          answer: "Mini Mart 600 - 1000 square feet, Super Mart 1000 - 3000 square feet, Hyper Mart 3000+ square feet. Note: A minimum of 600 square feet of carpet Area is required."
        },
        {
          question: "What profit Margin Can I expect from The Buyzaar Mart?",
          answer: "Depending on your store's location, size, and sales volume, you can anticipate an average profit margin of 18% to 20% from the The Buyzaar Mart supermarket chain."
        },
        {
          question: "What setup support does The Buyzaar Mart provide to Franchise owners?",
          answer: "The Buyzaar Mart provides its franchisees with the complete operational and marketing support required for their swiftly set up store. Using modern technology enabled solutions to optimize inventory and supply chain to minimize losses for the franchise. Running a business, has never been easier."
        },
        {
          question: "Can I Start a The Buyzaar Mart business without retail experience?",
          answer: "Indeed! The Buyzaar Mart supermarket business possibilities do not require prior retail expertise. We give franchisees with little to no prior retail experience the comprehensive training, user-friendly billing software, and continuous operational assistance they need to manage their stores profitably."
        },
        {
          question: "Can I Propose my own location for the The Buyzaar Mart?",
          answer: "Yes! You can propose your own location. But, The Buyzaar Mart team will survey the location to check the suitability of the site, considering the following factors before final approval:\n• Population\n• Purchasing capacity\n• Local demand"
        },
        {
          question: "What is The Buyzaar Mart, and what do you offer as a large supermarket franchise provider in India?",
          answer: "A major supermarket franchise supplier in India, The Buyzaar Mart provides entrepreneurs all across the country with profitable retail franchise business options. Even Entrepreneurs with little to no experience in retail can easily open a retail store franchise in India that is intended to support their success and well-being in the cutthroat retail industry."
        },
        {
          question: "How can The Buyzaar Mart Help Setup my Supermarket franchise?",
          answer: "People can join a well-known retail brand by taking advantage of The Buyzaar Mart franchise business opportunity. Our comprehensive nationwide support for retail store setup, marketing, and promotion is advantageous to a retail store franchise."
        },
        {
          question: "How much does it cost to open a The Buyzaar Mart franchise?",
          answer: "The location, store size, and other particular franchise model are some of the variables that can affect the The Buyzaar Mart franchise pricing. Please contact our specialists for comprehensive information on retail store franchise costs."
        },
        {
          question: "What Sets The Buyzaar Mart apart as a retail franchise provider in India?",
          answer: "The Buyzaar Mart provides interesting franchise opportunities in the retail industry. As a reputable and well-established retail franchise supplier in India, we are distinguished by our broad operational assistance, high-quality products and brands, proven business model."
        },
        {
          question: "How can I Become a part of The Buyzaar Mart as a mart franchise owner?",
          answer: "Here are the steps to become a part of The Buyzaar Mart :\n• Leave a query - Attend a call/meeting to know about The Buyzaar Mart \n• Fill Application form - Proposed Store Site is surveyed and work begins after the site is approved by our team\n• Sign a well-reviewed Franchise agreement with our company and make the payment\n• Store setup and franchise kit handover"
        }
      ]
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Navbar/>
      {/* Hero Section */}
      <div className="bg-red-800 pt-40 py-26 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about Buyzaar Mart franchise!
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 text-center mb-2">
                {section.title}
              </h2>
              <div className="w-24 h-1 bg-red-800 mx-auto rounded-full"></div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {section.faqs.map((faq, faqIndex) => {
                const globalIndex = `${sectionIndex}-${faqIndex}`;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faqIndex}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left transition-colors duration-300 hover:bg-orange-50"
                    >
                      <span className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-red-800 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-red-800 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 pt-2 border-t border-orange-100">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-orange-100 mb-6 text-lg">
            Our team is here to help you get started with your franchise journey!
          </p>
             <Link href="/contact">
      <button className="bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Contact Us
      </button>
    </Link>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      <Footer/>
    </div>
  );
}
