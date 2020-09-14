import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOption active text="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneOutlinedIcon} />
            <SidebarOption text="Messages" Icon={MailOutlinedIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
            <SidebarOption text="Lists" Icon={ListAltOutlinedIcon} />
            <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} />
            <SidebarOption text="More" Icon={MoreHorizOutlinedIcon} />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;
