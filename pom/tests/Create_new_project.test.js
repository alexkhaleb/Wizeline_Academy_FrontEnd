import { STANDARD_USER } from "../data/Roles";
import { URLS } from "../data/Constants";

fixture("Create new project").page`${URLS.LOGIN_URL}`;

test.meta("type", "smoke")(
  "New project Creation + Blue Color Assignment + Add as a Favorite Project",
  async (t) => {
    await t.setTestSpeed(0.01);
    await t.useRole(STANDARD_USER);
    await t.expect("h1 > .simple_content").ok({ timeout: 5000 });
    await t.click('button[aria-label="Add Project"]');
    await t.click("#edit_project_modal_field_name");
    await t.typeText("#edit_project_modal_field_name", "Proyecto Nuevo #2");
    await t.click('button[type="button"].color_dropdown_toggle');
    await t.click("#dropdown-select-5-option-41"); // este elemento es dinamico y suele fallar
    await t.click('input[name="is_favorite"]');
    await t.click('button[type="submit"]');
  }
);
