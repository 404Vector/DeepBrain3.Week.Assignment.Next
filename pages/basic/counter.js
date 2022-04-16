import React, {useState} from "react";
import tableStyles from '../common/styles/table.module.css'

//기본단위, 컴포넌트라고 함 안쪽에 상태, 밖에 props가 있어야함
export default function Counter() //props
{
    const [count, setCount] = useState(0) // state
    return (<table className={tableStyles.table}>
      <thead>
          <tr>
              <th><h2>카운터</h2></th>
          </tr>
      </thead>
      <tbody>
  <tr >
  <td><button style={{width:100}} onClick={() => setCount(count+1)}> + </button>
      <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
     </td></tr>
      <tr><td><h3>결과: {count}</h3></td></tr>
                  </tbody>
              </table>
    )
}