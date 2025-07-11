import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecommendationsCarousel = ({ recommendations }) => {
  const [start, setStart] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 2; // Show two at a time
  const total = recommendations.length;

  // Compute the indices of the visible recommendations
  const getVisible = () => {
    return Array.from({ length: visibleCount }, (_, i) => (start + i) % total);
  };

  // Rotate by visibleCount instead of 1
  const next = () => setStart((prev) => (prev + visibleCount) % total);
  const prev = () => setStart((prev) => (prev - visibleCount + total) % total);

  const visibleIndices = getVisible();

  // Calculate the number of pages (dots)
  const pageCount = Math.ceil(total / visibleCount);
  // The current page index
  const currentPage = Math.floor(start / visibleCount);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {total > visibleCount && (
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 border border-gray-700 text-gray-300"
            aria-label="Previous Recommendation"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 border border-gray-700 text-gray-300"
            aria-label="Next Recommendation"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
      <div className="overflow-hidden">
        <div className="flex gap-6 justify-center">
          {visibleIndices.map((i) => {
            const isLong = recommendations[i].text.length > 500;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-900 rounded-xl p-8 shadow-lg border border-gray-800 min-h-[200px] flex-1 flex flex-col justify-between max-w-2xl w-full"
              >
                <p className={`text-lg text-gray-200 mb-4 whitespace-pre-line ${isLong && !expanded ? 'line-clamp-14' : ''}`}
                  style={isLong && !expanded ? { WebkitLineClamp: 14, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' } : {}}
                >
                  "{recommendations[i].text}"
                </p>
                {isLong && (
                  <button
                    className="text-primary-400 text-sm font-medium mb-4 self-start focus:outline-none hover:underline"
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-expanded={expanded}
                  >
                    {expanded ? 'Show less' : 'Show more'}
                  </button>
                )}
                <div className="flex items-center space-x-4 mt-4">
                  <div>
                    <div className="text-primary-400 font-semibold">{recommendations[i].name}</div>
                    <div className="text-gray-400 text-sm">{recommendations[i].role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Indicator dots */}
      {total > visibleCount && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStart(idx * visibleCount)}
              className={`w-3 h-3 rounded-full border border-primary-500 transition-all duration-200 ${
                idx === currentPage ? 'bg-primary-500' : 'bg-dark-700'
              }`}
              aria-label={`Show recommendations page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsCarousel; 