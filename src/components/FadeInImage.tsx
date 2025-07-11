import React, { useState } from "react";

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  style?: React.CSSProperties;
  placeholderColor?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  src,
  alt,
  className = "",
  style = {},
  placeholderColor = "#232323",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        {...props}
        className={className}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
          display: "block",
        }}
        onLoad={() => setLoaded(true)}
        draggable={props.draggable}
      />
      {!loaded && (
        <span
          style={{
            background: placeholderColor,
            position: "absolute",
            inset: 0,
            borderRadius: style?.borderRadius,
            transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
            display: "block",
          }}
        />
      )}
    </>
  );
};

export default FadeInImage;
