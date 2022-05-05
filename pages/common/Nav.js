import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import tableStyles from "./../../styles/table.module.css";

export default function Nav(){
    

  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])

  const basicUrls = ["/","/board/bookList"]
  const basicSubTitle = ["Home","Book Infos"]


  useEffect(()=>{
    //TOPDO
    const loginUser = sessionStorage.getItem('loginUser')
    if(loginUser === null){
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])

    }else{
      setUserUrls(["/user/logout","/user/profile","/user/userList"])
      setUserSubTitle(["Logout","Profile","UserList"])
    }
  },[])

  const onNavigating = (nextLocation) =>{
    window.location.href=nextLocation
  }

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
            <td>
              {basicSubTitle.map(function(item, idx){
                return (<>
                  <button key={idx} style={{margin:5, float:"left"}}
                    onClick={(e)=>{e.preventDefault(); onNavigating(basicUrls[idx]);}} 
                    children= {item}/>
                </>)
              })}
              <div style={{margin:5, float:"right"}}>

              <SubMenu title={"User"} 
                        urls={userUrls} subTitles={userSubTitle}/>
                </div>
            </td>
        </tr>
      </thead>
    </table>
  );
}

const SubMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (<><button
          id="basic-button"
          onClick={handleClick}>
          {props.title}
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
           {props.urls.map(function(url, i){
              return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
            })}
        </Menu></>)
  }