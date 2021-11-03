import { Selector, t } from "testcafe";

class HomePage {
  constructor() {
    // this.usernameInput = Selector("#email");
    // this.passwordInput = Selector("#password");
    this.header = Selector("h1 > .simple_content");
    this.erromsg = Selector("div.error_msg");
    console.log = this.header
    // this.submitButton = Selector(".submit_btn").withExactText("Log in");
    //this.loginButton = Selector('#submit_btn ist_button ist_button_red sel_login')
  }

  // async submitLoginForm(username, password) {
  //   if (username != null) {
  //     await t.typeText(this.usernameInput, username, { paste: true });
  //   }

  //   if (password != null) {
  //     await t.typeText(this.passwordInput, password, { paste: true });
  //   }
  //   await t.click(this.submitButton);
  // }
}

export default new HomePage();
