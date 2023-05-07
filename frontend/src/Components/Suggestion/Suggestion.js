import './Suggestion.css'
import Avatar from "@mui/material/Avatar";
import imgeSrc from '../../images/pp1.png'

function Suggestion() {
    return (
        <div className='suggestion_container'>
            <div className='suggestion_header'>Suggestion For you</div>
            <div className='suggestion_body'>
                <div className='suggestion_friends'>
                    <Avatar src={imgeSrc} className='suggestion_image'/>
                    <div className='suggestion_username'>annidya_bai</div>
                </div>
                <div className='suggestion_friends'>
                    <Avatar src={imgeSrc} className='suggestion_image'/>
                    <div className='suggestion_username'>david_sam</div>
                </div>
                <div className='suggestion_friends'>
                    <Avatar src={imgeSrc} className='suggestion_image'/>
                    <div className='suggestion_username'>hesa_poliy</div>
                </div>
                <div className='suggestion_friends'>
                    <Avatar src={imgeSrc} className='suggestion_image'/>
                    <div className='suggestion_username'>Nazay_uyt</div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;