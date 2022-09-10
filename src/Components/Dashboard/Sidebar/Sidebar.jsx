import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import logo from '../../Assets/Images/IthaqLogo.png'
import {SidebarData} from '../../Assets/Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import './sidebar.css';
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true);

    const logout=()=>{
      localStorage.clear()
        redirect()
      }
      const navigate = useNavigate();
      function redirect() {
        navigate("/");
      }


    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
    }
  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
    </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/* Logo */}
        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>
                إِي<span>ث</span>اق
            </span>
        </div>
        {/* Menu */}
        <div className="menu">
            {SidebarData.map((item, index)=> {
                return (
                    <div className={selected === index ? 'menu-item active' : 'menu-item'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        
                        <item.icon/>
                        <a href={item.href}>
                        <span>
                            {item.heading}
                        </span>
                        </a>
                    </div>
                )
            })}
            <div className='menu-item'>
              <Button variant="outline-danger" onClick={logout} ><UilSignOutAlt /></Button>  
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar