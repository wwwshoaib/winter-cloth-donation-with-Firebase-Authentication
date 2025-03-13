import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "https://i.postimg.cc/25c8kxNP/1.jpg",
        text: "Your Old Coat Can Be Someone's Lifeline!"
    },
    {
        id: 2,
        image: "https://i.postimg.cc/4djftNdP/3.jpg",
        text: "Give the Gift of Warmth This Winter!"
    },
    {
        id: 3,
        image: "https://i.postimg.cc/9F5XQMsF/2.jpg",
        text: "Help Us Keep Someone Warm!"
    }
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="  overflow-hidden rounded-sm shadow-lg">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.0 }}
                    className="relative"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].text}
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                        {slides[current].text}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
