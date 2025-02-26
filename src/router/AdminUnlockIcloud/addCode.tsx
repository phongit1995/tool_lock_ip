import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import apiService from "../../service/apiService";
import { toast } from "react-toastify";
import API_PATHS from "../../config/api";
interface CreateCode {
  code: string;
  codeVerify:string;
  codeCapacity:string;
}
interface AddCodeProps {
    open:boolean,
    handleClose: ()=>void,
    handleResetList: () => void
}
export function AddCodeUnlockIcloud({open,handleClose,handleResetList}:AddCodeProps) {
    const [loading, setLoading] = useState(false)
  const styleInput = {
    color: "#333",
    width: "100%",
    boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
    backgroundColor: "#fff",
    marginBottom: "5px",
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCode>();
  const onSubmit = (data:CreateCode)=>{
    console.log('data',data);
    apiService('post', API_PATHS.UNLOCK_ICLOUD+'/create', data)
            .then(() => {
                toast.success('Create code success');
                setLoading(false)
                handleResetList();
                handleClose();
                reset()
            })
            .catch(() => {
                toast.error('Create code failed')
                setLoading(false)

            })
  }
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"Create Code"}</DialogTitle>
      <DialogContent sx={{ overflow: "unset", marginTop: "20px" }}>
        <Box sx={{ marginBottom: "15px" }}>
          <Controller
            name="code"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }: any) => (
              <TextField
                id="outlined-basic"
                label="Code"
                variant="outlined"
                {...field}
                size="small"
                sx={styleInput}
              />
            )}
          />
          {errors.code && (
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              This field is required
            </Typography>
          )}
        </Box>
        <Box sx={{ marginBottom: "15px" }}>
          <Controller
            name="codeVerify"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }: any) => (
              <TextField
                id="outlined-basic"
                label="Code Xác Nhận"
                variant="outlined"
                {...field}
                size="small"
                sx={styleInput}
              />
            )}
          />
          {errors.codeVerify && (
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              This field is required
            </Typography>
          )}
        </Box>
        <Box sx={{ marginBottom: "15px" }}>
          <Controller
            name="codeCapacity"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }: any) => (
              <TextField
                id="outlined-basic"
                label="Code Dung Lượng"
                variant="outlined"
                {...field}
                size="small"
                sx={styleInput}
              />
            )}
          />
          {errors.codeVerify && (
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              This field is required
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: '10px' }}>
            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton onClick={handleSubmit(onSubmit)} loading={loading} variant="contained" autoFocus>
                Add
            </LoadingButton>
        </DialogActions>
    </Dialog>
  );
}
