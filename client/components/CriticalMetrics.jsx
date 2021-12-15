import React, { useState, useEffect }from 'react';
import {Typography, Button, Container, Grid, Paper, Card, CardContent } from '@material-ui/core';

// const useStyles = makeStyles({
//   title: {
//     textDecoration: 'underline',
//     marginBottom: 20
//   }


// })


const MakeMetrics = () => {
  const metric1 = 'This is saved'
  const value1 = 'this is a template literal'

  const metric2 = 'To Metric'
  const value2 = 'too value'

  const metric3 = 'tree-fidyy'
  const value3 = 'the game'

  const metric4 = 'power level'
  const value4 = 'over 9000'

  return (
    <Grid container alignItems="stretch">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Checking value = { metric1 }
          </Typography>
          <Typography sx={{fontSize:14}}>
            Value: { value1 }

          </Typography>
        </CardContent>
      </Card>
        
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Metric: { metric2 }
          </Typography>
          <Typography sx={{fontSize:14}}>
            Value: { value2 }

          </Typography>
        </CardContent>
      </Card>

        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Metric: { metric3 }
          </Typography>
          <Typography sx={{fontSize:14}}>
            Value: { value3 }

          </Typography>
        </CardContent>
      </Card>

        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Metric: { metric4 }
          </Typography>
          <Typography sx={{fontSize:14}}>
            Value: {value4}

          </Typography>
        </CardContent>



      </Card>
    
    
    
    </Grid>
    
    
  )
}

export default MakeMetrics;