import { Box, Slider, Typography } from "@mui/material";
import styled from "@emotion/styled";

// PrettoSlider styled component
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

interface LoadingProgressProps {
  percent: number;
  fullscreen?: boolean;
}

const LoadingProgress: React.FC<LoadingProgressProps> = ({ percent, fullscreen = false }) => {
  const content = (
    <>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        value={percent}
        sx={{ 
          pointerEvents: 'none',
          '& .MuiSlider-track': {
            transition: 'width 0.1s ease-in-out',
            background: 'linear-gradient(90deg, #2196f3, #00bcd4)',
          }
        }}
      />
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ 
          color: '#2196f3',
          fontWeight: 500,
          background: 'linear-gradient(90deg, #2196f3, #00bcd4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(33, 150, 243, 0.2)'
        }}
      >
        Đang xử lý... {percent}%
      </Typography>
    </>
  );

  if (fullscreen) {
    return (
      <Box sx={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Box sx={{ 
          width: { md: '50%', sm: '70%', xs: '80%' }, 
          margin: 'unset', 
          userSelect: 'none' 
        }}>
          {content}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2, mb: 2, userSelect: 'none' }}>
      {content}
    </Box>
  );
};

export default LoadingProgress; 