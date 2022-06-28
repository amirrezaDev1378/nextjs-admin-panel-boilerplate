import type {NextPage} from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.scss'
import {Button, Stack} from "@mui/material";
import Header from "../components/header/header";
import Status from "../components/status/status";
import ChartBox from "../components/charts/chartBox";
import Comparison from "../components/comparison/comparison";
import Members from "../components/members/members";

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Status/>
            <ChartBox />
            <Stack padding={"0 25px"} width={"100%"} direction={{xs:"column", sm:"row"}}>

                <Members/>
                <Comparison/>

            </Stack>
        </div>
    )
}

export default IndexPage
