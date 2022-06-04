import {NextComponentType} from "next";

import React from 'react';
import {Stack, Typography} from "@mui/material";
import {menuIcon , userIcon} from "../../assets/";
import styles from "./header.module.scss";

const Header: NextComponentType = () => {
    return (
        <>
            <Stack alignItems={"center"} justifyContent={"space-around"} className={styles.headerMain} direction={'row'}>
                <div className="">
                    <a>
                        <img src={menuIcon.src} alt=""/>
                    </a>
                </div>
                <Typography variant={"h4"}>
                    Dashboard
                    <Typography variant={"body1"}>
                        Welcome back, Andrew
                    </Typography>
                </Typography>
                <div className={styles.userIcon}>
                    <a>
                        <img src={userIcon.src} alt=""/>
                    </a>
                </div>
            </Stack>
        </>
    );
}

export default Header;
