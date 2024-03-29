import Roca from "../assets/roca_logo.png";
import { useState } from "react";
import '../index.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton, MenuItem } from "@mui/material";
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';


// eslint-disable-next-line react/prop-types
export default function Navbar() {
    const [home, setHome] = useState(true)
    const [dashboard, setDashboard] = useState(false)
    const [cases, setCases] = useState(false)

    return (
        <>
            <div className="bg-blue-800 px-14 flex justify-between items-center navbar">
               <div className="flex items-center h-[70px]">
                    <img src={Roca} width={120} />
                    <div className=" flex items-center gap-6 h-full ml-6 text-white cursor-pointer">
                        <div className={[home ? "font-semibold h-full flex items-center border-b-2" : ""]} onClick={() => {setDashboard(false); setCases(false); setHome(true) }}>Home</div>
                        <div className={dashboard ? "font-semibold flex items-center h-full border-b-2" : ""} onClick={() => {setDashboard(true); setCases(false); setHome(false) }}>Dashboard</div>
                        <div className={cases ? "font-semibold flex items-center h-full border-b-2" : ""} onClick={() => {setDashboard(false); setCases(true); setHome(false) }}>Cases</div>
                    </div>
                </div>
                <div className="flex items-center">
                   <div>
                        {/* <Search></Search> */}
                        <SearchIcon sx={{color: "white"}} />
                   </div>
                    <div>
                        <MenuItem>
                            <IconButton size="large" aria-label="Show 10 New Notifications">
                                <Badge badgeContent="" variant="dot" color="error">
                                    <NotificationsNoneSharpIcon sx={{color: "white"}} />
                                </Badge>
                            </IconButton>
                        </MenuItem>
                    </div>
                </div>
            </div>
        </>
    );
}