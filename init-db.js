db.createUser({
    user: "basselanthony",
    pwd: "basselanthony",
    roles: [{
        role: "readWrite",
        db: "lotteryDB"
    }]
})
