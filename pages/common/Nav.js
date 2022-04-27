import React,{useState, useEffect} from 'react';
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import tableStyles from "./../../styles/table.module.css";

export default function Nav(){
    

  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])

  const basicUrls = ["/","/board/refLink","/board/w1board","/board/w2board"]
  const basicSubTitle = ["Home","Ref Link","Week1 Mission","Week2 Mission"]


  useEffect(()=>{
    const loginUser = localStorage.getItem('loginUser')
    if(loginUser === null){
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])

    }else{
      //setUserUrls(["/user/logout","/user/profile","/user/modifyUser","/user/withdrawUser","/user/getUsers"])
      //setUserSubTitle(["로그아웃","프로필","회원수정","회원탈퇴","회원목록"])
      setUserUrls(["/user/logout","/user/profile"])
      setUserSubTitle(["로그아웃","프로필"])
    }
  },[])

  return (
    <table className={tableStyles.table}>
      <tbody>
        <tr>
            <td>
              <SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}/>
              <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
            </td>
        </tr>
      </tbody>
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
    return <><Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {props.title}
        </Button>
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
        </Menu></>
  }