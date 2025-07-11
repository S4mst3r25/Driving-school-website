import { useState } from "react";

const images = [
	{
		src: "/images/cars.jpg",
		gridClass: "row-span-2 col-span-2",
	},
	{
		src: "/images/car.jpg",
		gridClass: "row-span-1 col-span-1",
	},
	{
		src: "/images/cars-far.jpg",
		gridClass: "row-span-2 col-span-2",
	},
	{
		src: "/images/cars-winter.jpg",
		gridClass: "row-span-2 col-span-1",
	},
	{
		src: "/images/car-back.jpg",
		gridClass: "row-span-1 col-span-1",
	},
	{
		src: "/images/school-interior.jpg",
		gridClass: "row-span-2 col-span-1",
	},
	{
		src: "/images/school-outside.jpg",
		gridClass: "row-span-2 col-span-2",
	},
	{
		src: "/images/truck1.jpg",
		gridClass: "row-span-2 col-span-1",
	},
	{
		src: "/images/truck2.jpg",
		gridClass: "row-span-2 col-span-2",
	}
];

const Gallery = () => {
	const [selected, setSelected] = useState<number | null>(null);
	const [showViewer, setShowViewer] = useState(false);

	const openViewer = (idx: number) => {
		setSelected(idx);
		setTimeout(() => setShowViewer(true), 10);
	};

	const closeViewer = () => {
		setShowViewer(false);
		setTimeout(() => setSelected(null), 200);
	};

	return (
		<div className="m-16">
			<h1 className="text-5xl font-bold mb-8">Галерия</h1>
			<div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[120px] md:auto-rows-[150px]">
				{images.map((img, idx) => (
					<div
						key={idx}
						className={`relative overflow-hidden group ${img.gridClass}`}
						onClick={() => openViewer(idx)}
					>
						<img
							src={img.src}
							className="object-cover w-full h-full select-none group-hover:cursor-pointer"
							draggable="false"
						/>
						<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200 group-hover:cursor-pointer" />
					</div>
				))}
			</div>
			{selected !== null && (
				<div
					className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-200 ${showViewer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
					onClick={closeViewer}
				>
					<div
						className={`relative max-w-3xl w-full flex flex-col items-center transform transition-transform duration-200 ${showViewer ? 'scale-100' : 'scale-95'}`}
						onClick={e => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 px-3 py-1 hover:bg-opacity-80 transition cursor-pointer"
							onClick={closeViewer}
							aria-label="Затвори"
						>
							×
						</button>
						<img
							src={images[selected].src}
							className="max-h-[70vh] w-auto object-contain shadow-lg"
							draggable="false"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;