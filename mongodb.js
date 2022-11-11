import { MongoClient,ObjectId } from "mongodb"

import {uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

// console.log(await moviesCollection.findOne({}))
// let query = {title: {$regex: /star wars/i}} // search for "termninator" anywhere in the title
// let movieArray = await moviesCollection
// .find(query)
// // .limit(3)
// .toArray()

// for (let i=0; i < movieArray.length; i++){
//     console.log(movieArray[i].title)
// }
// let firstMovie = movieArray[0]
// console.log(firstMovie.title)

// console.log(`there are ${movieArray.length} movies`)

// add a new movie 
const newMovie = {
    title: "new Movie",
    Rating: "R",
    Genre: ["Comedy"],
    releaseDate: "2022/12/17",
}
const results = await moviesCollection.insertOne(newMovie)
console.log("Result of insert",results)
// const updateQuery = {_id: new ObjectId("6345ca88e5a57c680aab0aeb")}
// const update = {$set: {title: "the NEW Boca Code Story"}}
// const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
// console.log(results)
   

