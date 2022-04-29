import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookInfoActions } from "../../redux/reducers/bookInfoReducer.ts";
import tableStyles from "../../styles/table.module.css"


export async function getServerSideProps({ params }) {
  const id = params.id
  const res = await fetch(`http://localhost:5050/bookInfo/${id}`)
  const data = await res.json()

  return {
    props: {
      data,
      id
    },
  };
}

const updateBookInfo = ({data,id}) => {
  const [bookInfo, setBookInfo] = useState({
    id: id,
    libName: data.libName,
    bookName: data.bookName,
    author: data.author,
    publisher: data.publisher,
    publishedYear: data.publishedYear,
    dataBaseData: data.dataBaseData,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBookInfo({ ...bookInfo, [name]: value });
  };

  const updateBookInfoHandler = (e) => {
    e.preventDefault();
    dispatch(bookInfoActions.updateBookInfoRequest(bookInfo));
    setBookInfo({
        id: "",
        libName: "",
        bookName: "",
        author: "",
        publisher: "",
        publishedYear: "",
        dataBaseData: "",
    });
    
  };
  
  const deleteBookInfoHandler = (e) => {
    dispatch(bookInfoActions.deleteBookInfoRequest(bookInfo));
  }

  return (
    <form onSubmit={updateBookInfoHandler}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h1>도서 목록 수정 / 삭제</h1>
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
              <input type="text" name="dataBaseData" value={bookInfo.dataBaseData} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" style={{marginRight:1+'rem'}}>수정</button>
              <button type="button" onClick={deleteBookInfoHandler}>삭제</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default updateBookInfo;
