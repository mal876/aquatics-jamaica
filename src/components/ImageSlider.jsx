import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "asaj-swimming_XL.jpg",
  "swimming.jpeg",
  "yona.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 90000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className={`w-full transition-transform duration-500 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full" />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
