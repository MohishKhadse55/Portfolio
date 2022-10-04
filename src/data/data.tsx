import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "My personal Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohish Khadse.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">Full Stack Web Developer(mostly backend)</strong>, currently studying
        at <strong className="text-stone-100">VIT,Pune</strong> helping people  building  a modern web applications
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me  <strong className="text-stone-100">at VIT,Pune Campus</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Pune</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1-3GmOocx42uysVIetqFXEAqg4d9-W-AX/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi ! I am a web-technology obsessed E&TC student who is constantly working to use electronics and the web to tackle challenging industrial problems. I use the MERN stack for development, and I have a strong grasp of web programming and circuit design. And I am quite addicted to coffee☕ `,
  aboutItems: [
    {label: 'Location', text: 'Bibwewadi.Pune ', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles,Books,Marathi Sahitya', Icon: SparklesIcon},
    {label: 'Study', text: 'VIT,Pune', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Marathi',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'HTML CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C',
        level: 9,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'WorkOut Monitor',
    description: 'developed in pure js using openStreetMap API ',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage1,
  },
  {
    title: 'Banking App Promotion Website',
    description: 'JS project which implement custom animations, Slider, Tabbed Component',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage2,
  },
  {
    title: 'Banking application',
    description: 'Banking application which contains different accounts developed in js, code shows the effecient use of array methods ',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage3,
  },
  {
    title: 'Natours Application',
    description: 'Full fledged tours web application with tech stack as Node.Js,Express.Js,MongoDB, Mongoose,pug-tempalate engine,Sendgridmail services- implement for both dev and prod environment ',
    url: 'https://serene-journey-63666.herokuapp.com/',
    image: porfolioImage4,
  },
  {
    title: 'Payroll Management System',
    description: 'Crud operation in Java using mysql database',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage5,
  },
  {
    title: 'Inventory Management System',
    description: 'Crud operation in Java using mysql database',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage6,
  },
  {
    title: 'Geo Fencing ',
    description: 'Geofencing implemented using gsp module and nodemcu and web-server for monitoring the target ',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Comming Soon',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage8,
  },
  {
    title: 'Blog on Need of IP V6',
    description: '   An IPv6 address is 128 bits long. Like IPv4, IPv6 is a connectionless, unreliable datagram protocol that is primarily responsible for addressing and routing packets between hosts. IPv6 is an Internet Layer protocol for packet-switched internetworking and provides end-to end datagram transmission across multiple IP networks, closely adhering to the design principles developed in the previous version of the protocol, Internet Protocol version 4 (IPv4).',
    url: 'https://needforipv6.blogspot.com/2022/02/ha-dc.html',
    image: porfolioImage9,
  },
  {
    title: 'Car Price Prediction system for used cars ',
    description: 'Machine learning solution using Random Forest alogo.. to predict the car price',
    url: 'https://github.com/MohishKhadse55',
    image: porfolioImage10,
  },
  {
    title: 'BLog On Intel Journey',
    description: 'Intel, based in Santa Clara, California, is a semiconductor computer circuit' +
        'manufacturer. "Integrated electronics" was the inspiration for the companys name. Intel' +
        'develops microprocessors for computer system manufacturers such as Lenovo, HP, and' +
        'Dell. In addition to motherboard chipsets, integrated circuits, and network interface' +
        'controllers, Intel also manufactures flash memory, photo chips, embedded CPUs, and',
    url: 'https://inteljourney122.blogspot.com/2022/06/blog-post.html',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2024',
    location: 'Vishwakarma Institute of Technology, Pune',
    title: 'B.Tech in Electronics and Telecommunication',
    content: <p>Junior with 8.52 current CGPA.</p>,
  },
  {
    date: 'March 2021',
    location: 'Government Polytechnic Jalgaon',
    title: 'Diploma in Electronic & Telecommunication',
    content: <p>Completed Diploma with 95% aggregate. Explored technology like IoT, Embedded System, VLSI </p>,
  },{
    date: 'March 2018',
    location: 'Orino English Medium School',
    title: 'SSC',
    content: <p>Complited my SSC securing 92.41% </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'Maxthon.ml',
    title: 'Back-end Engineer',
    content: (
      <p>
       Build the node js server for both Prod and Dev Environment and database Schema designing

      </p>
    ),
  },
  {
    date: 'December 2020 - August 2021',
    location: 'Spectrum Electroplaters, Jalgaon',
    title: 'Industry Sponsored Project Head',
    content: (
      <p>
        The sector cites the need for a system in electroplating plants that mandates monitoring of variables such
        liquid PH value, methane and carbon monoxide concentration of electroplating bath containers as the problem.
        Technology used were Embedded C, RF Transmisson, AVR Microcontroller Interfacing

      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Suraj Chaudhari',
      text: '',
      image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHn1OtyliiO0A/profile-displayphoto-shrink_800_800/0/1659708454030?e=1670457600&v=beta&t=m4iMDTAaoiyYLyc7u0NdfBlA-qauh6q8tGJBbD6QSvI',
    },
    {
      name: 'Mandar Patil',
      text: 'A very hard working colleague I have seen in my life.And my best friend ',
      image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFn2oUMeGZ6NQ/profile-displayphoto-shrink_800_800/0/1622838586973?e=1670457600&v=beta&t=6vq0k2_mOolO395oWWC1UH0COiI4NGVW8cfDW24HLnw',
    },
    {
      name: 'Prathamesh Saraf',
      text: '',
      image: 'https://prathameshsaraf.in/static/img/saraf1.jpg',
    },
    {
      name: 'Ajinkya Mahajan',
      text: 'I have been working with mohish since 4 years and i endorse him for Javascript and its frameworks, I would really opt him for any implementation of JS. He is really good at databases, NodeJS.Hope I more opportunities to work with him ',
      image: 'https://media-exp1.licdn.com/dms/image/D4D35AQG4ZWPnkiEPBw/profile-framedphoto-shrink_400_400/0/1652467351651?e=1665514800&v=beta&t=B7pFWQyVyqWK-IPFUbLqkWHNJgm8sGnEOjEea5ctqrg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'May be we can have Coffee some time',
  items: [
    {
      type: ContactType.Email,
      text: 'mohishkhadse3222@gmail.com',
      href: 'mailto:mohishkhadse3222@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bibwewadi, Pune',
      href: 'https://www.google.com/maps/place/Shaniwar+Wada/@18.5222344,73.8485601,14.95z/data=!4m5!3m4!1s0x3bc2c065144d8edf:0x3703b8095866c54b!8m2!3d18.5194647!4d73.8553175',
    },
    {
      type: ContactType.Instagram,
      text: '@royal_mohish',
      href: 'https://instagram.com/royal_mohish?igshid=YmMyMTA2M2Y=',
    },
    {
      type: ContactType.Github,
      text: 'MohishKhadse55',
      href: 'https://github.com/MohishKhadse55',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MohishKhadse55'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/17937636/mohishkhadse55'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mohish-khadse-a94412198/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/royal_mohish?igshid=YmMyMTA2M2Y='},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];
