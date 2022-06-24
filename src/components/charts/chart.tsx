import React from 'react';
import {Stack, Typography} from "@mui/material";
import styles from "./chart.module.scss";
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
import {SvgIconComponent} from "@mui/icons-material";

interface ChartPropTypes {
    country: string & "Italy" | "USA" | "Canada" | "Spain" | "Japan" | "Russia";
    number: string;
    arrow: React.ReactElement<SvgIconComponent>;

}

const Chart: React.FC<ChartPropTypes> = (props) => {

    const chartData = {
        Italy: [{
            color: "#00E38C",
            points: [{x: 0, y: 0}, {x: 0.5, y: 1.8}, {x: 1.3, y: 1}, {x: 1.8, y: 2.9}]
        }],
        USA: [{
            color: "#00E38C",
            points: [{x: 0, y: 0.3}, {x: 0.8, y: 1}, {x: 1.5, y: 1.5}, {x: 2, y: 1.2} , {x: 2.5, y: 1.8}]
        }],
        Canada: [{
            color: "#00E38C",
            points: [{x: 0, y: 0}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 4}]
        }],
        Spain: [{
            color: "#FF4B75",
            points: [{x: 0, y: 1}, {x: 1, y: 0.7}, {x: 2, y: 0.9}, {x: 3, y: 0.2}]
        }],
        Japan: [{
            color: "#00E38C",
            points: [{x: 0, y: 0}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 4}]
        }],
        Russia: [{
            color: "#FF4B75",
            points: [{x: 0, y: 1.9}, {x: 1, y: 1}, {x: 2, y: 0.9}, {x: 3, y: 0.5}]
        }]
    }
    const color = chartData[props.country][0].color;
    return (
        <>
            <Stack className={styles.chartFlex} alignItems={"center"} justifyContent={"center"} direction={'column'}>
                <Typography variant={"h4"}>
                    {props.country}

                    <Typography display={"flex"} alignItems={"center"} color={`${color}`} variant={"body1"}>
                        <>
                            {
                                props.number
                            }
                            {
                                props.arrow
                            }
                        </>

                    </Typography>
                </Typography>
                <LineChart
                    className={styles.chart}
                    width={130}
                    height={130}
                    data={chartData[`${props.country}`]}
                    hideXLabel
                    hideYLabel
                    hidePoints
                    margins={
                        {
                            top:0,
                            right:0,
                            left:10,
                            bottom:0
                        }
                    }
                />

            </Stack>
        </>
    );
}

export default Chart;
