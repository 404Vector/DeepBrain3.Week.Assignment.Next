import Head from "next/head"
import Link from "next/link"
import tableStyles from "../../styles/table.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function BoardList() {
    const columns = [
        "Library Name", 
        "Book Name", 
        "Author", 
        "Publisher", 
        "Published Year", 
        "Data Base Date",
        "Edit",
    ]
    const [data, setData] = useState([]);
    const titleString = "서울특별시 강서구 강서구립도서관 신착도서 목록".normalize('NFC');

    useEffect(() => {
        axios
        .get('http://localhost:5050/bookInfo/')
        .then(res => {
            setData(res.data)
        }).catch(err => { 
            alert('w2board::'+err)
        })
    }, [])
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
            </thead>
            <tbody>
                <tr>
                    {columns.map((column) => (
                        <td key={column} >{column}</td>
                    ))}
                </tr>
                {data.length == 0 ? (
                    <tr>
                        <td colSpan={7} >게시글 없음</td>
                    </tr>
                ) : (
                    
                    data.map((bookInfo) => (
                        <tr key={bookInfo._id}>
                            <td>{bookInfo.libName}</td>
                            <td >{bookInfo.bookName}</td>
                            <td >{bookInfo.author}</td>
                            <td >{bookInfo.publisher}</td>
                            <td >{bookInfo.publishedYear}</td>
                            <td >{bookInfo.dataBaseDate}</td>
                            <td ><Link href={`/board/${bookInfo._id}/`}>Edit</Link></td>
                        </tr>
                        )
                    )
                    )}
            </tbody>
        </table>
    )
}