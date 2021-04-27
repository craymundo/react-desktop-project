import React, { Fragment } from "react";
import "./scss/layout-home-header.scss";
import ejecutiva from "../../../../assets/image/ejecutiva.png";
import iconUser from "../../../../assets/image/icon_user.png";
import iconHome from "../../../../assets/image/home.png";
import iconAudio from "../../../../assets/image/ico_vol.png";
import { LoginReducerType } from "../../../../redux/login/login.redurcer.types";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReportReducerType } from "../../../../redux/report/report.reducer.types";


export default React.memo(function LayoutHomeHeader() {
  const { user } = useSelector(
    (state: { LoginReducer: LoginReducerType }) => state.LoginReducer
  );

  const { operationId } = useSelector(
    (state: { ReportReducer: ReportReducerType }) => state.ReportReducer
  );

  const history = useHistory();

  const handleClick = (e: any) => {
    e.preventDefault();
    history.push("/home");
  };

  const titleRender = () => {
    let title;
    if (operationId !== "") title = <h1>Perfecto, tu selección es:</h1>;
    else title = <h1>Selecciona el motivo de tu visita.</h1>;
    return title;
  };

  return (
    <Fragment>
      <section className="header">
        <div className="header--main">
          <div className="heading-box">
            <div className="image">
              <img src={ejecutiva} alt="" />
            </div>
            <div className="heading">
              <div className="typing">
                <div id="centerdiv">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <p>Asistente</p>
                <span> esta escribiendo</span>
              </div>

              <div className="title">{titleRender()}</div>
            </div>
          </div>
          <div className="buttons">
            <div className="home">
              <a href="/#" onClick={(e) => handleClick(e)}>
                <img src={iconHome} alt="" />
                <span>home</span>
              </a>
            </div>
            <div className="audio">
              <a href="/#" onClick={(e) => handleClick(e)}>
                <img src={iconAudio} alt="" />
                <span>audio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="circulo">
          <div className="triangle-down"></div>
        </div>
      </section>

      <section className="user">
        <div className="user--main">
          <img src={iconUser} alt="" />
          {user && (
            <p>
              <span>User </span> {user.name} {user.last_name}
            </p>
          )}
        </div>
      </section>
    </Fragment>
  );
});
