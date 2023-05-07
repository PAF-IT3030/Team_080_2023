import './InfoSection.css'
import Avatar from "@mui/material/Avatar"
import imageSrc from '../../images/pp1.png'

function InfoSection() {
    return (
        <div>
            <div className="info_container">
                <Avatar src={imageSrc} className='info_image'/>
                <div className='info_content'>
                    <div className='info_username'> Kavindu che</div>
                    <div className='info_description'> description</div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection;