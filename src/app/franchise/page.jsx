"use client";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Calculator from "../Calculator";
import Services from "../Services";
import {
  FaBullseye,
  FaRocket,
  FaCogs,
  FaUsers,
  FaMapMarkerAlt,
  FaUserTie,
  FaBullhorn,
  FaBoxes,
} from "react-icons/fa";

export default function FranchisePage() {
  return (
    <div className="bg-white min-h-screen mt-8 flex flex-col">
      <Navbar />

      {/* BEAUTIFUL HERO SECTION */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-red-800 opacity-90"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 flex flex-col items-center z-10">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-gray-100">
            <img
              src="/images/buyzaar-logo.png"
              alt="Brand Logo"
              className="w-40 h-38 object-cover"
            />
          </div>
          <h1 className="text-6xl font-black text-white text-center drop-shadow mb-2 tracking-tight">
            Franchise with Us
          </h1>
          <div className="h-1 w-24 bg-white/60 rounded-full my-4"></div>
          <p className="text-2xl text-white max-w-2xl text-center font-light">
            Unlock our proven business model,{" "}
            <span className="font-semibold">full operational support</span>, and
            a strong brand presence!
          </p>
        </div>
      </section>

      {/* USP SECTION - MODERN CARD GRID */}
      <section className="relative py-14 px-6 bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          What Makes Our Brand Unique?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mx-auto">
          {/* CARD 1 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaRocket className="text-white text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">
              Rapid Local Visibility
            </h3>
            <p className="text-gray-200">
              Distinctive store launch strategy ensuring rapid local visibility.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaBullseye className="text-white text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-200">
              Hyper-local Marketing
            </h3>
            <p className="text-gray-200">
              Hyper-local marketing campaigns tailored for every franchise
              location.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaCogs className="text-white text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-200">
              Complete Backend Support
            </h3>
            <p className="text-gray-200">
              End-to-end backend operational support streamlining business
              setup.
            </p>
          </div>
          {/* CARD 4 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaUsers className="text-white text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-200">
              Customer Acquisition Focus
            </h3>
            <p className="text-gray-200">
              Dedicated customer acquisition solutions focused on growth.
            </p>
          </div>
        </div>
      </section>

      {/* <section
        id="features"
        className="w-[75%] mx-auto my-12 p-15 bg-gray-50 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-black mb-6">Features</h2>
        <ul className="list-disc ml-6 text-lg text-gray-800 space-y-2">
          <li>Comprehensive brand training and onboarding kits</li>
          <li>Access to supply chain and inventory management</li>
          <li>Marketing collateral and launch event guidance</li>
          <li>Technical support and business analytics dashboard</li>
        </ul>
      </section> */}

      {/* SERVICES SECTION */}
      <Services />

      {/* FRANCHISE BENEFITS/RESPONSIBILITIES SECTION (ENHANCED) */}
      <section className="max-w-6xl mx-auto my-16 px-6 py-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-red-800">
              Provide
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive support for your franchise success!
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Store Location & Rent */}
          <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-5xl text-red-800" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Store Location & Rent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Franchisees are responsible for securing and paying rent for
                their store location. Buyzaar Mart provides location selection
                guidance and support.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                <span className="text-sm font-semibold text-red-800">
                  ✓ Site Selection Assistance
                </span>
              </div>
            </div>
          </div>

          {/* Marketing & Brand Promotion */}
          <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBullhorn className="text-5xl text-red-800" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Marketing & Brand Promotion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete marketing support including TV advertisements, radio
                campaigns, social media marketing, promotional materials, and
                local area brand building activities.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                <span className="text-sm font-semibold text-red-800">
                  ✓ Full Marketing Coverage
                </span>
              </div>
            </div>
          </div>

          {/* Inventory & Supply Chain */}
          <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBoxes className="text-5xl text-red-800" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Inventory & Supply Chain
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fully managed inventory with regular stock replenishment,
                quality products sourced directly from manufacturers, and
                automated supply chain management.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                <span className="text-sm font-semibold text-red-800">
                  ✓ Automated Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED SECTION */}
      <section className="max-w-7xl mx-auto my-12 p-0 rounded-2xl shadow-lg border border-gray-100 bg-white overflow-hidden">
        <div className="bg-black px-8 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-white">📄</span>
            <span className="font-bold text-white text-2xl">
              Documents Required
            </span>
          </div>
        </div>
        <div className="px-8 pt-4 pb-0">
          <div className="text-gray-600 mb-4 text-sm">
            Complete list of required documents for franchise application
          </div>
          <div className="mb-2 mt-4">
            <div className="font-bold text-gray-900 mb-2">
              Applicant's personal details:
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>ID Proof: Aadhar/Pan/Voter ID</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>
                  Address proof: Electricity Bill/Rent Agreement/Ration Card
                </span>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-6">
            <div className="font-bold text-gray-900 mb-2">
              Details for Franchise Application:
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>
                  Educational Certificate: Certificate of Highest Education -
                  10th/12th/Grad/Post-Grad 
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>Bank Details: Cancelled cheque/Copy of Passbook</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>
                  Property Documents for Proposed Store: Ownership/Rental
                  Agreement
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-6 pb-2">
            <div className="font-bold text-gray-900 mb-2">
              Additional Details(Not Documents): For applicant KYC
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>
                  Financial details (Income)
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-start gap-2">
                <span className="mt-1 text-gray-600">&#9679;</span>
                <span>Work experience/background/skills</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-t px-8 py-4 flex justify-center rounded-b-2xl">
          <button
            className="w-full py-3 rounded-lg bg-black text-white font-semibold text-lg hover:bg-gray-800 transition"
            disabled
            tabIndex={-1}
          >
            Got it! Close
          </button>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <Calculator />

    {/* FRANCHISE APPLICATION FORM SECTION */}
<section className="max-w-3xl mx-auto mb-20 p-6 rounded-2xl shadow-xl border border-gray-100 bg-white overflow-hidden">
  <div className="bg-black px-10 py-6 rounded-t-2xl">
    <h2 className="font-bold text-white text-3xl flex items-center gap-3">
      📝 Franchise Application Form
    </h2>
  </div>
  <form className="px-10 py-8 space-y-10">
    {/* Personal Details */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">Personal Details</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          className="input"
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Father's/Husband's Name"
          required
        />
        <input
          type="date"
          className="input"
          placeholder="Date of Birth"
          required
        />
        <select className="input" required>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <select className="input" required>
          <option value="">Marital Status</option>
          <option>Single</option>
          <option>Married</option>
        </select>
        <input
          type="text"
          className="input"
          placeholder="Mobile Number"
          required
        />
        <input
          type="email"
          className="input"
          placeholder="Email Address"
          required
        />
      </div>
    </div>

    {/* Your Selected Module */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Your Selected Module
      </h3>
      <select className="input" required>
        <option value="">Select Module</option>
        <option value="FOFO">FOFO</option>
        <option value="FICO">FICO</option>
        <option value="FICO Premium">FICO Premium</option>
      </select>
    </div>

    {/* Identity Proof */}
    <div>
      <h3 className="text-base font-semibold text-gray-700 mb-3">
        Identity Proof
      </h3>

      {/* Option between Aadhaar and Voter ID */}
      <div className="grid gap-6 md:grid-cols-3 mb-3">
        <select className="input" required>
          <option value="">Select ID Type</option>
          <option value="aadhaar">Aadhaar</option>
          <option value="voter">Voter ID</option>
        </select>
        <input
          type="text"
          className="input"
          placeholder="ID Number"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="PAN Number"
        />
      </div>

      <input type="file" className="input mt-3" required />
      <span className="text-xs text-gray-500 ml-2">
        Attach Copy of Identity proof
      </span>
    </div>

    {/* Address */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">Address Details</h3>
      <textarea
        className="input"
        placeholder="Full Permanent Address"
        required
      />
      <div className="grid gap-6 md:grid-cols-3 mt-4">
        <input
          type="text"
          className="input"
          placeholder="District"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="State"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="PIN Code"
          required
        />
      </div>
      <input type="file" className="input mt-3" required />
      <span className="text-xs text-gray-500 ml-2">
        Attach Copy of address proof
      </span>
    </div>

    {/* Education */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Educational Qualification
      </h3>
      <select className="input mb-3" required>
        <option value="">Highest Qualification Achieved</option>
        <option>10th</option>
        <option>12th</option>
        <option>Graduate</option>
        <option>Post-Graduate</option>
      </select>
      <input type="file" className="input" required />
      <span className="text-xs text-gray-500 ml-2">
        Attach Copy of last qualification marksheet/certificate
      </span>
    </div>

    {/* Work Experience */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Work Experience & Skills
      </h3>
      <textarea
        className="input"
        placeholder="Previous Business or Work Experience if any"
      />
      <textarea
        className="input mt-3"
        placeholder="Relevant Skills or Certifications if any"
      />
    </div>

    {/* Financial Info */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Financial Information
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          className="input"
          placeholder="Current Monthly Family Income"
          required
        />
        <select className="input" required>
          <option value="">Any existing Loans or Liabilities?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>

    {/* Banking Details */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Banking Details
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          className="input"
          placeholder="Bank Name"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Branch Name"
          required
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <input
          type="text"
          className="input"
          placeholder="Account Number"
          required
        />
        <input
          type="text"
          className="input"
          placeholder="IFSC Code"
          required
        />
      </div>
      <input type="file" className="input mt-3" required />
      <span className="text-xs text-gray-500 ml-2">
        Attach Cancelled Cheque / Passbook Copy
      </span>
    </div>

    {/* Proposed Store Location */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        Proposed Store Location
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        <input className="input" placeholder="Village/Town" />
        <input className="input" placeholder="Block" />
        <input className="input" placeholder="District" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <select className="input" required>
          <option value="">Do you own the proposed premises?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input
          className="input"
          placeholder="If leased, agreement duration"
        />
      </div>
      <input className="input mt-3" placeholder="Total Area (sq. ft.)" />
      <input type="file" className="input mt-3" />
      <span className="text-xs text-gray-500 ml-2">
        Attach Ownership/Rent/Lease proof
      </span>
    </div>

    {/* References */}
    <div>
      <h3 className="text-xl font-bold text-black mb-4">
        References - Two known persons (Optional)
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <input className="input" placeholder="Reference 1 Name" />
        <input className="input" placeholder="Reference 1 Contact" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <input className="input" placeholder="Reference 2 Name" />
        <input className="input" placeholder="Reference 2 Contact" />
      </div>
    </div>

    {/* Agent/Employee Declaration */}
    <div className="rounded-xl bg-gray-50 p-8 shadow mt-8">
      <h4 className="font-semibold text-black mb-3">
        Agent/Employee Declaration (For Internal Performance Tracking)
      </h4>
      <p className="text-gray-700 text-sm mb-3">
        I declare that I was introduced to and assisted throughout the
        franchise onboarding process by the following
        representative/employee/agent of Buyzaar/Markview Fabrication
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <input className="input" placeholder="Buyzaar Representative Name" />
        <input
          className="input"
          placeholder="Designation/Role (if known)"
        />
        <input
          className="input"
          placeholder="Contact Number (if known)"
        />
      </div>
      <div className="flex items-center mt-4">
        <input type="checkbox" id="guided" className="mr-3" />
        <label htmlFor="guided" className="text-sm text-gray-700">
          I confirm that the above person guided me during inquiry.
        </label>
      </div>
      <div className="flex items-center mt-4">
        <input type="checkbox" id="independent" className="mr-3" />
        <label htmlFor="independent" className="text-sm text-gray-700">
          I was not assisted by any Buyzaar agent/employee and applied
          independently.
        </label>
      </div>
    </div>

    {/* Main Declaration */}
    <div className="rounded-xl bg-gray-100 p-8 mt-8 shadow border border-gray-200">
      <h4 className="font-semibold text-gray-800 mb-3">Declaration</h4>
      <p className="text-sm text-gray-700 mb-3">
        I, the undersigned applicant, hereby declare that all the
        information and documents submitted in this franchise application
        form are true, correct, and complete to the best of my knowledge
        and belief.
      </p>
      <p className="text-sm text-gray-700 mb-3">
        I have understood the need for and agreed to pay the site visitation fee. I understand that once the visit has been made, that is completely non refundable. Any false declaration, omission of facts, or submission
        of fraudulent or forged documents will result in immediate
        disqualification of my application or termination of my franchise
        rights at any stage, without refund or legal claim.
      </p>
      <p className="text-sm text-gray-700 mb-3">
        I have understood the basic requirements of investment,
        operational responsibilities, and mandatory compliance as
        prescribed by Buyzaar/Markview Fabrication under the
        "The Buyzaar Mart" franchise scheme.
      </p>
      <p className="text-sm text-gray-700 mb-3">
        I agree to comply with all operational rules, training mandates,
        and monthly reporting procedures as communicated by
        Buyzaar/Markview Fabrication. I am fully aware that store
        performance, transparency of transactions, and customer
        experience will directly affect the continuity of my franchise.
      </p>
    </div>

    {/* Extra Declaration Checkboxes */}
    <div className="mt-6 space-y-5">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="declarationAgree"
          className="mr-3"
          required
        />
        <label htmlFor="declarationAgree" className="text-sm text-gray-700">
          I have read, understood, and agree to the above declaration and terms.
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="infoUnderstood"
          className="mr-3"
          required
        />
        <label htmlFor="infoUnderstood" className="text-sm text-gray-700">
          I have received and understood all the information available/provided
          to me about "The Buyzaar Mart" before filling this franchise application
          form and have understood the investment requirements and the fees involved.
        </label>
      </div>
    </div>

    {/* Signature, Date and Signature PDF Upload */}
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex gap-10 items-center flex-wrap">
        <input
          className="input w-auto"
          type="text"
          placeholder="Signature"
          required
        />
        <input
          className="input w-auto"
          type="date"
          placeholder="Date"
          required
        />
      </div>
      <div>
        <input
          type="file"
          accept="application/pdf"
          className="input"
          required
        />
        <span className="text-xs text-gray-500 ml-2">
          Upload signed declaration (PDF)
        </span>
      </div>
    </div>

    <button
      type="submit"
      className="w-full py-4 rounded-lg bg-black text-white font-semibold text-lg hover:bg-gray-800 transition shadow-xl mt-8"
    >
      Submit Application
    </button>
  </form>
</section>



      {/* Tailwind Custom Inputs - Place once in your file */}
      <style jsx>{`
        .input {
          @apply border rounded-lg px-4 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition;
        }
      `}</style>

      <Footer />
    </div>
  );
}
