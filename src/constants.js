// Background Grid Size
export const GRID_SIZE = 1560;

//Queries
export const QUERIES = {
    mobileAndSmaller: "max-width(var(--mobile))",
    tabletAndSmaller: "max-width(var(--tablet))",
    laptopAndSmaller: "max-width(var(--laptop))",
};

//Social Links
export const LINKS = {
    github: "https://github.com/venkatk-git",
    linkedIn: "#",
    instagram: "#",
    x: "#",
    gmail: "#",
    leetcode: "#",
};

//Projects
import { Icon } from "@iconify/react";
export const PROJECTS = [
    {
        title: "Stream",
        description:
            "Stream is a platfrom to watch youtube videos together with friends. It is a full-stack application developed using MERN stack. It uses socket.io for real-time communication between users.",
        link: "https://github.com/venkatk-git/stream.git",
        img: "https://github.com/venkatk-git/portfolio/blob/main/public/assests/stream_pic.png?raw=true",
        stack: (
            <>
                <Icon icon="skill-icons:mongodb" />
                <Icon icon="skill-icons:reactjs-dark" />
                <Icon icon="skill-icons:nodejs-dark" />
            </>
        ),
    },
    {
        title: "Campus Management System",
        description:
            "This Campus Management System is a full-stack application developed to address various challenges faced by the college's Campus Management Team. The team needed an efficient solution for maintaining logs, assigning tasks, tracking work status, and managing the workforce, including workers and supervisors.",
        link: "https://github.com/venkatk-git/Campus-Management-Portal.git",
        img: "https://github.com/venkatk-git/portfolio/blob/dev/src/docs/campus_management_system.png?raw=true",
        stack: (
            <>
                <Icon icon="skill-icons:mongodb" />
                <Icon icon="skill-icons:vuejs-dark" />
                <Icon icon="skill-icons:nodejs-dark" />
            </>
        ),
    },
    {
        title: "Classnotes",
        description:
            "Classnotes is a blog website where I post my notes on various topics, including web development, operating systems, and computer networks. It is a full-stack application developed using MERN stack.",
        link: "https://github.com/venkatk-git/classnotes.git",
        img: "https://github.com/venkatk-git/portfolio/blob/main/public/assests/classnotes.png?raw=true",
        stack: (
            <>
                <Icon icon="skill-icons:mongodb" />
                <Icon icon="skill-icons:vuejs-dark" />
                <Icon icon="skill-icons:nodejs-dark" />
            </>
        ),
    },
];
