import React, {useEffect} from 'react';
import tableStyles from './../styles/table.module.css'
import axios from "axios";

export default function Home()
{
  //useEffect(()=>
  //{
  //  axios.get("http://localhost:5050/api/now").then((res)=>
  //  {
  //    var data = res.data;
  //    document.getElementById("timeZone").innerHTML = "<h1>현재 시간 : " + data.now + "<h1>";
  //  });
  //}, []);

  useEffect(() => {
    axios.get("http://localhost:5050/api/now").then((res) => {
      var data = res.data;
      console.log(data);
      document.getElementById("timeZone").innerHTML = '<h3>Server Connected, Server Time:'+data.now+'<h3>'
    });
  },[]);
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>
            <h2>
            서울특별시 강서구 강서구립도서관 신착도서 목록 서비스
            </h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <text>Server Status</text>
            <text id="timeZone"></text>
          </td>
        </tr>
      </tbody>
    </table>
  )
}