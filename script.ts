import { PrismaClient } from '@prisma/client' // use @prisma/client works insted of @prisma/client/edge
// import dotenv from 'dotenv';
// dotenv.config(); // Load environment variables from .env file
const prisma = new PrismaClient({ log: ["query"] })
// every time it runs query on the database
// it's going to log that query out.


// console.log(prisma.user)
// const DATABASE_URL="postgres://art1722:uGM40NkaqWTs@ep-rough-brook-72456425.us-east-2.aws.neon.tech/neondb"
// prisma.user.findFirst();

// a simple code to use async await
async function main() {
    // ... you will write younpr Prisma Client queries here
    // NOTE: almost everything in prisma is asynchronous
    // it's going to run, it's going to wait // then give you a result
    // using async await makes it easier to work with

    // data: is what we want to create
    // then we pass in object that contains all the data we want

    // so prisma will create a user for us
    // It's going to put it in our database with the name of Kyle. 
    // It's going to return that user
    //const user = await prisma.user.create({ data: { name: "Nathan" }, })
    //console.log(user)
    await prisma.user.deleteMany()
    const user = await prisma.user.createMany({
        data: [{
            name: "JoeRock1",
            email: "joerock1@gmail.com",
            age: 29,
        }, {
            name: "SallyRock1",
            email: "Sallyrock1@gmail.com",
            age: 29,
        }],
    })

    console.log(user)
}
main()    
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect() // to finally disconnect from the prisma database
        // NOTE: automatically, it will disconnect for you so you don't have to do this
        // as soon as your program finishes running
    })