import React from "react";
import Tabs from "@mui/material/Tabs";
import { Tab } from "@mui/material";
import IcnBusiness from "../assets/icons/IcnBusiness";
import IcnEducation from "../assets/icons/IcnEducation";
import IcnHealthCare from "../assets/icons/IcnHealthCare";
import IcnSkillTrade from "../assets/icons/IcnSkillTrade";
import IcnTechnology from "../assets/icons/IcnTechnology";
import IcnClose from "../assets/icons/IcnClose";
import IcnFilter from "../assets/icons/IcnFilter";
import IcnLeft from "../assets/icons/IcnLeft";
import IcnRight from "../assets/icons/IcnRight";
import "./TabForProgramSelection.scss";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Style from "./ProgramSelectionStyle";
import Dimention from "../utils/Dimention";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Checkbox } from "@mui/material";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabForProgramSelection() {
  const { width } = Dimention();
  const [value, setValue] = React.useState(0);
  const [filterValue, setFilterValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFilterChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setFilterValue(newValue);
  };

  const theme = createTheme();
  return (
    <Box className="programSelection">
      {width >= 823 ? (
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons
          aria-label="visible arrows tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B4574", //here specify the color of the tabs
            },
          }}
          sx={{ width: "100%" }}
        >
          <Tab
            sx={value === 0 ? Style.selectBackColor : Style.unselectBackColor}
            {...a11yProps(0)}
            icon={
              <span style={Style.SelectIcn}>
                <IcnBusiness
                  width={19}
                  height={17}
                  fill={value === 0 ? "#ffffff" : "#2B4574"}
                />
              </span>
            }
            iconPosition="start"
            label={
              <span
                className={
                  value === 0 ? "selectActiveLabel" : "selectInActiveLabel"
                }
              >
                Business
              </span>
            }
          />
          <Tab
            sx={value === 1 ? Style.selectBackColor : Style.unselectBackColor}
            {...a11yProps(1)}
            icon={
              <span style={Style.SelectIcn}>
                <IcnEducation
                  width={19}
                  height={17}
                  fill={value === 1 ? "#ffffff" : "#2B4574"}
                />
              </span>
            }
            iconPosition="start"
            label={
              <span
                className={
                  value === 1 ? "selectActiveLabel" : "selectInActiveLabel"
                }
              >
                Design & Education
              </span>
            }
          />
          <Tab
            sx={value === 2 ? Style.selectBackColor : Style.unselectBackColor}
            {...a11yProps(2)}
            icon={
              <span style={Style.SelectIcn}>
                <IcnHealthCare
                  width={19}
                  height={17}
                  fill={value === 2 ? "#ffffff" : "#2B4574"}
                />
              </span>
            }
            iconPosition="start"
            label={
              <span
                className={
                  value === 2 ? "selectActiveLabel" : "selectInActiveLabel"
                }
              >
                Healthcare
              </span>
            }
          />
          <Tab
            sx={value === 3 ? Style.selectBackColor : Style.unselectBackColor}
            {...a11yProps(3)}
            icon={
              <span style={Style.SelectIcn}>
                <IcnSkillTrade
                  width={19}
                  height={17}
                  fill={value === 3 ? "#ffffff" : "#2B4574"}
                />
              </span>
            }
            iconPosition="start"
            label={
              <span
                className={
                  value === 3 ? "selectActiveLabel" : "selectInActiveLabel"
                }
              >
                Skilled Trades - Other
              </span>
            }
          />
          <Tab
            sx={
              value === 4
                ? Style.selectBackColor
                : { ...Style.unselectBackColor, ...Style.delRiBorder }
            }
            {...a11yProps(4)}
            icon={
              <span style={Style.SelectIcn}>
                <IcnTechnology
                  width={19}
                  height={17}
                  fill={value === 4 ? "#ffffff" : "#2B4574"}
                />
              </span>
            }
            iconPosition="start"
            label={
              <span
                className={
                  value === 4 ? "selectActiveLabel" : "selectInActiveLabel"
                }
              >
                Technology
              </span>
            }
          />
        </Tabs>
      ) : (
        <Box sx={{ ...Style.filterContainer, ...Style.programTabMobileCal }}>
          <Box sx={Style.leftFilter}>
            <IcnBusiness width={21} height={21} fill={"white"} />
            <Typography sx={Style.businessTab}>Business</Typography>
          </Box>
          <Box>
            <IcnClose width={15} height={15} />
          </Box>
        </Box>
      )}
      {width >= 823 ? (
        <Box sx={Style.filterContainer}>
          <Typography sx={Style.filterby}>Filter By:</Typography>
          <Tabs
            TabIndicatorProps={{
              style: Style.tabIndicatorDesign,
            }}
            value={filterValue}
            onChange={handleFilterChange}
            centered
          >
            {/* for active tab we add style 'filterActive' */}
            <Tab
              label={
                <Typography sx={{ ...Style.filterType, ...Style.filterActive }}>
                  All
                </Typography>
              }
            />
            <Tab
              label={
                <Typography sx={Style.filterType}>
                  Degree & Diplomas Programs
                </Typography>
              }
            />
            <Tab
              label={
                <Typography sx={Style.filterType}>
                  Short-Term Programs
                </Typography>
              }
            />
          </Tabs>
        </Box>
      ) : (
        <Box sx={{ ...Style.filterContainer, ...Style.filterMobileContainer }}>
          <Box sx={Style.leftFilter}>
            <Typography sx={{ ...Style.filterby, ...Style.allFilterTxt }}>
              Filter By:
            </Typography>
            <Typography sx={Style.filterActive}>All</Typography>
          </Box>
          <Box sx={Style.rightFilter}>
            <IcnFilter width={18} height={18} />
          </Box>
        </Box>
      )}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container sx={Style.gridCal}>
            <Grid container spacing={4}>
              {cardDetail.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
                  <Card sx={Style.cardCal}>
                    <CardMedia
                      component="img"
                      sx={Style.cardPicture}
                      image="https://fashinza.com/textile/wp-content/uploads/2023/01/Business-administration.jpg"
                      alt="random"
                    />
                    <CardContent
                      sx={{ ...Style.cardContent, ...Style.addCardBottomSpace }}
                    >
                      <Typography sx={Style.cardHeader}>
                        {card.heading}
                      </Typography>
                      <Typography sx={Style.cardSubHeader}>
                        {card.subHeading}
                      </Typography>
                      <Typography sx={Style.cardParagraph}>
                        {card.detail}
                      </Typography>
                    </CardContent>
                    <CardContent sx={Style.cardContent}>
                      <Typography sx={Style.hourCost}>
                        {`Program Cost : ${card.programCost}`}
                      </Typography>
                      <Typography sx={Style.hourCost}>
                        {`Program Hours : ${card.programHours}`}
                      </Typography>
                      <Typography sx={Style.hourCost}>
                        {`Credit Hours : ${card.creditHours}`}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing={true} sx={Style.cardButtons}>
                      <Button
                        sx={{ ...Style.financePlan, ...Style.addCommonBtn }}
                        size="small"
                      >
                        College Finance Plan
                      </Button>
                      <Button
                        sx={{ ...Style.planSelect, ...Style.addCommonBtn }}
                        size="small"
                      >
                        <Checkbox sx={Style.checkBox} />
                        Select
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
      <div className="buttons-cal">
        <div className="previous-button">
          <IcnLeft />
          <button>{"Previous Step"}</button>
        </div>
        <div className="next-button">
          <button>{"Program Preferences"}</button>
          <IcnRight width={10} height={10} />
        </div>
      </div>
    </Box>
  );
}

export default TabForProgramSelection;

const cardDetail = [
  {
    heading: "Business Administration",
    subHeading: "Associate of Applied Science",
    detail:
      "The Business Administration program provides education for the person seeking an entry-level career in business administration. Students are provided an opportunity to establish a solid foundation in administration and management; customer service; economics and accounting; sales and marketing; project management; and entrepreneurship.",
    programCost: "$32,240.00",
    programHours: "960.0",
    creditHours: "92.0",
  },
  {
    heading: "Mid Start Accounting",
    subHeading: "Bachelor of Science Degree",
    detail:
      "The Accounting Bachelor of Science program prepares the graduate for entry-level employment in accounting related occupations in business and industry, including not-for-profit and governmental agencies.&nbsp; Accounting related occupations may include finance, insurance, accounting, auditing, tax preparation, bookkeeping, and payroll",
    programCost: "$32,240.00",
    programHours: "960.0",
    creditHours: "92.0",
  },
  {
    heading: "Accounting",
    subHeading: "Bachelor of Science Degree",
    detail:
      "The Accounting Bachelor of Science program prepares the graduate for entry-level employment in accounting related occupations in business and industry, including not-for-profit and governmental agencies.&nbsp; Accounting related occupations may include finance, insurance, accounting, auditing, tax preparation, bookkeeping, and payroll",
    programCost: "$32,240.00",
    programHours: "960.0",
    creditHours: "92.0",
  },
];
