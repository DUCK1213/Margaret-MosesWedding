import React from 'react';

interface GeometricShapeProps {
  className?: string;
  animation?: 'float' | 'rotate' | 'pulse' | 'spiral';
  color?: 'gold' | 'emerald' | 'cream' | 'gradient';
  size?: 'small' | 'medium' | 'large';
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  className = '',
  animation = 'float',
  color = 'gold',
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    gold: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    emerald: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    cream: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    gradient: 'bg-gradient-to-br from-yellow-400 via-emerald-400 to-yellow-600'
  };

  const animationClasses = {
    float: 'animate-3d-float',
    rotate: 'animate-3d-rotate',
    pulse: 'animate-3d-pulse',
    spiral: 'animate-3d-spiral'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${animationClasses[animation]}
        rounded-full
        shadow-lg
        transform-3d
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    />
  );
};

interface FloatingCubesProps {
  count?: number;
  className?: string;
}

export const FloatingCubes: React.FC<FloatingCubesProps> = ({
  count = 3,
  className = ''
}) => {
  return (
    <div className={`perspective-1000 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute animate-3d-float transform-3d"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            animationDelay: `${i * 0.5}s`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative w-8 h-8 transform-3d">
            {/* Cube faces */}
            <div className="absolute w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-y-0 translate-z-4"></div>
            <div className="absolute w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 transform rotate-y-90 translate-z-4"></div>
            <div className="absolute w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 transform rotate-y-180 translate-z-4"></div>
            <div className="absolute w-8 h-8 bg-gradient-to-br from-emerald-300 to-emerald-500 transform rotate-y-270 translate-z-4"></div>
            <div className="absolute w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-700 transform rotate-x-90 translate-z-4"></div>
            <div className="absolute w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 transform rotate-x-270 translate-z-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface SpiralRingsProps {
  className?: string;
}

export const SpiralRings: React.FC<SpiralRingsProps> = ({ className = '' }) => {
  return (
    <div className={`perspective-2000 ${className}`}>
      <div className="relative w-32 h-32">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="absolute border-2 border-yellow-400 rounded-full animate-3d-spiral"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${50 - (10 + i * 7.5)}%`,
              top: `${50 - (10 + i * 7.5)}%`,
              animationDelay: `${i * 0.2}s`,
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 15,
  className = ''
}) => {
  return (
    <div className={`particle-field ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

interface Hover3DEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const Hover3DEffect: React.FC<Hover3DEffectProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const intensityClasses = {
    low: 'hover:transform hover:-rotate-y-15 hover:rotate-x-15 hover:scale-105',
    medium: 'hover:transform hover:-rotate-y-30 hover:rotate-x-30 hover:scale-110',
    high: 'hover:transform hover:-rotate-y-45 hover:rotate-x-45 hover:scale-125'
  };

  return (
    <div
      className={`
        transition-all duration-500 ease-out cursor-pointer
        transform-3d perspective-1000
        ${intensityClasses[intensity]}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`
        relative w-64 h-40 bg-gradient-to-br from-yellow-50 to-emerald-50
        border-2 border-yellow-400/30 rounded-xl shadow-lg
        transition-all duration-500 ease-out cursor-pointer
        hover:shadow-2xl hover:border-yellow-400/60
        transform-3d perspective-1000
        hover:-rotate-y-15 hover:rotate-x-15 hover:scale-105
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d'
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-emerald-400/10 rounded-xl transform-3d rotate-x-15 rotate-y-15 opacity-60"></div>
      <div className="relative z-10 p-6 flex items-center justify-center h-full text-center">
        {children}
      </div>
    </div>
  );
};

interface CardStack3DGalleryProps {
  items?: string[];
  className?: string;
}

export const CardStack3DGallery: React.FC<CardStack3DGalleryProps> = ({
  items = ['Our Love Story', 'Wedding Details', 'RSVP', 'Photo Gallery'],
  className = ''
}) => {
  return (
    <div className={`gallery-3d flex justify-center items-center ${className}`}>
      <div className="card-stack">
        {items.map((item, index) => (
          <div key={index} className="card-stack-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeometricShape;
