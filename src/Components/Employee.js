import React ,{useState,useEffect} from "react";
import { CardGroup } from "react-bootstrap";
import Cards from "./EmployeeCards";
import Header from './Header'
import Footer from './Footer'
import axios from "axios";

function Employee() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://projectithaq.herokuapp.com/emp/get_emp/",{ headers : { Authorization: `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res.data.employees);
        setData(res.data.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const employeeList = data.map((value) => <Cards employees={value} />);
  return (
    <>
    <Header/>
      <CardGroup>
          <div className="containerOfStaff">{employeeList}</div>
      </CardGroup>
      <Footer/>
    </>
  );
}

export default Employee;
