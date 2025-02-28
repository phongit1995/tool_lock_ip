import React, { useState } from 'react';
import './styles.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Slider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import LoadingProgress from '../../components/LoadingProgress';

// Large PrettoSlider (for reference)
const PrettoSlider = styled(Slider)({
  color: '#2196f3',
  height: 30,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 35,
    width: 35,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#2196f3',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

// Small PrettoSlider with updated styles
const SmallPrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 4,
  padding: '0',
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#52af77',
    opacity: 1,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-thumb': {
    display: 'none',
  },
  '& .MuiSlider-valueLabel': {
    display: 'none',
  },
});

// Define form schema using Zod
const formSchema = z.object({
  password: z.string()
    .min(1, 'Vui lòng nhập mã OTP')
    .min(6, 'Mã OTP phải có ít nhất 6 ký tự')
    .max(20, 'Mã OTP không được vượt quá 20 ký tự')
});

type FormData = z.infer<typeof formSchema>;

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setLoadingPercent(0);

    const loadingInterval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          const addressService = localStorage.getItem('addressService');
          if (addressService) {
            const address = JSON.parse(addressService);
            if (!address.link) {
              navigate('/');
            } else {
              navigate(address.link);
            }
          }
          return prev;
        }
        return prev + 1;
      });
    }, 50);
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
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                          <div className="mb-3">
                            <label className="form-label text-uppercase fw-bold" style={{ color: 'white' }}>
                              Mã OTP - nhận tại Hotline/Zalo: admin
                            </label>
                            <input
                              type="password"
                              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                              placeholder="Nhập mã OTP"
                              {...register('password')}
                              disabled={isLoading}
                            />
                            {errors.password && (
                              <div className="invalid-feedback d-block">
                                {errors.password.message}
                              </div>
                            )}
                            {isLoading && <LoadingProgress percent={loadingPercent} />}
                          </div>

                          <button 
                            type="submit" 
                            className="btn btn-primary text-uppercase fw-bold"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
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