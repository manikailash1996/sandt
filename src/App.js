import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import lawicon from './lawicon.jpg';
import client from './client.png';
import clientsuccess from './gettyimages-1.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import cards from './cards.json';
import {Stack, IconButton, Grid, Container, Avatar, CircularProgress, Chip, Button} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import advocate from './advocate.png';
import advocate1 from './shankar.jpg';
import advocate2 from './thiru.jpg';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GavelIcon from "@mui/icons-material/Gavel";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HandshakeIcon from "@mui/icons-material/Handshake";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="App"
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const tabCount = 4; // total number of tabs
  const phoneNumber = "+91 8610196600";
  const photos = [
    {
      name: "Advocate Shankar Raja",
      src: advocate1,
    },
    {
      name: "Advocate Thirumalaiswamy",
      src: advocate2,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 const ContactUs =()=>{
  return(
   <Box
      sx={{
        position: "relative",
        backgroundImage: `url('/law-bg.jpg')`, // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(6, 24, 45, 0.85)",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            border: "1px solid rgba(255,255,255,0.3)",
            p: { xs: 3, md: 5 },
          }}
        >
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                S&T Law Office
              </Typography>

              <Typography
  sx={{
    mb: 1,
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
  <Box
    component="img"
    src={advocate}   // your image path
    alt="Advocate"
    sx={{ width: 20, height: 20 }}
  />
  Advocate Shankar Raja
</Typography>
 <Typography
  sx={{
    mb: 1,
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
  <Box
    component="img"
    src={advocate}   // your image path
    alt="Advocate"
    sx={{ width: 20, height: 20 }}
  />
  Advocate Thirumalaiswamy
</Typography>
              
              {/* <Typography sx={{ mb: 1 }}>
                No 1058, Ground Floor
              </Typography> */}
              <Typography sx={{ mb: 1 }}>
                Combined Court Complex
              </Typography>
              <Typography sx={{ mb: 1 }}>
               Arts College Rd 
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Gopalapuram
              </Typography>
               <Typography sx={{ mb: 1 }}>
                Coimbatore
              </Typography>
              <Typography>
                India – 641018
              </Typography>
            </Grid>

            {/* Right Column */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack spacing={2}>
                

                <Stack direction="row" spacing={2} alignItems="center">
                
                  <IconButton
    component="a"
    href="tel:+918610196600"
    sx={{ color: "#fff" }}
  >
    <PhoneIcon />
  </IconButton>

  <Typography
    component="a"
    href="tel:+918610196600"
    sx={{
      color: "#fff",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    }}
  >
    +91 8610196600
  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                 
                  <IconButton
    component="a"
    href="tel:+919488787392"
    sx={{ color: "#fff" }}
  >
    <PhoneIcon />
  </IconButton>

  <Typography
    component="a"
    href="tel:+919488787392"
    sx={{
      color: "#fff",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    }}
  >
    +91 9488787392
  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton sx={{ color: "#fff" }}>
                    <EmailIcon />
                  </IconButton>
                  <Typography>Stlawassociates@gmail.com</Typography>
                </Stack>

                
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>)
 }

 const StatItem = ({ value, label }) => {return(
  <Stack direction="row" spacing={2} alignItems="center">
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={value}
        size={60}
        thickness={4}
        sx={{ color: "green" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" fontWeight={600}>
          {value}%
        </Typography>
      </Box>
    </Box>

    <Typography variant="body1" fontWeight={500}>
      {label}
    </Typography>
  </Stack>
);
}
const Advocate = () =>{
  return(
       
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {photos.map((photo, index) => (
          <Grid key={index} xs={12} sm={6}>
            {/* Image Wrapper */}
            <Box
              sx={{
                width: "100%",
                height: 300,           // 🔑 SAME HEIGHT
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={photo.src}
                alt={photo.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",   // 🔑 CROPS NICELY
                }}
              />
            </Box>

            <Typography variant="subtitle1" mt={1} align="center">
              {photo.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
const OurAdvocate = ()=>{
  return(
  <Box sx={{ maxWidth: 420,marginBottom:2 }}>
      <Chip
        label="OUR ADVOCATES"
        size="small"
        sx={{
          mb: 1.5,
          backgroundColor: "#eef3f7",
          fontWeight: 600,
          letterSpacing: 0.5,
          marginTop:2
        }}
      />

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Our Skilled Legal Experts
      </Typography>

      <Stack spacing={3} mt={2}>
        <StatItem
          value={98}
          label="Proven Commitment to Client Results"
        />
        <StatItem
          value={96}
          label="Consistently High Case Success Rate"
        />
      </Stack>
   
    </Box>)
}
const howItWorksSteps = [
  {
    title: "Consultation",
    description:
      "A confidential consultation to understand your legal needs, evaluate your case, and outline possible legal solutions.",
    icon: <HeadsetMicIcon sx={{ fontSize: 48, color: "#0D3B66" }} />,
  },
  {
    title: "Strategy & Planning",
    description:
      "We formulate a strong, customized legal strategy following an in-depth analysis of your case, focused on effectively advancing and protecting your interests.",
    icon: <GavelIcon sx={{ fontSize: 48, color: "#0D3B66" }} />,
  },
  {
    title: "Expert Representation",
    description:
      "With focused legal execution, we stand firmly for your rights, pursuing the best outcomes through litigation and negotiated solutions.",
    icon: <GavelIcon sx={{ fontSize: 48, color: "#0D3B66" }} />,
  },
  {
    title: "Resolution & Support",
    description:
      "We work toward the most effective resolution and continue to support you thereafter, helping ensure long-term legal stability and ongoing compliance.",
    icon: <HandshakeIcon sx={{ fontSize: 48, color: "#0D3B66" }} />,
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F9F9F9",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "700", mb: 4 }}
        >
          How It Works
        </Typography>

        <Grid container spacing={4}>
          {howItWorksSteps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack
                direction="column"
                spacing={2}
                alignItems="center"
                textAlign="center"
              >
                {/* Icon */}
                <Box>{step.icon}</Box>

                {/* Step Title */}
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {step.title}
                </Typography>

                {/* Step Description */}
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
const ScheduleConsultationButton = () => {
  // "tel:" link works for both desktop and mobile,
  // mobile opens dialpad with number pre-filled,
  // desktop usually opens app picker or tries calling app.

  return (
    <Box sx={{ display: "inline-block" }}>
      <Button
        variant="contained"
        href={`tel:${phoneNumber}`}
        sx={{
          bgcolor: "#F5C339",
          color: "black",
          borderRadius: "40px",
          px: 3,
          py: 1.5,
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#d4a91c",
            boxShadow: "none",
          },
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        SCHEDULE A CONSULTATION
        <OpenInNewIcon sx={{ fontSize: 20 }} />
      </Button>
    </Box>
  );
};

const TestimonialCard = ({ name, text, avatarSrc }) => (
  <Box
    sx={{
      bgcolor: "background.paper",
      borderRadius: 3,
      p: 3,
      boxShadow: 3,
      position: "relative",
      height: "100%", // full height to align in grid
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    {/* Stars */}
    <Stack direction="row" spacing={0.5} mb={1}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} sx={{ color: "#FF9800", fontSize: 24 }} />
      ))}
    </Stack>

    {/* Quote Icon */}
    <FormatQuoteIcon
      sx={{
        color: "#004d40",
        fontSize: 36,
        position: "absolute",
        top: 16,
        right: 16,
        opacity: 0.15,
      }}
    />

    {/* Testimonial Text */}
    <Typography
      variant="body1"
      sx={{ color: "text.primary", mb: 3, fontWeight: 400, lineHeight: 1.5 }}
    >
      {text}
    </Typography>

    {/* Avatar and Name */}
    <Stack direction="row" spacing={2} alignItems="center" mt="auto">
      <Avatar
        alt={name}
        src={avatarSrc}
        sx={{ width: 40, height: 40 }}
      />
      <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
        {name}
      </Typography>
    </Stack>
  </Box>
);

 const testimonials = [
    {
      name: "Advocate Shankar Raja",
      text: `“As your trusted legal advocate, I offer steadfast commitment and complete confidentiality. With more than ten years of legal practice in Coimbatore, I provide seasoned expertise across a wide range of legal matters. I take the time to understand your specific concerns and develop strategic, results-driven solutions that protect your interests and strengthen your future.”`,
      avatarSrc: advocate1, // replace with real photo URL
    },
    {
      name: "Advocate Thirumalaiswamy",
      text: `With unwavering dedication and strict confidentiality, I serve as a reliable legal partner for my clients. Drawing on more than a decade of experience in Coimbatore, I offer in-depth legal insight and personalized strategies designed to deliver lasting and meaningful results.`,
      avatarSrc: advocate2, // replace with real photo URL
    },
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="auto switching tabs"
          style={{ background: 'cadetblue' }}
          centered
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={lawicon} alt="Home" width={20} height={20} />
                Home
              </Box>
            }
            {...a11yProps(0)}
          />
          {/* <Tab label="Solutions" {...a11yProps(1)} /> */}
          <Tab label="Our Advocates" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0} >
        <Card>
          <CardActionArea>
            <CardContent style={{background:'aliceblue'}}>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center", color: "teal",fontSize:'xx-large' }}>
                S&T Legal Associates
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{ textAlign: "center", color: "brown",fontSize:'large',fontWeight:'bold' }}>
                The Head In The Law of Ideas
              </Typography>
              <Typography style={{textAlign:"center"}}>We deliver forward-thinking legal counsel that anticipates risks, safeguards your interests, and gives your business the confidence to grow anywhere in TamilNadu.</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <img src={client} alt="client" style={{ width: '100%', height: '100%' }} />
         
      {/* <span>
       <img src={clientsuccess} alt="clientsuccess" style={{ width: '50%', height: '50%' }} />
       </span>
       <span>
        <Box sx={{
        display: "flex",
        justifyContent: "center", // horizontally center
        alignItems: "center"
      }}>
        <Card style={{width:"max-content",padding:'5%',background:'beige'}} sx={{  justifyContent: 'center' }}>
        <CheckCircleIcon style={{color:"green",fontSize:"medium"}}/>Client-Centric Legal Support<br/>
        <CheckCircleIcon style={{color:"green",fontSize:"medium"}}/>Demonstrated Legal Success<br/>
        <CheckCircleIcon style={{color:"green",fontSize:"medium"}}/>Tailored Legal Strategies<br/>
        <CheckCircleIcon style={{color:"green",fontSize:"medium"}}/>Seasoned Legal Expertise<br/>
        </Card>
        </Box>
        </span> */}
        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    flexWrap: "wrap",
    p: 2,
    background: "cadetblue",
  }}
>

  {/* Image - responsive */}
  <Box
    component="img"
    src={clientsuccess}
    alt="clientsuccess"
    sx={{
      width: { xs: "100%", sm: "80%", md: "50%" },
      maxWidth: "500px",
      height: "auto",
      borderRadius: 1
    }}
  />

  {/* Card - responsive */}
  <Card
    sx={{
      width: { xs: "100%", sm: "80%", md: "35%" },
      p: 3,
      background: "beige",
      textAlign: "left"
    }}
  >
    <p style={{ textAlign: "center", fontWeight: "700", fontSize: 'larger' }}>
      Your legal challenges deserve the best solutions — we’re here to protect what matters most to you.
    </p>

    <CheckCircleIcon sx={{ color: "green", fontSize: "medium" }} /> Client-Centric Legal Support<br />
    <CheckCircleIcon sx={{ color: "green", fontSize: "medium" }} /> Demonstrated Legal Success<br />
    <CheckCircleIcon sx={{ color: "green", fontSize: "medium" }} /> Tailored Legal Strategies<br />
    <CheckCircleIcon sx={{ color: "green", fontSize: "medium" }} /> Seasoned Legal Expertise<br />
  </Card>
  <ScheduleConsultationButton />
</Box>

<HowItWorks />
<div class="heading-title">Our Practice Areas</div>
 <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 3,
        alignItems: "stretch",
        padding: 2,
        backgroundColor: "cadetblue", // light gray background for the grid
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            borderRadius: 2,
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: 2,
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 8,
              backgroundColor: "#e3f2fd", // light blue hover effect
            },
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{ fontWeight: 600, color: "#1976d2" }} // primary blue title
              >
                {card.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 2 }}
                fontWeight="bolder"
              >
                {card.description}
              </Typography>

              {/* Subcategories */}
              <Box sx={{ mt: "auto" }}>
                {card.subcategories?.map((subcat, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      backgroundColor: "#e8f5e9", // subtle green pill effect
                      padding: "2px 6px",
                      borderRadius: 1,
                      width: "fit-content",
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#43a047", fontSize: "small" }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {subcat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
 <OurAdvocate />
 <Advocate />
 <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} md={6} key={i} style={{marginBottom:'10%'}}>
            <TestimonialCard {...t} />
          </Grid>
        ))}
      </Grid>
    </Container>
<ContactUs />
  
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
     <OurAdvocate />
     <Advocate />
      <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} md={6} key={i} style={{marginBottom:'10%'}}>
            <TestimonialCard {...t} />
          </Grid>
        ))}
      </Grid>
    </Container>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ContactUs />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
       
      </CustomTabPanel>
    </Box>
  );
}
