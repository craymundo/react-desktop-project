import React from "react";
import "./styles.scss";

import icon01 from "../../assets/image/ico_01.png";
import icon02 from "../../assets/image/ico_02.png";
import icon03 from "../../assets/image/ico_03.png";
import icon04 from "../../assets/image/ico_04.png";
import icon05 from "../../assets/image/ico_05.png";
import icon06 from "../../assets/image/ico_06.png";
import { IProps } from "./types";
//TODO: Loading gif o splash
export const MenuComponent : React.FC<IProps> = ({
    id,
    descripcion,
    onSelect
  }) => {

    const renderIcon = (id: string) => {

        let image;
        switch (id) {
          case "1":
            image= <img src={icon01} alt="" />;
            break;
          case "2":
            image= <img src={icon02} alt="" />;
            break;
          case "3":
            image= <img src={icon03} alt="" />;
            break;
          case "4":
            image= <img src={icon04} alt="" />;
            break;
          case "5":
            image= <img src={icon05} alt="" />;
            break;
    
          default:
            image= <img src={icon06} alt="" />;
            break;
    
        }
        return image;
      };


      const handleSelectMenu = (id: string, descripcion : string) => {
        onSelect(id, descripcion);
    };

      
    return (
          <li>
              <div className="action action-border" onClick={ () => handleSelectMenu(id, descripcion)}>
                <div className="white">
                  <div className="icon">
                    {renderIcon(id)}
                  </div>
                  <div className="text">
                    <p>{descripcion}</p>
                    <div className="triangle-left"></div>
                  </div>
                </div>
              </div>
            </li>
    );
}
