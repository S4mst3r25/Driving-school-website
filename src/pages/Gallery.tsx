import { useState } from "react";
import FadeInImage from "../components/FadeInImage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
	{ src: "/images/cars.jpg" },
	{ src: "/images/car.jpg" },
	{ src: "/images/cars-far.jpg" },
	{ src: "/images/cars-winter.jpg" },
	{ src: "/images/car-back.jpg" },
	{ src: "/images/school-interior.jpg" },
	{ src: "/images/school-outside.jpg" },
	{ src: "/images/truck1.jpg" },
	{ src: "/images/truck2.jpg" }
];

const Gallery = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

		const positions = {
		center: {
			x: 0,
			scale: 1,
			opacity: 1,
			zIndex: 2,
			width: "40%",
			left: "50%",
			transform: "translateX(-50%)"
		},
		left: {
			x: 0,
			scale: 0.8,
			opacity: 0.5,
			zIndex: 1,
			width: "25%",
			left: "20%",
			transform: "translateX(-50%)"
		},
		right: {
			x: 0,
			scale: 0.8,
			opacity: 0.5,
			zIndex: 1,
			width: "25%",
			left: "80%",
			transform: "translateX(-50%)"
		}
	};

	const slideTransition = {
		duration: 0.4,
		ease: [0.32, 0.72, 0, 1] // Custom easing for smooth movement
	};

	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		setCurrentIndex((prevIndex) => {
			let nextIndex = prevIndex + newDirection;
			if (nextIndex < 0) nextIndex = images.length - 1;
			if (nextIndex >= images.length) nextIndex = 0;
			return nextIndex;
		});
	};

	const getAdjacentIndices = () => {
		const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
		const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
		return { prev, next };
	};

	const { prev, next } = getAdjacentIndices();

	return (
		<div className="p-4 md:p-8 lg:p-16">
			<h1 className="text-4xl md:text-5xl font-bold mb-8 lg:mb-16 text-center">Галерия</h1>

			{/* Mobile Column View */}
			<div className="lg:hidden flex flex-col gap-4 max-w-[600px] mx-auto">
				{images.map((img, idx) => (
					<div 
						key={idx} 
						className="relative w-full overflow-hidden cursor-pointer"
						onClick={() => setFullscreenImage(img.src)}
					>
						<FadeInImage
							src={img.src}
							className="object-cover w-full select-none"
							style={{ display: 'block' }}
							draggable={false}
							alt=""
						/>
					</div>
				))}
			</div>

			{/* Fullscreen View */}
			{fullscreenImage && (
				<div 
					className="fixed inset-0 bg-black z-50 overscroll-none"
					onClick={() => setFullscreenImage(null)}
				>
					<button
						className="absolute right-4 top-4 z-10 p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
						onClick={(e) => {
							e.stopPropagation();
							setFullscreenImage(null);
						}}
						aria-label="Close fullscreen view"
					>
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							width="24" 
							height="24" 
							viewBox="0 0 24 24" 
							fill="none" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
					<div className="w-full h-full flex items-center justify-center">
						<img
							src={fullscreenImage}
							className="max-w-full max-h-full w-auto h-auto"
							alt=""
						/>
					</div>
				</div>
			)}

			{/* Desktop Carousel View */}
			<div className="hidden lg:block relative max-w-[1200px] mx-auto h-[60vh] min-h-[400px] max-h-[600px]">
				<div className="absolute inset-0 flex items-center justify-center">
					<AnimatePresence initial={false}>
						{[prev, currentIndex, next].map((index) => (
							<motion.div
								key={index}
								className="absolute top-1/2 -translate-y-1/2 aspect-square cursor-grab active:cursor-grabbing"
								initial={direction > 0 ? positions.right : positions.left}
								animate={
									index === currentIndex
										? positions.center
										: index === prev
										? positions.left
										: positions.right
								}
								exit={direction > 0 ? positions.left : positions.right}
								transition={slideTransition}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={1}
								onDragEnd={(e, { offset, velocity }) => {
									const swipe = swipePower(offset.x, velocity.x);
									if (swipe < -swipeConfidenceThreshold) {
										paginate(1);
									} else if (swipe > swipeConfidenceThreshold) {
										paginate(-1);
									}
								}}
							>
								<div 
									onClick={() => {
										if (index === currentIndex) {
											setFullscreenImage(images[index].src);
										}
									}}
									className="w-full h-full"
								>
									<FadeInImage
										src={images[index].src}
										className={`object-cover w-full h-full select-none shadow-2xl ${index === currentIndex ? 'cursor-pointer' : ''}`}
										style={{ display: 'block' }}
										draggable={false}
										alt=""
									/>
								</div>
							</motion.div>
						))}
					</AnimatePresence>

					{/* Navigation Buttons */}
					<button
						className="absolute left-[20%] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 transition-colors p-3 text-white"
						onClick={() => paginate(-1)}
						aria-label="Previous image"
					>
						<ChevronLeft size={24} />
					</button>
					<button
						className="absolute right-[20%] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 transition-colors p-3 text-white"
						onClick={() => paginate(1)}
						aria-label="Next image"
					>
						<ChevronRight size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Gallery;