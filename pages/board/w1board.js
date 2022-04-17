import Head from "next/head"
import tableStyles from "../../styles/table.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function BoardList() {
    const columns = ["Library Name", "Book Name", "Author", "Publisher", "Published Year", "Data Base Date"]
    const [data, setData] = useState([])
    const titleString = "서울특별시 강서구 강서구립도서관 신착도서 목록".normalize('NFC');
    useEffect(() => {
        axios.get('http://localhost:5050/api/board/list').then(res => {
            setData(res.data.boards)
        }).catch(err => { })
    }, [])

    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={6}>
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
                {data.length == 0 ? <tr >
                    <td colSpan={6} >게시글 없음</td>
                </tr>
                    : data.map((board) => (
                        <tr key={board.libraryName}>
                            <td >{board.libraryName}</td>
                            <td >{board.bookName}</td>
                            <td >{board.author}</td>
                            <td >{board.publisher}</td>
                            <td >{board.publisherYear}</td>
                            <td >{board.dataBaseDate}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}