import Footer from "../Footer";
import Navbar from "../Navbar";


export default function GSTCertificate() {
  return (
    <div className="min-h-screen bg-white">
     
      <Navbar/>
      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#fd7e14] to-orange-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                GST Registration & Certificate
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Complete guide to GST registration requirements and compliance for Buyzaar Mart Apna Baazar franchise partners.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* GST Mandatory Notice */}
          <div className="bg-orange-50 border-l-4 border-[#fd7e14] p-6 mb-8">
            <div className="flex items-center mb-3">
              <div className="bg-[#fd7e14] text-white p-2 rounded-full mr-3">
                <span className="text-lg font-bold">!</span>
              </div>
              <h3 className="text-lg font-semibold text-[#fd7e14]">Mandatory Compliance Requirement</h3>
            </div>
            <p className="text-gray-700">
              GST registration is mandatory for all Buyzaar Mart Apna Baazar franchise outlets as retail businesses typically exceed the threshold turnover limits and engage in inter-state supply of goods.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              About GST Registration
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong className="text-[#fd7e14]">Goods and Services Tax (GST)</strong> is a comprehensive indirect tax levied on the supply of goods and services across India. It replaced multiple indirect taxes and created a unified tax structure.
              </p>
              <p className="mb-4">
                For <strong className="text-[#fd7e14]">Buyzaar Mart Apna Baazar</strong> franchise partners, GST registration provides a unique 15-digit GST Identification Number (GSTIN) that is essential for business operations, invoice generation, and tax compliance.
              </p>
              <p>
                Our comprehensive support system ensures all franchise partners obtain GST registration efficiently and maintain ongoing compliance with GST regulations.
              </p>
            </div>
          </section>

          {/* Registration Thresholds */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              GST Registration Thresholds
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold text-[#fd7e14] mb-3 text-center">When is GST Registration Required?</h3>
              <p className="text-gray-700 text-center">
                Registration becomes mandatory when annual turnover crosses specified thresholds or in certain business scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                  <span className="bg-green-100 p-2 rounded-full mr-3">📊</span>
                  Turnover-Based Registration
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h4 className="font-medium text-gray-800 mb-1">Goods Supply</h4>
                    <p className="text-sm text-gray-700">Annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states)</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h4 className="font-medium text-gray-800 mb-1">Services Supply</h4>
                    <p className="text-sm text-gray-700">Annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states)</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h4 className="font-medium text-gray-800 mb-1">Combined Supply</h4>
                    <p className="text-sm text-gray-700">Most Buyzaar Mart outlets fall under this category with mixed goods and services</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                  <span className="bg-orange-100 p-2 rounded-full mr-3">⚡</span>
                  Mandatory Registration Cases
                </h3>
                
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>Inter-state supply of goods/services (no threshold limit)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>E-commerce operators and marketplace sellers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>Suppliers liable to deduct tax at source (TDS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>Suppliers of online information database services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>Input service distributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    <span>Non-resident taxable persons</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Documents Required for GST Registration
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                The required documents vary based on the business constitution. Most Buyzaar Mart franchisees operate as proprietorships or private limited companies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">👤</span>
                    Sole Proprietorship (Most Common)
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>PAN card of the proprietor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Aadhaar card of the proprietor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Passport size photograph (JPEG, max 100KB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Bank account details (cancelled cheque)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Address proof of business premises</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                    <span className="bg-green-100 p-2 rounded-full mr-3">🏢</span>
                    Private Limited Company
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>PAN card of the company</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Certificate of incorporation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Memorandum and Articles of Association</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>PAN and Aadhaar of authorized signatory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Board resolution appointing authorized signatory</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-4">Business Address Proof (Any One)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Electricity bill (latest)</li>
                    <li>• Municipal tax receipt</li>
                    <li>• Water bill</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Rent agreement with NOC</li>
                    <li>• Property ownership documents</li>
                    <li>• Municipal khata copy</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Trade license</li>
                    <li>• Shop & establishment license</li>
                    <li>• Telephone bill</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              GST Registration Process
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 text-center">Online Registration Steps</h3>
              <p className="text-gray-700 text-center">
                Complete your GST registration through the official GST portal with our step-by-step guidance
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-6 gap-3">
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Visit GST Portal</h4>
                  <p className="text-xs text-gray-600">gst.gov.in registration</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Create Account</h4>
                  <p className="text-xs text-gray-600">Using PAN details</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Fill Application</h4>
                  <p className="text-xs text-gray-600">Form GST REG-01</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Upload Documents</h4>
                  <p className="text-xs text-gray-600">As per checklist</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">5</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Verification</h4>
                  <p className="text-xs text-gray-600">DSC/EVC/Aadhaar OTP</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-sm">6</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Get Certificate</h4>
                  <p className="text-xs text-gray-600">Form GST REG-06</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-3xl text-green-600 mb-3">⚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Quick Processing</h4>
                  <p className="text-sm text-gray-700">7-15 working days for standard applications</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="text-3xl text-blue-600 mb-3">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Registration Fee</h4>
                  <p className="text-sm text-gray-700">No government fee for GST registration</p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <div className="text-3xl text-purple-600 mb-3">🔢</div>
                  <h4 className="font-semibent text-gray-800 mb-2">15-Digit GSTIN</h4>
                  <p className="text-sm text-gray-700">Unique identifier for all transactions</p>
                </div>
              </div>
            </div>
          </section>

          {/* GST Certificate Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              GST Registration Certificate
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                Upon successful registration, you receive a GST Registration Certificate (Form GST REG-06) containing all essential business details and the unique GSTIN.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 text-center">Certificate Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Basic Details</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 15-digit GSTIN number</li>
                      <li>• Trade name and legal name</li>
                      <li>• Constitution of business</li>
                      <li>• Date of registration</li>
                      <li>• Type of registration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Business Information</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Principal place of business</li>
                      <li>• Additional business locations</li>
                      <li>• Authorized persons details</li>
                      <li>• Central and state jurisdiction</li>
                      <li>• Nature of business activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-700 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Important Requirements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Display certificate prominently at business premises</li>
                    <li>• Use GSTIN on all invoices and documents</li>
                    <li>• Update any changes in business details within 15 days</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• File GST returns as per prescribed due dates</li>
                    <li>• Maintain proper books of accounts</li>
                    <li>• Allow inspection by GST officers when required</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              GST Compliance Requirements
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">📄</span>
                    Return Filing Schedule
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <h4 className="font-medium text-gray-800 mb-1">GSTR-1 (Sales Return)</h4>
                      <p className="text-sm text-gray-700">Monthly by 11th or Quarterly by 13th of next month</p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <h4 className="font-medium text-gray-800 mb-1">GSTR-3B (Summary Return)</h4>
                      <p className="text-sm text-gray-700">Monthly by 20th of next month</p>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded border border-purple-200">
                      <h4 className="font-medium text-gray-800 mb-1">Annual Return (GSTR-9)</h4>
                      <p className="text-sm text-gray-700">By 31st December of next financial year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-4 flex items-center">
                    <span className="bg-green-100 p-2 rounded-full mr-3">💳</span>
                    Tax Payment & ITC
                  </h3>
                  
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Pay GST by 20th of next month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Claim Input Tax Credit (ITC) on purchases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Maintain proper invoice records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Issue GST-compliant invoices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Reconcile purchase and sales data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fd7e14] mr-2">•</span>
                      <span>Submit composition scheme returns (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Buyzaar Mart GST Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Buyzaar Mart GST Support Services
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold text-[#fd7e14] mb-3 text-center">End-to-End GST Assistance</h3>
              <p className="text-gray-700 text-center">
                Our tax experts provide comprehensive support from registration to ongoing compliance for all franchise partners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-[#fd7e14] mb-3">📋</div>
                <h3 className="font-semibold text-gray-800 mb-3">Registration Support</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Document preparation and verification</li>
                  <li>• Online application submission assistance</li>
                  <li>• Query resolution and follow-up</li>
                  <li>• Certificate download and verification</li>
                  <li>• Registration status tracking</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-[#fd7e14] mb-3">🧮</div>
                <h3 className="font-semibent text-gray-800 mb-3">Compliance Management</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Monthly return filing assistance</li>
                  <li>• GST payment calculation and reminders</li>
                  <li>• ITC optimization guidance</li>
                  <li>• Invoice format standardization</li>
                  <li>• Audit support and documentation</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-[#fd7e14] mb-3">🎓</div>
                <h3 className="font-semibold text-gray-800 mb-3">Training & Updates</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• GST compliance training sessions</li>
                  <li>• Regular updates on rule changes</li>
                  <li>• Best practices workshops</li>
                  <li>• Software training for GST filing</li>
                  <li>• Troubleshooting support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Penalties & Non-Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Penalties for Non-Compliance
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <div className="text-2xl text-red-600 mr-3">⚠️</div>
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Compliance Warning</h3>
                  <p className="text-gray-700">
                    Non-compliance with GST regulations can result in significant financial penalties and legal consequences affecting your franchise operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-700 mb-4">Common Penalties</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm text-gray-700">Late return filing</span>
                    <span className="font-semibold text-red-600">₹200/day</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm text-gray-700">Non-payment of tax</span>
                    <span className="font-semibold text-red-600">18% interest p.a.</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm text-gray-700">Tax evasion</span>
                    <span className="font-semibold text-red-600">10% of tax amount</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm text-gray-700">Willful evasion</span>
                    <span className="font-semibold text-red-600">100% of tax amount</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-700 mb-4">Consequences</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Cancellation of GST registration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Criminal prosecution proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Business bank account freezing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Attachment of business assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Loss of input tax credit benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Franchise agreement termination risk</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          

        </div>
      </div>
      <Footer/>
    
    </div>
  );
}
