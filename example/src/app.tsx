import './index.css';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CoolComponent, CoolComponentVariant } from '../../src';

const App = () => {
  const [variant, setVariant] = useState<CoolComponentVariant>('cool');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleMakeLessCool = () => {
    setVariant((prev) => (prev === 'cool' ? 'cool' : prev === 'cooler' ? 'cool' : 'cooler'));
  };

  const handleMakeCooler = () => {
    setVariant((prev) => (prev === 'cool' ? 'cooler' : prev === 'cooler' ? 'the coolest' : 'the coolest'));
  };

  const handleToggle = () => {
    setIsDisabled((p) => !p);
  };

  return (
    <main className="grid justify-center justify-items-center gap-4 pt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-[30rem] w-full px-2">
        <button className="button" onClick={handleMakeLessCool} disabled={isDisabled || variant === 'cool'}>
          Make less cool
        </button>
        <button className="button" onClick={handleMakeCooler} disabled={isDisabled || variant === 'the coolest'}>
          Make cooler
        </button>
        <button className="button col-span-full sm:col-auto" onClick={handleToggle}>
          {isDisabled ? 'Enable' : 'Disable'}
        </button>
      </div>
      <CoolComponent variant={variant} disabled={isDisabled} />
    </main>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
