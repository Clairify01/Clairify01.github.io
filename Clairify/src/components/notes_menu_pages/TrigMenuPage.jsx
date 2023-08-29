import React from 'react'
import MenuSideMenu from '../notes_menu_parts/sideMenu/MenuSideMenu'
import MenuTopicBlock from '../notes_menu_parts/topicBlock/MenuTopicBlock'

import './trigMenuPage.scss'

const TrigMenuPage = () => {
  return (
    <>
        <div className="nav-space"></div>
        
        <div className="menu-container">
            <MenuSideMenu />
            <div className="blocks-container">
                <MenuTopicBlock />
                <MenuTopicBlock />
            </div>
        </div>
    </>
  )
}

export default TrigMenuPage
