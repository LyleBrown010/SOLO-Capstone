const db = require('../config');
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require('../middleware/authenticateUser')

class Users {
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName, email, userPassword, userRole, userProfile 
        FROM Users;`

        db.query(query, (err, results) => {
            if(err) throw err

            res.json({
                status: res.statusCode, 
                results
            });
        });
    }

    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, email, userPassword, userRole, userProfile 
        FROM Users 
        WHERE userID = ${req.params.id};`

        db.query(query, (err, results) => {
            if(err) throw err

            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    async register(req, res){
        const data = req.body; 

        // password encryption
        data.userPassword = await hash(data.userPassword, 10);
        
        // payload 
        const user = {
            email: data.email, 
            userPassword: data.userPassword
        };

        //query
        const query = `
        INSERT INTO Users 
        SET?;`;

        db.query(query, [data], 
            (err) => {
                if(err) throw err

                //create token
                let token = createToken(user)
                res.cookie("AuthorizedUser", token, {
                    maxAge: 3600000, //age of token , 3600000=1 hour
                    httpOnly: true 
                });

                res.json({
                    status: res.statusCode, 
                    message: "NEW USER REGISTERED"
                });
            });
    }

    login(req, res){
        const {email, userPassword} = req.body;

        // query
        const query = `
        SELECT email, userPassword
        FROM Users
        WHERE email = '${email}';`;

        db.query(query, async(err, result) => {
            if(err) throw err;
            
            if(!result?.length){
                res.json({
                    status: res.statusCode, 
                    message: "Incorrect Email Address"
                });
            }
            else{
                await compare(userPassword, 
                    result[0].userPassword,
                    (cErr, cResult) => {
                        if(cErr) throw cErr;

                        // if (cResult){
                        // create token
                        const token = createToken({
                            email, 
                            userPassword
                        });

                        // save token 
                        res.cookie("AuthorizedUser", 
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        });

                        if (cResult){
                            res.json({
                                message: "Welcome to SOLO", 
                                token,
                                result: result[0]
                            });
                        }
                        else{
                            res.json({
                                status: res.statusCode, 
                                message: "Unauthorized user or incorrect password"
                            });
                        }
                    });
            }
        });
    }

    updateUser(req, res){
        const query = `
        UPDATE Users 
        SET? 
        WHERE userID = ?`

        const data = req.body;

        // encrypt password 
        data.userPassword = hashSync(data.userPassword, 20); 

        db.query(query, [data, req.params.id], 
            (err) => {
                if (err) throw err

                res.json({
                    status: res.statusCode, 
                    message: "Updated User Details"
                })
            });
    }

    deleteUser(req, res){
        const query = `
        DELETE FROM Users 
        WHERE userID = '${req.params.id}';`

        db.query(query, (err) => {
            if(err) throw err 

            res.json({
                status: res.statusCode, 
                message: "Deleted User"
            });
        });
    }
}

module.exports = Users;