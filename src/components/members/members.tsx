import React from 'react';
import styles from './members.module.scss';
import {Chip, Stack, Typography} from "@mui/material";
import {userIcons} from "../../assets/";

interface TeamMemberProps {
    icon: string;
    name: string;
    role: string & "Top Trader"| "Manager";
    color: string & "primary"| "success";
}
const TeamMember:React.FC<TeamMemberProps> = (props) => {
    return (
        <Stack className={styles.member} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <img src={props.icon} alt=""/>
            <Typography variant={"body1"}>{props.name}</Typography>
            <Chip label={props.role} variant={"outlined"} color={props.color} />
        </Stack>
    );
};


const Members:React.FC = (props) => {
    return (
        <Stack flexBasis={{sm:"50%"}} direction={"column"}>
            <Stack direction={"row"}>
                <Typography>
                    Team Members
                </Typography>
                <Typography>
                    View All
                </Typography>
            </Stack>

            <div >
                <TeamMember name={"Andrew Johnston" } icon={userIcons.andrew.src} role={"Top Trader"}  color={"success"}/>
                <TeamMember name={"Anna Atkinsons" } icon={userIcons.anna.src} role={"Manager"}  color={"primary"}/>
                <TeamMember name={"Mark Atkinsons" } icon={userIcons.mark.src} role={"Top Trader"}  color={"success"}/>
                <TeamMember name={"Johanna Tairons" } icon={userIcons.andrew.src} role={"Manager"}  color={"primary"}/>

            </div>
        </Stack>
    )
};

export default Members;
