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
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
        <DialogHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-2">
            <Timer className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </div>
          <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            🎉 Limited Time Offer!
          </DialogTitle>
          <div className="bg-slate-200/50 dark:bg-slate-700/50 rounded-lg p-3 backdrop-blur-sm">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Get 3 Months FREE
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Exclusively for early supporters who sign up before August 15th, 2025
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Timer className="w-4 h-4" />
            <span>{timeLeft}</span>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <WaitlistForm variant="light" />
        </div>

        <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
          * This offer is only valid until August 15th, 2025. No payment required.
        </p>
      </DialogContent>
    </Dialog>
  );
}