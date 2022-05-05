import Head from "next/head"
import Link from "next/link"
import tableStyles from "../../styles/table.module.css"
import {useEffect, useState} from "react"
import axios from "axios"

export default function BoardList() {
    const columns = [
        "Library Name",
        "Book Name",
        "Author",
        "Publisher",
        "Published Year",
        "Data Base Date",
        "Edit"
    ]
    const [data, setData] = useState([]);
    const [loginUser, setLoginUser] = useState(null);
    const titleString = "서울특별시 강서구 강서구립도서관 신착도서 목록".normalize(
        'NFC'
    );
    useEffect(() => {
        axios
            .get('http://localhost:5050/bookInfo/')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                alert('board::' + err)
            })
            setLoginUser(sessionStorage.getItem('loginUser'))
            //if(loginUser === null){
            //    alert("You don't have a permission for this action.")
            //    window.location.href = '/user/login'
            //}
        }, [])

    const onJoinClicked = (e) => {
        e.preventDefault();
        window.location.href = '/board/join'
    }

    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={7}>
                        <h2>
                            {titleString}
                        </h2>
                    </th>
                </tr>
                <tr>
                    <th colSpan={7}>

                        {loginUser !== null ? (
                        <div style={{float:"right"}}>
                            <button children="Add book info" onClick={onJoinClicked}/>
                        </div>
                        ) : (
                        <></>
                        )}
                
                    </th>
                </tr>
                <tr>
                        {columns.map((column) => (<th key={column}>{column}</th>))}
                </tr>
            </thead>
            <tbody>
                
                {
                    data.length == 0
                        ? (
                            <tr>
                                <td colSpan={7}>게시글 없음</td>
                            </tr>
                        )
                        : (data.map((bookInfo) => (
                            <tr key={bookInfo._id}>
                                <td>{bookInfo.libName}</td>
                                <td >{bookInfo.bookName}</td>
                                <td >{bookInfo.author}</td>
                                <td >{bookInfo.publisher}</td>
                                <td >{bookInfo.publishedYear}</td>
                                <td >{bookInfo.dataBaseDate}</td>
                                <td >
                                    
                                    {loginUser !== null ? (
                                    <><Link href={`/board/${bookInfo._id}/`}>Edit</Link></>
                                    ) : (
                                    <>X</>
                                    )}
                                    
                                </td>
                            </tr>
                        )))
                }
            </tbody>
        </table>
    )
}