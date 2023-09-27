import CardIdea from "components/CardIdea";
import { Link } from "react-router-dom";

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

const MyIdeaPage = () => {
  const date = new Date().toISOString()
  return (
    <div className="myIdeaPage pt-24 px-5 ">
      <div className="createNewIdea w-full mb-10 h-auto flex justify-center ">
        <Link to="/create-idea" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-screen min-w-full text-center ">
          Create New Idea
        </Link>
      </div>
      {dummyIdeas.map((idea) => (
        <CardIdea key={idea.id} createdAt={date} creator={idea.creator} description={idea.description} id={idea.id} title={idea.title}  />
      ))}
    </div>
  )
}

export default MyIdeaPage