# LENDSQR FRONTEND ENGINEERING TEST

This is a mini application created for the Lendsqr-Frontend test interview. The web application aims to mock an actual website where a user can login and view details on user accounts.

## HOW TO TEST

Step 1: Visit the live site @ https://omorugie-oyibotha-lendsqr-fe-test.vercel.app/ and navigate to the login page by clicking on the button on screen.

Step 2: I created the landing page as the original test design did not have one and that made the whole application look pretty unappealing. Once you land on this page, you can login using the details provided below. Note: These are mock login details provided for the recruiter to test this implementation.
I have implemented the login functionality and created a mock login detail for the recruiter.

Username:- recruiter@lendsqr.com
Password:- lendsQrRecruiter

Step 3: After logging in, you are routed to the Dashboard Home automatically, which doesn't have any content because this was not included in the design pages for this interview. I have implemented a simple message that instructs users on what to do next.

Step 4: You can navigate to the Users Page by clicking on the button provided or by using the side bar (click on the users icon). Clicking on this routes you to the Users Page where you can see the full list of users.

Step 5: Click on the Options icon and click on view details. This takes you to the user details page where you can see comprehensive details of the user you just selected. This is the final page in the figma design.

Step 6: You can click on Logout on the side bar to log out your current mock session. Kindly note that this is a mock session and no external ddatabases or apis (except the one for fetching users) are being used.

step 7: You can repeat step 1 - 6 above on a mobile or tablet device to test the application's responsiveness. There were no designs provided for such screens, so all design layouts were created from memory.

Thanks.

### Technologies Used

1. React
2. Typescript
3. SCSS for styling
4. React Router Dom for Routing
5. React Spinners for Loading
6. Figma

### FEATURES IMPLEMENTED

1. Data Loading State using React-Spinners Package.

2. Login and Logout Functions.

3. Landing Page

4. Dashboard Layout and Sidebar Indicator.

5. Data fetching single user using Id from API provided

6. Data Fetching all users from API provided

### CHALLENGES FACED

1. Implementing designs for Mobile and Tablet responsiveness (There was no design to view).
2. API malfunction due to chrome extenstion installation on my PC.
