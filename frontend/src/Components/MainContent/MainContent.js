import './MainContent.css'
import Grid from "@mui/material/Grid";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import InfoSection from "../InfoSection/InfoSection";
import Suggestion from "../Suggestion/Suggestion";

function MainContent() {
    return (
        <div>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <div>
                        <StatusBar/>
                        <MainPage/>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <InfoSection/>
                    <Suggestion/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
}

export default MainContent;
