import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy, Check, X, Volume2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TranslationPanelProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  isLoading?: boolean;
  maxLength?: number;
  label: string;
}

export function TranslationPanel({
  value,
  onChange,
  placeholder,
  readOnly = false,
  isLoading = false,
  maxLength = 5000,
  label,
}: TranslationPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    onChange?.("");
  };

  const handleSpeak = () => {
    if (!value) return;
    const utterance = new SpeechSynthesisUtterance(value);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <div className="flex items-center gap-1">
          {!readOnly && value && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          {value && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSpeak}
                className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
              >
                <Volume2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="relative flex-1">
        <Textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={cn(
            "h-full min-h-[200px] resize-none bg-card/50 border-border/50 focus:border-primary/50 transition-all",
            "text-lg leading-relaxed",
            readOnly && "cursor-default",
            isLoading && "animate-pulse-subtle"
          )}
          maxLength={maxLength}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/30 rounded-lg">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
      </div>

      {!readOnly && (
        <div className="flex justify-end mt-2">
          <span className="text-xs text-muted-foreground">
            {value.length} / {maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
