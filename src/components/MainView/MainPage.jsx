import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HubIcon from '@mui/icons-material/Hub';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingPopUp from './SettingPopUp';
import InfoPopUp from './InfoPopUp';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import SankeyChart from '../SankeyChart/SankeyChart';
import CardLayout from '../CardView/CardLayout';
import ciscoLogo from '../../ciscoLogo.png';

const tabStyles = {
  color: 'white',
  paddingTop: '120px',
  fontSize: '20px',
  '&.Mui-selected': {
    color: '#0f0f0f',
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState('Show cards layout');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = (view) => {
    setOpen(false);
    setSelectedView(view);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ position: 'relative', backgroundImage: 'linear-gradient(to bottom right, #039EC8, #071E34 70%, #C27221, #C42C4F)', display: 'flex', minHeight: '100vh', alignItems: 'flex-start', flexDirection: 'column' }}
    >
      <Box 
        sx={{
          display: 'flex', 
          flexGrow: 1, 
        }}
      >
        <Box sx={{ flexBasis: '20%'}}>
          {/* Tabs */}
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider', height: 'auto', width: '300px' }}
          >
            <Tab label="Networking" sx={{ color: 'white', paddingTop: '120px', fontSize: '20px', '&.Mui-selected': {color: '#0f0f0f'} }} icon={<HubIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(0)} />
            <Tab label="Security" sx={{ color: 'white', paddingTop: '120px', fontSize: '20px', '&.Mui-selected': {color: '#0f0f0f'} }} icon={<SecurityIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(1)} />
            <Tab label="Collaboration" sx={{ color: 'white', paddingTop: '120px', fontSize: '20px', '&.Mui-selected': {color: '#0f0f0f'} }} icon={<GroupsIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(2)} />
            <Tab label="Application Performance" sx={{ color: 'white', paddingTop: '120px', fontSize: '20px', '&.Mui-selected': {color: '#0f0f0f'} }} icon={<SpeedIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Box sx={{ flexBasis: '80%', paddingTop: '100px' }}>
          {/* Tab content */}
          <TabPanel value={value} index={0}>
            { selectedView === 'Show cards layout' ? (<CardLayout category="Networking"/>) : (<SankeyChart category={'Networking'} />) }
          </TabPanel>
          <TabPanel value={value} index={1}>
            { selectedView === 'Show cards layout' ? (<CardLayout category="Security"/>) : (<SankeyChart category={'Security'} />) }
          </TabPanel>
          <TabPanel value={value} index={2}>
            { selectedView === 'Show cards layout' ? (<CardLayout category="Collaboration"/>) : (<SankeyChart category={'Collaboration'} />) }
          </TabPanel>
          <TabPanel value={value} index={3}>
            { selectedView === 'Show cards layout' ? (<CardLayout category="Application Performance"/>) : (<SankeyChart category={'Application Performance'} />) }
          </TabPanel>
        </Box>
      </Box>
      {/* <Box sx={{ position:"relative", bottom:'10px', width:"100%" }}>
        <img src={ciscoLogo} alt="Logo" style={{ width: '200px', height: 'auto' }}/>  
      </Box>  */}
      {/* Setting and info pop up */}
      <Box sx={{ position: 'absolute', bottom: 100, right: 100 }}>
        <Button onClick={handleClickOpen} sx={{ color: 'white' }}>
          <SettingsIcon sx={{ fontSize: '2.5rem' }}/>
        </Button>
        <SettingPopUp
          selectedView={selectedView}
          open={open}
          onClose={handleClose}
        />
        <InfoPopUp />
      </Box>
    </Box>
  );
}
