import classes from "./portfolio.module.css";

function Portfolio() {
  return (
    <>
      <section id="home" className={classes.heroSection}>
        <div className={classes.container}>
          <div className={classes.leftSideHero}>
            <div>
              <p className={classes.heroHeader}>
                Building <br /> Digital <br /> Experiences That <br />
                Actually Work
              </p>
              <p className={classes.heroSubHeader}>
                Full-Stack Developer specializing in creating seamless,
                user-centric applications. 6 years turning complex problems into
                elegant solutions.
              </p>
              <div className={classes.buttonContainer}>
                <a className={classes.heroPrimaryButton} href="#work">
                  View My Work
                </a>
                <a className={classes.heroSecondaryButton}>Download Resume</a>
              </div>
            </div>
            <div className={classes.hero_visual}>
              <div className={classes.hero_circle}>
                <div className={`${classes.tech} ${classes.badge_1}`}>
                  React
                </div>
                <div className={`${classes.tech} ${classes.badge_2}`}>
                  Javascript
                </div>
                <div className={`${classes.tech} ${classes.badge_3}`}>
                  Python
                </div>
                <div className={`${classes.tech} ${classes.badge_4}`}>
                  FastAPI
                </div>
              </div>
            </div>
          </div>
          <div className={classes.scroll}>Scroll to explore</div>
        </div>
      </section>
      <section className={classes.journey} id="about">
        <div className={classes.container}>
          <div className={classes.sectionHeader}>
            <div className={classes.myJourney}>My Journey</div>
            <div className={classes.journeyHeader}>
              6 Years of Building & Learning
            </div>
          </div>
          <div className={classes.journeyContainer}>
            <div className={classes.journeyCard}>
              <span className={classes.year}>2020-2022</span>
              <h3 className={classes.journeyTitle}>Automation Engineer</h3>
              <p className={classes.journeyDesc}>
                Started my journey automating testing retail project and
                building robust CI/CD pipelines. Developed expertise in quality
                assurance and process optimization. Learned the importance of
                reliability at scale.
              </p>
              <div className={classes.journeyTech}>
                <span className={classes.journeyTechTag}>Selenium</span>
                <span className={classes.journeyTechTag}>Python</span>
                <span className={classes.journeyTechTag}>Test Automation</span>
              </div>
            </div>
            <div className={classes.journeyCard}>
              <span className={classes.year}>2022-2025</span>
              <h3 className={classes.journeyTitle}>Frontend Developer</h3>
              <p className={classes.journeyDesc}>
                Transitioned into frontend development, mastering React and
                modern JavaScript frameworks. Created responsive, user-centric
                interfaces for web applications. Focused on performance
                optimization, accessibility, and delivering exceptional user
                experiences across diverse projects and industries.
              </p>
              <div className={classes.journeyTech}>
                <span className={classes.journeyTechTag}>React</span>
                <span className={classes.journeyTechTag}>Javascript</span>
                <span className={classes.journeyTechTag}>redux</span>
                <span className={classes.journeyTechTag}>HTML</span>
                <span className={classes.journeyTechTag}>CSS</span>
                <span className={classes.journeyTechTag}>
                  State Management (Redux, Context API)
                </span>
                <span className={classes.journeyTechTag}>
                  Component Libraries & UI Frameworks
                </span>
              </div>
            </div>
            <div className={classes.journeyCard}>
              <span className={classes.year}>2025-Present</span>
              <h3 className={classes.journeyTitle}>Full-Stack Developer</h3>
              <p className={classes.journeyDesc}>
                Evolved into full-stack development by adding Python and FastAPI
                to the toolkit. Now building end-to-end solutions that combine
                elegant frontends with robust backend systems. Created WorkFlow,
                a hybrid workspace management platform that reimagines how
                modern teams collaborate between remote and office environments.
              </p>
              <div className={classes.journeyTech}>
                <span className={classes.journeyTechTag}>PostgreSQL</span>
                <span className={classes.journeyTechTag}>FastAPI</span>
                <span className={classes.journeyTechTag}>REST</span>
                <span className={classes.journeyTechTag}>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.project} id="work">
        <div className={classes.container}>
          <div className={classes.projectHeader}>
            <div className={classes.myJourney}>
              FEATURED PROJECT · PERSONAL SHOWCASE
            </div>
            <h2 className={classes.projectTitle}>WorkFlow</h2>
            <div className={classes.projectTagLine}>
              "The Future of Hybrid Workspace"
            </div>
          </div>
          <p className={classes.projectDesc}>
            "I built WorkFlow to showcase my full-stack capabilities while
            solving a real problem. It demonstrates how modern teams can
            collaborate seamlessly in the hybrid era—combining intelligent desk
            booking with meaningful team connections."
          </p>
          <div className={classes.peojectVision}>
            <h3 className={classes.projectVisionTitle}>The Vision</h3>
            <p className={classes.projectVisionDes}>
              WorkFlow is a personal project I created to demonstrate full-stack
              development capabilities. This intelligent workspace management
              platform combines desk booking, team coordination, and workplace
              analytics into one seamless experience. Built from scratch to
              showcase modern development practices and solve real hybrid
              workplace challenges.
            </p>
          </div>
          <div className={classes.feature_grid}>
            <div className={classes.feature_card}>
              <h3 className={classes.featureTitle}>Smart Desk Booking</h3>
              <p className={classes.featureDesc}>
                Intelligent desk reservation system with team proximity
                algorithms. Book seats near your teammates automatically.
              </p>
            </div>
            <div className={classes.feature_card}>
              <h3 className={classes.featureTitle}>Team Coordination</h3>
              <p className={classes.featureDesc}>
                Intelligent desk reservation system with team proximity
                algorithms. Book seats near your teammates automatically.
              </p>
            </div>
          </div>
          <div className={classes.techStack}>
            <div className={classes.tech_Title}>
              Built With Modern Technology
            </div>
            <div className={classes.tech_gird}>
              <div className={classes.tech_item}>
                <div className={classes.tech_name}>React</div>
                <div className={classes.techPurpose}>Frontend Interface</div>
              </div>
              <div className={classes.tech_item}>
                <div className={classes.tech_name}>FastAPI</div>
                <div className={classes.techPurpose}>Backend API</div>
              </div>
              <div className={classes.tech_item}>
                <div className={classes.tech_name}>PostgreSQL</div>
                <div className={classes.techPurpose}>Database</div>
              </div>
            </div>
          </div>
          <div className={classes.contactButton}>
            <a
              href="https://workflow-ui-rust.vercel.app/"
              className={`${classes.btn} ${classes.btn_primary}`}
            >
              Demo Link
            </a>
          </div>
        </div>
      </section>
      <section id="skills" className={classes.skills}>
        <div className={classes.container}>
          <div className={classes.skillHeader}>
            <div className={classes.myJourney}>WHAT I BRING TO THE TABLE</div>
            <h2 className={classes.skillTitle}>
              Technical Expertise Across the Stack
            </h2>
          </div>
          <div className={classes.skillGrid}>
            <div>
              <div className={classes.skillCategory}>
                <h3 className={classes.categoryTitle}>Frontend Development</h3>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>React</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>Javascript</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>UI/UX Implementation</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>
                    State Management (Redux)
                  </div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>
                    Responsive Design & CSS
                  </div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.skillCategory}>
                <h3 className={classes.categoryTitle}>
                  Backend & Infrastructure
                </h3>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>Python</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>FastAPI</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>
                    RESTful APIs & GraphQL
                  </div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className={classes.skillItem}>
                  <div className={classes.skillName}>Database (PostgreSQL)</div>
                  <div className={classes.bar}>
                    <div
                      className={classes.barFill}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.contact} id="contact">
        <div className={classes.container}>
          <h2 className={classes.contactHeader}>
            Let's Build Something <br />
            Amazing Together
          </h2>
          <p className={classes.contactSubHeader}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className={classes.contactButton}>
            <a
              href="mailto:aravind99suresh@gmail.com"
              className={`${classes.btn} ${classes.btn_primary}`}
            >
              ✉️ Email Me
            </a>
            <a
              href="www.linkedin.com/in/udhaya-aravindan-095187143"
              className={`${classes.btn} ${classes.btn_secondary}`}
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.footer_content}>
            <div>© 2026 Udhaya Aravindan S. Designed & Built by me.</div>
            <div className={classes.footer_links}>
              <a href="#home" className={classes.footer_link}>
                Home
              </a>
              <a href="#about" className={classes.footer_link}>
                About
              </a>
              <a href="#work" className={classes.footer_link}>
                Work
              </a>
              <a href="#contact" className={classes.footer_link}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Portfolio;
