import { cn } from "@/lib/utils";

interface GenreChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const GenreChip = ({ label, selected = false, onClick }: GenreChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
        selected
          ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          : "bg-muted/30 border-border/50 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
};

export default GenreChip;
