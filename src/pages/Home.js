import React,{useEffect} from 'react'
import '../styles/base.css'
import Video from '../components/video'
import Resource from '../components/resource'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Aos from 'aos';


export default function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    
    return (
    <div className="body">
      <div className="header">
        <h2><a href="#home">ICT MasterCourse</a></h2>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#videos'>Videos</a></li>
          <li><a href='#resources'>Resources</a></li>
        </ul>
      </div>
      <div className="home" id="home">
        <h2>ICT MasterCourse for HSC 2023</h2>
        <p  style={{marginBottom:"50vh"}}>by Salman Sayeed</p>
      </div>
      <div className="videos" id="videos">
        <h2>Videos</h2>
        <p>Sorted by Week</p>
        {/*Week 1*/}
        <div className="week_container" data-aos="fade-left">
          <div className="title">
            <h4>Week 1</h4>
            <Video title="Intro and Number Conversion-1" url="https://youtube.com/embed/bTzsYmGTm0k"/>
            <Video title="Number Conversion-2" url="https://youtube.com/embed/RciHHQ-dsIY"/>
            <Video title="Test 1 Solve" url="https://youtube.com/embed/ks59ZcmUwSI"/>
          </div>
        </div>
        {/*Week 2*/}
        <div className="week_container" data-aos="fade-right">
          <div className="title">
            <h4>Week 2</h4>
            <Video title="Number Conversion-3" url="https://youtube.com/embed/38Y7NL4-Upc"/>
            <Video title="Signed Unsigned numbers & Addition 1" url="https://youtube.com/embed/c_6Epmo2iKo"/>
          </div>
        </div>
        {/*Week 3*/}
        <div className="week_container" data-aos="fade-left">
          <div className="title">
            <h4>Week 3</h4>
            <Video title="Addition | Codes" url="https://youtube.com/embed/y1Nzftpy9Xs"/>
            <Video title="Boolean 1" url="https://youtube.com/embed/ciu8_w3Q5fk"/>
            
          </div>
        </div>
        {/*Week 4*/ }
        <div className="week_container" data-aos="fade-right">
          <div className="title">
            <h4>Week 4</h4>
            <Video title="Compound Logic Gates" url="https://youtube.com/embed/iZ9BfE9PMyU"/>
            <Video title="Equation Simplification" url="https://youtube.com/embed/po-6_TvFYqc"/>
            
          </div>
        </div>
        {/*Week 5*/}
        <div className="week_container" data-aos="fade-left">
          <div className="title">
            <h4>Week 5</h4>
            <Video title="Exam-2 Solution" url="https://youtube.com/embed/hH-CLq_wLWY"/>
            <Video title="NAND and NOR Practice" url="https://youtube.com/embed/R1QwkQODtxg"/>
            <Video title="Web Basics" url="https://youtube.com/embed/FGsd5CvJobg"/>
            <Video title="HTML Basics" url="https://youtube.com/embed/aAHQ5dZd4Bk"/>
            
          </div>
        </div>
        {/*Week 6*/}
        <div className="week_container" data-aos="fade-right">
          <div className="title">
            <h4>Week 6</h4>
            <Video title="HTML Head | Paragraph | Text Formatting | List | Anchoring" url="https://youtube.com/embed/VmQQtUl4-SE"/>
            <Video title="Nested List | Style Tag | Web design | Web hosting" url="https://youtube.com/embed/493hv23sbLQ"/>
            
            
          </div>
        </div>
        {/*Week 7*/}
        <div className="week_container" data-aos="fade-left">
          <div className="title">
            <h4>Week 7</h4>
            <Video title="HTML Table(Other batch)" url="https://youtube.com/embed/JUUM0yJj_So"/>
            <Video title="Programming Basics" url="https://youtube.com/embed/MPgBmQhu4Ww"/>
            
          </div>
        </div>
        {/*Week 8*/}
        <div className="week_container" data-aos="fade-right">
          <div className="title">
            <h4>Week 8</h4>
            <Video title="Data Types | Operators" url="https://youtube.com/embed/fX-5d6JhC44"/>
          </div>
        </div>
        {/*Week 9*/}
        <div className="week_container" data-aos="fade-left">
          <div className="title">
            <h4>Week 9</h4>
            <Video/>
          </div>
        </div>
        {/*Week 10*/}
        <div className="week_container" data-aos="fade-right">
          <div className="title">
            <h4>Week 10</h4>
            <Video/>
          </div>
        </div>

      </div>
      <div className="resources" id="resources">
        <h2>Resources</h2>
        <p>Contains Important Links</p>
        <Resource title="Payments Sheet" url="https://docs.google.com/spreadsheets/d/1k_xMJBYaC4wNiuV32lMJmwXtPUTfyMjc99QEfQUUgVw/edit#gid=0"/>
        <Resource title="NCTB ICT TextBook" url="https://drive.google.com/file/d/1gfWvsmbVNld9v4GlJVg3rn4n00MHXenV/view?usp=sharing"/>
        <Resource title="ICT Test-2 Result" url="https://docs.google.com/spreadsheets/d/1CKjbxjmIzdnomW04rDEshResfdca8lCmMbL78OH-UkU/edit?usp=sharing"/>
        <Resource title="ICT Test-2 Copies" url="https://drive.google.com/drive/folders/1h6l0AnYUWI7NM673x7wkZBAnJxY8bufH?usp=sharing"/>
        <Resource title="ICT Test-1 Result" url="https://docs.google.com/spreadsheets/d/1qQpwpDZ064AxHDkM8Is92qp0RGq_jd1MEaFBvyhKXg0/edit?usp=sharing"/>
        <Resource title="ICT Test-1 Copies" url="https://drive.google.com/drive/folders/142t_xRYvbuSwlYgHJ7_429bbutyLb7wk?usp=sharing"/>
      </div>
      <div className="footer">
        <p>All rights reserved - 2021</p>
      </div>
    </div>
    )
}
