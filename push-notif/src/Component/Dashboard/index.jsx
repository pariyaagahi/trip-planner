import TimeChoose from './TimeChoose'
import {Box, Grid, Stack} from '@mui/material'
import './style.css'
import TotalCount from "./TotalCount";
import PieChart from "./PieChart";
import SmsGauge from "./SmsGauge";
import EmailGauge from "./EmailGauge";
import NotificationGauge from "./NotificationGauge";
import AlarmGauge from "./AlarmGauge";
import {Tooltip} from "@mui/material";
import Snackbar from "../SharedComponent/Snackbar";
import {useSnackbarMessage} from "../../CustomHook/UseReduxData";

const Dashboard = () => {
    const message = useSnackbarMessage()
    return (
        <>
            <Stack alignItems="center" spacing={3} className='dashboard-layout'>
                <TimeChoose/>
                <div style={{width: "100%", height: '300px'}}>
                    <Grid container direction='row-reverse' columns={12} columnSpacing={1}>
                        <Grid item xs={4}>
                            <div>
                                <TotalCount/>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div>
                                <PieChart/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div style={{width: '100%' , marginTop:'43px' , marginBottom:'70px'}}>
                    {/*<p className='gauge-title'>*/}
                    {/*    {AppString.gaugeTitle}*/}
                    {/*</p>*/}
                    <Grid direction='row' container columns={12} columnSpacing={1}>
                        <Grid item xs={3}>
                           <Tooltip followCursor title='میزان پیشرفت پیامک' sx={{fontFamily:'FarhangFaNum-Regular' , fontSize:'15px'}}>
                               <Box boxShadow={5} className='service-gauge-box'>
                                   <SmsGauge/>
                               </Box>
                           </Tooltip>
                        </Grid>
                        <Grid item xs={3}>
                           <Tooltip followCursor title='میزان پیشرفت ایمیل' className='gauge-tooltip'>
                               <Box boxShadow={5} className='service-gauge-box'>
                                   <EmailGauge/>
                               </Box>
                           </Tooltip>
                        </Grid>
                        <Grid item xs={3}>
                          <Tooltip followCursor title='میزان پیشرفت نوتیفیکیشن' className='gauge-tooltip'>
                              <Box boxShadow={5} className='service-gauge-box'>
                                  <NotificationGauge/>
                              </Box>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={3}>
                           <Tooltip followCursor title='میزان پیشرفت پیام داخلی' className='gauge-tooltip'>
                               <Box boxShadow={5} className='service-gauge-box'>
                                   <AlarmGauge/>
                               </Box>
                           </Tooltip>
                        </Grid>
                    </Grid>
                </div>
            </Stack>
            <Snackbar message={message}/>
        </>
    )
}

export default Dashboard
