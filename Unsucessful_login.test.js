import LoginPage from './pom/pages/LoginPage'
import ProductsPage from './pom/pages/ProductsPage'
import { CREDENTIALS, URLS } from './pom/data/Constants'
import { STANDARD_USER } from './pom/data/Roles'

fixture ("Login feature test")
.page `${URLS.LOGIN_URL}`

test.skip('As a user, I should not be able to log in sucessfully by providing invalid credentials', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(ProductsPage.title.exists).ok()
})

test('As a user, I should be able to log in sucessfully by providing valid credentials', async t =>{
    await t.useRole(STANDARD_USER)
    await t.expect('h1 > .simple_content').ok()
})