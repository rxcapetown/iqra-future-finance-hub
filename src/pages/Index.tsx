import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WaitlistForm } from '@/components/WaitlistForm';
import { BenefitTiles } from '@/components/BenefitTiles';
import { ContactForm } from '@/components/ContactForm';
import { Globe, Zap, Shield, TrendingUp, ArrowRight, Code, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Iqra
          </span>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Building the Future of Emerging Markets
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                The Legal & Financial 
                <span className="block">Operating System</span>
                <span className="block text-blue-600 dark:text-blue-400">for Emerging Markets</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Iqra eliminates the systemic friction in financial and legal infrastructure across MENA, South Asia, and Africa with programmable compliance, smart contracts, and AI-powered solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>Cross-Border Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Shariah + Common Law</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>AI-Powered Compliance</span>
              </div>
            </div>

            <WaitlistForm />
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-600">
              {/* API Interface Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">API Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">KYC Verification</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Active</Badge>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">POST /api/v1/kyc/verify</div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Smart Contract Deploy</span>
                      <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">Processing</Badge>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">POST /api/v1/contracts/deploy</div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">FX Optimization</span>
                      <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">Ready</Badge>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">GET /api/v1/fx/optimize</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* Why Iqra Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Iqra?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We're solving the fundamental infrastructure challenges that prevent emerging markets from reaching their full potential
            </p>
          </div>
          
          <BenefitTiles />
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Four comprehensive solutions that power the next generation of emerging market businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Legal Contract Generator */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-600">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Legal Contract Generator
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                        Auto-generate compliant contracts in minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Toggle between Shariah and Common Law clauses
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Built-in clause validation using regulatory-trained AI
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Ready-to-sign PDFs with audit trails and jurisdictional flags
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alt-Credit Scoring Engine */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-600">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Alt-Credit Scoring Engine
                      </h3>
                      <p className="text-lg text-green-600 dark:text-green-400 font-medium mb-4">
                        Unlock credit where banks won't go.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Uses telco, utility, and transaction data to create credit profiles
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Designed for thin-file or unbanked SME users
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        API-accessible scores for lenders, platforms, and trade partners
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FX Optimization Layer */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-600">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        FX Optimization Layer
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">
                        Smart global payments without the FX chaos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Routes payments through fiat, stablecoins, or pooled liquidity
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        AI forecasts FX shifts and automates dynamic hedging
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Reduces fees and delays for SMEs and marketplaces
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RegTech Infrastructure APIs */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-600">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        RegTech Infrastructure APIs
                      </h3>
                      <p className="text-lg text-orange-600 dark:text-orange-400 font-medium mb-4">
                        Compliance tools that adapt to your market.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        KYC, AML, VAT, and cross-border tools for startups and banks
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Localized rule engines that auto-update
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Deployable via low-code dashboards or full API integration
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Be the First to Access Iqra Beta
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading fintechs, legal firms, and SMEs who are already transforming how business gets done in emerging markets.
            </p>
            
            <div className="max-w-md mx-auto">
              <WaitlistForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Iqra
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Building the infrastructure for the next billion businesses
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-400">
                  MENA • South Asia • Africa
                </span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 text-center md:text-left">Contact Us</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
