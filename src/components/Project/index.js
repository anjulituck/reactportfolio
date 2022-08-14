import React from 'react';
import Portfolio from "../Portfolio.png"
import Barkr from "../../assets/Barker.png"
import HOFDLA from "../../assets/HOFDLA.png"
import README from "../../assets/README Generator.png"
import SJ from "../../assets/studiojunk.gif"
import CS from "../../assets/cs.png"
import social from "../../assets/social.gif"

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Hold On For Dear Life Ape',
      category: 'Front-End',
      id:1,
      description:
        'A crypto currency app that helps people understand the basics of crypto and compare them to everyday stocks.',
        image:{HOFDLA},
        url:'https://github.com/drkevinfriday/Hold-On-for-Dear-Life-Ape'
    },
    {
      name: 'BARKR',
      category: 'Full Stack',
      id:2,
      description:
        'A social media app for dog owners.',
        image:{Barkr},
        url:'https://github.com/Tydomx/barkr-meetup'
    },
    {
      name: 'Studio Junk',
      category: 'Web Design',
      id:3,
      description:
        'My freelance web and brand design studio for social impact driven brands.',
      image:{SJ} ,
      url: 'https://studiojunk.co'

    },
    {
      name: 'README Generator',
      category: 'Back-End',
      id:4,
      description:
        'A README generator using Node.js',
      image:{README},
      url:'https://github.com/anjulituck/readmegenerator' 
    },
    {
      name: 'Social Network API',
      category: 'Back-End',
      id:5,
      description:
        'Developed a social network api using a NoSQL database',
      image: {social},
      url:'https://github.com/anjulituck/socialnetwork' 
    },
    {
      name: 'Group Project Coming Soon',
      category: 'Full Stack',
      id:6,
      description:
        'A MERN SPA project - coming soon!',
      image: {CS},
      url:'https://github.com/drkevinfriday/Project3FullStack'
    }
  ])
};

function Project() {
    return (
      <section>
        
      </section>
    );
  };
  
  export default Project;