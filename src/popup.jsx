import React from 'react';
import { render } from 'react-dom';
import './popup.css';

import Header from './components/Header.js';
import DataCollected from './components/DataCollected.js';
import Button from './components/Button.js';

import icon from './images/icon.png';
import dataImage from './images/dataImage.png';
import resetCountImage from './images/resetCount.png';

function Popup() {

    const appName = "SecuroServ";
    const dataAmount = 10420

    return (
        <div>
            <Header name={appName} icon={icon}/>
            <DataCollected dataAmount={dataAmount}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: "20px 0px"}}>
                <Button text="View Data" image={dataImage} link="" nameClass="buttonViewData"/>
                <Button text="Reset Count" image={resetCountImage} link="" nameClass="buttonResetCount"/>
            </div>
        </div>
    )
}

render(<Popup/>, document.getElementById("react-target"))