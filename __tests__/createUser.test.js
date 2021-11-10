describe("POST", () => {
    test("Create User", async () => {
        const getListUsers = await require('../createUser.js')
        getListUsers.getListUsers('Mady','Student')
    })
})