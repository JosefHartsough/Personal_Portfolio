import React from "react";
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";

const ProjectTemplate = ({ pageContext }) => {
  const { id, title, description, images, techStack, details } = pageContext;

  return (
    <>
      <NavigationBar />
      <Carousel
        projectId={id}
        projectTitle={title}
        projectDescription={description}
        techStack={techStack}
        images={images}
        details={details}
      />
    </>
  );
};

export default ProjectTemplate;
