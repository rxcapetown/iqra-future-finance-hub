
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WaitlistForm } from '@/components/WaitlistForm';
import { BenefitTiles } from '@/components/BenefitTiles';
import { ContactForm } from '@/components/ContactForm';
import { Toaster } from '@/components/ui/toaster';
import { Shield, AlertTriangle, TrendingUp, FileText, Users, Globe, CheckCircle, ArrowRight, Eye, Zap } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Eye className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ChainSight
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
                AI-Powered Risk Intelligence Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                AI-Powered Risk Intelligence
                <span className="block text-blue-600 dark:text-blue-400">for Global Trade</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                ChainSight acts as your virtual Chief Risk Officer—scanning contracts, vendors, and global events to flag risks before they cost you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>AI Contract Parsing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Vendor Health Scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Real-time Risk Alerts</span>
              </div>
            </div>

            <WaitlistForm />
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-600">
              {/* Risk Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Risk Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-700 dark:text-red-300">High Risk Vendor</span>
                      <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">Critical</Badge>
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400">Supplier ABC - Financial distress detected</div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Contract Red Flag</span>
                      <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">Medium</Badge>
                    </div>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400">Unusual payment terms identified</div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Geopolitical Monitor</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Stable</Badge>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">All regions monitoring normal</div>
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

      {/* Problem Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The Hidden Costs of Risk Blindness
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Global businesses lose billions annually from supply chain fraud, contract red flags, and vendor due diligence blind spots
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Supply Chain Fraud</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Companies like BHS collapsed due to hidden vendor relationships and fraudulent certifications that went undetected for years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Contract Red Flags</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Legal teams miss critical clauses and unfavorable terms buried in complex agreements, leading to costly disputes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Vendor Bankruptcy</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Sudden vendor failures disrupt supply chains when financial distress signals go unnoticed until it's too late.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Your Virtual Chief Risk Officer
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              ChainSight's AI continuously monitors your business ecosystem to identify and flag risks before they become costly disruptions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Contract Parsing</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Automatically extract key terms, identify unusual clauses, and flag potential legal risks in seconds
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Vendor Health Scoring</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Real-time financial health monitoring and predictive analytics for all your suppliers and partners
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Red Flag Detection</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Advanced pattern recognition to identify fraud indicators, compliance violations, and operational risks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Geopolitical Risk Alerts</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Stay ahead of regulatory changes, sanctions, and political events that could impact your operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How ChainSight Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Simple 3-step process to transform your risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Upload</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Connect your contracts, vendor data, and business documents to ChainSight's secure platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Analyze</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our AI scans everything in real-time, cross-referencing global databases and risk indicators
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Act</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Receive instant alerts and actionable insights to mitigate risks before they impact your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Built for Global Trade Leaders
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              ChainSight empowers businesses engaged in cross-border trade and complex vendor relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Global Brands</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Multinational companies with complex supply chains and vendor networks across multiple jurisdictions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Banks & Financial Institutions</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Trade finance providers needing enhanced due diligence and risk assessment capabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">B2B Platforms & SMEs</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Growing businesses lacking in-house legal or compliance teams but facing enterprise-level risks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-6">
            Backed by Experience
          </Badge>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Leading $800M+ in Global Trade
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Our team brings deep expertise from DIFC, private banking, and international trade finance to build the risk intelligence platform businesses actually need.
          </p>
          <div className="flex items-center justify-center space-x-8 text-slate-500 dark:text-slate-400">
            <span className="text-sm">DIFC Experience</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Private Banking</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Trade Finance</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Ready to See Risks Before They See You?
            </h2>
            <p className="text-base mb-6 opacity-90">
              Join forward-thinking businesses using ChainSight to stay ahead of supply chain and compliance risks.
            </p>
            
            <div className="max-w-xs mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ChainSight
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                AI-powered risk intelligence for global trade
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Company</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Connect</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © 2024 ChainSight. AI-powered risk intelligence for global businesses.
            </p>
          </div>
        </div>
      </footer>
      
      <Toaster />
      <ChatWidget />
    </div>
  );
};

export default Index;
