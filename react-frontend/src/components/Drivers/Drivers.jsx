import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Driver from "./Driver/Driver";
import Typography from "@material-ui/core/Typography";
import { getDriversService } from "../../services/drivers/drivers";

const Drivers = () => {
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
			{drivers.map((driver, index) => (
				<Driver key={driver + index} driver={driver} />
			))}
		</Container>
	);
};

export default Drivers;
