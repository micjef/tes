import CardIdea from "components/CardIdea";

const dummyIdeas = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    creator: "Creator 1",
  },
  {
    id: "2",
    title: "Title 2",
    description: "Description 2",
    creator: "Creator 2",
  },
  {
    id: "3",
    title: "Title 3",
    description: "Description 3",
    creator: "Creator 3",
  }
]

const HomePage = () => {
  const date = new Date().toISOString()
  return (
    <div className="homePage pt-24 px-5 ">
      {dummyIdeas.map((idea) => (
        <CardIdea key={idea.id} createdAt={date} creator={idea.creator} description={idea.description} id={idea.id} title={idea.title}  />
      ))}
    </div>
  )
}

export default HomePage