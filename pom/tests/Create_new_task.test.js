import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS, URLS, nanoid, projectNamed, INVALIDCREDENTIALS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'
import { t } from 'testcafe'

fixture ("Login feature test")
.page `${URLS.LOGIN_URL}`

test.skip ('As a user, I should be able to log in sucessfully by providing valid credentials', async t =>{
    await t.setTestSpeed(0.01)
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    //await t.expect(ProductsPage.title.exists).ok()
    await t.expect('h1 > .simple_content').ok(({timeout: 5000}))
})

test ('As a user, I will provide a fake email and a fake password', async t => {
    await t.setTestSpeed(0.01)
    await LoginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.BADEMAIL, INVALIDCREDENTIALS.INVALID_USER.BADPASSWORD)
    await t.expect('.div.error_msg').contains('Wrong email or password').ok()
})

test.skip ('As a user, I will provide a blank email and a fake password', async t => {

    await LoginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.BLANKEMAIL, INVALIDCREDENTIALS.INVALID_USER.BADPASSWORD)
    await t.expect('.error_msg').contains('Invalid email address')
})

test.skip ('As a user, I will provide a fake email and a blank password', async t => {

    await LoginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.BADEMAIL,INVALIDCREDENTIALS.INVALID_USER.BLANKPASSWORD)
    await t.expect('.error_msg').contains('Blank password')
})

test.skip('Creacion de una nueva tarea', async t =>{
    await t.setTestSpeed(0.01)
    await t.useRole(STANDARD_USER)
    await t.expect('h1 > .simple_content').ok(({timeout: 5000}))
    //await t.expect('h1 > .simple_content').ok()
    await t.click('svg > g > g > path')
    await t.click('.public-DraftStyleDefault-block')
    //await t.typeText('.public-DraftStyleDefault-block', 'Tarea de Prueba 4')
    //await t.pressKey('enter')
    await t.pressKey('T+a+s+k+2')
    await t.click('button[type="submit"]')
    //Hasta aqui la creacion.
    //Comienza borrado
    await t.click('.markdown_content.task_content')
    await t.click('button[aria-label="More task actions"][type="button"].item_action > svg > path')
    await t.click('.menu_item.icon_menu_item.danger_menu > .icon_menu_item__content')
    await t.click('button[type="submit"]')

})

//Random test names *10
test.skip('Creacion de una nueva tarea - TEST', async t =>{
    for (let i = 0; i < 2; i++){
    await t.setTestSpeed(0.01)
    await t.useRole(STANDARD_USER)
    await t.expect('h1 > .simple_content').ok(({timeout: 5000}))
    //await t.expect('h1 > .simple_content').ok()
    await t.click('svg > g > g > path')
    await t.click('.public-DraftStyleDefault-block')
    await t.typeText('.public-DraftStyleDefault-block', projectNamed, { paste : true})
    //await t.typeText('#edit_project_modal_field_name', projectNamed, { paste : true})
    //await t.typeText('.public-DraftStyleDefault-block', 'Tarea de Prueba 4')
    //await t.pressKey('enter')
    //await t.pressKey('T+a+s+k+2')
    await t.click('button[type="submit"]')
    //Hasta aqui la creacion.
    //Comienza borrado
    await t.click('.markdown_content.task_content')
    await t.click('button[aria-label="More task actions"][type="button"].item_action > svg > path')
    await t.click('.menu_item.icon_menu_item.danger_menu > .icon_menu_item__content')
    await t.click('button[type="submit"]')
    }
})


test.skip('Creacion de una nueva tarea para mañana', async t =>{
    await t.setTestSpeed(0.01)
    await t.useRole(STANDARD_USER)
    //await t.expect('img.user_avatar').ok(({timeout: 5000}))
    await t.expect('h1 > .simple_content').ok(({timeout: 5000}))
    //await t.expect('h1 > .simple_content').ok()
    await t.click('svg > g > g > path')
    await t.click('.date.date_today')
    await t.click('.scheduler-suggestions > button[type="button"].scheduler-suggestions-item:nth-of-type(1)')
    await t.click('.public-DraftStyleDefault-block')
    await t.pressKey('T+a+r+e+a +p+a+r+a +m+a+ñ+a+n+a')
    await t.click('button[type="submit"]')
    
})

test.skip('Creacion de un nuevo proyecto', async t =>{
    await t.setTestSpeed(0.01)
    await t.useRole(STANDARD_USER)
    //await t.expect('img.user_avatar').ok(({timeout: 5000}))
    await t.expect('h1 > .simple_content').ok(({timeout: 5000}))
    //await t.expect('h1 > .simple_content').ok()
    await t.click('button[aria-label="Add Project"]')
    await t.click('#edit_project_modal_field_name')
    await t.typeText('#edit_project_modal_field_name', 'Proyecto Nuevo #2')
    await t.click('button[type="button"].color_dropdown_toggle')
    await t.click('#dropdown-select-5-option-41') // este elemento es dinamico y suele fallar
    await t.click('input[name="is_favorite"]')
    await t.click('button[type="submit"]')
    // Falta añadir a favoritos
})


// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"