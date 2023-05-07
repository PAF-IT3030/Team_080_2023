import './StatusBar.css'
import Avatar from "@mui/material/Avatar";
import status_img from '../../images/pp1.png'
import {useEffect, useState} from "react";
import uploadimage from '../../images/statusadd.png'

function StatusBar() {

    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        let data = [
            {
                username: "anindya_bunny",
                imageURL: "https://darresne.com/img/female-avatar.png"
            },
            {
                username: "abcs",
                imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
            },
            {
                username: "qwe",
                imageURL: "https://www.w3schools.com/w3css/img_avatar3.png"
            },
            {
                username: "jyjj",
                imageURL: "https://darresne.com/img/female-avatar.png"
            },
            {
                username: "jyjj",
                imageURL: "https://www.w3schools.com/w3css/img_avatar3.png"
            },
            {
                username: "jyjj",
                imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGonDgYzVXUcaKSWbvyH_ICVD23aI4zlRMJQ&usqp=CAU"
            },
            {
                username: "jyjj",
                imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
            },
            {
                username: "jyjj",
                imageURL: "../../images/pp1.png"
            }
        ]

        setStatusList(data)
    }


    return (
        <div>
            <div className="statusbar_container">
                <img src={uploadimage} className='statusbar_upload' width="55px" height="55px"/>
                {
                    statusList.map((item, index) => {

                        return (
                            <div className="status" key={index}>
                                <Avatar className="statusBar_status" src={item.imageURL}/>
                                <div className="statusbar_text">{item.username}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>)
}

export default StatusBar;