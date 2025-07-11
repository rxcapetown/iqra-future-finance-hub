import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { WaitlistForm } from '@/components/WaitlistForm';
import { X, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-primary to-secondary border-0 text-primary-foreground">
        <DialogHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-2">
            <Timer className="w-6 h-6 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary-foreground">
            🎉 Limited Time Offer!
          </DialogTitle>
          <div className="bg-primary-foreground/20 rounded-lg p-3 backdrop-blur-sm">
            <p className="text-lg font-semibold text-primary-foreground">
              Get 1 Year FREE
            </p>
            <p className="text-sm text-primary-foreground/80">
              Only for early supporters who sign up before August 15th, 2025
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/90">
            <Timer className="w-4 h-4" />
            <span>{timeLeft}</span>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <WaitlistForm variant="light" />
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
        >
          <X className="w-4 h-4" />
        </Button>

        <p className="text-xs text-center text-primary-foreground/70 mt-4">
          * This offer is only valid until August 15th, 2025. No payment required.
        </p>
      </DialogContent>
    </Dialog>
  );
}