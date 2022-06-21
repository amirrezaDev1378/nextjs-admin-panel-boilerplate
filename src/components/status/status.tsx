import {NextComponentType} from "next";

import React from 'react';
import {Stack, Typography} from "@mui/material";
import {currencyIcons} from "../../assets/";
import styles from "./status.module.scss";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";

const Status: NextComponentType = () => {
    return (
        <>
                <Stack alignItems={"center"} className={styles.statusMain} direction={'column'}>

                    <Stack spacing={1} direction={"column"} alignItems={"start"}>
                        <Typography variant={"h5"} color={"#7A819F"}>
                            BALANCE
                        </Typography>

                        <Typography variant={"h3"}>
                            $590.00
                        </Typography>
                    </Stack>

                    <Stack spacing={1} direction={"column"} alignItems={"start"}>
                        <Typography alignItems={"center"} display={"flex"} flexDirection={"row"} variant={"h5"} color={"#7A819F"}>
                            PROFITS <p className={styles.colorGreen}>56%<ArrowDropUp/></p>
                        </Typography>

                        <Typography variant={"h3"}>
                            &952.00
                        </Typography>
                    </Stack>

                    <Stack spacing={1} direction={"column"} alignItems={"start"}>
                        <Typography alignItems={"center"} display={"flex"} flexDirection={"row"} variant={"h5"} color={"#7A819F"}>
                            Losses <p className={styles.colorRed}>30% <ArrowDropDown/></p>
                        </Typography>

                        <Typography variant={"h3"}>
                            $530.00
                        </Typography>
                    </Stack>

                    <Stack spacing={1} direction={"column"} alignItems={"start"}>
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
