/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "SHERAJ",
  title: "Hi all, I'm Anuj singh chauhan",
  subTitle: emoji(
    "I'm an enthusiastic IT professional with experience in Data Analysis, ML, chatbot development, frontend development, and Flutter development. I love turning complex problems into simple, beautiful, and intelligent solutions! 🚀"
  ),
  resumeLink:
    "", // Add your resume link here or leave empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sherajsharif",
  linkedin: "https://www.linkedin.com/in/sheraj-sharif-652723250/",
  gmail: "sherajsharif786@gmail.com",
  leetcode: "https://leetcode.com/u/sheraj_sharif/",
  facebook: "https://www.facebook.com/sheraj.sharif.3",
  // medium: "https://medium.com/@YOUR_MEDIUM_USERNAME",
  // stackoverflow: "https://stackoverflow.com/users/YOUR_STACKOVERFLOW_ID",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE IT PROFESSIONAL SPECIALIZING IN DATA SCIENCE, MACHINE LEARNING & FULL-STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop intelligent Machine Learning models and Data Analysis solutions for real-world problems"
    ),
    emoji("⚡ Build responsive web applications using modern frameworks and create mobile apps with Flutter"),
    emoji(
      "⚡ Design and implement chatbot solutions using Dialogflow and integrate with various platforms"
    ),
    emoji("⚡ Create interactive data visualizations and dashboards using Power BI and Streamlit")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "streamlit",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "dialogflow",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madhav Institute of Technology and Science",
      logo: require("./assets/images/mits-logo.png"),
      subHeader: "B.Tech in Information Technology",
      duration: "Aug 2022 - June 2026",
      desc: "Currently pursuing a Bachelor of Technology with a focus on Information Technology. Engaged in a comprehensive curriculum covering software development, data structures, algorithms, and database management.",
      descBullets: [
        "Relevant coursework in Data Science, Machine Learning, and Web Development.",
        "Actively involved in coding clubs and technical workshops.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & ML", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend & APIs",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Visualisation Intern",
      company: "TATA GROUP",
      companylogo: require("./assets/images/tata-logo.png"),
      date: "Your Past Duration (e.g., Jan 2024 - May 2024)",
      desc: "As a Data Visualization Intern, I analyzed complex business datasets to uncover key trends and insights. I was responsible for developing clear and effective visualization dashboards to support internal decision-making.",
      descBullets: [
        "Analyzed business datasets to identify trends and insights for internal decision-making.",
        "Developed visualization dashboards to convey complex information clearly and effectively.",
        "Enhanced skills in Excel-based data cleaning, charting, and storytelling techniques."
      ]
    },
    {
      role: "App & Chatbot Development Intern",
      company: "Rishiwar Industry",
      companylogo: require("./assets/images/rishiwar-logo.png"),
      date: "May 2025 - July 2025",
      desc: "Offered a challenging internship role to contribute to the TECHORI IT Development Division. I will be responsible for designing, developing, and maintaining both mobile applications and conversational chatbots.",
      descBullets: [
        "Developing cross-platform mobile applications.",
        "Building and training conversational chatbots for customer engagement.",
        "Collaborating with the development team to integrate AI and ML into new features."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using GitHub, defaults to false
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY KEY PROJECTS AND CONTRIBUTIONS",
  projects: [
    {
      image: require("./assets/images/plant-logo.png.png"),
      projectName: "Plant Disease Prediction",
      projectDesc: "This project aims to predict plant diseases using machine learning techniques. By processing plant images, the system identifies possible diseases and provides solutions to the farmers.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/sherajsharif/plant-disease-Predict/tree/main/Flask%20Deployed%20App"
        }
      ]
    },
    {
      image: require("./assets/images/movie-logo.png.png"),
      projectName: "Movie Recommendation System",
      projectDesc: "This project uses collaborative filtering techniques to build a movie recommendation system. It suggests movies to users based on their preferences and ratings using algorithms like KNN and matrix factorization.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/sherajsharif/Movie_Recommendation_sys/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/sales-logo.png.png"),
      projectName: "Reliance SMART Sales Dashboard",
      projectDesc: "A comprehensive Power BI dashboard for analyzing sales data, revenue trends, and business performance metrics. Features interactive visualizations, geographic mapping, and KPI tracking.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/sherajsharif/RelianceSales_Dashboard"
        }
      ]
    },
    {
      image: require("./assets/images/web-logo.png.png"),
      projectName: "Portfolio Website",
      projectDesc: "A responsive and modern portfolio website built with HTML5, CSS3, and JavaScript. Features dynamic content, smooth animations, and is hosted on GitHub Pages for optimal performance.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://sherajsharif.github.io/"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/sherajsharif/sherajsharif.github.io"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ISRO Certificate",
      subtitle: "Successfully completed training and certification from Indian Space Research Organisation.",
      image: require("./assets/images/isro-certificate.png"),
      imageAlt: "ISRO Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1smP0RZg_XD3BReZHE1pEribJyxWOAx4u/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Deloitte Certificate",
      subtitle: "Completed professional certification program from Deloitte.",
      image: require("./assets/images/deloitte-certificate.png"),
      imageAlt: "Deloitte Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1U0JHL23PbEGTWa616ZQWQ0eT03HOAd0n/view?usp=drive_link"
        }
      ]
    },
    {
      title: "LinkedIn Certificate",
      subtitle: "Achieved professional certification from LinkedIn Learning.",
      image: require("./assets/images/linkedin-certificate.png"),
      imageAlt: "LinkedIn Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1t4VNLRbfj0Ww7CiWnhHqpX7L9qgkVWbG/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set false to hide this section, defaults to true
  blogs: [
    {
      url: "https://blog.webdevsimplified.com/2020-07/relative-css-units/",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a939f63a446",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false, // Set false to hide this section, defaults to true
  podcast: [
    {
      title: "The Developer Tea",
      // image: require("./assets/images/developerTea.png"),
      subtitle: "A podcast for developers designed to help them find clarity",
      link: "https://spec.fm/podcasts/developer-tea"
    },
    {
      title: "The Podkast",
      // image: require("./assets/images/thepodkast.png"),
      subtitle: "A podcast about programming, workflow, and interesting things.",
      link: "https://thepodkast.com/"
    }
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://drive.google.com/file/d/1V5vKCJMsa7XbXnJ2a8rIx8OQ5U3LBwD1/view?usp=drive_link",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or for internship or just want to say hi? My Inbox is open for all.",
  number: "+91-6260132440",
  email_address: "sherajsharif786@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
