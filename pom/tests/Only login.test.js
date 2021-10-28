import LoginPage from "../pages/LoginPage";
import { CREDENTIALS, URLS } from "../data/Constants";

fixture("Only Login feature test").page`${URLS.LOGIN_URL}`;

//Login Correcto
test.meta("type", "smoke")(
  "As a user, I should be able to log in sucessfully by providing valid credentials",
  async (t) => {
    await t.setTestSpeed(0.01);
    await LoginPage.submitLoginForm(
      CREDENTIALS.STANDARD_USER.USERNAME,
      CREDENTIALS.STANDARD_USER.PASSWORD
    );
    await t.expect(LoginPage.header.innerText).contains("Today");
  }
);
