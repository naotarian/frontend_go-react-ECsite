import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/common.css";

function Review() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <div>
      <Accordion className="mb_20">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>レビューを書く</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
            >
            <div>
            <TextField
              id="outlined-number"
              label="あなたなりの点数を0 ~ 100の間で付けてください。"
              type="number"
              InputProps={{ inputProps: { 
                  min: 0, 
                  max: 100 
                } 
              }}
            //   InputLabelProps={{
            //     shrink: true,
            //     min: 0,
            //     max, 100,
            //   }}
            />
            <TextField
                id="outlined-multiline-static"
                label="レビューを書く"
                multiline
                rows={8}
                defaultValue="Default Value"
            />
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
}

export default Review;