import React, { FormEvent, useState } from 'react';
import './styles.css';

const LoginPage: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="wrapper vh-100" style={{
      background: "url(https://mylockshopicloud.com/images/bg.jpg) no-repeat center center",
      backgroundSize: "cover"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-uppercase mt-4 mb-4 text-white">
              Dịch vụ mở khóa iCloud
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row mb-3">
              <div className="col-12 col-md-6 offset-md-3">
                <div className="card" style={{ backgroundColor: '#5a2d2d6b' }}>
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="h4 text-uppercase text-center text-secondary mb-3">
                          Đăng nhập hệ thống
                        </h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <form onSubmit={handleSubmit} autoComplete="off">
                          <div className="mb-3">
                            <label className="form-label text-uppercase fw-bold" style={{ color: 'white' }}>
                              Mã OTP - nhận tại Hotline/Zalo: admin
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Nhập mã OTP"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                            />
                          </div>

                          <button type="submit" className="btn btn-primary text-uppercase fw-bold">
                            Đăng nhập
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 