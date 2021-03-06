import { URLS, projectNamed } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";

fixture("Create a new task for tomorrow").page`${URLS.LOGIN_URL}`;

test.meta("type", "smoke")("Creacion de una nueva tarea para mañana", async (t) => {
  await t.setTestSpeed(0.01);
  await t.useRole(STANDARD_USER);
  await t.expect("h1 > .simple_content").ok({ timeout: 5000 });
  await t.click("svg > g > g > path");
  await t.click(".date.date_today");
  await t.click(
    '.scheduler-suggestions > button[type="button"].scheduler-suggestions-item:nth-of-type(1)'
  );
  await t.click(".public-DraftStyleDefault-block");
  await t.typeText(".public-DraftStyleDefault-block", projectNamed, {
    paste: true,
  });
  await t.click('button[type="submit"]');
});
