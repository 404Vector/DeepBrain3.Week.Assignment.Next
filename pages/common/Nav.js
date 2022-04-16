import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>메인</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>카운터</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>계산기</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo'>투두리스트</Link> </li>
        <li className={styles.li}> <Link href='/board/board'>게시글등록</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>게시글목록</Link> </li>
        <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
        <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
        <li className={styles.li}> <Link href='/user/user-list'>사용자목록</Link> </li>
      </ul>
    </nav>
  );
}

