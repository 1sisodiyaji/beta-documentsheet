const TimeCalculator = ({ text }) => {
  if (!text) return '0 min';

  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / wordsPerMinute);

  return `${time} min`;
};

export default TimeCalculator;
