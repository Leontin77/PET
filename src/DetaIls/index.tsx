import "./Details.scss";
import dron1foto1 from "../images/dron1foto1.png";
import dron1foto2 from "../images/dron1foto2.png";
import dron1foto3 from "../images/dron1foto3.png";
import dron1foto4 from "../images/dron1foto4.png";
import dron2foto1 from "../images/dron2foto1.png";
import dron2foto2 from "../images/dron2foto2.png";
import dron2foto3 from "../images/dron2foto3.png";
import dron2foto4 from "../images/dron2foto4.png";
import arrow1 from "../images/arrow1.png";
import detailsEnumType from "./info.enum";

interface ContentProps {
  tab: number;
}

export const Details = ({ tab }: ContentProps): JSX.Element => {
  console.log(tab);
  const width = window.innerWidth;

  return (
    <div className="contentWrapper">
        <div className="details">
            <div className="details-info">
                <div className="details-info-header">
                    СПЕЦИФІКАЦІЇ
                </div>
                <div className="details-info-title" >
                    {detailsEnumType[`FPV${tab}`].name}
                </div>
                <ul>
                    {detailsEnumType[`FPV${tab}`].info.map(one => <li>
                            <span className="color">{one.number}</span>
                            <span>{one.text}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div  className="details-image-column">
                <div>
                    <img className="photo" src={tab === 8 ? dron1foto1 : dron2foto1} alt="dron1foto1"/>
                    <img className="arrow" src={arrow1} alt="arrow1"/>
                </div>
                <img className="photo" src={tab === 8 ? dron1foto2 : dron2foto2} alt="dron1foto2"/>
            </div>
            <div  className="details-image-row">
                <div>
                    <img className="photo" src={tab === 8 ? dron1foto4 : dron2foto4} alt="dron1foto1"/>
                    <img className="arrow" src={arrow1} alt="arrow1"/>
                </div>
                <div>
                    <img className="photo" src={tab === 8 ? dron1foto3 : dron2foto3} alt="dron1foto1"/>
                    <img className="arrow top" src={arrow1} alt="arrow1"/>
                </div>
            </div>
        </div>

    </div>
  );
};
