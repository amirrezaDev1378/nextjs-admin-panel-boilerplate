import React from 'react';
import {Stack} from "@mui/material";
import Chart from "./chart";
import {ArrowDropUp, ArrowDropDown} from "@mui/icons-material";
import styles from "./chart.module.scss"

const ChartBox: React.FC = () => {
    return (
        <Stack className={styles.chartBoxShadow} spacing={1} direction={"row"} justifyContent={"center"} flexWrap={"wrap"}>
            <Chart country={"Italy"} arrow={<ArrowDropUp/>} number={"+542 "}/>
            <Chart country={"USA"} arrow={<ArrowDropUp/>} number={"+542 "}/>
            <Chart country={"Canada"} arrow={<ArrowDropUp/>} number={"+542 "}/>
            <Chart country={"Spain"} arrow={<ArrowDropDown/>} number={"+542 "}/>
            <Chart country={"Japan"} arrow={<ArrowDropUp/>} number={"+542 "}/>
            <Chart country={"Russia"} arrow={<ArrowDropDown/>} number={"+542 "}/>
        </Stack>
    );
};

export default ChartBox;

