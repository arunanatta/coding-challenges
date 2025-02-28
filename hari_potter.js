const axios = require('axios');

let potterApiEndpoint = "https://api.potterdb.com/v1"

async function fetchHarryPotterData() {
    try {
        const booksResponse = await axios.get(`${potterApiEndpoint}/books`);
        const books = booksResponse.data.data;
        //if no books found
        if (!books.length) {
            throw new Error('No books found');
        }

        // Select the first book
        const firstBook = books[0];

        // Fetch chapters for the selected book
        const chaptersResponse = await axios.get(`${potterApiEndpoint}/books/${firstBook.id}/chapters`);
        const chapters = chaptersResponse.data.data;

        if (!chapters.length) {
            throw new Error('No chapters found for the selected book');
        }

        // Get the last chapter
        const lastChapter = chapters[chapters.length - 1];

        // Print the summary of the last chapter
        console.log(`Summary: ${lastChapter.attributes.summary}`);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

//function call
fetchHarryPotterData();