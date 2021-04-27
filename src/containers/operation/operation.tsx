import React, {useState} from "react";
import icon01 from "../../assets/image/ico_01.png";
import "./styles/operation.scss"
import { useDispatch, useSelector } from "react-redux";
import { getReportAction } from "../../redux/report/actions";
import { ReportReducerType } from "../../redux/report/report.reducer.types";

export default function Operation() {

  const dispatch = useDispatch();
  const {  response, operationId } = useSelector(
    (state: { ReportReducer: ReportReducerType }) => state.ReportReducer
  );

  const [desc, setDesc] = useState("");

  React.useEffect(() => {
    dispatch(getReportAction());
  }, [dispatch]);

  React.useEffect(() => {
    if(operationId !== "" && response.length > 0){
        console.log(operationId, response);
        const menu = response.filter( (e: any) => e.id == operationId )
        console.log(menu);
        setDesc(menu[0]["description"]);
    }
  }, [operationId, response]);

  return (
    <>
      <section className="help">
        <div className="help--desk" style={{
          margin: "0 auto",
          display: "block",
          textAlign: "center"
        }}>
          <img src={icon01} alt="" className="image-operation" />
          <span className="titulo">has seleccionado:</span>
          <span className="titulo--menu">{desc}</span>
        </div>
      </section>
    </>
  );
  }
  