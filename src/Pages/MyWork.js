
import MyProjects from "../Components/MyProjects";
const data = [
    {
        gitRepo: 'https://github.com/khushbuchauhan98/Add_Meetings_React',
        liveServer: 'https://add-meetings-react.vercel.app/',
        title: 'Meeting Manager Application',
        description: 'Developed a Meeting Manager application using React.js to manage and organize meetings. The application allows users to add new meetings, and view both past and upcoming meetings, enhancing productivity and time management.',
        // imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        gitRepo: 'https://github.com/khushbuchauhan98/movie-details-app',
        liveServer: 'https://movie-details-app-phi.vercel.app/',
        title: 'Movie Search Application',
        description: 'Developed a movie search application utilizing JavaScript, HTML, and CSS, integrated with a RESTful web service API to fetch and display movie information. The application provides a user-friendly interface for searching and viewing detailed movie data.',
        // imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        gitRepo: 'https://github.com/khushbuchauhan98/student-registration-with-detail',
        liveServer: 'https://student-registration-with-detail.vercel.app/',
        title: 'Exam Center Web',
        description: "I have created a simple exam center website that checks for valid email addresses and ensures input fields are correctly filled. If the email address is already in use, the website won't accept it. Upon submitting the data, the website also provides a random exam center.",
        // imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        gitRepo: 'https://github.com/khushbuchauhan98/todo-list',
        liveServer: 'https://todo-list-rho-silk.vercel.app/',
        title: 'To-Do List App',
        description: "Developed a static to-do list application using HTML. This project involved creating a structured and user-friendly interface for managing daily tasks.",
        // imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        gitRepo: 'https://github.com/khushbuchauhan98/Barcode-scanner',
        liveServer: 'https://barcode-scanner-iota.vercel.app/',
        title: 'Barcode-Sacnner App',
        description: "Developed a robust and efficient barcode scanner application utilizing QuaggaJS, an open-source, barcode-scanning library. The project involved integrating the QuaggaJS library with a web application to provide real-time barcode scanning capabilities through the device's camera.",
        // imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
  ];

function MyWork(){
    return(
        <div className="page">
            <h1 className="name">My Work</h1>
            <div className="mywork-container">
            {data.map((value)=>{
            return <MyProjects linkedin={value.linkedin} gitrepo={value.gitRepo} liveServer={value.liveServer} description={value.description} img={value.imgSrc} title={value.title}/>
            })}
            </div>
        </div>
    )
}
export default MyWork;