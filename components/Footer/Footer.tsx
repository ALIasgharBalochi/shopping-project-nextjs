"use client";

import {
  TextField,
  Fab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import Copyright from "@mui/icons-material/Copyright";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import PhoneInTalkOutlined from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type ContactType = {
  icon: any;
  content: string;
};

const Footer = () => {
  const data: Array<{ name: string }> = [
    { name: "cookie" },
    { name: "Privacy" },
    { name: "Terms and Conditions" },
    { name: "Imprint" },
  ];
  const companyData: string[] = [
    "about us ",
    "blog",
    "returns",
    "order status",
  ];
  const infoData: string[] = ["How it works", "our promises", "FAQ"];

  const contactData: ContactType[] = [
    { icon: <PlaceOutlined />, content: "123 Main Street , Anytown ,USA" },
    { icon: <PhoneInTalkOutlined />, content: "09020010020" },
    { icon: <EmailOutlined />, content: "alibalochi1910@gmail.com" },
  ];

  const icon: any[] = [
    <FacebookIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
    <YouTubeIcon />,
  ];

  return (
    <div className=" w-full h-72 max-[800px]:h-auto bg-gradient-to-t from-primary-700 to-primary-900 flex flex-col items-end justify-end">
      <div className=" w-full h-3/4  flex max-[800px]:items-center max-[800px]:p-[1rem] max-[800px]:justify-start max-[800px]:flex-col-reverse">
        <div className=" w-[70%] text-white flex flex-col justify-center">
          <div className=" flex items-center justify-center mb-11 max-[800px]:hidden">
            <div>
              <p>company</p>
              <ul>
                {companyData.map((d: string) => (
                  <li className=" text-sm text-gray-500">{d}</li>
                ))}
              </ul>
            </div>
            <div className=" mx-16">
              <p>info</p>
              <ul>
                {infoData.map((d: string) => (
                  <li className=" text-sm text-gray-500">{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>contact</p>
              <ul>
                {contactData.map((d: ContactType, index: number) => (
                  <li className=" text-sm text-gray-500">
                    <span>{d.icon}</span>
                    {d.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" min-[800px]:hidden w-full flex flex-col justify-center">
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Company
              </AccordionSummary>
              {companyData.map((d: string, index: number) => (
                <AccordionDetails>{d}</AccordionDetails>
              ))}
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                info
              </AccordionSummary>
              {infoData.map((d: string, index: number) => (
                <AccordionDetails>{d}</AccordionDetails>
              ))}
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                contact
              </AccordionSummary>
              {contactData.map((d: ContactType, index: number) => (
                <AccordionDetails>
                  <span>{d.icon}</span>
                  {d.content}
                </AccordionDetails>
              ))}
            </Accordion>
          </div>
        </div>
        <div className=" w-[30%] max-[800px]:w-full flex flex-row max-[800px]:flex-col-reverse">
          <section className=" flex flex-col items-start max-[800px]:items-center justify-center text-white">
            <h2>sign up for news and updates</h2>
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              color="info"
              sx={{
                my: ".5rem",
              }}
            />
            <div className=" flex max-[800px]:hidden">
              {icon.map((i: any, index: number) => (
                <span>{i}</span>
              ))}
            </div>
          </section>
          <section className=" flex flex-col max-[800px]:flex-row items-center justify-around max-[800px]:justify-between ml-4">
            <Fab color="primary" aria-label="message" size="small">
              <FeedbackOutlinedIcon />
            </Fab>
            <Fab color="primary" aria-label="back to top" size="small">
              <ExpandLessOutlinedIcon />
            </Fab>
          </section>
        </div>
      </div>
      <div className=" bg-primary-900 w-full h-[4rem] flex flex-row items-center justify-between max-[800px]:justify-center px-20 max-[800px]:px-16 text-gray-200">
        <p className=" flex items-center text-sm max-[800px]:hidden">
          <Copyright /> ali balochi2024
        </p>
        <div className=" flex flex-row items-center max-[800px]:hidden">
          {data.map((d: { name: string }, index: number) => (
            <p className=" mx-2 text-sm">{d.name}</p>
          ))}
        </div>
        <div className=" flex min-[800px]:hidden">
          {icon.map((i: any, index: number) => (
            <span>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
