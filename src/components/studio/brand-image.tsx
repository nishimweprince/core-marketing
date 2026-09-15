import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BrandImageProps = {
  src: string;
  alt: string;
  frameClassName: string;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export function BrandImage({
  src,
  alt,
  frameClassName,
  imageClassName,
  objectPosition = "center",
  priority = false,
  tone = "dark",
}: BrandImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setStatus("loading");
    const image = imageRef.current;
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? "loaded" : "error");
    }
  }, [src]);

  return (
    <div
      className={cn(
        "brand-photo relative isolate overflow-hidden",
        tone === "light" ? "bg-limestone" : "bg-night",
        frameClassName,
      )}
      data-image-state={status}
    >
      {status === "loading" ? (
        <div
          className={cn(
            "brand-image-skeleton absolute inset-0",
            tone === "light" ? "brand-image-skeleton-light" : "brand-image-skeleton-dark",
          )}
          aria-hidden="true"
        />
      ) : null}

      {status === "error" ? (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            tone === "light" ? "bg-limestone text-ink" : "bg-night text-limestone",
          )}
          role="img"
          aria-label={`${alt} The image is currently unavailable.`}
        >
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="size-2 rounded-full bg-juniper" />
            <span className="font-sans text-xs font-medium tracking-brand uppercase">
              Image unavailable
            </span>
          </div>
        </div>
      ) : null}

      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        style={{ objectPosition }}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-300",
          status === "loaded" ? "opacity-100" : "opacity-0",
          imageClassName,
        )}
      />
    </div>
  );
}
