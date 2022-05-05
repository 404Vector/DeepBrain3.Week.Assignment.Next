import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../../styles/table.module.css'
import Link from 'next/link'

export default function UserList(){

    const columns = [
      "User ID", 
      "Name", 
      "E-Mail",
      "Phon Number",
      "Birth",
      "Adress"];

    const [data, setData] = useState([])
    const titleString = "User List".normalize('NFC');

    useEffect(()=>{
      axios.get('http://localhost:5050/user/getUsers')
      .then(res=>{
        setData(res.data)
      }).catch(err=>{

      })
    },[])

    return (
      <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={6}><h1>{titleString}</h1></th>
            </tr>
            
        </thead>
        <tbody>
              <tr>
                  {columns.map((column, index) => (
                        <td key={index} >{column}</td>
                  ))}
                </tr>
                { data.length == 0  ?(
                  <tr >
                    <td colSpan={6} >데이터가 없습니다</td>
                  </tr>
                ):(
                  data.map((user) => (
                  <tr key={user.userid} >
                  <td >{user.userid}</td>
                  <td >{user.name}</td>
                  <td >{user.email}</td>
                  <td >{user.phone}</td>
                  <td >{user.birth}</td>
                  <td >{user.address}</td>
                </tr>
            )))}
        </tbody>
      </table>
    );
}