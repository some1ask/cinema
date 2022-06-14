import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <div className="movie">
  <ContentLoader 
    speed={2}
    width={500}
    height={400}
    viewBox="0 0 500 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="350" height="260" />
  </ContentLoader>
  </div>
)

export default Skeleton

