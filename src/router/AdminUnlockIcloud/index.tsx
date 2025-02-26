import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import apiService from "../../service/apiService";
import API_PATHS from "../../config/api";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { AddCodeUnlockIcloud } from "./addCode";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function AdminUnlockIcloudPage() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState<string>("");
  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = () => {
    apiService("get", API_PATHS.UNLOCK_ICLOUD, {}).then((data) => {
      setData(data);
    });
  };
  const handleDeleteCode = (id: string) => {
    setLoading(true);
    setCurrentId(id);
    apiService("delete", API_PATHS.UNLOCK_ICLOUD + "/" + id, {})
      .then((res) => {
        toast.success("Delete code success");
        fetchList();
        setLoading(false);
        setCurrentId("");
      })
      .catch(() => {
        toast.error("Delete code failed");
        setLoading(false);
        setCurrentId("");
      });
  };

  return (
    <Box sx={{ padding: { sm: "40px 50px", xs: "5px 5px" } }}>
      <Link to={ROUTES.adminZalo}>
        <Button variant="contained" className="mt-3">
          Admin Zalo
        </Button>
      </Link>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Code Đăng ký</TableCell>
              <TableCell>Code Dung lượng</TableCell>
              <TableCell sx={{ padding: "10px 5px " }}>Vị Trí</TableCell>
              <TableCell sx={{ padding: "10px 5px " }}>Thời Gian</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  color="primary"
                  variant="contained"
                >
                  <AddIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row?.code}</TableCell>
                <TableCell sx={{ padding: "10px 5px " }}>
                  {row?.codeVerify}
                </TableCell>
                <TableCell sx={{ padding: "10px 5px " }}>
                  {row?.codeCapacity}
                </TableCell>
                <TableCell sx={{ padding: "10px 5px " }}>
                  {row?.latitude} {row?.latitude ? "," : null}
                  {row?.longitude} {row?.latitude ? <RemoveRedEyeIcon onClick={()=>{
                    window.open(`http://maps.google.com/?q=${row.latitude},${row.longitude}`,'_blank')
                  }}/> : null}
                </TableCell>
                <TableCell sx={{ padding: "10px 5px " }}>
                  {moment(row?.updatedAt).format("HH:mm:ss DD-MM-YYYY")}
                </TableCell>
                <TableCell>
                  <LoadingButton
                    loading={loading && currentId === row?._id}
                    color="error"
                    onClick={() => handleDeleteCode(row?._id)}
                    variant="contained"
                  >
                    <DeleteIcon />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddCodeUnlockIcloud
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleResetList={() => fetchList()}
      />
    </Box>
  );
}
