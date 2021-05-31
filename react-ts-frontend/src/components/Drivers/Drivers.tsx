import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Driver from "./Driver/Driver";
import Typography from "@material-ui/core/Typography";
import { getDriversService } from "../../services/drivers/drivers";
import { DriverModel } from "../../models/driver.model";

const Drivers:React.FC<{}> = () => {
	const [drivers, setDrivers] = useState([]);
	const getDriverDetails = async () => {
		try {
			let driversResponse = await getDriversService();
			setDrivers(driversResponse.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDriverDetails();
	}, []);

	return (
		<Container>
			<Typography variant="h3">Drivers</Typography>
			{drivers.map((driver: DriverModel, index: number) => (
				<Driver key={index} driver={driver} />
			))}
		</Container>
	);
};

export default Drivers;
