import LoginPage from "../pages/LoginPage";
import { URLS, INVALIDCREDENTIALS } from "../data/Constants";
import HomePage from "../pages/HomePage";

fixture("3 Invalid Logins").page`${URLS.LOGIN_URL}`;

test.meta("type", "smoke")("As a user, I will provide a fake email and a fake password", async (t) => {
  await t.setTestSpeed(0.7);
  await LoginPage.submitLoginForm(
    INVALIDCREDENTIALS.INVALID_USER.BADEMAIL,
    INVALIDCREDENTIALS.INVALID_USER.BADPASSWORD
  );
  await t
    .expect(HomePage.erromsg.innerText)
    .contains("Wrong email or password");
});

test.meta("type", "smoke")("As a user, I will provide a blank email and a fake password", async (t) => {
  await LoginPage.submitLoginForm(
    null,
    INVALIDCREDENTIALS.INVALID_USER.BADPASSWORD
  );
  await t.expect(HomePage.erromsg.innerText).contains("Invalid email address");
});

test.meta("type", "smoke")("As a user, I will provide a fake email and a blank password", async (t) => {
  await LoginPage.submitLoginForm(
    INVALIDCREDENTIALS.INVALID_USER.BADEMAIL,
    null
  );
  await t.expect(HomePage.erromsg.innerText).contains("Blank password");
});
