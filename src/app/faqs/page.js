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
      title: "ग्राम श्री - अपना बाज़ार",
      faqs: [
        {
          question: "How Much Money Do I need to Start a Gram Shree Apna Bazaar store?",
          answer: "Your total investment might range between ₹15 lakhs to ₹20 lakhs, to start a Gram Shree Apna Bazaar Mini Store (600-1000 sq ft). However, the total investment required is also dependent on store size and arrangement, location, and the amount of work to be done in it."
        },
        {
          question: "How much Space is needed for a Gram Shree Apna Bazaar Franchise?",
          answer: "Mini Mart 600 - 1000 square feet, Super Mart 1000 - 3000 square feet, Hyper Mart 3000+ square feet. Note: A minimum of 600 square feet of carpet Area is required."
        },
        {
          question: "What profit Margin Can I expect from Gram Shree Apna Bazaar?",
          answer: "Depending on your store's location, size, and sales volume, you can anticipate an average profit margin of 18% to 20% from the Gram Shree Mart supermarket chain."
        },
        {
          question: "What setup support does Gram Shree provide to Franchise owners?",
          answer: "Gram Shree Mart provides its franchisees with the complete operational and marketing support required for their swiftly set up store. Using modern technology enabled solutions to optimize inventory and supply chain to minimize losses for the franchise. Running a business, has never been easier."
        },
        {
          question: "Can I Start a Gram Shree mart business without retail experience?",
          answer: "Indeed! Gram Shree supermarket business possibilities do not require prior retail expertise. We give franchisees with little to no prior retail experience the comprehensive training, user-friendly billing software, and continuous operational assistance they need to manage their stores profitably."
        },
        {
          question: "Can I Propose my own location for the Gram Shree mart?",
          answer: "Yes! You can propose your own location. But the Gram Shree team will survey the location to check the suitability of the site, considering the following factors before final approval:\n• Population\n• Purchasing capacity\n• Local demand"
        },
        {
          question: "What is Gram Shree, and what do you offer as a large supermarket franchise provider in India?",
          answer: "A major supermarket franchise supplier in India, Gram Shree provides entrepreneurs all across the country with profitable retail franchise business options. Even Entrepreneurs with little to no experience in retail can easily open a retail store franchise in India that is intended to support their success and well-being in the cutthroat retail industry."
        },
        {
          question: "How can Gram Shree Help Setup my Supermarket franchise?",
          answer: "People can join a well-known retail brand by taking advantage of Gram Shree franchise business opportunity. Our comprehensive nationwide support for retail store setup, marketing, and promotion is advantageous to a retail store franchise."
        },
        {
          question: "How much does it cost to open a Gram Shree Apna Bazaar franchise?",
          answer: "The location, store size, and other particular franchise model are some of the variables that can affect the Gram Shree franchise pricing. Please contact our specialists for comprehensive information on retail store franchise costs."
        },
        {
          question: "What Sets Gram Shree apart as a retail franchise provider in India?",
          answer: "Gram Shree provides interesting franchise opportunities in the retail industry. As a reputable and well-established retail franchise supplier in India, we are distinguished by our broad operational assistance, high-quality products and brands, proven business model."
        },
        {
          question: "How can I Become a part of Gram Shree as a mart franchise owner?",
          answer: "Here are the steps to become a part of Gram Shree Apna Bazaar:\n• Leave a query - Attend a call/meeting to know about Gram Shree Apna Bazaar\n• Fill Application form - Proposed Store Site is surveyed and work begins after the site is approved by our team\n• Sign a well-reviewed Franchise agreement with our company and make the payment\n• Store setup and franchise kit handover"
        }
      ]
    },
    {
      title: "Loan Process",
      faqs: [
        {
          question: "What is the Mukhyamantri Yuva Udyami Vikas Abhiyaan (MYUVA) scheme?",
          answer: "The MYUVA scheme is an initiative by the Government of Uttar Pradesh that provides financial support to aspiring entrepreneurs who wish to start their own business but lack sufficient capital. Under this scheme, eligible applicants can access subsidized loans through approved banks and financial institutions to start ventures like Gram Shree franchise stores."
        },
        {
          question: "Can I apply for a loan under the MYUVA scheme with the help of Gram Shree?",
          answer: "Yes. Gram Shree supports applicants who qualify under the MYUVA scheme. If you are unable to invest the full franchise amount independently, you can apply for a loan through this government program with our assistance. Gram Shree provides complete support, from preparing the required documents and project report to coordinating with the concerned bank under the MYUVA scheme. Our team ensures that your application process is smooth, transparent, and time-bound."
        },
        {
          question: "How much financial assistance can I get under the MYUVA scheme?",
          answer: "The loan amount depends on your business plan and eligibility as per government norms. Typically, a portion of the franchise investment (up to 90%) can be financed through the MYUVA scheme, with minimal margin money required from your side."
        },
        {
          question: "Who is eligible to apply for the loan?",
          answer: "Eligibility criteria generally include:\n• You must be a permanent resident of Uttar Pradesh\n• You should be between 18 and 45 years of age\n• You should not be a defaulter of any bank or financial institution\n• You must have a clear business proposal (Gram Shree franchise qualifies)\n• Preference is given to educated youth, women entrepreneurs, and applicants from rural or semi-urban backgrounds"
        },
        {
          question: "What documents are required for the loan application?",
          answer: "Applicants are usually required to submit:\n• Aadhaar Card and PAN Card\n• Passport-sized photographs\n• Bank account details and statement\n• Proof of residence (ration card / certificate from local authority)\n• Educational qualification proof\n• Franchise approval letter or agreement from Gram Shree\n• Detailed project report (provided by Gram Shree)"
        },
        {
          question: "How long does the loan approval process take?",
          answer: "Once all documents are submitted, the typical processing time is 3-6 weeks, depending on the bank's verification process and government approvals."
        },
        {
          question: "Do I have to repay the loan immediately after opening the store?",
          answer: "No. Generally, repayment begins after a moratorium period (a short period after setup during which no EMI is due), allowing you to stabilize your store operations first. Your exact repayment schedule will be decided by the financing bank."
        },
        {
          question: "What if my loan application is rejected?",
          answer: "If your application does not meet MYUVA criteria, you may still consider alternative financing options. Our team helps you explore possible solutions so that your dream of owning a store doesn't end there."
        },
        {
          question: "Can I take a Loan for Personal Use?",
          answer: "NO, Only MSMEs requiring a loan for business use can apply for it under the MYUVA scheme."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Navbar/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 pt-40 py-26 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about ग्राम श्री - अपना बाज़ार franchise!
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-2">
                {section.title}
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
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
                      <span className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-orange-600 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
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
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-orange-100 mb-6 text-lg">
            Our team is here to help you get started with your franchise journey!
          </p>
             <Link href="/contact">
      <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
