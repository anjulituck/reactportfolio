// import React,{useState} from 'react';
// import Barkr from "../../assets/Barker.png"
// import HOFDLA from "../../assets/HOFDLA.png"
// import README from "../../assets/README Generator.png"
// import SJ from "../../assets/studiojunk.gif"
// import CS from "../../assets/cs.png"
// import social from "../../assets/social.gif"
    
const projects = [    
    {
      name: 'Hold On For Dear Life Ape',
      category: 'Front-End',
      id:1,
      description:
        'A crypto currency app that helps people understand the basics of crypto and compare them to everyday stocks.',
        image:"../../assets/HOFDLA.png",
        tech: "BULMA, JAVASCRIPT, CSS, CRYPTO APIs",
        url:'https://github.com/drkevinfriday/Hold-On-for-Dear-Life-Ape',
        live:'https://drkevinfriday.github.io/Hold-On-for-Dear-Life-Ape/'
    },
    {
      name: 'BARKR',
      category: 'Full Stack',
      id:2,
      description:
        'A social media app for dog owners.',
        image:"../../assets/Barker.png",
        tech:"HANDLEBARS, BULMA, NODE, SEQUELIZE, MySQL, bcrypt, dotenv",
        url:'https://github.com/Tydomx/barkr-meetup',
        live:'https://barkr-meetup.herokuapp.com'
    },
    {
      name: 'Studio Junk',
      category: 'Web Design',
      id:3,
      description:
        'My freelance web and brand design studio for social impact driven brands.',
      image:"../../assets/studiojunk.gif",
      tech:"SQUARESPACE, CSS, JAVASCRIPT",
      url: 'https://studiojunk.co',
      live:'https://studiojunk.co'

    },
    {
      name: 'README Generator',
      category: 'Back-End',
      id:4,
      description:
        'A README generator using Node.js',
      image:"../../assets/README Generator.png",
      tech:"NODE, INQUIRER, JAVASCRIPT",
      url:'https://github.com/anjulituck/readmegenerator' 
    },
    {
      name: 'Social Network API',
      category: 'Back-End',
      id:5,
      description:
        'Developed a social network api using a NoSQL database',
      image:"../../assets/social.gif",
      tech:"NoSQL, MongoDB, Mongoose",
      url:'https://github.com/anjulituck/socialnetwork' 
    },
    {
      name: 'Group Project Coming Soon',
      category: 'Full Stack',
      id:6,
      description:
        'A MERN SPA project - coming soon!',
      image: "../../assets/cs.png",
      tech: "MERN",
      url:'https://github.com/drkevinfriday/Project3FullStack'
    }
  ]

  export default projects;