import { URLS, projectNamed } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";

fixture("Create 10 new tasks").page`${URLS.LOGIN_URL}`;

//Random test names *10
test("10 Task Random Creation", async (t) => {
  for (let i = 0; i < 2; i++) {
    await t.setTestSpeed(0.01);
    await t.useRole(STANDARD_USER);
    await t.expect("h1 > .simple_content").ok({ timeout: 5000 });
    await t.click("svg > g > g > path");
    await t.click(".public-DraftStyleDefault-block");
    await t.typeText(".public-DraftStyleDefault-block", projectNamed, {
      paste: true,
    });
    await t.click('button[type="submit"]');
    //Hasta aqui la creacion.
    //Comienza borrado
    //await t.wait(5000);
    await t.click(".markdown_content.task_content");
    await t.click(
      'button[aria-label="More task actions"][type="button"].item_action > svg > path'
    );
    await t.click(
      ".menu_item.icon_menu_item.danger_menu > .icon_menu_item__content"
    );
    await t.click('button[type="submit"]');
  }
});
