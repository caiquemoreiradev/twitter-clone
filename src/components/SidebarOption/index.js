import React from 'react';

import './styles.css';

function SidebarOption({ active, text, Icon}) {
  return(
      <div className={`sidebarOption__container ${active && 'sidebarOption--active'}`}>
          <Icon />
          <h3>{text}</h3>
      </div>
  );
}

export default SidebarOption;