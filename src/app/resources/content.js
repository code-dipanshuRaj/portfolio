import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Dipanshu",
  lastName: "Raj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, competitive programming, and share thoughts on
      building scalable systems.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/code-dipanshuRaj",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dipanshu-raj-a7478b281/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:official.dipanshu.raj@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full stack developer and builder</>,
  subline: (
    <>
      I'm Dipanshu, a CSE undergrad at <InlineCode>IIIT Guwahati</InlineCode>, where I build
      <br /> full-stack apps, systems-level software, and compete in competitive programming.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dipanshu is a Computer Science undergraduate at IIIT Guwahati with a passion for building
        full-stack applications and systems-level software. His work spans agentic AI chatbots,
        event-driven servers in C, and production-grade web platforms using Next.js and cloud
        services. With 800+ problems solved across competitive programming platforms, he brings
        strong algorithmic thinking to every project.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Information Technology Guwahati",
        description: <>B.Tech Computer Science Engineering — 2027</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>C/C++, Java, Python, JavaScript, TypeScript, SQL</>,
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: <>Next.js, React.js, Node.js, Express.js, Mongoose, MUI</>,
        images: [],
      },
      {
        title: "Cloud & Databases",
        description: <>AWS (EC2, S3, RDS, IAM, CloudWatch, Boto3), Google Cloud (OAuth 2.0, Workspace APIs), Appwrite, MongoDB, MySQL, Vercel</>,
        images: [],
      },
      {
        title: "Tools & Architecture",
        description: <>Git/GitHub, Linux, Postman, VS Code</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "CP Profiles",
  title: "Competitive Programming",
  description: `Competitive programming profiles and ratings of ${person.name}`,
  // CP profiles data used by the custom blog page
  profiles: [
    {
      platform: "CodeChef",
      handle: "dipanshu_rajj",
      maxRating: 1694,
      rank: "3 Star",
      color: "#D29E78",
      highlight: "Global Rank 104 in Starters 206",
      link: "https://www.codechef.com/users/dipanshu_rajj",
      symbol: "🍳",
    },
    {
      platform: "CodeForces",
      handle: "me.dipanshu",
      maxRating: 1404,
      rank: "Specialist",
      color: "#03A89E",
      highlight: "Global Rank 3033 in Round 1060 (Div. 2)",
      link: "https://codeforces.com/profile/me.dipanshu",
      symbol: "⚡",
    },
    {
      platform: "LeetCode",
      handle: "user1947NS",
      maxRating: 1640,
      rank: "800+ Problems",
      color: "#FFA116",
      highlight: "Solved 800+ problems across platforms",
      link: "https://leetcode.com/u/user1947NS/",
      symbol: "💻",
    },
  ],
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Engineering and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
