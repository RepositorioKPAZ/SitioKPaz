import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'empty',
  objectFit = 'cover',
  sizes,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive srcSet for different screen sizes
  const generateSrcSet = (baseSrc: string) => {
    // For uploaded images, we'll use the original for now
    if (baseSrc.includes('/lovable-uploads/')) {
      return baseSrc;
    }
    
    // For other images, we can add responsive versions later
    return baseSrc;
  };

  const imageClasses = cn(
    'transition-opacity duration-300',
    objectFit === 'cover' && 'object-cover',
    objectFit === 'contain' && 'object-contain',
    objectFit === 'fill' && 'object-fill',
    objectFit === 'none' && 'object-none',
    objectFit === 'scale-down' && 'object-scale-down',
    isLoaded ? 'opacity-100' : 'opacity-0',
    className
  );

  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-muted flex items-center justify-center text-muted-foreground',
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Placeholder while loading */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className={cn(
            'absolute inset-0 bg-muted animate-pulse rounded',
            className
          )}
        />
      )}
      
      <img
        src={generateSrcSet(src)}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        onLoad={handleLoad}
        onError={handleError}
        // Preload critical images
        {...(priority && { fetchPriority: 'high' as any })}
      />
    </div>
  );
};