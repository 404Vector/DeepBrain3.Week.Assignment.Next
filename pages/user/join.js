import React, { useState } from 'react'
//import { useDispatch } from 'react-redux';
//import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../../styles/table.module.css'
export default function Join() {
    const [user, setUser] = useState({
        userid: '', password: '', email: '', name: '', phone: '', birth: '', address: ''
    })
    //const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        //    const{name, value} = e.target;
        //    setUser({...user,[name]: value})
    }
    const submitClicked = e => {
        e.preventDefault();
        alert(' submit button clicked! ');
        dispatch(userActions.joinRequest(user))
        setUser({
            userid: '', password: '', email: '', name: '', phone: '', birth: '', address: ''
        });
    }
    return (<>
        <form onSubmit={submitClicked}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h1>Join</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>
                                User ID
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
                        <td htmlFor="">
                            <b>
                                E-Mail
                            </b>
                        </td>
                        <td><input type="text" name='email' onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td htmlFor="">
                            <b>
                                Name
                            </b>
                        </td>
                        <td>
                            <input type="text" name='name' onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                Phone number
                            </b>
                        </td>
                        <td>
                            <input type="text" name='phone' onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                birth date
                            </b>
                        </td>
                        <td>
                            <input type="text" name='birth' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>
                                Address
                            </b>
                        </td>
                        <td>
                            <input type="text" name='address' onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">
                                Submit
                            </button>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>);
}