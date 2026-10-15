import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80",
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    name: "Adobe",
    datePosted: "4 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    name: "Salesforce",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    name: "IBM",
    datePosted: "10 weeks ago",
    post: "Cloud Software Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40",
    location: "Mumbai, India"
  }
];

console.log(jobs);
  return (
    <div className='parent1'>
      {jobs.map(function(ele,idx){
        return <div key={idx}>
          <Card  name={ele.name} brandLogo={ele.brandLogo} datePosted={ele.datePosted}
      post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} loc={ele.location}  />
        </div>
      })}
      
    </div>
  )
}

export default App
