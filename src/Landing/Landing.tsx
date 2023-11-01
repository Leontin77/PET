import "./Landing.scss";
import logo from "../images/logo.png";
import dron from "../images/dronBG.png";
import headerText from "../images/headerText.png"
import { useState } from "react";
import { Content } from "Content";
export interface ILandingProps {}

export const Landing = ({ ...props }: ILandingProps): JSX.Element => {

  const [tab, setTab] = useState<number>(8)

  return (
    <div className="wrapper">
      <img className="wrapper-dron" src={dron} />

      {/* <div className="wrapper-dron"></div> */}
      <div className="wrapper_header">
        <div className="wrapper_header-row">
          <img className="wrapper_header-row_logo" src={logo} />
          <div className="wrapper_header-row_navigation">
            <div className={`wrapper_header-row_navigation-item ${tab === 8 && 'active'}`} onClick={() => setTab(8)}>DRON 1</div>
            <div className={`wrapper_header-row_navigation-item ${tab === 10 && 'active'}`} onClick={() => setTab(10)}>DRON 2</div>
            <div className={`wrapper_header-row_navigation-item ${tab === 12 && 'active'}`} onClick={() => setTab(12)}>ABOUT</div>

          </div>
          <img className="wrapper_header-row_text" src={headerText} />

        </div>
      </div>
      <Content tab={tab}/>
    </div>
  );
};
