
import { BrainCircuit } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
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
            © 2025 ChainSight. AI-powered risk intelligence for global businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
