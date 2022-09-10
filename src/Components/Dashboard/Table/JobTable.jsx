import React,{useState,useEffect} from 'react';
import './table.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UilEditAlt } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

function createData(name, position, date, status) {  
    return { name, position, date, status };
  }
  
  const rows = [
    createData("Noura", "Data Analyst", "2 March 2022", "Available"),
    createData("Taif", "Front-End Dev", "2 March 2022", "Unavailable"),
    createData("Rahaf", "Back-End Dev", "2 March 2022", "Available"),
    createData("Lama", "Full Stack Dev", "2 March 2022", "Unavailable"),
  ];
  
  
  const makeStyle=(status)=>{
    if(status === 'Available')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Unavailable')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
  }

  // const {user}=useAuth0();
  // console.assert(user.sub)
  
  export default function BasicTable() {
    const toast = useToast()
    const [data, setData] = useState([]);
    // const [id, setId] = useState(null);
  useEffect(() => {
    // setId(localStorage.getItem("id"));
    axios
      .get("https://projectithaq.herokuapp.com/job/my_jobs/",{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res.data.employees);
        setData(res.data.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getData = ()=>{
    axios
    .get("https://projectithaq.herokuapp.com/job/my_jobs/",{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
    .then((getData) => {
      // console.log(res.data);
       setData(getData.data);
       toast({
        title: 'Delete Succesfully.',
        status: 'success',
        position: "top",
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const deleteFunction = (id) => {
    axios
      .delete(`https://projectithaq.herokuapp.com/job/delete_job/${id}`, { headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res);
        getData()
        // navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div className="table" style={{marginTop:"30px"}}>
        <h3 style={{marginBottom:"20px",fontSize: "25px"}}>My Job Offers</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" ,borderRadius: "0.7rem"}}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell>Name</TableCell> */}
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">Date</TableCell>
                  {/* <TableCell align="left">Status</TableCell> */}
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {data.map((row) => (
                  <TableRow
                    // key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell> */}
                    <TableCell align="left">{row.position}</TableCell>
                    <TableCell align="left">{row.current_date}</TableCell>
                    {/* <TableCell align="left">
                      <span className="status" style={makeStyle(row.state)}>{row.state}</span>
                    </TableCell> */}
                    <TableCell align="left" className="Details"><a href="/UpdateEmployeeInfo"><Button variant="outline-warning"><UilEditAlt/></Button> </a></TableCell>
                    <TableCell align="left" className="Details"><Button onClick={()=>deleteFunction(row.id)} variant="outline-danger"><UilTimes/></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }