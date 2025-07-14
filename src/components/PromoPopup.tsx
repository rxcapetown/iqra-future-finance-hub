import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Timer } from 'lucide-react';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Show popup after 2 seconds if not dismissed before
    const timer = setTimeout(() => {
      const hasBeenShown = localStorage.getItem('promo-popup-shown');
      if (!hasBeenShown) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Calculate time left until August 15th, 2025
    const calculateTimeLeft = () => {
      const deadline = new Date('2025-08-15T23:59:59');
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days} days, ${hours} hours left`);
      } else {
        setTimeLeft('Offer expired');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('promo-popup-shown', 'true');
  };

  const deadline = new Date('2025-08-15T23:59:59');
  const now = new Date();
  const isExpired = now > deadline;

  if (isExpired) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-2xl backdrop-blur-sm z-[60]">
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
            <Timer className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            🎉 Limited Time Offer!
          </DialogTitle>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Get 3 Months FREE
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Exclusively for early supporters who sign up before August 15th, 2025
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-full px-4 py-2">
            <Timer className="w-4 h-4" />
            <span className="font-medium">{timeLeft}</span>
          </div>
        </DialogHeader>

        <div className="mt-6 px-2">
          <WaitlistForm variant="light" />
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg p-2">
          * This offer is only valid until August 15th, 2025. No payment required.
        </p>
      </DialogContent>
    </Dialog>
  );
}