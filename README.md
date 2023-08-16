# Chuck Norris Joke Generator

Welcome to the Chuck Norris Joke Generator! This web application fetches random Chuck Norris jokes from the [Chuck Norris API](https://api.chucknorris.io/) and displays them for your amusement.

![Chuck Norris Joke](screenshot.png)

## Features

- Generate random Chuck Norris jokes with a click of a button.
- Enjoy a dose of Chuck Norris humor anytime you want.

## Demo

Experience the hilarity firsthand by checking out the live demo of the project [here](https://your-demo-link.com).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Open the `index.html` file in your preferred web browser.

## How It Works

This project utilizes JavaScript and the Chuck Norris API to generate and display jokes. Here's an overview of the key steps:

1. When the page loads or when the "Generate Joke" button is clicked, an event listener triggers the `generate` function.

2. Inside the `generate` function, an XMLHttpRequest is used to make a GET request to the Chuck Norris API (`https://api.chucknorris.io/jokes/random`).

3. The `onreadystatechange` event handler is used to process the response from the API. If the request is successful (status code 200), the fetched joke is displayed on the page. If there's an error, a message indicating that something went wrong is displayed.

4. The joke text is inserted into the HTML using the `innerHTML` property.

5. Users can repeatedly click the "Generate Joke" button to fetch new jokes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request. Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](LICENSE).
