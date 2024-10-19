// import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
// import assessment_image from "../../assets/images/assessment_image.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lendsqr_icon from "../../assets/images/lendsqr_log.png";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        {/* <div className={styles.LandingPage}>
          <section>
            <h1>
              Esedere Oghenetega’s{" "}
              <span>Submission for lendsqr Assessment</span>
            </h1>
            <div className={styles.description}>
              <p>Task Description:</p>
              <p>
                Created a mini application for a user to login and view a list
                of users fetched from an API and viewed details about each user.
                Kindly login using the details below:
              </p>
              <h6>Username:- recruiter@lendsqr.com</h6>
              <h6>Password:- lendsQrRecruiter</h6>
              <p>
                Kindly note that all assests and designs used belong to Lengsqr.
                This is part of the LENDSQR assessment task.
              </p>
            </div>
            <Link to="/login" className={styles.linkLogin}>
              CLICK TO VIEW SUBMISSION
            </Link>
          </section>
          <img src={assessment_image} alt="assessment_image" />
        </div> */}
        <div className={styles.LandingPage}>
          <img src={lendsqr_icon} alt="" />
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
