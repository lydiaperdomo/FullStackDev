import express from "express"; // web framework
import axios from "axios"; // HTTP client for calling MangaDex

const app = express(); // create the Express app
const port = 3000; // port the server listens on
const API_URL = "https://api.mangadex.org/manga"; // base URL for the manga endpoints

app.use(express.urlencoded({ extended: true })); // turn submitted <form> data into req.body
app.use(express.static("public")); // serve CSS and images from the public folder

app.get("/", (req, res) => { //listen for a visitor at the home page
    res.redirect("/tag"); //send them to the route that loads the tag dropdown
}); //close get

app.get("/tag", async (req, res) => { // when a visitor comes, listen for a get request
    const response = await axios.get(`${API_URL}/tag`); //make a GET request to MangaDex, pause until the response comes back
    res.render("index.ejs", {
        myArray: response.data.data //pass the array of tag objects to build the dropdown list
    }); //close render
}); //close get

app.post("/search", async (req, res) => { //listen for the form's POST
    const tagId = req.body.options; //the chosen tag id from the form
    let tags = []; //declared outside try so both try and catch can use it
    console.log("search hit, tagId:", tagId); //proves the form reached the server

    try { //start of the section that might fail
        const tagResponse = await axios.get(`${API_URL}/tag`); //fetch the tag list again for the dropdown
        tags = tagResponse.data.data; //store just the array of tag objects

        const searchResults = await axios.get(API_URL, { //call MangaDex for manga
            params: { includedTags: [tagId] } //filter by the chosen tag
        }); //close axios.get

        res.render("index.ejs", { //success: send the page
            myArray: tags, //the dropdown needs this on every render
            mangaList: searchResults.data.data, //the manga results
            selectedTag: tagId //remember which option was picked
        }); //close render
    } catch (error) { //runs only if something above throws
        console.log(error.response?.data); //MangaDex's explanation
        res.render("index.ejs", { //failure: still send a page
            myArray: tags, //empty list if the tag fetch itself failed
            selectedTag: tagId, //keep the selection even when the search failed
            error: "Sorry, the search failed. Please try again." //message for the user
        }); //close render
    } //close catch
}); //close post

app.listen(port, () => { // begin accepting requests on the port
    console.log(`Server running on port ${port}`); // prints once the server is up
});