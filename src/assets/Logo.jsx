import React from 'react'

function Logo() {
  return (
<>
<div className="flex space-x-6">
    {/* Google */}
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google text-red-500 text-2xl hover:text-red-700 transition duration-300"></i>
    </a>

    {/* Facebook */}
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook text-blue-600 text-2xl hover:text-blue-800 transition duration-300"></i>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-blue-700 text-2xl hover:text-blue-900 transition duration-300"></i>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-pink-500 text-2xl hover:text-pink-700 transition duration-300"></i>
    </a>
</div>


</>

)
}

export default Logo