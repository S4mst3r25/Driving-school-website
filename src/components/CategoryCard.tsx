import { useState, type ReactNode } from "react";
import FadeInImage from "./FadeInImage";

interface CategoryCardProps {
  title: string;
  img: string;
  desc: string;
  children: ReactNode;
}

const CategoryCard = ({ title, img, desc, children }: CategoryCardProps) => {
  const [open, setOpen] = useState(false);
  const borderWidth = 2;

  const imagePoints = "16,0 400,0 400,250 0,250 0,16";
  const cardPolygon = "16,0 400,0 400,484 384,500 0,500 0,16";
  const modalPolygon = "8,0 892,0 900,8 900,892 892,900 8,900 0,892 0,8";
  return (
    <>
      <div
        className="relative flex flex-col items-center w-[400px] h-[500px] p-6 cursor-pointer transition-transform hover:scale-102 shadow-xl bg-transparent"
        onClick={() => setOpen(true)}
        style={{ background: "transparent" }}
      >
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
        >
          <polygon
            points={cardPolygon}
            fill="black"
            stroke="white"
            strokeWidth={borderWidth}
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center w-full h-full">
          <svg
            className="absolute left-0 top-0 w-full h-[220px] z-0 pointer-events-none"
            viewBox="0 0 400 250"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="imgcut">
                <polygon points={imagePoints} />
              </clipPath>
            </defs>
            <foreignObject x="0" y="0" width="400" height="250" clipPath="url(#imgcut)">
              <FadeInImage
                src={img}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </foreignObject>
          </svg>
          <div className="h-[220px] mb-6" />
          <h2 className="text-2xl font-bold mb-3 text-center text-white">{title}</h2>
          <p className="text-white text-center text-lg">{desc}</p>
        </div>
      </div>
      {open && (
        <div
          className="fixed left-0 right-0 top-[80px] bottom-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.32)', backdropFilter: 'blur(2px)', transition: 'opacity 0.22s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div
            className="relative p-16 max-w-6xl w-full min-h-[800px] flex flex-col items-center bg-transparent"
            style={{ borderRadius: '32px', boxShadow: '0 8px 48px 0 rgba(0,0,0,0.5)', opacity: 0, transform: 'scale(0.95)', animation: 'modal-fade-in 0.22s cubic-bezier(0.4,0,0.2,1) forwards' }}
          >
            <svg
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              viewBox="0 0 900 900"
              preserveAspectRatio="none"
            >
              <polygon
                points={modalPolygon}
                fill="black"
                stroke="white"
                strokeWidth={borderWidth}
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center w-full h-full pt-2">
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-80 px-3 py-1 hover:bg-opacity-100 transition z-20 cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Затвори"
                style={{ pointerEvents: 'auto', boxShadow: '0 2px 8px 2px rgba(0,0,0,0.7)' }}
              >
                ×
              </button>
              <h2 className="text-5xl font-bold mb-8 mt-2 text-center text-white">{title}</h2>
              <div className="text-white text-lg text-center whitespace-pre-line max-w-4xl overflow-y-auto w-full" style={{ opacity: 1 }}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryCard;

