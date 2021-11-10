describe("GET", () => {
    test("Get List User", async () => {
        const getListUsers = await require('../getListUsers.js')
        getListUsers.getListUsers()
    })
})