import {NextComponentType} from "next";

import React from 'react';
import {Stack, Typography} from "@mui/material";
import {currencyIcons} from "../../assets/";
import styles from "./status.module.scss";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";

const Status: NextComponentType = () => {
    return (
        <>
            <Stack
                divider={<hr className={styles.statusDivider}/>}
                alignItems={"center"}
                spacing={{xs: 3, lg: 0}}
                justifyContent={"center"}
                className={styles.statusMain}
                direction={'row'}
                flexWrap={'wrap'}
            >

                <Stack justifyContent={{lg: "space-between"}} className={styles.statusItem} spacing={1} direction={"column"} alignItems={"center"}>
                    <Typography variant={"h5"} color={"#7A819F"}>
                        BALANCE
                    </Typography>

                    <Typography variant={"h3"}>
                        $590.00
                    </Typography>
                </Stack>

                <Stack
                    justifyContent={{lg: "space-between"}}
                    className={styles.statusItem}
                    spacing={2}
                    direction={{xs: "column", lg: "column"}}
                    alignItems={"center"}
                >
                    <Typography
                        alignItems={"center"}
                        justifyContent={{xs: "center", lg: "space-between"}}
                        width={"100%"}
                        display={"flex"}
                        flexDirection={"row"}
                        variant={"h5"}
                        color={"#7A819F"}

                    >
                        PROFITS <p className={styles.colorGreen}>56% <ArrowDropUp/></p>
                    </Typography>

                    <Typography variant={"h3"}>
                        $952.00
                    </Typography>
                </Stack>

                <Stack justifyContent={{lg: "space-between"}} className={styles.statusItem} spacing={2} direction={"column"} alignItems={"center"}>
                    <Typography
                        justifyContent={{xs: "center", lg: "space-between"}}
                        width={"100%"}
                        alignItems={"center"}
                        display={"flex"}
                        flexDirection={"row"}
                        variant={"h5"}
                        color={"#7A819F"}>
                        Losses <p className={styles.colorRed}>30% <ArrowDropDown/></p>
                    </Typography>

                    <Typography variant={"h3"}>
                        $530.00
                    </Typography>
                </Stack>

                <Stack justifyContent={{lg: "space-between"}} className={styles.statusItem} spacing={1} direction={"column"} alignItems={"center"}>
                    <Typography variant={"h5"} color={"#7A819F"}>
                        CURRENCIES
                    </Typography>
                    <Stack direction={"row"}>
                        <img src={currencyIcons.btc.src} alt="BTC"/>
                        <img src={currencyIcons.dollar.src} alt="BTC"/>
                        <img src={currencyIcons.euro.src} alt="BTC"/>
                        <img src={currencyIcons.y.src} alt="BTC"/>

                    </Stack>
                </Stack>

            </Stack>

        </>
    );
}

export default Status;
