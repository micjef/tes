/* eslint-disable @typescript-eslint/no-unused-vars */
import { CloseSquare } from "iconsax-react";
import { useState } from "react";

const CreateIdeaPage = () => {
  const [logoIdea, setLogoIdea] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ideaRepository, setIdeaRepository] = useState<string>("");
  const [targetFinishIdea, setTargetFinishIdea] = useState<string>("");
  const [detailIdea, setDetailIdea] = useState<string[]>([]);
  const [countDetailIdea, setCountDetailIdea] = useState<number>(1);

  return (
    <div className="createIdeaPage pt-24 px-5 ">
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Logo Idea
          </label>
          <input
            type="file"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Create Super App Like Gojek"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) {
                setLogoIdea(selectedFile);
              }
            }}
            accept="image/*"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Idea
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Create Super App Like Gojek"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Idea Description
          </label>
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Create Super App Like Gojek"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Idea Repository
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="github.com/my-idea"
            value={ideaRepository}
            onChange={(e) => setIdeaRepository(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Target Finish Idea
          </label>
          <input
            type="date"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={targetFinishIdea}
            onChange={(e) => setTargetFinishIdea(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Detail Idea
          </label>
          {[...Array(countDetailIdea)].map((_, i) => (
            <div
              key={i}
              className="input-group flex items-center justify-between gap-2 mb-3 "
            >
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Create Super App Like Gojek"
                value={detailIdea[i] || ""}
                onChange={(e) => {
                  const updatedDetailIdeas = [...detailIdea]; // Create a copy of the array
                  updatedDetailIdeas[i] = e.target.value; // Update the specific index
                  setDetailIdea(updatedDetailIdeas); // Set the updated array
                }}
                required
              />
              <CloseSquare 
                size="32" 
                color="#fc0324" 
                onClick={() => {
                  const updatedDetailIdeas = [...detailIdea]; // Create a copy of the array
                  updatedDetailIdeas.splice(i, 1); // Remove the specific index
                  setDetailIdea(updatedDetailIdeas); // Set the updated array
                  setCountDetailIdea(countDetailIdea - 1);
                }}
              />
            </div>
          ))}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 "
            onClick={() => setCountDetailIdea(countDetailIdea + 1)}
          >
            Add More Detail
          </button>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Share My Idea
        </button>
      </form>
    </div>
  );
};

export default CreateIdeaPage;
