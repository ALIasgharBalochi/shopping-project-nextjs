"use client";

import { TextField, Fab } from "@mui/material";

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
    <div className=" w-full h-72 bg-primary-900">
      <div className=" w-full h-3/4 flex ">
        <div className=" w-[70%] text-white flex flex-col justify-end">
          <div className=" flex items-center justify-center mb-11">
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
          <div className=" pl-20"> ali</div>
        </div>
        <div className=" w-[30%] flex flex-row">
          <section className=" flex flex-col items-start justify-center text-white">
            <h2>sign up for news and updates</h2>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              color="info"
              sx={{
                my: ".5rem",
              }}
            />
            <div className=" flex">
              {icon.map((i: any, index: number) => (
                <span>{i}</span>
              ))}
            </div>
          </section>
          <section className=" flex flex-col items-center justify-around ml-4">
            <Fab color="primary" aria-label="message" size="small">
              <FeedbackOutlinedIcon />
            </Fab>
            <Fab color="primary" aria-label="back to top" size="small">
              <ExpandLessOutlinedIcon />
            </Fab>
          </section>
        </div>
      </div>
      <div className=" w-full h-[4rem] flex flex-row items-center justify-between px-20 text-gray-200">
        <p className=" flex items-center text-sm">
          <Copyright /> ali balochi2024
        </p>
        <div className=" flex flex-row items-center">
          {data.map((d: { name: string }, index: number) => (
            <p className=" mx-2 text-sm">{d.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
