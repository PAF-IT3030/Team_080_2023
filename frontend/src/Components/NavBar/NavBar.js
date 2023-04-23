import './NavBar.css'
import Grid from "@mui/material/Grid"
import foodies_logo from '../../images/foodies.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/love.svg'
import Avatar from '@mui/material/Avatar'
import pp from '../../images/pp1.png'

function NavBar() {
    return (
        <div>
            <div className='navbar_barcontent'>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className='navbar_logo' src={foodies_logo} width='105px'/>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="text" className='navbar_searchBar' placeholder='Search'/>
                    </Grid>
                    <Grid item xs={3} style={{display: 'flex'}}>
                        <img className='navbar_img' src={home} width='25px'/>
                        <img className='navbar_img' src={message} width='25px'/>
                        <img className='navbar_img' src={find} width='25px'/>
                        <img className='navbar_img' src={react} width='25px'/>
                        <Avatar src={pp} style={{maxWidth: '25px', maxHeight: '25px'}} className='navbar_img'/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NavBar;