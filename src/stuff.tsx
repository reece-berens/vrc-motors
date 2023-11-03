import React, {FunctionComponent as FC, useState} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const StuffThing: FC = () => {
    const [smallMotorCount, _smallMotorCount] = useState(0);
    const [bigMotorCount, _bigMotorCount] = useState(0);

    const totalWattage = (smallMotorCount * 5.5) + (bigMotorCount * 11);

    const UpdateSmallMotors = (addAmount: number) => {
        if (smallMotorCount + addAmount < 0) {
            _smallMotorCount(0);
        }
        else {
            _smallMotorCount(smallMotorCount + addAmount);
        }
    }

    const UpdateBigMotors = (addAmount: number) => {
        if (bigMotorCount + addAmount < 0) {
            _bigMotorCount(0);
        }
        else {
            _bigMotorCount(bigMotorCount + addAmount);
        }
    }

    return (
        <div style={{marginTop: "30px"}}>
            <Grid container spacing={2} columns={5}>
                <Grid item xs={5}>
                    <h2>VRC Motor Legality Checker</h2>
                </Grid>

                <Grid item xs={1} />
                <Grid item xs={3}>
                    <a href="https://www.robotevents.com/storage/game_manual/VRC_2023-2024_Over_Under/rules/R12.html" target="_blank">R12 of game manual</a>
                </Grid>
                <Grid item xs={1} />


                <Grid item xs={1} />
                <Grid item xs={3}>
                    <Button variant="contained" color="error" onClick={() => { _smallMotorCount(0); _bigMotorCount(0); }}>Reset</Button>
                </Grid>
                <Grid item xs={1} />


                <Grid item xs={1}>
                    <Button variant="contained" color="secondary" onClick={() => UpdateSmallMotors(-5)}>-5</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="secondary" onClick={() => UpdateSmallMotors(-1)}>-1</Button>
                </Grid>
                <Grid item xs={1}>
                    <h3>Small Motors: {smallMotorCount}</h3>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={() => UpdateSmallMotors(1)}>+1</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={() => UpdateSmallMotors(5)}>+5</Button>
                </Grid>

                <Grid item xs={1} />
                <Grid item xs={3}>
                    <h2 style={{
                        color: totalWattage <= 88 ? "green" : "red"
                    }}>
                        Total Wattage: {totalWattage} W
                    </h2>
                </Grid>
                <Grid item xs={1} />

                
                <Grid item xs={1}>
                    <Button variant="contained" color="secondary" onClick={() => UpdateBigMotors(-5)}>-5</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="secondary" onClick={() => UpdateBigMotors(-1)}>-1</Button>
                </Grid>
                <Grid item xs={1}>
                    <h3>Big Motors: {bigMotorCount}</h3>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={() => UpdateBigMotors(1)}>+1</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={() => UpdateBigMotors(5)}>+5</Button>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default StuffThing;
