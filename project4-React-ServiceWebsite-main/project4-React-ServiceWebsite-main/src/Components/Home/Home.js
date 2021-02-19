import React from 'react';
import '../../Styles/Home.css'
import Card from './Card';
import Header from "../HeaderFooter/Header"
import Footer from "../HeaderFooter/Footer"
import Details from './Details';
import Testimonials from './Testimonials';
import MoreDeets from './MoreDeets';
import YoutubeApi from "./YoutubeApi";
import '../../Styles/youtube.css'


 
const Home = () => {

    return (
       <React.StrictMode>
       <Header />

       <MoreDeets/>

       <div className="details__container">
       <Details img= 'https://i2.wp.com/practicalmotoring.com.au/wp-content/uploads/2014/11/Untitled-design-3.jpg?fit=1600%2C900&ssl=1' title='With Key 2 Drive the drivers can learn how to drive and we guarantee the best service'  />
       <Details img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSfJFJceoJyL5o9p6_SkRB1uo9aH_HViCHQ&usqp=CAU" title='too many vihecles are ready for you to start'  />
       <Details img= 'https://getingear.ie/images/learner-permit.jpg' title='we prepare you to to pass the test  '  />
  </div>


  <div className="youtube-container">
       <YoutubeApi/>
  </div>


       <Testimonials />
        <div className="flex-container">
       <Card img="https://media-exp1.licdn.com/dms/image/C4D03AQEpu-B0qUBHfw/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=YTzerBXrmhzYcvUHp5cUk2jOqcM_y5vaPCjlIOufQwI"name="Abdullah alhajeid " number="0778870786" lecture="Scrum Master" linkedinlink="https://www.linkedin.com/in/abdallah-alhajeid/" githublink="https://github.com/Abdallah-Alhajeid" />
       <Card img="https://avatars1.githubusercontent.com/u/71769566?s=96&v=4" name="Hala Hyasat" number="0770530135" lecture="Product Owner" linkedinlink="https://www.linkedin.com/in/hala-alhyasat/" githublink="https://github.com/HalaHyasat" />
       </div>
       <div  className="flex-container">
       <Card img="https://avatars1.githubusercontent.com/u/71770290?s=96&v=4" name="Heba Balbesee" number="0778982303" lecture="Developer" linkedinlink="https://www.linkedin.com/in/heba-bilbeisi/" githublink="https://github.com/HEBA-BILBEISI" />
       <Card img="https://avatars0.githubusercontent.com/u/71769638?s=96&v=4" name="Lubna Maaweed" number="0775327296" lecture="Developer" linkedinlink="https://www.linkedin.com/in/lubna-almaaweed/" githublink="https://github.com/lubna-almaaweed"/>
       <Card img="https://avatars2.githubusercontent.com/u/71584041?s=96&v=4" name="Mohammad Aljasem" number="0778982286" lecture="Developer" linkedinlink="https://www.linkedin.com/in/mohammed-aljasem/" githublink="https://github.com/Mohammed-Aljasem"/>
       </div>
        <Footer />
      </React.StrictMode>
     
    );
}
 
export default Home;
