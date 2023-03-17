import React, { useState, useEffect, useRef } from 'react';
import './side-bar.css';
import CompletionCircle_1 from '../side-bar/side-bar assets/CompletionCircle_1.svg'
import CompletionCircle_2 from '../side-bar/side-bar assets/CompletionCircle_2.svg'
import CompletionCircle_3 from '../side-bar/side-bar assets/CompletionCircle_3.svg'
import CompletionCircle_4 from '../side-bar/side-bar assets/CompletionCircle_4.svg'
import CompletionCircle_5 from '../side-bar/side-bar assets/CompletionCircle_5.svg'
import CompletionCircle_6 from '../side-bar/side-bar assets/CompletionCircle_6.svg'
import CompletionCircle_7 from '../side-bar/side-bar assets/CompletionCircle_7.svg'
import CloseSidebarImg from '../side-bar/side-bar assets/CloseSidebarImg.svg'
import FrankAddNew from '../side-bar/side-bar assets/FrankAddNew2.svg'



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
        <li><img src={FrankAddNew} className="addNew" alt="Create New"/> </li>

          <li><img src={CompletionCircle_1} className="completionCircle"/></li>
          <li><img src={CompletionCircle_2} className="completionCircle"/></li>
          <li><img src={CompletionCircle_3} className="completionCircle"/></li>
          <li><img src={CompletionCircle_4} className="completionCircle"/></li>
          <li><img src={CompletionCircle_5} className="completionCircle"/></li>
          <li><img src={CompletionCircle_6} className="completionCircle"/></li>
          <li><img src={CompletionCircle_7} className="completionCircle"/></li>
          
          {/* <li><button onClick={toggleSidebar}>Close Sidebar</button></li> */}
          {/* <li><onClick={toggleSidebar}><img src={CloseSidebarImg} className="completionCircle"></li> */}

          <img src={CloseSidebarImg} className="closeSidebarImg" onClick={toggleSidebar} alt="Close Sidebar"/>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;
