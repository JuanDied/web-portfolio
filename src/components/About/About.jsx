import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am 24 years old and currently in my final year of studies. I am interested in software development that provides solutions in the financial, industrial, or agricultural fields, and I aim to be part of a team from which I can acquire and contribute knowledge in areas such as backend development, software architecture, and data engineering. I am also open to working with professionals from different countries and cultures.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I have knowledge in Python programming language and its main libraries (flask, pandas, tensorflow, etc), which have been useful for creating REST APIs, audio processing systems, and neural networks for speech recognition. I am also proficient in SQL databases (MySQL) and NoSQL databases (MongoDB). Additionally, I have experience with common web development tools such as HTML, CSS, JS, React, Node.js and tools like GIT, Webpack, sass; enabling me to build responsive applications using RESTful architectures and MVC patterns. I have also utilized SCRUM methodologies for  university  projects. My English level is C1 according to the latest EF SET test.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Review my projects, check my github and LinkedIn .'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
