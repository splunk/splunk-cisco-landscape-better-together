import React, { useEffect, useState } from 'react';
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
import ciscoLogo from '../../ciscoLogo.png'
import NodeView from '../NodeView/NodeView';
import Fuse from 'fuse.js'
import { TextField } from '@mui/material';
import { readJSONFile } from '../../utils/file';

const StyledBox = styled(Box)({
  position: 'relative',
  // Palette: https://coolors.co/01bbea-114f76-1b244b-8c125b-fc453f-fd6e0e
  backgroundImage: 'linear-gradient(to bottom left, #01BBEA, #114F76 40%, #1B244B, #8C125B, #FC453F, #FD6E0E)',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'flex-start',
  maxWidth: '100vw',
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
          <Typography component={'div'}>{children}</Typography>
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
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Show Card Layout');
  const [currentData, setCurrentData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Networking')
  const [searchValue, setSearchValue] = useState('')


  const handleClickOpen = async () => {
    setOpen(true);
  }
  const handleClose = (view) => {
    setOpen(false);
    setSelectedView(view);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getData = async (category) => {
    const data = await readJSONFile(category)
    setCurrentData(data)
    setOriginalData(data)
  }

  const handleTabClick = async (category) => {
    setSearchValue('')
    setSelectedCategory(category)
    getData(category)
  }

  const onInputChange = async (e) => {
    const value = e.target.value;
    setSearchValue(value)

    //length = 0 - reset data
    if (!value) {
      getData(selectedCategory)
    }

    //don't perform the search if the search string is less than 3 characters
    if (value.length < 3) return

    const options = {
      includeScore: false,
      includeMatches: true,
      minMatchCharLength: 3,
      keys: ["cisco_product"]
    }

    const fuse = new Fuse(originalData, options)

    const result = fuse.search(value)

    const newData = result?.map(res => res.item) || []
    setCurrentData(newData)
  }

  const getLayoutOptions = (category) => {
    switch (selectedView) {
      case 'Show Card Layout':
        return <CardLayout category={category} data={currentData} />;
      case 'Show Sankey Layout':
        return <SankeyChart category={category} />;
      case 'Show Flow Layout':
        return <NodeView category={category} />;
      default:
        return <CardLayout category={category} />;
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const data = await readJSONFile(selectedCategory)
      setCurrentData(data)
      setOriginalData(data)
    }
    fetchData()
  }, [])

  return (
    <StyledBox>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: '100%'
        }}
      >
        <Box sx={{ flexBasis: '20%' }}>
          {/* Tabs */}
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
          >
            <StyledTab onClick={() => handleTabClick("Networking")} label="Networking" icon={<HubIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(0)} />
            <StyledTab onClick={() => handleTabClick("Security")} label="Security" icon={<SecurityIcon sx={{ fontSize: '2.5rem' }} />} {...a11yProps(1)} />
            <StyledTab onClick={() => handleTabClick("Collaboration")} label="Collaboration" icon={<GroupsIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(2)} />
            <StyledTab onClick={() => handleTabClick("Application Performance")} label="Application Performance" icon={<SpeedIcon sx={{ fontSize: '3rem' }} />} {...a11yProps(3)} />
          </StyledTabs>
        </Box>
        <Box className="custom-box" sx={{ flexBasis: '80%', marginTop: '4%', width: `${selectedView === 'Show sankey layout' ? '100%' : 'auto'}` }}>
          {selectedView === "Show Card Layout" && (
            <TextField
              style={{ width: 600 }} color='black'
              onChange={onInputChange} className='search-field' id="standard-basic"
              label="Search" variant="standard" value={searchValue}
              sx={{
                '& .MuiInput-underline:before': { borderBottomColor: '#cccbcb' },
                '& .MuiInput-underline:after': { borderBottomColor: '#cccbcb' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: '#d4d2d2' },
                '& .MuiInput-underline:hover:after': { borderBottomColor: '#d4d2d2' },
              }}

            />
          )}
          {/* Tab content */}
          <TabPanel value={value} index={0}>
            {getLayoutOptions('Networking')}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {getLayoutOptions('Security')}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {getLayoutOptions('Collaboration')}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {getLayoutOptions('Application Performance')}
          </TabPanel>
        </Box>
      </Box>
      {/* Logo */}
      <Box sx={{ position: "relative", bottom: '10px', width: "100%" }}>
        <img src={ciscoLogo} alt="Logo" style={{ width: '15%', float: 'left', 'margin-left': '3%', height: 'auto' }} />
      </Box>
      {/* Setting and info pop up */}
      <Box sx={{ position: 'absolute', top: 0, right: 0, padding: 1 }}>
        <Button onClick={handleClickOpen} sx={{ color: 'white' }}>
          <SettingsIcon sx={{ fontSize: '2.5rem' }} />
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
