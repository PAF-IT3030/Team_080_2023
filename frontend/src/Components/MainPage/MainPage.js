import './MainPage.css'
import Post from "../Post/Post";
import {useState, useEffect} from "react";
import uploadImage from '../../images/upload.png'

function MainPage() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        let data = [
            {
                postId: 123,
                userName: "buddy",
                postImageUrl: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
                timeStamp: "2909",
                likes: 783
            },
            {
                postId: 123,
                userName: "buddy",
                postImageUrl: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
                timeStamp: "2909",
                likes: 783
            },
            {
                postId: 123,
                userName: "buddy",
                postImageUrl: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
                timeStamp: "2909",
                likes: 783
            }
        ]

        setPostList(data)
    }


    return (

        <div>
            <div style={{textAlign: "center", margin: "10px"}}>
                <img className='mainpage_uploadicon' src={uploadImage}/>
            </div>
            {
                postList.map((item, index) => {
                    return (
                        <Post key={index} id={item.postId} userName={item.userName} postImage={item.postImageUrl}
                              likes={item.likes}/>
                    )
                })
            }
        </div>
    )
}

export default MainPage;