import "./Content.scss";
import dron1main from "../images/dron1main.png";
import dron2main from "../images/dron2main.png";
import infoEnum from "./info.enum";

interface ContentProps {
  tab: number;
}

export const Content = ({ tab }: ContentProps): JSX.Element => {
  console.log(tab);
  const width = window.innerWidth;

  return (
    <div className="contentWrapper">
      <div className="contentWrapper_imageWrapper">
        <img
          className="contentWrapper_imageWrapper-mainImg"
          src={tab === 8 ? dron1main : dron2main}
          alt=""
        />
      </div>
      <div className="contentWrapper_name">{`Безпілотний авіаційний комплекс «FPV квадрокоптер ПАУЕР ЕЙТ PET-${tab}»`}</div>
      <div className="contentWrapper_mainInfoBox">
        <div className="contentWrapper_mainInfoBox-item">{infoEnum[`FPV${tab}`].leftText}</div>
        {width > 1024 && (
          <div className="contentWrapper_mainInfoBox-divider"></div>
        )}
        <div className="contentWrapper_mainInfoBox-item">{infoEnum[`FPV${tab}`].rightText}</div>
      </div>
      <div className="contentWrapper_tacticTitle">ТАКТИКО - ТЕХНІЧНІ ХАРАКТЕРИСТИКИ</div>
      <div className="specifications-container">
      {Object.entries(infoEnum[`FPV${tab}`].detailes).map(([key, value]) => (
        <div key={key} className="specification">
          <div className="specification-key">{key}</div>
          <div className="specification-value">{value}</div>
        </div>
      ))}
    </div>
    </div>
  );
};
