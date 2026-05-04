import Card from "./component/Card"

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App