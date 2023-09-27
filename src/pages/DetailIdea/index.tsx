import React from "react";

const DetailIdeaPage = () => {
  return (
    <div className="container mx-auto px-4 pb-8 pt-24 ">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Article Title</h1>
        <p className="text-gray-600 mb-8">Published on August 22, 2023</p>
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGlkZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="Article"
          className="mb-6 rounded-lg"
        />
        
      </div>
    </div>
  );
};

export default DetailIdeaPage;
