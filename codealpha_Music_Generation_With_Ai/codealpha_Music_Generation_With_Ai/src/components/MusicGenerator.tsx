import { useState } from "react";
import { Sparkles, Play, Pause, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Waveform from "./Waveform";
import GenreChip from "./GenreChip";
import GeneratedTrack from "./GeneratedTrack";
import { toast } from "@/hooks/use-toast";

const genres = [
  "Classical",
  "Jazz",
  "Electronic",
  "Ambient",
  "Lo-Fi",
  "Orchestral",
  "Piano",
  "Cinematic",
];

const mockTracks = [
  { id: 1, title: "Midnight Sonata", genre: "Classical", duration: "2:34" },
  { id: 2, title: "Neon Dreams", genre: "Electronic", duration: "3:12" },
  { id: 3, title: "Rainy Café", genre: "Lo-Fi", duration: "2:48" },
];

const MusicGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["Classical"]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTrackId, setPlayingTrackId] = useState<number | null>(null);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Enter a prompt",
        description: "Describe the music you want to create",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setIsPlaying(true);

    // Simulate generation
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsGenerating(false);
    toast({
      title: "Music Generated!",
      description: "Your AI-composed track is ready to play",
    });
  };

  const toggleTrackPlayback = (trackId: number) => {
    setPlayingTrackId(playingTrackId === trackId ? null : trackId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Main Generator Card */}
      <div className="glass-card rounded-2xl p-8 space-y-6">
        {/* Waveform Visualization */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-xl" />
          <Waveform 
            isPlaying={isPlaying || isGenerating} 
            className="py-8"
            barCount={50}
          />
        </div>

        {/* Prompt Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Describe your music
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A peaceful piano melody with soft strings, evoking a sunset over the ocean..."
            className="w-full h-24 px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>

        {/* Genre Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-muted-foreground">
            Style & Genre
          </label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <GenreChip
                key={genre}
                label={genre}
                selected={selectedGenres.includes(genre)}
                onClick={() => toggleGenre(genre)}
              />
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center pt-4">
          <Button
            variant="glow"
            size="xl"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="min-w-[200px]"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Composing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Music
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Recent Generations */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-semibold text-foreground">
          Recent Compositions
        </h3>
        <div className="space-y-3">
          {mockTracks.map((track) => (
            <GeneratedTrack
              key={track.id}
              title={track.title}
              genre={track.genre}
              duration={track.duration}
              isPlaying={playingTrackId === track.id}
              onPlayToggle={() => toggleTrackPlayback(track.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicGenerator;
