import React, {useState, useEffect}  from "react";
import tableStyles from '../../styles/table.module.css'

export default function Profile(){
    const [profile, setProfile] = useState({})
    useEffect(()=>{
        const loginUser = sessionStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setProfile(user)
    }, [])
    const onEditBtnClicked = (e)=>{
        e.preventDefault();
        //alert(profile.userid)
        //window.location.href = `/user/${profile.userid}/`
    }
    return(<>
    <form >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>{`${profile.name}'s Profile`}</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>ID</b></td>
                    <td><h3>{profile.userid}</h3></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>E-Mail</b></td>
                    <td><h3>{profile.email}</h3></td>
                </tr>

                <tr>
                    <td htmlFor=""><b>Name</b></td>
                    <td><h3>{profile.name}</h3></td>
                </tr>

                <tr>
                    <td><b>Phone Number</b></td>
                    <td><h3>{profile.phone}</h3></td>
                </tr>

                <tr>
                    <td><b>Birthday</b></td>
                    <td><h3>{profile.birth}</h3></td>
                </tr>
                <tr>
                    <td><b>Address</b></td>
                    <td><h3>{profile.address}</h3></td>
                </tr>

            </tbody>
        </table>
    </form>
    </>)
}