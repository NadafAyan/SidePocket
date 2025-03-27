import React from 'react'

const Footer = () => {
    const styles = {
        fontFamily: "Montserrat, sans-serif", // Capital "F" in "fontFamily"
        fontWeight: "520", // Capital "W" in "fontWeight",
        position: "relative",
        
      };
  return (
    <footer className="bg-gray-200 text-amber-800 text-center p-4" style={styles}>
      <p>&copy; {new Date().getFullYear()} Side Pocket. All rights reserved.</p>
    </footer>
  )
}

export default Footer