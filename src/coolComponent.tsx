import { useState } from 'react';
import './index.scss';
import { Star } from './star';
import { Props } from './types';

const CoolComponent = ({ variant, disabled }: Props) => {
  const [amtOfStars, setAmtOfStars] = useState(0);
  const [dir, setDir] = useState<'up' | 'down'>('up');

  let text = '';
  if (disabled) text = "I'm napping";
  else if (variant === 'the coolest') text = "I'm super-duper cool!!!";
  else if (variant === 'cooler') text = "I'm super cool!!";
  else text = "I'm cool!";

  const handleClick = () => {
    setAmtOfStars((prev) => {
      if (dir === 'down') {
        if (prev > 0) return prev - 1;

        setDir('up');
        return prev + 1;
      }

      if (prev < 3) return prev + 1;
      setDir('down');
      return prev - 1;
    });
  };

  const stars: JSX.Element[] = [];
  for (let i = 0; i < amtOfStars; i++) {
    stars.push(
      <Star
        key={i}
        fill={disabled ? '#1f2937' : variant === 'cool' ? '#eab308' : variant === 'cooler' ? '#a855f7' : '#ec4899'}
      />
    );
  }

  return (
    <button onClick={handleClick} className="cool-component" disabled={disabled}>
      <div className="flex">{stars}</div>
      <span>{text}</span>
      <div className="flex">{stars}</div>
    </button>
  );
};

export { CoolComponent };
