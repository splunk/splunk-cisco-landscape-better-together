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
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  position: 'relative',
  // Palette: https://coolors.co/01bbea-114f76-1b244b-8c125b-fc453f-fd6e0e
  backgroundImage: 'linear-gradient(to bottom left, #01BBEA, #114F76 40%, #1B244B, #8C125B, #FC453F, #FD6E0E)',
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  alignItems: 'flex-start'
});

const StyledTabs = styled(Tabs)({
  borderRight: 1,
  borderColor: 'divider',
  height: 'auto',
  '& .MuiTabs-indicator': {
    backgroundColor: '#fafafa',
  },
});

const StyledTab = styled(Tab)({
  color: 'rgb(181, 181, 181)',
  marginTop: '12%',
  padding: '100 50 100 50',
  fontSize: '20px',
  '&.Mui-selected': {
    color: '#fafafa'
  }
});

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
    <StyledBox>
      <Box sx={{ flexBasis: '20%' }}>
        {/* Tabs */}
        <StyledTabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Networking" icon={<HubIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(0)} />
          <StyledTab label="Security" icon={<SecurityIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(1)} />
          <StyledTab label="Collaboration" icon={<GroupsIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(2)} />
          <StyledTab label="Application Performance" icon={<SpeedIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(3)} />
        </StyledTabs>
      </Box>
      <Box sx={{ flexBasis: '80%', marginTop: '4%' }}>
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
      {/* Setting and info pop up */}
      <Box sx={{ position: 'absolute', top: 0, right: 0, padding: 1 }}>
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
    </StyledBox>
  );
}
