import { useCallback, useEffect } from "react";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.css";
import { Web3Button } from "@web3modal/react";

const HomePage = () => {
  const onFrameContainer2Click = useCallback(() => {
    window.open("./upload");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrame1Click = useCallback(() => {
    window.location.href = "./upload";
  }, []);

  const onGetStartedClick = useCallback(() => {
    window.location.href = "https://worldvectorlogo.com/downloaded/react-2";
  }, []);

  return (
    <div className={styles.homepage}>
      <img className={styles.logoimageIcon} alt="" src="../logoimage@2x.png" />
      <NavBar />
      <div className={styles.herocard}>
        <div className={styles.rectangle} />
        <div className={styles.rectangle1} />
        <div className={styles.frame}>
          <div className={styles.rectangle2} />
          <div className={styles.frame1} onClick={onFrameContainer2Click}>
            <button
              className={styles.frame2}
              onClick={onFrame1Click}
              data-animate-on-scroll
            >
              <button className={styles.rectangle3} data-animate-on-scroll />
              <button className={styles.getStarted} onClick={onGetStartedClick}>
                Get Started
              </button>
            </button>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle.svg"
            />
            <div className={styles.sellTheThingsContainer}>
              <p className={styles.sellTheThings}>
                <span>{`Sell the `}</span>
                <span className={styles.things}>things</span>
              </p>
              <p className={styles.youMake}>
                <span>you make.</span>
              </p>
            </div>
            <div className={styles.peerToPeerDecentralizedDigContainer}>
              <span>
                <span>
                  <span>
                    Peer-to-Peer Decentralized Digital Marketplace powered by
                  </span>
                  <b className={styles.b}>{` `}</b>
                </span>
                <span className={styles.filecoinBlockchain}>
                  Filecoin blockchain
                </span>
                <span className={styles.and}>{` and `}</span>
                <span className={styles.filecoinBlockchain}>{`FEVM `}</span>
                <span className={styles.smart}>{`smart `}</span>
              </span>
              <span className={styles.smart}>
                <span>contracts.</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.rectangle4} />
          <img
            className={styles.humnadollerRemovebgPreview1Icon}
            alt=""
            src="../humnadollerremovebgpreview-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.selltoanyonecard}>
        <div className={styles.rectangle5} />
        <div className={styles.rectangle6} />
        <div className={styles.frame4}>
          <div className={styles.buildALoyal}>
            Build a loyal following with simple posts, email newsletters, and
            automated workflows. Plus let your customers pay what they want or
            choose between one-time, recurring, or fixed-length payments in your
            currency of choice. (We’ll handle the fine print, like VAT).
          </div>
          <div className={styles.sellToAnyone}>Sell to anyone</div>
        </div>
        <img className={styles.frameIcon} alt="" src="../frame.svg" />
      </div>
      <div className={styles.listingtypes}>
        <div className={styles.rectangle7} />
        <div className={styles.frame5}>
          <div className={styles.listingtypesgrid}>
            <a className={styles.frame6} href="./upload?type=software">
              <div className={styles.rectangle8} />
              <div className={styles.frame7}>
                <div className={styles.frame8}>
                  <div className={styles.frame9}>
                    <div className={styles.rectangle9} />
                    <div className={styles.blender}>blender</div>
                  </div>
                  <div className={styles.frame10}>
                    <div className={styles.rectangle9} />
                    <div className={styles.sparkAr}>spark ar</div>
                  </div>
                  <div className={styles.frame11}>
                    <div className={styles.rectangle9} />
                    <div className={styles.dModel}>3d model</div>
                  </div>
                </div>
                <div className={styles.popularTags}>Popular tags</div>
              </div>
              <a className={styles.frame12}>
                <div className={styles.d}>3D</div>
                <div className={styles.perfectYourCraft}>
                  Perfect your craft with the same tools used at Dreamworks and
                  Pixar.
                </div>
              </a>
            </a>
            <div className={styles.frame13}>
              <div className={styles.rectangle8} />
              <div className={styles.frame14}>
                <div className={styles.frame15}>
                  <div className={styles.frame16}>
                    <div className={styles.rectangle9} />
                    <div className={styles.notionTemplate}>notion template</div>
                  </div>
                  <div className={styles.frame17}>
                    <div className={styles.rectangle9} />
                    <div className={styles.instagram}>instagram</div>
                  </div>
                  <div className={styles.frame18}>
                    <div className={styles.rectangle9} />
                    <div className={styles.investing}>investing</div>
                  </div>
                </div>
                <div className={styles.popularTags1}>Popular tags</div>
              </div>
              <div className={styles.frame19}>
                <div className={styles.businessMoney}>{`Business & Money`}</div>
                <div className={styles.learnToEarn}>
                  Learn to earn in an increasingly unpredictable world.
                </div>
              </div>
            </div>
            <a className={styles.frame20} href="./upload?type=design">
              <div className={styles.rectangle16} />
              <div className={styles.frame21}>
                <div className={styles.frame22}>
                  <div className={styles.frame23}>
                    <div className={styles.rectangle9} />
                    <div className={styles.textures}>textures</div>
                  </div>
                  <div className={styles.frame24}>
                    <div className={styles.rectangle9} />
                    <div className={styles.font}>font</div>
                  </div>
                  <div className={styles.frame25}>
                    <div className={styles.rectangle9} />
                    <div className={styles.mockup}>mockup</div>
                  </div>
                </div>
                <div className={styles.popularTags2}>Popular tags</div>
              </div>
              <a className={styles.frame26}>
                <div className={styles.design}>Design</div>
                <div className={styles.codeDesignAnd}>
                  Code, design, and ship your dream product with these technical
                  resources.
                </div>
              </a>
            </a>
            <a className={styles.frame27} href="./upload?type=education">
              <div className={styles.rectangle8} />
              <div className={styles.frame28}>
                <div className={styles.frame15}>
                  <div className={styles.frame30}>
                    <div className={styles.rectangle9} />
                    <div className={styles.instagram}>education</div>
                  </div>
                  <div className={styles.frame31}>
                    <div className={styles.rectangle9} />
                    <div className={styles.mockup}>learning</div>
                  </div>
                  <div className={styles.frame32}>
                    <div className={styles.rectangle9} />
                    <div className={styles.certificationExams}>
                      certification exams
                    </div>
                  </div>
                </div>
                <div className={styles.popularTags}>Popular tags</div>
              </div>
              <a className={styles.frame12}>
                <div className={styles.education1}>Education</div>
                <div className={styles.pickUpA}>
                  Pick up a new skill with courses and guides from world-class
                  pros.
                </div>
              </a>
            </a>
            <a className={styles.frame34} href="./upload?type=Films">
              <div className={styles.rectangle24} />
              <div className={styles.frame35}>
                <div className={styles.frame36}>
                  <div className={styles.frame37}>
                    <div className={styles.rectangle9} />
                    <div className={styles.afterEffects}>after effects</div>
                  </div>
                  <div className={styles.frame38}>
                    <div className={styles.rectangle9} />
                    <div className={styles.luts}>luts</div>
                  </div>
                  <div className={styles.frame39}>
                    <div className={styles.rectangle9} />
                    <div className={styles.blender}>vj loops</div>
                  </div>
                </div>
                <div className={styles.popularTags1}>Popular tags</div>
              </div>
              <a className={styles.frame40}>
                <div className={styles.films}>Films</div>
                <div className={styles.haveAMovie}>
                  Have a movie night with some of the best stories to hit the
                  small screen.
                </div>
              </a>
            </a>
            <a className={styles.frame41} href="./upload?type=gaming">
              <div className={styles.rectangle28} />
              <div className={styles.frame42}>
                <div className={styles.frame43}>
                  <div className={styles.frame44}>
                    <div className={styles.rectangle9} />
                    <div className={styles.vrchat}>vrchat</div>
                  </div>
                  <div className={styles.frame45}>
                    <div className={styles.rectangle9} />
                    <div className={styles.assets}>assets</div>
                  </div>
                  <div className={styles.frame46}>
                    <div className={styles.rectangle9} />
                    <div className={styles.avatar}>avatar</div>
                  </div>
                </div>
                <div className={styles.popularTags2}>Popular tags</div>
              </div>
              <a className={styles.frame47}>
                <div className={styles.gaming}>Gaming</div>
                <div className={styles.exploreNewWorlds}>
                  Explore new worlds from the world’s most creative indie
                  developers.
                </div>
              </a>
            </a>
            <a className={styles.frame48} href="./upload?type=photography">
              <div className={styles.rectangle8} />
              <div className={styles.frame28}>
                <div className={styles.frame15}>
                  <div className={styles.frame51}>
                    <div className={styles.rectangle9} />
                    <div className={styles.referencePhotos}>
                      reference photos
                    </div>
                  </div>
                  <div className={styles.frame52}>
                    <div className={styles.rectangle9} />
                    <div className={styles.photobash}>photobash</div>
                  </div>
                  <div className={styles.frame53}>
                    <div className={styles.rectangle9} />
                    <div className={styles.stockPhotos}>stock photos</div>
                  </div>
                </div>
                <div className={styles.popularTags}>Popular tags</div>
              </div>
              <a className={styles.frame12}>
                <div className={styles.photography}>Photography</div>
                <div className={styles.pickUpA}>
                  Get snapping with pro presets, stock imagery, and digi
                  darkroom needs.
                </div>
              </a>
            </a>
            <a className={styles.frame55} href="./upload?type=productivity">
              <div className={styles.rectangle24} />
              <div className={styles.frame14}>
                <div className={styles.frame15}>
                  <div className={styles.frame58}>
                    <div className={styles.rectangle9} />
                    <div className={styles.coloringPage}>coloring page</div>
                  </div>
                  <div className={styles.frame59}>
                    <div className={styles.rectangle9} />
                    <div className={styles.afterEffects}>productivity</div>
                  </div>
                  <div className={styles.frame60}>
                    <div className={styles.rectangle9} />
                    <div className={styles.dModel}>printable</div>
                  </div>
                </div>
                <div className={styles.popularTags1}>Popular tags</div>
              </div>
              <a className={styles.frame61}>
                <div className={styles.selfImprovement}>Self Improvement</div>
                <div className={styles.moveYourBody}>
                  Move your body and your audience with guides, videos, and
                  more.
                </div>
              </a>
            </a>
            <a className={styles.frame62} href="./upload?type=ebook">
              <div className={styles.rectangle40} />
              <div className={styles.frame63}>
                <div className={styles.frame15}>
                  <div className={styles.frame65}>
                    <div className={styles.rectangle9} />
                    <div className={styles.kdpInterior}>kdp interior</div>
                  </div>
                  <div className={styles.frame66}>
                    <div className={styles.rectangle9} />
                    <div className={styles.lowContentBooks}>
                      low content books
                    </div>
                  </div>
                  <div className={styles.frame67}>
                    <div className={styles.rectangle9} />
                    <div className={styles.ebook}>ebook</div>
                  </div>
                </div>
                <div className={styles.popularTags2}>Popular tags</div>
              </div>
              <a className={styles.frame68}>
                <div
                  className={styles.writingPublishing}
                >{`Writing & Publishing`}</div>
                <div className={styles.fillYourBrain}>
                  Fill your brain with words and wisdom from creative authors
                  and storytellers.
                </div>
              </a>
            </a>
            <div className={styles.frame69}>
              <div className={styles.rectangle24} />
              <a className={styles.frame70}>
                <div className={styles.audio}>Audio</div>
                <div className={styles.openYourEars}>
                  Open your ears and mind to interviews, meditations, and true
                  crime thrillers.
                </div>
              </a>
              <div className={styles.frame71}>
                <div className={styles.frame15}>
                  <div className={styles.frame73}>
                    <div className={styles.rectangle9} />
                    <div className={styles.dModel}>hypnosis</div>
                  </div>
                  <div className={styles.frame74}>
                    <div className={styles.rectangle9} />
                    <div className={styles.subliminalMessages}>
                      subliminal messages
                    </div>
                  </div>
                  <div className={styles.frame75}>
                    <div className={styles.rectangle9} />
                    <div className={styles.meditation}>meditation</div>
                  </div>
                </div>
                <div className={styles.popularTags2}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame76}>
              <div className={styles.rectangle48} />
              <a className={styles.frame77}>
                <div
                  className={styles.drawingPainting}
                >{`Drawing & Painting`}</div>
                <div className={styles.tutorialsPluginsAnd}>
                  Tutorials, plugins, and brushes from pro concept artists and
                  illustrators.
                </div>
              </a>
              <div className={styles.frame78}>
                <div className={styles.frame79}>
                  <div className={styles.frame80}>
                    <div className={styles.rectangle9} />
                    <div className={styles.sparkAr}>brushes</div>
                  </div>
                  <div className={styles.frame81}>
                    <div className={styles.rectangle9} />
                    <div className={styles.art}>art</div>
                  </div>
                  <div className={styles.frame82}>
                    <div className={styles.rectangle9} />
                    <div className={styles.instagram}>procreate</div>
                  </div>
                </div>
                <div className={styles.popularTags1}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame83}>
              <div className={styles.rectangle52} />
              <a className={styles.frame84}>
                <div className={styles.fitnessHealth}>{`Fitness & Health`}</div>
                <div className={styles.whetherYoureLooking}>
                  Whether you’re looking to shed or shred, here are coaches to
                  pump you up.
                </div>
              </a>
              <div className={styles.frame85}>
                <div className={styles.frame86}>
                  <div className={styles.frame87}>
                    <div className={styles.rectangle9} />
                    <div className={styles.workoutProgram}>workout program</div>
                  </div>
                  <div className={styles.frame88}>
                    <div className={styles.rectangle9} />
                    <div className={styles.yoga}>yoga</div>
                  </div>
                  <div className={styles.frame89}>
                    <div className={styles.rectangle9} />
                    <div className={styles.vrchat}>fitness</div>
                  </div>
                </div>
                <div className={styles.popularTags}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame90}>
              <div className={styles.rectangle56} />
              <a className={styles.frame70}>
                <div className={styles.recordedMusic}>Recorded Music</div>
                <div className={styles.tracksAndAlbums}>
                  Tracks and albums from the best musicians and artists in the
                  biz.
                </div>
              </a>
              <div className={styles.frame92}>
                <div className={styles.frame15}>
                  <div className={styles.frame94}>
                    <div className={styles.rectangle9} />
                    <div className={styles.luts}>jazz</div>
                  </div>
                  <div className={styles.frame95}>
                    <div className={styles.rectangle9} />
                    <div className={styles.instrumentalMusic}>
                      instrumental music
                    </div>
                  </div>
                  <div className={styles.frame96}>
                    <div className={styles.rectangle9} />
                    <div className={styles.singles}>singles</div>
                  </div>
                </div>
                <div className={styles.popularTags12}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame97}>
              <div className={styles.rectangle60} />
              <a className={styles.frame70}>
                <div className={styles.fictionBooks}>Fiction Books</div>
                <div className={styles.shortStoriesNovellas}>
                  Short stories, novellas, and epic tomes full of interesting
                  characters and worlds.
                </div>
              </a>
              <div className={styles.frame99}>
                <div className={styles.frame100}>
                  <div className={styles.frame101}>
                    <div className={styles.rectangle9} />
                    <div className={styles.vrchat}>poetry</div>
                  </div>
                  <div className={styles.frame102}>
                    <div className={styles.rectangle9} />
                    <div className={styles.yoga}>sci-fi</div>
                  </div>
                  <div className={styles.frame103}>
                    <div className={styles.rectangle9} />
                    <div className={styles.avatar}>fiction</div>
                  </div>
                </div>
                <div className={styles.popularTags2}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame104}>
              <div className={styles.rectangle52} />
              <div className={styles.frame105}>
                <img className={styles.imageIcon} alt="" src="../image.svg" />
                <a href="./upload?type=coding">
                <div className={styles.softwareDevelopment} >
                   Software Development
                </div>
                </a>

                <div className={styles.learnToCode}>
                  Learn to code and tools to help you code more productively.
                </div>
              </div>
              <div className={styles.frame106}>
                <div className={styles.frame107}>
                  <div className={styles.frame108}>
                    <div className={styles.rectangle9} />
                    <div className={styles.textures}>windows</div>
                  </div>
                  <div className={styles.frame109}>
                    <div className={styles.rectangle9} />
                    <div className={styles.stockPhotos}>programming</div>
                  </div>
                  <div className={styles.frame110}>
                    <div className={styles.rectangle9} />
                    <div className={styles.theme}>theme</div>
                  </div>
                </div>
                <div className={styles.popularTags14}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame111}>
              <div className={styles.rectangle68} />
              <a className={styles.frame112}>
                <div
                  className={styles.musicSound}
                >{`Music & Sound Design`}</div>
                <div className={styles.tracksBeatsAnd}>
                  Tracks, beats, and loops from the best musicians and engineers
                  in the biz.
                </div>
              </a>
              <div className={styles.frame113}>
                <div className={styles.frame15}>
                  <div className={styles.frame115}>
                    <div className={styles.rectangle9} />
                    <div className={styles.samplePack}>sample pack</div>
                  </div>
                  <div className={styles.frame116}>
                    <div className={styles.rectangle9} />
                    <div className={styles.blender}>ableton</div>
                  </div>
                  <div className={styles.frame117}>
                    <div className={styles.rectangle9} />
                    <div className={styles.sheetMusic}>sheet music</div>
                  </div>
                </div>
                <div className={styles.popularTags15}>Popular tags</div>
              </div>
            </div>
            <div className={styles.frame118}>
              <div className={styles.rectangle72} />
              <a className={styles.frame119}>
                <div
                  className={styles.comicsGraphic}
                >{`Comics & Graphic Novels`}</div>
                <div className={styles.sequentialArtWith}>
                  Sequential art with loads of heart. Welcome to a paradise of
                  panels.
                </div>
              </a>
              <div className={styles.frame120}>
                <div className={styles.frame121}>
                  <div className={styles.frame122}>
                    <div className={styles.rectangle9} />
                    <div className={styles.assets}>manga</div>
                  </div>
                  <div className={styles.frame123}>
                    <div className={styles.rectangle9} />
                    <div className={styles.ebook}>comic</div>
                  </div>
                  <div className={styles.frame124}>
                    <div className={styles.rectangle9} />
                    <div className={styles.anime}>anime</div>
                  </div>
                </div>
                <div className={styles.popularTags14}>Popular tags</div>
              </div>
            </div>
          </div>
          <div className={styles.frame125}>
            <div className={styles.lookingForInspiration}>
              Looking for inspiration on what you can sell?
            </div>
            <div className={styles.discoverTheBestSelling}>
              Discover the best-selling products and creators on FileMart
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.rectangle76} />
        <div className={styles.frame126}>
          <div className={styles.frame127}>
            <div className={styles.frame128}>
              <div className={styles.rectangle77} />
              <div className={styles.frame129}>
                <div className={styles.rectangle78} />
                <div className={styles.div}>→</div>
              </div>
              <div className={styles.rectangle79} />
            </div>
            <div className={styles.signUpToContainer}>
              <p className={styles.sellTheThings}>
                Sign up to receive strategies and techniques to achieve your
                desired growth.
              </p>
            </div>
          </div>
          <img className={styles.frameIcon1} alt="" src="../frame1.svg" />
          <div className={styles.frame130}>
            <div className={styles.frame131}>
              <div className={styles.help}>Help</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.university}>University</div>
              <div className={styles.termsOfService}>Terms of Service</div>
            </div>
            <div className={styles.frame132}>
              <div className={styles.pricing}>Pricing</div>
              <div className={styles.jobs}>Jobs</div>
              <div className={styles.features}>Features</div>
              <div className={styles.roadmap}>Roadmap</div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
        </div>
        <div className={styles.footerLicence}>
          <div className={styles.filemartInc}>Ⓒ 2023 FileMart, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
