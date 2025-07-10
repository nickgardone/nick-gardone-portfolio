import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecommendationsCarousel = ({ recommendations }) => {
  const [start, setStart] = useState(0);
  const visibleCount = 3;
  const total = recommendations.length;

  // Compute the indices of the visible recommendations
  const getVisible = () => {
    return Array.from({ length: visibleCount }, (_, i) => (start + i) % total);
  };

  const next = () => setStart((prev) => (prev + 1) % total);
  const prev = () => setStart((prev) => (prev - 1 + total) % total);

  const visibleIndices = getVisible();

  // Calculate the number of dot indicators (one per unique visible set)
  const dotCount = total;
  // The active dot is the first visible index
  const activeDot = start;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 border border-gray-700 text-gray-300"
          aria-label="Previous Recommendation"
        >
          <ChevronLeft size={24} />
        </button>
        {/* Removed confusing index text */}
        <button
          onClick={next}
          className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 border border-gray-700 text-gray-300"
          aria-label="Next Recommendation"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-6 justify-center">
          {visibleIndices.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-900 rounded-xl p-8 shadow-lg border border-gray-800 min-h-[200px] flex-1 flex flex-col justify-between max-w-xs w-full"
            >
              <p className="text-lg text-gray-200 mb-4">"{recommendations[i].text}"</p>
              <div className="flex items-center space-x-4 mt-4">
                {recommendations[i].avatar && (
                  <img
                    src={recommendations[i].avatar}
                    alt={recommendations[i].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                  />
                )}
                <div>
                  <div className="text-primary-400 font-semibold">{recommendations[i].name}</div>
                  <div className="text-gray-400 text-sm">{recommendations[i].role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: dotCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStart(idx)}
            className={`w-3 h-3 rounded-full border border-primary-500 transition-all duration-200 ${
              idx === activeDot ? 'bg-primary-500' : 'bg-dark-700'
            }`}
            aria-label={`Show recommendations starting at ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsCarousel; 