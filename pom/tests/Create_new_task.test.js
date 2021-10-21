import { URLS, projectNamed } from "../data/Constants";
import { STANDARD_USER } from "../data/Roles";

fixture.beforeEach(async (t) => {
  await t
  .maximizeWindow()
  .setTestSpeed(0.3)
  .useRole(STANDARD_USER);
})
("Login feature test")

test.meta('type','smoke')("Creacion de una nueva tarea", async (t) => {
  await t.expect("h1 > .simple_content").ok({ timeout: 5000 });
  await t.click("svg > g > g > path");
  await t.click(".public-DraftStyleDefault-block");
  await t.typeText(".public-DraftStyleDefault-block", projectNamed, {
    paste: true,
  });
  await t.click('button[type="submit"]');
  //Hasta aqui la creacion.
  //Comienza borrado
  await t.click(".markdown_content.task_content");
  await t.click(
    'button[aria-label="More task actions"][type="button"].item_action > svg > path'
  );
  await t.click(
    ".menu_item.icon_menu_item.danger_menu > .icon_menu_item__content"
  );
  await t.click('button[type="submit"]');
});