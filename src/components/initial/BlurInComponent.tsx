import BlurIn from "@/components/magicui/blur-in";

const BlurInComponent = ({
  word,
  duration,
}: {
  word: string;
  duration: number;
}) => {
  return (
    <BlurIn
      word={word}
      duration={duration}
      className="text-4xl font-bold text-black dark:text-white"
    />
  );
};
export default BlurInComponent;
