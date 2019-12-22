describe('Test each route', function() {
  it('load homePage', function() {
    cy.visit('/') // change URL to match your dev URL
  })

  it('load toDoList', function() {
    cy.visit('/ToDoList') // change URL to match your dev URL
  })
})