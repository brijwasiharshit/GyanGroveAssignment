import React from 'react';

//Image loader shows spinner until the component is being loaded.

const ImageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen my-auto">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default ImageLoader
