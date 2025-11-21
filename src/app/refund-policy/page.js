import Footer from "../Footer";
import Navbar from "../Navbar";


export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-800 to-orange-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Refund Policy
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Transparent refund and return guidelines for Buyzaar Mart Apna Baazar products and franchise services.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Policy Overview */}
          <div className="bg-orange-50 border-l-4 border-red-800 p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong className="text-red-800">Last Updated:</strong> October 3, 2025</p>
                <p><strong className="text-red-800">Effective Date:</strong> Immediate</p>
              </div>
              <div>
                <p><strong className="text-red-800">Governing Law:</strong> Consumer Protection Act, 2019</p>
                <p><strong className="text-red-800">Processing Time:</strong> 7-15 Business Days</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Introduction
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                At <strong className="text-red-800">Buyzaar Mart Apna Baazar</strong>, operated by Markview Fabrication pvt ltd. Fabrication Promoter Solutions Pvt. Ltd., we are committed to customer satisfaction and transparent business practices. This Refund Policy outlines the terms and conditions for returns, refunds, and exchanges across our retail franchise network.
              </p>
              <p className="mb-4">
                This policy applies to both retail customers shopping at our franchise outlets and potential franchisees considering our business opportunities. We comply with all relevant Indian consumer protection laws and maintain the highest standards of service quality.
              </p>
              <p>
                By purchasing products from any Buyzaar Mart Apna Baazar outlet or engaging with our franchise services, you agree to the terms outlined in this policy.
              </p>
            </div>
          </section>

          {/* Retail Product Refunds */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Retail Product Refunds
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3 text-center">Customer-First Approach</h3>
              <p className="text-gray-700 text-center">
                Our retail refund policy ensures customer satisfaction while maintaining fair business practices across all franchise locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">✓</span>
                  Eligible for Refund
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Defective or damaged products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Products not matching description</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Expired products sold unknowingly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Wrong products delivered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Billing errors or duplicate charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Unopened packaged goods (within 7 days)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <span className="bg-red-100 p-2 rounded-full mr-3">✗</span>
                  Non-Refundable Items
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Perishable items (fruits, vegetables, dairy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Personal care items (opened/used)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Medicine and health supplements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Items purchased on clearance/sale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Custom or personalized products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Items returned after 30 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Refund Timeline & Process
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4 text-center">Step-by-Step Refund Process</h3>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded border">
                  <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Visit Store</h4>
                  <p className="text-xs text-gray-600">Bring product & receipt to any Buyzaar Mart outlet</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border">
                  <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Inspection</h4>
                  <p className="text-xs text-gray-600">Product condition & eligibility verification</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border">
                  <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Approval</h4>
                  <p className="text-xs text-gray-600">Refund approval & processing initiation</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border">
                  <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Refund</h4>
                  <p className="text-xs text-gray-600">Amount credited within 7-15 business days</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-blue-600 mb-3">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Immediate</h3>
                <p className="text-sm text-gray-700">Cash refunds for purchases under ₹500</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-yellow-600 mb-3">🕐</div>
                <h3 className="font-semibold text-gray-800 mb-2">3-5 Days</h3>
                <p className="text-sm text-gray-700">Digital payment refunds (UPI, cards)</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-red-800 mb-3">📅</div>
                <h3 className="font-semibold text-gray-800 mb-2">7-15 Days</h3>
                <p className="text-sm text-gray-700">Bank transfers & complex cases</p>
              </div>
            </div>
          </section>

          {/* Franchise Refund Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Franchise Fee Refund Policy
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Important Notice</h3>
                <p className="text-gray-700">
                  Franchise investments require careful consideration. Please review all terms before making financial commitments.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                    <span className="bg-green-100 p-2 rounded-full mr-3">💰</span>
                    Security Deposit Refund
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="font-medium">✓ Fully Refundable</p>
                      <p className="text-sm">If application is rejected by company</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="font-medium">⚠️ Partially Refundable (50%)</p>
                      <p className="text-sm">If applicant withdraws within 7 days</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="font-medium">✗ Non-Refundable</p>
                      <p className="text-sm">After agreement signing or 30 days</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-full mr-3">📋</span>
                    Franchise Fee Structure
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Initial Franchise Fee</span>
                      <span className="font-semibold text-red-600">Non-Refundable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Training & Setup Cost</span>
                      <span className="font-semibold text-red-600">Non-Refundable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Technology License</span>
                      <span className="font-semibold text-red-600">Non-Refundable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Security Deposit</span>
                      <span className="font-semibold text-green-600">Conditional</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Special Circumstances</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Medical Emergency Refunds</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Up to 50% refund may be considered</li>
                      <li>• Valid medical documentation required</li>
                      <li>• Case-by-case evaluation by management</li>
                      <li>• Processing time: 30-45 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Force Majeure Events</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Natural disasters or pandemics</li>
                      <li>• Government policy changes</li>
                      <li>• Unforeseen regulatory restrictions</li>
                      <li>• Subject to management discretion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exchange Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Exchange & Store Credit Policy
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                When direct refunds are not applicable, Buyzaar Mart Apna Baazar offers flexible exchange options to ensure customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-red-800 mb-3">🔄</div>
                <h3 className="font-semibold text-gray-800 mb-3">Product Exchange</h3>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li>• Same category product exchange</li>
                  <li>• Equal or higher value items</li>
                  <li>• Valid for 15 days from purchase</li>
                  <li>• Original packaging required</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-red-800 mb-3">💳</div>
                <h3 className="font-semibold text-gray-800 mb-3">Store Credit</h3>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li>• Full purchase value credit</li>
                  <li>• Valid for 90 days</li>
                  <li>• Transferable to family members</li>
                  <li>• No expiry on partial usage</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-red-800 mb-3">🎁</div>
                <h3 className="font-semibold text-gray-800 mb-3">Gift Vouchers</h3>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li>• Digital or physical vouchers</li>
                  <li>• Valid across all outlets</li>
                  <li>• 1-year validity period</li>
                  <li>• Redeemable for any products</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Required Documentation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Required Documentation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Retail Refunds</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Required</span>
                    <div>
                      <p className="font-medium text-gray-800">Original Receipt</p>
                      <p className="text-sm text-gray-600">Physical or digital purchase proof</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Required</span>
                    <div>
                      <p className="font-medium text-gray-800">Product in Original Condition</p>
                      <p className="text-sm text-gray-600">Unopened packaging when applicable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Optional</span>
                    <div>
                      <p className="font-medium text-gray-800">Valid ID Proof</p>
                      <p className="text-sm text-gray-600">For refunds above ₹2,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Franchise Refunds</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-red-800 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Required</span>
                    <div>
                      <p className="font-medium text-gray-800">Application Documents</p>
                      <p className="text-sm text-gray-600">Original franchise application form</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-800 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Required</span>
                    <div>
                      <p className="font-medium text-gray-800">Payment Receipts</p>
                      <p className="text-sm text-gray-600">All transaction confirmations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5">Conditional</span>
                    <div>
                      <p className="font-medium text-gray-800">Medical Documentation</p>
                      <p className="text-sm text-gray-600">For emergency refund requests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Consumer Rights & Protection
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-3 text-center">
                Protected Under Consumer Protection Act, 2019
              </h3>
              <p className="text-gray-700 text-center">
                All customers have fundamental rights to fair treatment, quality products, and transparent refund processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="mr-2">⚖️</span>
                    Right to Fair Treatment
                  </h4>
                  <p className="text-sm text-gray-700">Equal treatment regardless of purchase amount or customer profile</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="mr-2">📢</span>
                    Right to Information
                  </h4>
                  <p className="text-sm text-gray-700">Complete details about refund eligibility and processing timeline</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="mr-2">🛡️</span>
                    Right to Redressal
                  </h4>
                  <p className="text-sm text-gray-700">Access to complaint mechanisms and dispute resolution</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="mr-2">🔍</span>
                    Right to Quality
                  </h4>
                  <p className="text-sm text-gray-700">Protection against defective products and substandard services</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Complaint Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Contact & Complaint Resolution
            </h2>
            
            <div className="bg-gradient-to-r from-red-800 to-orange-600 text-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Need Help with Refunds?</h3>
                <p className="text-orange-100">
                  Our customer service team is ready to assist you with any refund-related queries
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h4 className="font-semibold mb-2">Phone Support</h4>
                  <p className="text-sm text-orange-100">+91-XXX-XXX-XXXX</p>
                  <p className="text-xs text-orange-200">Mon-Sat: 9 AM - 6 PM</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-sm text-orange-100">refunds@apnabaazar.co.in</p>
                  <p className="text-xs text-orange-200">Response within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h4 className="font-semibold mb-2">Visit Store</h4>
                  <p className="text-sm text-orange-100">Any Buyzaar Mart Outlet</p>
                  <p className="text-xs text-orange-200">Immediate assistance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Escalation Matrix */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-800">
              Complaint Escalation Process
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">If Not Satisfied with Initial Response</h3>
                <p className="text-gray-700">Follow our structured escalation process for resolution</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded border border-gray-300">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">L1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Store Manager</h4>
                  <p className="text-xs text-gray-600">Direct store resolution</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border border-gray-300">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">L2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Regional Manager</h4>
                  <p className="text-xs text-gray-600">Regional oversight team</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border border-gray-300">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">L3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Head Office</h4>
                  <p className="text-xs text-gray-600">Corporate resolution team</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border border-gray-300">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">L4</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Consumer Court</h4>
                  <p className="text-xs text-gray-600">Legal recourse option</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-100 rounded border border-orange-300">
                <p className="text-sm text-gray-700 text-center">
                  <strong className="text-red-800">Corporate Address:</strong> 
                  Buyzaar/Markview Fabrication pvt ltd. Fabrication, D-43, 3rd Floor, Sector-6, Noida - 201301, UP
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer/>
    
    </div>
  );
}
