import styles from "./GeneralDetails.module.scss";
import { SingleUserProps } from "../../../utils/Users.types";

const GeneralDetails = ({ userDetail }: any) => {
  // const GeneralDetails = ({ userDetail }: SingleUserProps) => {

  const monthIncomeFormat = (upperIncome: string, lowerIncome: string) => {
    const upperLimit = Math.floor((+upperIncome * 100) / 10000) * 10000;
    const lowerLimt = Math.floor((+lowerIncome * 100) / 10000) * 10000;
    return `NGN${upperLimit.toLocaleString()}.00 - NGN${lowerLimt.toLocaleString()}.00`;
  };

  return (
    <>
      <div className={styles.GeneralDetails}>
        {/* personal information */}
        <section className={styles.personal_info}>
          <h2>Personal Information</h2>
          <div className={styles.personal_info_details}>
            <div className={styles.info_detail}>
              <p>Full Name</p>
              <h2>{`${userDetail?.profile?.lastName} ${userDetail?.profile?.firstName}`}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Phone Number</p>
              <h2>{userDetail?.profile?.phoneNumber}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Email Address</p>
              <h2>{userDetail?.email}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>BVN</p>
              <h2>{userDetail?.profile?.bvn}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Gender</p>
              <h2>{userDetail?.profile?.gender}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Marital Status</p>
              <h2>Single</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Children</p>
              <h2>None</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Type of Residence</p>
              <h2>{userDetail?.profile?.address}</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/* education and employment */}
        <section className={styles.Education}>
          <h2>Education and Employment</h2>
          <div className={styles.education_details}>
            <div className={styles.info_detail}>
              <p>level of education</p>
              <h2>{userDetail?.education?.level}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>employment status</p>
              <h2>{userDetail?.education?.employmentStatus}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>sector of employment</p>
              <h2>{userDetail?.education?.sector}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Duration of employment</p>
              <h2>{userDetail?.education?.duration}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>office email</p>
              <h2>{userDetail?.education?.officeEmail}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Monthly income</p>
              <h2>
                {monthIncomeFormat(
                  userDetail?.education?.monthlyIncome[0],
                  userDetail?.education?.monthlyIncome[1]
                )}
              </h2>
            </div>
            <div className={styles.info_detail}>
              <p>loan repayment</p>
              <h2>{`${userDetail?.education?.loanRepayment * 100}`}</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/*socials*/}
        <section className={styles.Socials}>
          <h2>Socials</h2>
          <div className={styles.social_details}>
            <div className={styles.info_detail}>
              <p>Twitter</p>
              <h2>{userDetail?.socials?.twitter}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Facebook</p>
              <h2>{userDetail?.socials?.facebook}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Instagram</p>
              <h2>{userDetail?.socials?.instagram}</h2>
            </div>
          </div>
        </section>

        <hr className={styles.showLine} />

        {/* Guarantor */}
        <section className={styles.Guarantor}>
          <h2>Guarantor</h2>
          <div className={styles.guarantor_details}>
            <div className={styles.info_detail}>
              <p>full Name</p>
              <h2>{`${userDetail?.guarantor.lastName} ${userDetail?.guarantor.firstName}`}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Phone Number </p>
              <h2>{userDetail?.guarantor.phoneNumber}</h2>
            </div>
            <div className={styles.info_detail}>
              <p>Relationship</p>
              <h2>
                {userDetail?.guarantor.gender === "Male" ? `Brother` : `Sister`}
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GeneralDetails;
