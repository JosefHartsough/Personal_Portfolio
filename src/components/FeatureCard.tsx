import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import * as cardStyles from "../styles/FeatureCard/FeatureCard.module.css";

interface FeatureCardProps {
  projectTitle: string;
  stack: Array<string>;
  details?: string;
  source?: string;
  demo?: string;
  thumbnail?: string;
  inverted?: boolean;
  isReversed: boolean;
  id: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  projectTitle,
  details,
  stack,
  isReversed,
  source,
}) => {
  const Image = require(`../images/${source}`).default;
  const [onHoverLink, setOnHoverLink] = useState<boolean>(false);

  const Card = () => {
    return (
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.card}>
          <Link to={`/projects/${projectTitle.toLowerCase()}`}>
            <img className={cardStyles.cardProjectImage} src={Image} />
          </Link>
          <div className={cardStyles.cardInfo}>
            <h2 className={cardStyles.cardFeaturedProjectHeader}>
              Featured Project
            </h2>
            <h2 className={cardStyles.cardInfoProjectTitle}>{projectTitle}</h2>
            <div className={cardStyles.cardDetailsBar}>
              <p style={{ textAlign: "right" }}>{details}</p>
            </div>
            <div className={cardStyles.cardInfoTechStack}>
              {stack.map((item) => (
                <h5 key={item} className={cardStyles.cardInfoTechStackText}>
                  {item}
                </h5>
              ))}
            </div>
            <div className={cardStyles.cardInfoLinks}>
              <a
                onMouseEnter={() => setOnHoverLink(true)}
                onMouseLeave={() => setOnHoverLink(false)}
                style={{ color: onHoverLink ? "steelblue" : "black" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={30} style={{ marginRight: "20px" }} />
              </a>
              <a target="_blank" rel="noreferrer">
                <BsBoxArrowUpRight size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReversedCard = () => {
    return (
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.card}>
          <div>
            <div className={cardStyles.cardInfoReversed}>
              <h2 className={cardStyles.cardFeaturedProjectHeader}>
                Featured Project
              </h2>
              <h2 className={cardStyles.cardInfoProjectTitle}>
                {projectTitle}
              </h2>
              <div className={cardStyles.cardDetailsBar}>
                <p style={{ textAlign: "right" }}>{details}</p>
              </div>
              <div className={cardStyles.cardInfoTechStack}>
                {stack.map((item) => (
                  <h5 key={item} className={cardStyles.cardInfoTechStackText}>
                    {item}
                  </h5>
                ))}
              </div>
              <div className={cardStyles.cardInfoLinks}>
                <a
                  onMouseEnter={() => setOnHoverLink(true)}
                  onMouseLeave={() => setOnHoverLink(false)}
                  style={{ color: onHoverLink ? "steelblue" : "black" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={30} style={{ marginRight: "20px" }} />
                </a>
                <a target="_blank" rel="noreferrer">
                  <BsBoxArrowUpRight size={30} />
                </a>
              </div>
            </div>
          </div>
          <img className={cardStyles.cardProjectImage} src={Image} />
        </div>
      </div>
    );
  };

  if (isReversed === true) {
    return <ReversedCard />;
  } else {
    return <Card />;
  }
};

export default FeatureCard;
