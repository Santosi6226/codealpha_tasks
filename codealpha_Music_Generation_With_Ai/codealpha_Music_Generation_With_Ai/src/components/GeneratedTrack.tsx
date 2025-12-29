import { Play, Pause, Download, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface GeneratedTrackProps {
  title: string;
  genre: string;
  duration: string;
  isPlaying?: boolean;
  onPlayToggle?: () => void;
}

const GeneratedTrack = ({ 
  title, 
  genre, 
  duration, 
  isPlaying = false, 
  onPlayToggle 
}: GeneratedTrackProps) => {
  return (
    <div className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:bg-muted/30 transition-all duration-300">
      <Button
        variant="glow"
        size="icon"
        onClick={onPlayToggle}
        className="shrink-0"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </Button>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-medium text-foreground truncate">{title}</h4>
        <p className="text-sm text-muted-foreground">{genre}</p>
      </div>
      
      <div className="flex items-center gap-3 text-muted-foreground">
        <div className="flex items-center gap-1 text-sm">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default GeneratedTrack;
