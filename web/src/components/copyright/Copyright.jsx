import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Copyright = () => {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link 
            color="inherit" 
            target='_blank' 
            rel='noopener'
            href="https://womenofcolour.org.au/">
              Women of Colour
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
      </Typography>
  );
}

export default Copyright