import { Box, Button, Container, Paper, Typography } from "@mui/material";

const App = () => {
  const servicesList = ["Service 1", "Service 2", "Service 3"]
  return (
    <Container>
      <Typography variant="h1" sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>
        Services
      </Typography>
      <Typography variant="h2">
        Overview
      </Typography>
      <Box
        sx={{
          pt:4,
          display: 'flex',
          flexDirection: {xs: 'column' , md:'row' , },
          justifyContent: 'space-between',
          gap:4,
        }}>
        {
          servicesList.map((services, index) => (
            <Paper key={index} elevation={3} sx={{width: {xs:1 , md: 320}}}>
              <Box sx={{m:3 }}>
                <Typography  variant="h3">{services}</Typography>
                <Typography sx={{mt:2}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ea, perspiciatis harum, quae exercitationem distinctio expedita consequuntur repudiandae id esse magni recusandae eveniet, tenetur repellat velit ducimus aliquid accusantium voluptatem rem? Dolor rem quis vel, sequi labore eveniet illo voluptas laborum nesciunt, aut expedita corporis iure amet explicabo et. Voluptates odit aut dolorum?
                  </Typography>
                  <Button variant="contained" color="secondary">Learn More</Button>
              </Box>
            </Paper>
          ))
        }
      </Box>
    </Container>
  );
};

export default App;
