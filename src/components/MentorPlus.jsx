import axios from "axios";
import { React, useState, useEffect } from "react";

const MentorPlus = () => {
  const [first, setfirst] = useState([
    {
      date: "22",
      day:'Mon',
      month:'Feb',
      available: [
        {
          hour: 6,
          min: 30,
        },
        {
          hour: 7,
          min: 0,
        },
      ],
    },
    {
      date: "23",
      day:'Tue',
      month:'Feb',
      available: [
        {
          hour: 5,
          min: 0,
        },
        {
          hour: 7,
          min: 0,
        },
      ],
    },
    {
      date: "24",
      day:'Wed',
      month:'Feb',
      available: [
        {
          hour: 5,
          min: 0,
        },
        {
          hour: 7,
          min: 0,
        },
      ],
    },
    {
      date: "25",
      day:'Thu',
      month:'Feb',
      available: [
        {
          hour: 2,
          min: 0,
        },
        {
          hour: 4,
          min: 0,
        },
      ],
    },
  ]);
  const [minimize, setMinimize] = useState(false)

  const [seletDate, setSeletDate] = useState(false)
  const [seletSlot, setSelectSlot] = useState(false)
  const [slot, setSlot] = useState(false)
  const [navToggle, setNavToggle] = useState(1)
  useEffect(() => {
   if(seletDate){

       var SELECT = first.filter(data=>data.date==seletDate)
       var slot = SELECT[0].available
       setSlot(slot)
       setSelectSlot(0)
   }
  }, [seletDate])
  
  
  console.log('slot',slot);
  return (
    <div className="MainContainer">
      <div className={minimize?"sidenavbar sidenavbarMini":"sidenavbar"}>
        <h1 className="Logo2">
          <span class="material-icons-outlined">whatshot</span>Mentor
          <span>Plus</span>
        </h1>
        <ul className="navLinks">
          <li onClick={()=>setNavToggle(1)} className={navToggle==1?"navLink navLinkActive":"navLink"}>
            <span class="material-icons-outlined">home</span>Home
          </li>
          <li onClick={()=>setNavToggle(2)} className={navToggle==2?"navLink navLinkActive":"navLink"}>
            <span class="material-icons-outlined">manage_accounts</span>Profile
          </li>
          <li onClick={()=>setNavToggle(3)} className={navToggle==3?"navLink navLinkActive":"navLink"}>
            <span class="material-icons-outlined">contact_support</span>Contact
            us
          </li>
          <li onClick={()=>setNavToggle(4)} className={navToggle==4?"navLink navLinkActive":"navLink"}>
            <span class="material-icons-outlined">tune</span>Settings
          </li>
          <li onClick={()=>setNavToggle(5)} className={navToggle==5?"navLink navLinkActive":"navLink"}>
            <span class="material-icons-outlined">logout</span>Log Out
          </li>
        </ul>
      </div>
      <div className="content">
        <nav className="navbar">
          <h1 className="Logo">
            <span class="material-icons-outlined">whatshot</span>Mentor
            <span>Plus</span>
          </h1>
          <span onClick={()=>setMinimize(!minimize)} class="material-icons-outlined">{minimize?'close':'menu'}</span>
        </nav>

        <div className="main">
          <div className="head">
            <span class="material-icons-outlined">arrow_back</span>
          </div>
          <div className="first">
            <span>Book</span>
            <span>Demo Session Slot</span>
          </div>
          <div className="date">
            <span>Select Date</span>
            <div className="dateBox">
                {first?first.map((data,index)=>(
                    <div className={data.date==seletDate?"DateCard DateCardActive":"DateCard"} onClick={()=>setSeletDate(data.date)}>
                        <p>{data.day}</p>
                        <p>{data.date}</p>
                        <p>{data.month}</p>
                    </div>
                )):null}
            </div>
          </div>
          <div className="slot">
            <span>Select Slot</span>
            <div className="slotBox">
                {slot?slot.map((time,index)=>(
                    <span className={index==seletSlot?"slotCard sloCardActive":"slotCard"} onClick={()=>setSelectSlot(index)}>
                      {time.hour}:{time.min} PM - {time.hour+1}:{time.min} PM</span>
                )):<p>Please Select A Date</p>}
            </div>
          </div>
          <div className="proceed">
            <button>Proceed To Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPlus;
