import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold }, true);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}s`,
        opacity: isVisible ? '' : 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;