import { cn } from "@/lib/utils";

interface WaveformProps {
  isPlaying?: boolean;
  className?: string;
  barCount?: number;
}

const Waveform = ({ isPlaying = false, className, barCount = 40 }: WaveformProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-[3px] h-20", className)}>
      {Array.from({ length: barCount }).map((_, i) => {
        const delay = i * 0.05;
        const height = Math.random() * 60 + 20;
        
        return (
          <div
            key={i}
            className={cn(
              "w-1 rounded-full bg-gradient-to-t from-primary to-secondary transition-all duration-300",
              isPlaying ? "animate-wave" : "opacity-40"
            )}
            style={{
              height: isPlaying ? `${height}%` : "20%",
              animationDelay: `${delay}s`,
              animationDuration: `${0.8 + Math.random() * 0.4}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Waveform;
