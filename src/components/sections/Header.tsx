
import { ThemeToggle } from '@/components/ThemeToggle';
import { Eye } from 'lucide-react';

export function Header() {
  return (
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
  );
}
