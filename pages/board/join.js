import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookInfoActions } from "../../redux/reducers/bookInfoReducer.ts";
import tableStyles from "../../styles/table.module.css"

const JoinBookInfo = () => {
    const [bookInfo, setBookInfo] = useState({
        id: "",
        libName: "",
        bookName: "",
        author: "",
        publisher: "",
        publishedYear: "",
        dataBaseDate: "",
    });
  
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setBookInfo({ ...bookInfo, [name]: value });
    };
  
    const addBookInfoHandler = (e) => {
      e.preventDefault();
      dispatch(bookInfoActions.joinBookInfoRequest(bookInfo))
      setBookInfo({
        id: "",
        libName: "",
        bookName: "",
        author: "",
        publisher: "",
        publishedYear: "",
        dataBaseDate: "",
      });
      window.location.href='/board/w2board'
    };
    return (
      <form onSubmit={addBookInfoHandler}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th colSpan={2}>
                <h1>신규 도서 등록</h1>
              </th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <b>책 이름</b>
            </td>
            <td>
              <input type="text" name="bookName" value={bookInfo.bookName} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>소장 도서관</b>
            </td>
            <td>
              <input type="text" name="libName" value={bookInfo.libName} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td htmlFor="">
              <b>작가</b>
            </td>
            <td>
              <input type="text" name="author" value={bookInfo.author} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td htmlFor="">
              <b>출판사</b>
            </td>
            <td>
              <input type="text" name="publisher" value={bookInfo.publisher} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>출판일</b>
            </td>
            <td>
              <input type="text" name="publishedYear" value={bookInfo.publishedYear} onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <td>
              <b>DB 등록일</b>
            </td>
            <td>
              <input type="text" name="dataBaseDate" value={bookInfo.dataBaseDate} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">등록</button>
              <br />
            </td>
          </tr>
        </tbody>
        </table>
      </form>
    );
  };
  
  export default JoinBookInfo;