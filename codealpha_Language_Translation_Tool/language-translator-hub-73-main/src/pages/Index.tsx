import { Translator } from "@/components/Translator";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Language Translator - Translate Text Instantly</title>
        <meta 
          name="description" 
          content="Free online language translator. Translate text between 20+ languages instantly with text-to-speech and copy features." 
        />
      </Helmet>
      
      <main className="min-h-screen py-12 md:py-16">
        <Translator />
      </main>
    </>
  );
};

export default Index;
