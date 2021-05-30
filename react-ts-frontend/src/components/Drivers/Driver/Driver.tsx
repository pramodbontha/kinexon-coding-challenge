import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import CommuteIcon from "@material-ui/icons/Commute";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Grid from "@material-ui/core/Grid";
import "./Driver.css";
import { DriverModel } from "../../../models/driver.model";

const DriverDetail: React.FC<{ icon: any, text: any }> = ({ icon, text }) => {
  return (
    <div className="driverDetail">
      <Typography className="detailIcon" color="textSecondary" gutterBottom>
        {icon}
      </Typography>
      <Typography className="detailText" component="p">
        {text}
      </Typography>
    </div>
  );
};

const DriverNameAndCityOrigin: React.FC<{ name: string; cityOrigin: string }> =
  ({ name, cityOrigin }) => {
    return (
      <div className="driverNameAndOrigin">
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <div className="cityOrigin">
          <div>
            <RoomIcon style={{ width: "15px", height: "28px" }} />
          </div>
          <div className="cityOriginText" color="textSecondary">
            {cityOrigin}
          </div>
        </div>
      </div>
    );
  };

const Driver: React.FC<{ driver: DriverModel }> = ({ driver }) => {
  return (
    <div>
      <Card className="driverCard">
        <CardContent>
          <DriverNameAndCityOrigin
            name={driver.driverName}
            cityOrigin={driver.driverCityOrigin}
          />
          <Grid container spacing={2}>
            <DriverDetail
              icon={<LanguageIcon />}
              text={driver.driverLanguage}
            />
            <DriverDetail icon={<PhoneIcon />} text={driver.driverPhone} />
            <DriverDetail icon={<InfoIcon />} text={driver.driverInfo} />
            <DriverDetail
              icon={<ChromeReaderModeIcon />}
              text={driver.licensePlate}
            />
            <DriverDetail icon={<CommuteIcon />} text={driver.kmDriven} />
            <DriverDetail icon={<PersonPinIcon />} text={driver.location} />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Driver;
