import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold text-gray-900">PrioritizeAI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-[#7C3AED] transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-[#7C3AED] transition-colors">How it Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-[#7C3AED] transition-colors">Pricing</a>
        </div>
        <button className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-6 py-2 rounded-lg hover:from-[#6D28D9] hover:to-[#0891B2] transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Prioritize Your Product Features with
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent"> AI Intelligence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Stop guessing which features to build first. Our AI-powered platform analyzes your product vision and ranks features by impact, helping you build the right MVP faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#6D28D9] hover:to-[#0891B2] transition-all duration-300 shadow-lg">
            Start Prioritizing
          </button>
          <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">PrioritizeAI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for product teams who want to make data-driven decisions about their roadmap
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your product vision, market context, and user needs to provide intelligent feature rankings.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Time to Market</h3>
              <p className="text-gray-600">
                Focus on high-impact features first. Reduce development cycles and get your MVP to market 30% faster.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Get clear scores and explanations for each feature. Make informed decisions backed by AI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to prioritize your product features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Vision</h3>
              <p className="text-gray-600">
                Tell us about your product idea, vision, and any specific features you're considering.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your inputs and ranks features based on impact, feasibility, and market fit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Roadmap</h3>
              <p className="text-gray-600">
                Receive a prioritized feature list with scores and explanations to guide your development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">PrioritizeAI</span> transforms your product vision into a prioritized roadmap
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/10 rounded-lg p-8 max-w-4xl mx-auto border border-[#7C3AED]/20">
            <div className="aspect-video bg-gradient-to-r from-[#7C3AED]/5 to-[#06B6D4]/5 rounded-lg flex items-center justify-center border-2 border-dashed border-[#7C3AED]/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build the Right Features?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of product teams who are already using PrioritizeAI to make better decisions.
          </p>
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Start Your Free Analysis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">PrioritizeAI</span>
              </div>
              <p className="text-gray-400">
                AI-powered feature prioritization for modern product teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrioritizeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
