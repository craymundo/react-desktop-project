import React, {useState} from "react";
import "./scss/home.scss";

import { useDispatch, useSelector } from "react-redux";
import { getReportAction, addOperationAction } from "../../redux/report/actions";
import { ReportReducerType } from "../../redux/report/report.reducer.types";
import { MenuComponent } from "../../components/menu";
import { LoginReducerType } from "../../redux/login/login.redurcer.types";
import history from '../../libs/history';



export default function Home() {
  const dispatch = useDispatch();

  const { response, operationId } = useSelector(
    (state: { ReportReducer: ReportReducerType }) => state.ReportReducer
  );

  const [loadView, setLoadView] = useState(false);


  const { user } = useSelector(
    (state: { LoginReducer: LoginReducerType }) => state.LoginReducer
  );

  const handleSelectMenu = (id: string, descripcion: string) => {
    console.log(id, descripcion, user);
    const data = {
      menuId : id,
      customerId: user?.id
    }
    dispatch(addOperationAction( data));
    setLoadView(true);
  };

  React.useEffect(() => {
    dispatch(getReportAction());
  }, [dispatch]);


  React.useEffect(() => {
    if( operationId !== '' && loadView){
      history.push("/operations");
    }
  }, [operationId]);

  return (
    <>
      <section className="help">
        <div className="help--desk">
          <h4>Te atenderemos según tu interés</h4>
          <ul className="lista-opciones">
            

          {response?.length > 0 && (typeof response === 'object'  ) &&
              response.map((item: any) => (
                <MenuComponent
                  key={item.description}
                  id={item.id}
                  descripcion={item.description}
                  onSelect={handleSelectMenu}
                ></MenuComponent>
              ))}

          </ul>
        </div>
      </section>
    </>
  );
}
