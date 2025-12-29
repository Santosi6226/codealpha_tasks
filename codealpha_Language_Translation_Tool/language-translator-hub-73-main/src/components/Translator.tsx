import { useState, useCallback } from "react";
import { ArrowRightLeft, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector, languages } from "./LanguageSelector";
import { TranslationPanel } from "./TranslationPanel";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

export function Translator() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState("es");
  const [isLoading, setIsLoading] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  const getLanguageName = (code: string) => {
    if (code === "auto") return "Auto-detect";
    return languages.find((l) => l.code === code)?.name || code;
  };

  const handleTranslate = useCallback(async () => {
    if (!sourceText.trim()) {
      toast.error("Please enter text to translate");
      return;
    }

    setIsLoading(true);
    setTranslatedText("");

    try {
      const targetLangName = getLanguageName(targetLang);
      const sourceLangName = getLanguageName(sourceLang);

      const { data, error } = await supabase.functions.invoke("translate", {
        body: {
          text: sourceText,
          sourceLang: sourceLangName,
          targetLang: targetLangName,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setTranslatedText(data.translatedText);
      toast.success("Translation complete!");
    } catch (error) {
      console.error("Translation error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to translate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [sourceText, sourceLang, targetLang]);

  const handleSwapLanguages = () => {
    if (sourceLang === "auto") {
      toast.info("Cannot swap when source is set to auto-detect");
      return;
    }

    setIsSwapping(true);
    
    // Swap languages and text
    const tempLang = sourceLang;
    const tempText = sourceText;
    
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    setSourceText(translatedText);
    setTranslatedText(tempText);

    setTimeout(() => setIsSwapping(false), 400);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
          <Languages className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Language Translator
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Translate text between languages instantly with our powerful translation tool
        </p>
      </div>

      {/* Language Selection Bar */}
      <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="w-48">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleSwapLanguages}
          disabled={sourceLang === "auto"}
          className={cn(
            "mt-6 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all",
            isSwapping && "animate-swap"
          )}
        >
          <ArrowRightLeft className="h-4 w-4 text-primary" />
        </Button>

        <div className="w-48">
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To"
            excludeAuto
          />
        </div>
      </div>

      {/* Translation Panels */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div 
          className="glass rounded-2xl p-6 shadow-card animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <TranslationPanel
            value={sourceText}
            onChange={setSourceText}
            placeholder="Enter text to translate..."
            label="Source Text"
          />
        </div>

        <div 
          className="glass rounded-2xl p-6 shadow-card animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <TranslationPanel
            value={translatedText}
            readOnly
            isLoading={isLoading}
            placeholder="Translation will appear here..."
            label="Translation"
          />
        </div>
      </div>

      {/* Translate Button */}
      <div className="flex justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Button
          onClick={handleTranslate}
          disabled={isLoading || !sourceText.trim()}
          size="lg"
          className="px-12 py-6 text-lg font-semibold rounded-xl shadow-card hover:shadow-lg transition-all"
        >
          {isLoading ? "Translating..." : "Translate"}
        </Button>
      </div>

      {/* Footer hint */}
      <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
        Tip: Use the copy button to quickly copy translations, or the speaker icon to hear them
      </p>
    </div>
  );
}
