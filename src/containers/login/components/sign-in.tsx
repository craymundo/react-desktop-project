import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/login/actions";

import "../styles/login.scss";
import { LoginReducerType } from "../../../redux/login/login.redurcer.types";

import deleteNumber from "../../../assets/image/delete-number.svg";

export default function SignIn() {
  const { codigoError } = useSelector(
    (state: { LoginReducer: LoginReducerType }) => state.LoginReducer
  );

  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const [userErr, setUserErr] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) dispatch(loginAction( user));
  };

  const formValidation = () => {
    let isValid = true;

    if (user.trim().length === 0) {
      setUserErr("Este campo es requerido");
      isValid = false;
    }

    return isValid;
  };

  const addNumber = (num: string) => {
      let documentNumber = user + num;
      if(documentNumber.trim().length <9) {
        setUser(documentNumber);
        setUserErr("");
      }
  }

  React.useEffect(() => {
      if(codigoError !== 0){
        setUserErr("Usted no se encuentra registrado");
      }
  }, [codigoError]);

  const onChange = (e: { target: { value: string; }; }) =>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       setUser(e.target.value);
       setUserErr("");
    }
}

  return (
    <div className="wrapper">
      <div className="phone">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="phone-container">
            <div className="phone-input">
              <label className="label-form">DNI:</label>

              <input
                type="text"
                className="number-input"
                value={user}
                onChange={(e) => {
                  onChange(e);
                  
                }}
                autoComplete="off"
                placeholder="********"
                
              />
            </div>
            <div className="phone-input">
              

              {userErr !== "" && (
                <span className="text-reference" style={{ color: "red", paddingTop: "10px" }}>
                 {userErr}
                </span>
              )}
            </div>
            <div className="phone-input">
              <span className="text-reference">
                SIN PUNTOS NI GUION EJ: 44915961
              </span>

            </div>

            <div className="login_buttons">
              <button type="submit">ACEPTAR</button>
            </div>

            <div className="keyboard">
              <div className="number">
                <span data-number="1" onClick={(e) => addNumber("1")}>
                  <i>1</i>
                </span>
                <span data-number="2" onClick={(e) => addNumber("2")}>
                  <i>2</i>
                </span>
                <span data-number="3" onClick={(e) => addNumber("3")}>
                  <i>3</i>
                </span>
                <span data-number="4" onClick={(e) => addNumber("4")}>
                  <i>4</i>
                </span>
                <span data-number="5" onClick={(e) => addNumber("5")}>
                  <i>5</i>
                </span>
                <span data-number="6" onClick={(e) => addNumber("6")}>
                  <i>6</i>
                </span>
                <span data-number="7" onClick={(e) => addNumber("7")}>
                  <i>7</i>
                </span>
                <span data-number="8" onClick={(e) => addNumber("8")}>
                  <i>8</i>
                </span>
                <span data-number="9" onClick={(e) => addNumber("9")}>
                  <i>9</i>
                </span>
              </div>
              <div className="number aling-right">
                <span className="call-button">
                  <i>K</i>
                </span>
                <span data-number="0" onClick={(e) => addNumber("0")}>
                  <i>0</i>
                </span>
                <span onClick={(e) => setUser("")}>
                  <i className="delete">
                    <img src={deleteNumber} width="30" height="30" alt=""/>
                  </i>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
