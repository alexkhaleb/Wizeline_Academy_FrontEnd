import { Selector } from "testcafe"

class ProductsPage{
    constructor (){
        this.title = Selector('h1 > .simple_content').withExactText('Today')
    }
}

export default new ProductsPage