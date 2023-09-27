import moment from "moment";

interface CardIdeaProps {
  createdAt: string;
  creator: string;
  description: string;
  id: string;
  title: string;
}

const CardIdea = ({ createdAt, creator, description, id, title }: CardIdeaProps) => {
  return (
    <a
      href={`/idea/${id}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5 "
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGlkZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-small text-gray-700 dark:text-gray-400">
          {creator} - {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    </a>
  );
};

export default CardIdea;
