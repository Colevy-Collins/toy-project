const ID='user1'; 
const PASSWORD = 'wtYMh4ErXkzBcyD1'; 
const NET='asecourses.c78gwho.mongodb.net/asecourses';

// Connection URI
const uri = `mongodb+srv://${ID}:${PASSWORD}@${NET}/?retryWrites=true&w=majority`
//const connectStr = "mongodb+srv://user1:wtYMh4ErXkzBcyD1@asecourses.c78gwho.mongodb.net/asecourses";

module.exports = uri