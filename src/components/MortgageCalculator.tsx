import React, { useState } from 'react';
import { Calculator, Award, TrendingUp, Sparkles, DollarSign, ShieldCheck } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(1850000); // AED
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [tenureYears, setTenureYears] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(4.75); // %

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  // Monthly mortgage calculation formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfMonths = tenureYears * 12;

  const monthlyPayment = loanAmount > 0
    ? (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths))) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)
    : 0;

  const monthlyPaymentUSD = Math.round(monthlyPayment / 3.6725);
  const estimatedAnnualRent = Math.round(propertyPrice * 0.088); // 8.8% gross yield typical of Al Khan waterfront

  const isGoldenVisaEligible = propertyPrice >= 2000000;

  return (
    <section id="calculator" className="py-24 bg-[#FBF9F5] border-t border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
            <span>Financial Planning & ROI Simulator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
            Investment & Mortgage Estimator
            <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
              & UAE Golden Visa Qualification
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            Tailor your acquisition strategy with interactive loan calculations, expected waterfront rental yields, and UAE Golden Visa qualification thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E7DFD1] shadow-xs space-y-7">
            {/* Property Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Property Value
                </label>
                <span className="font-serif text-lg font-bold text-[#1F1C19]">
                  AED {propertyPrice.toLocaleString()}
                  <span className="text-xs font-sans font-normal text-stone-500 ml-1.5">
                    (~${Math.round(propertyPrice / 3.6725).toLocaleString()} USD)
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={1150000}
                max={5000000}
                step={50000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#B88E4C] h-2 bg-[#F5F1E8] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>AED 1.15M (1BR)</span>
                <span>AED 2.0M (Golden Visa)</span>
                <span>AED 5.0M+ (Penthouses)</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-serif text-lg font-bold text-[#B88E4C]">
                  AED {Math.round(downPaymentAmount).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#B88E4C] h-2 bg-[#F5F1E8] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>10% (Booking)</span>
                <span>20% (Standard)</span>
                <span>50% (Cash/Equity)</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Loan Tenure ({tenureYears} Years)
                </label>
                <span className="font-serif text-base font-bold text-[#1F1C19]">
                  {tenureYears * 12} Installments
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-[#B88E4C] h-2 bg-[#F5F1E8] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>25 Years</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Annual Interest Rate ({interestRate}%)
                </label>
                <span className="font-serif text-base font-bold text-[#1F1C19]">
                  UAE Bank Benchmark
                </span>
              </div>
              <input
                type="range"
                min={3.5}
                max={7.5}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#B88E4C] h-2 bg-[#F5F1E8] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>3.5%</span>
                <span>4.75% (Avg Fixed)</span>
                <span>7.5%</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#1F1C19] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#B88E4C]/30 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8B07D] block mb-1">
                Estimated Monthly Mortgage
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
                  AED {Math.round(monthlyPayment).toLocaleString()}
                </span>
                <span className="text-sm text-stone-300 font-light">/ month</span>
              </div>
              <span className="text-xs text-stone-400 block mt-1">
                Approx. ${monthlyPaymentUSD.toLocaleString()} USD / month
              </span>
            </div>

            {/* Financial Details */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Total Loan Amount</span>
                <span className="font-bold text-white font-mono">AED {Math.round(loanAmount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Initial Down Payment</span>
                <span className="font-bold text-[#D8B07D] font-mono">AED {Math.round(downPaymentAmount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Est. Annual Rental Income (8.8%)</span>
                <span className="font-bold text-[#4ADE80] font-mono">AED {estimatedAnnualRent.toLocaleString()} / yr</span>
              </div>
            </div>

            {/* Golden Visa Status */}
            <div className={`p-4 rounded-xl border ${
              isGoldenVisaEligible
                ? 'bg-[#B88E4C]/20 border-[#B88E4C] text-[#FAF8F5]'
                : 'bg-white/5 border-white/10 text-stone-400'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Award className={`w-4 h-4 ${isGoldenVisaEligible ? 'text-[#D8B07D]' : 'text-stone-400'}`} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isGoldenVisaEligible ? '10-Year UAE Golden Visa Eligible' : 'Golden Visa Threshold (AED 2.0M)'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isGoldenVisaEligible
                  ? 'Congratulations! This property value meets the official AED 2 Million threshold for long-term UAE Golden Residency for you and your family.'
                  : `Add AED ${(2000000 - propertyPrice).toLocaleString()} more to qualify for the 10-year renewable UAE Golden Residency Visa.`}
              </p>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-stone-400 leading-relaxed font-light">
              * Calculations are for illustrative purposes based on standard UAE banking terms. Final rates and mortgage approval depend on individual underwriting and central bank criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
