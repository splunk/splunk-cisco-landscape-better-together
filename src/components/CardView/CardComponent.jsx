import React, { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Link,
    Typography,
    CardActions,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import './CardComponent.css';

const CardComponent = ({ title, sections }) => {
    const [expandedSection, setExpandedSection] = useState(null);

    const handleExpandClick = (sectionTitle) => {
        setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
    };

    return (
        <Card className="custom-card">
            <CardHeader className="card-title" title={title} />
            {sections.map((section, index) => (
                <div key={index}>
                    <CardActions>
                        <Button className="card-button"
                            onClick={() => handleExpandClick(section.sectionTitle)}
                            aria-expanded={expandedSection === section.sectionTitle}
                            aria-label="show more"
                            style={{ justifyContent: 'flex-start' }} 
                        >
                            <ExpandMoreIcon
                                align='left'
                                style={{
                                    transform: expandedSection === section.sectionTitle ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                    color: 'white',
                                }}
                            />
                            <Typography className="card-section" align='left'>{section.sectionTitle}</Typography>
                        </Button>
                    </CardActions>
                    <Collapse in={expandedSection === section.sectionTitle} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className="card-app" align='left' variant='h6'>{section.app} <br /><br /></Typography>
                            <Typography className="card-text" align='left'>{section.description}<br /><br /></Typography>
                            {section.links && section.links.map((link, i) => (
                                <Typography className="card-text" align='left' key={i}>
                                    <Link href={link.url} target="_blank" rel="noopener noreferrer" color="inherit">
                                        {link.text} <OpenInNewIcon fontSize="small" />
                                    </Link>
                                </Typography>
                            ))}
                        </CardContent>
                    </Collapse>
                </div>
            ))}
        </Card>
    );
};

export default CardComponent;