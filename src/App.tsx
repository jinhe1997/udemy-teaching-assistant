import React, { useState } from 'react';
import { FloatingButton } from './components/FloatingButton';
import { AssistantPanel } from './components/AssistantPanel';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      {isOpen && <AssistantPanel onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default App;