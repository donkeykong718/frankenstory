import React, { useState, useEffect, useRef } from 'react';
import './side-bar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!sidebarRef.current?.contains(event.target) && !sidebarRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    });

  }, [isOpen])

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar}>Open Sidebar</button>
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
          <li>Link 3</li>
          <li>      <button onClick={toggleSidebar}>Close Sidebar</button></li>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;
