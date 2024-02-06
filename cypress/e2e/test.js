///<reference types="cypress"/>
describe('welcome to my project', () => {
    it('the is a test Contat us', () => {
        cy.visit("https://automationteststore.com/")
        // get item by part of it href
       // cy.get('a[href*="product/product"]').contains('Benefit Bella Bamba').click()

        //save css selector in variable
        // let my_item=cy.get('a[href*="product/product"]').contains('Benefit Bella Bamba')
        // my_item.click()

        //using each
    //     cy.get('a[href*="product/category&path="]').contains("Hair Care").click()

    //    cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{

    //     if(element.text().includes("Seaweed")){
    //         cy.wrap(element).click()
    //     }

      
    //    })

    //alisaing

    // cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("the first item")
    // cy.get("@the first item").its("length").should("be.gt",3)
    // cy.get("@the first item").should("include","Seaweed")

//print the price of each items
// cy.get(".thumbnail").as("Items")
// cy.get("@Items").find(".oneprice").each((element,index,list)=>{

//     cy.log("the "+element.text()+" is # :"+index)
// })

//split $ frim price

// variable to save sum
let sum=0
cy.get(".thumbnail").as("Items")
 cy.get("@Items").find(".oneprice").invoke("text").as("item_price")
 cy.get("@item_price").then((elementprice)=>{
let price_of_items=elementprice.split("$")
for(let i=0;i<price_of_items.length;i++)
{cy.log(price_of_items[i])
sum+=Number(price_of_items[i])}

cy.log("The total is :"+sum)
 })

     });
    
    

    });
