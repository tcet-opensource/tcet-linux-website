import React, { useEffect } from 'react';

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function App() {
  useEffect(() => {
    window.addEventListener('scroll', reveal);
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div className="App">
      {/* your components here */}
    </div>
  );
}

export default App;
