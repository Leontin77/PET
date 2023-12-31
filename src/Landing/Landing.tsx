import "./Landing.scss";
import logo from "../images/logo.png";
import dron from "../images/dronBG.png";
import headerText from "../images/headerText.png"
import { useEffect, useState } from "react";
import { Content } from "Content";
import { Details } from "DetaIls";
import { Contacts } from "Contacts";
import { PopUp } from "PopUp";
export interface ILandingProps {}

export const Landing = ({ ...props }: ILandingProps): JSX.Element => {

  const [tab, setTab] = useState<number>(8)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [window.innerWidth])

  return (
    <div className="wrapper">
      <div className={`wrapper-dron ${tab === 12 && 'noRepeat'}`} style={{ backgroundImage: `url(${dron})` }}></div>

      {/* <div className="wrapper-dron"></div> */}
      <div className="wrapper_header">
        <div className="wrapper_header-row">
          <img className="wrapper_header-row_logo" src={logo}/>
          <div className="wrapper_header-row_navigation">
            <div className={`wrapper_header-row_navigation-item ${tab === 8 && 'active'}`} onClick={() => setTab(8)}>FPV 8</div>
            <div className={`wrapper_header-row_navigation-item ${tab === 10 && 'active'}`} onClick={() => setTab(10)}>FPV 10</div>
            <div className={`wrapper_header-row_navigation-item ${tab === 12 && 'active'}`} onClick={() => setTab(12)}>КОНТАКТИ</div>

          </div>
          {width > 1024 && <img className="wrapper_header-row_text" src={headerText} />}

        </div>
      </div>
      {tab === 8 || tab === 10 ? 
      <>
        <Content tab={tab}/>
        <Details tab={tab}/>
      </>
      : <Contacts/>}
    </div>
  );
};
