import React from "react";

import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      posted: "5 days ago",
      position: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      posted: "2 weeks ago",
      position: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      posted: "3 days ago",
      position: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      posted: "1 week ago",
      position: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      posted: "4 days ago",
      position: "Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      posted: "10 days ago",
      position: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$100/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      company: "Adobe",
      posted: "6 days ago",
      position: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      company: "Uber",
      posted: "2 days ago",
      position: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$80/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      company: "Airbnb",
      posted: "3 weeks ago",
      position: "Full Stack Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      posted: "1 week ago",
      position: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Bangalore, India",
    },
  ];

  console.log(jobs);

  return (
    <div className="parent">
      {" "}
      {jobs.map(function (elem, idx) {
        return  <div key={idx}>
           (
          <Card
            company={elem.company}
            posted={elem.posted}
            position={elem.position}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            brandLogo={elem.brandLogo}
          />
        );
        </div>
      })}
    </div>
  );
};

export default App;
