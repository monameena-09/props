
import Card from './components/Card'


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$135/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo:"https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$140/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/77/99/e4/7799e4fa43745c7193228791a424d389.jpg",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$138/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$145/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/fa/5e/67/fa5e67376018e06bd8ffb06b3129a717.jpg",
    company: "Apple",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$142/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/f7/95/4a/f7954aecdd40be91bae0ddb650428523.jpg",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$150/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e3/e4/46/e3e44628e031d4b2e239587b6f4fc6cb.jpg",
    company: "IBM",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$132/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/39/2f/06/392f0676c0d092c34c4fafc873421958.jpg",
    company: "Oracle",
    datePosted: "1 week ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$136/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/2f/84/62/2f846269b731a798c6cc3338b04131f2.jpg",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$144/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$141/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/jio",
    company: "Jio",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$178/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://cdn.simpleicons.org/samsung",
    company: "Samsung",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$132/hour",
    location: "Noida, India"
  }
];
  
console.log(jobOpenings);
  return (
    <div className='parent'>
 {jobOpenings.map(function(elem){
 return <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}
  brandLogo={elem.brandLogo} location={elem.location}/>
  })}
    </div>
  )
}

export default App
