import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


import './dashboard.scss'

const Dashboard = ({ nbrRequests = 90, nbrNotifications = 55 }) => {
    return (
        <div className='dashboard'>

            <div className='partition'>
                <div className='partition-zonIcon'><HomeOutlinedIcon /></div>
                <div className='partition-title'> Dashboard</div>
            </div>
            <div className='partition'>
                <div className='partition-zonIcon'><PersonOutlinedIcon /></div>
                <div className='partition-title'> Profile</div>
            </div>

            <div className='partition'>
                <div className='partition-zonIcon'><PeopleAltOutlinedIcon /></div>
                <div className='partition-title'> Employees</div>
            </div>

            <div className='partition'>
                <div className='partition-zonIcon'><CalendarMonthOutlinedIcon /></div>
                <div className='partition-title'> Requests</div>
                <div className='partition-notification'> {nbrRequests}</div>

            </div>
            <div className='partition'>
                <div className='partition-zonIcon'><NotificationsOutlinedIcon /></div>
                <div className='partition-title'> Notifications</div>
                <div className='partition-notification'> {nbrNotifications}</div>

            </div>
            <div className='lastPartition'>

                <div className='lastPartition-parameter'> <SettingsOutlinedIcon /></div>
                <div className='lastPartition-logout'><LogoutOutlinedIcon /></div>
            </div>
        </div>
    )

}
export default Dashboard;