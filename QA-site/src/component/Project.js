import React from "react";
import styled from "styled-components";
const Project = ({ name, image, url, description }) => {
  return (
    <Wrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project"
    >
      <article className="project-item">
        <img src={image} alt={name} className="img" />
        <div className="info">
          <h5>{description}</h5>
        </div>
      </article>
      <footer>
        <h5>{name}</h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  border-radius: var(--borderRadius);
  background: var(--white);
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-2);
  }
  .project-item {
    position: relative;
  }
  .project-item:hover .info {
    opacity: 1;
    transform: translateY(0);
  }
  .info {
    position: absolute;
    bottom: 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(34, 34, 34, 0.35);
    padding: 0 0.5rem;
    text-align: center;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    transition: 0.3s;
    opacity: 0;
    transform: translateY(100%);
    white-space: pre-line;
  }

  .img {
    width: 100%;
    display: block;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    height: 15rem;
    object-fit: cover;
  }
  footer {
    text-align: center;
    padding: 1rem 1.25rem;
    background: var(--white);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  footer h5 {
    margin-bottom: 0;
    color: var(--grey-900);
    font-weight: 500;
  }
`;

export default Project;
