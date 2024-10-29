// pages/resume.tsx

import React from 'react';

const Resume: React.FC = () => {
  return (
    <div id='resume' className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="text-gray-700 mb-6">
        Here you can view and download the full resume.
      </p>
      <a
        href="/path/to/your-resume.pdf"
        download
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
