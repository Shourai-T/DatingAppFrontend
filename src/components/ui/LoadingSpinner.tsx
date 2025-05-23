import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Loader2 className="h-10 w-10 text-[#2E3A22] animate-spin" />
    </div>
  );
};

export default LoadingSpinner;