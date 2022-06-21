import {NextComponentType} from "next";

import React, {AnchorHTMLAttributes, useRef} from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {menuIcon, userIcon} from "../../assets/";
import styles from "./header.module.scss";

import {Analytics, AnalyticsOutlined, AutoGraphOutlined, Close, DashboardCustomize, NotificationsActiveOutlined} from "@mui/icons-material";

const menuClickHandler = (e: React.MouseEvent<HTMLAnchorElement | SVGSVGElement>, menuRef: React.RefObject<HTMLElement>) => {
    e.preventDefault();
    if (menuRef.current.classList.contains(styles.menuBoxHidden)) {
        menuRef.current.classList.remove(styles.menuBoxHidden);
        menuRef.current.classList.add(styles.menuBoxVisible);

    } else {
        menuRef.current.classList.add(styles.menuBoxHidden);
        menuRef.current.classList.remove(styles.menuBoxVisible);

    }
}

const dashboardLinkSwitch = (): void => {
    alert("Sorry but this feature is not yet available 😔");
}

const Header: NextComponentType = () => {
    const menuBoxRef = useRef(null)
    return (
        <>
            <Stack alignItems={"center"} justifyContent={"space-around"} className={styles.headerMain} direction={'row'}>
                <div className="">
                    <a
                        onClick={(e) => menuClickHandler(e, menuBoxRef)}
                        className={styles.menu}
                    >
                        <img src={menuIcon.src} alt=""/>
                    </a>
                </div>
                <Typography variant={"h4"}>
                    Dashboard
                    <Typography variant={"body1"} color={"secondary.main"}>
                        Welcome back, Andrew
                    </Typography>
                </Typography>
                <div className={styles.userIcon}>
                    <a>
                        <img src={userIcon.src} alt=""/>
                    </a>
                </div>
            </Stack>

            <div ref={menuBoxRef} className={`${styles.menuBox} ${styles.menuBoxHidden}`}>
                <Close onClick={(e) => menuClickHandler(e, menuBoxRef)} color={"warning"} className={styles.menuCloseButton}/>

                <Button onClick={dashboardLinkSwitch} className={styles.menuButtons} variant={"outlined"} color={"primary"}>
                    Dashboard <DashboardCustomize/>
                </Button>


                <Button onClick={dashboardLinkSwitch} className={styles.menuButtons} variant={"outlined"} color={"primary"}>
                    Analytics <AnalyticsOutlined/>
                </Button>

                <Button onClick={dashboardLinkSwitch} className={styles.menuButtons} variant={"outlined"} color={"primary"}>
                    Trading <AutoGraphOutlined/>
                </Button>

                <Button onClick={dashboardLinkSwitch} className={styles.menuButtons} variant={"outlined"} color={"primary"}>
                    Notifications <NotificationsActiveOutlined/>
                </Button>

            </div>
        </>
    );
}

export default Header;
