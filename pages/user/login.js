import tableStyles from '../../styles/table.module.css'
export default function Login() {
    const handleChange = () => { }
    const loginClicked = e => {
        e.preventDefault()
    }
    return (<>
        <form onSubmit={loginClicked}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h1>
                                Login
                            </h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>
                                ID
                            </b>
                        </td>
                        <td>
                            <input type="text" name='userid' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>
                                Password
                            </b>
                        </td>
                        <td>
                            <input type="text" name='password' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">
                                Login
                            </button>
                            <br/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>)
}