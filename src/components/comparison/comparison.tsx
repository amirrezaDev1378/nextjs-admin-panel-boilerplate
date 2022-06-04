import React from 'react';
import {Stack, Typography, LinearProgress} from "@mui/material";
import {countryIcons} from "../../assets"
import styles from "./comparison.module.scss"

interface comparisonProps {
    country: string & "USA" | "Italy" | "Spain",
    percentage: number,
    icon: string
}

const ComparisonItem: React.FC<comparisonProps> = (props) => {
    return (
        <Stack justifyContent={"center"} direction={"column"}>
            <Stack direction={"row"} justifyContent={"start"}>
                <img src={props.icon} alt={props.country}/>
                <Typography>
                    {props.country}
                </Typography>

            </Stack>

            <Stack direction={"row"}>
                <LinearProgress
                    classes={{
                        root: styles.muiProgress,
                    }}
                    variant="determinate"
                    value={props.percentage}
                    color="success"
                />

                <Typography>
                    {props.percentage}%
                </Typography>
            </Stack>

        </Stack>
    )
};
const Comparison: React.FC = () => {
    return (
        <Stack direction={"column"}>
            <Stack direction={"row"}>
                <Typography>
                    Comparison
                </Typography>
                <Typography>
                    View All
                </Typography>
            </Stack>

            <div className={styles.comparisons}>
                <ComparisonItem country={"USA"} percentage={50} icon={countryIcons.usa.src}/>
                <br/>
                <ComparisonItem country={"Italy"} percentage={50} icon={countryIcons.italy.src}/>
                <br/>
                <ComparisonItem country={"Spain"} percentage={50} icon={countryIcons.spain.src}/>
            </div>
        </Stack>
    )
};


export default Comparison;
