import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";

interface CapacityProp {
  name:string,
}
function Capacity({name}:CapacityProp) {
  const [show,setShow] = useState(false);
  const navigate = useNavigate()
  const handlerShow = ()=>{
    setShow((pre)=>!pre);
  }
  const onSubmitRegister = (e:any)=>{
    e.preventDefault();
    const code = JSON.parse(localStorage.getItem('code') as string);
    console.log(code.codeCapacity==e.target.code.value);
    if(code.codeCapacity==e.target.code.value){
      // return navigate(ROUTES.processCapacity);
    }
  }
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="row mb-3">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card">
              <div
                className="card-header text-center text-uppercase h4"
                style={{ color: "red" }}
              >
                Mua gói dung lượng {name}
              </div>
              <div className="card-body p-6">
                <div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        onClick={handlerShow}
                        type="button"
                        className="btn btn-primary btn-lg w-100"
                        style={{
                          background: "rgb(198, 22, 255)",
                          border: "rgb(198, 22, 255)",
                        }}
                      >
                        Đăng ký ngay
                      </button>
                    </div>
                  </div>
                  {show?<div className="row" style={{marginTop:10}}>
                    <div className="col-12">
                      <form onSubmit={onSubmitRegister}>
                        <div className="mb-3">
                          <p style={{ color: "red" }}>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Nhập mã gói dung lượng"
                              name="code"
                            />
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <button
                            type="submit"
                            className="btn btn-primary text-uppercase fw-bold"
                          >
                            Kích Hoạt
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>:null}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CapacityPage() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
    
      <Capacity name="32GB"/>
      <Capacity name="64GB"/>
      <Capacity name="128GB"/>
      <Capacity name="256GB"/>
      <Capacity name="1TB"/>
    </div>
  );
}
