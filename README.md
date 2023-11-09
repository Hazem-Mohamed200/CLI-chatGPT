# CLI chatGPT

A simple command-line interface (CLI) application that uses OpenAI's GPT-3 API to have interactive conversations with the chatbot. This application is built using TypeScript and Node.js.

## Installation

Before you can run this application, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

To install the application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Hazem-Mohamed200/CLI-chatGPT.git
   ```

2. Navigate to the project's directory:

   ```bash
   CLI-chatGPT
   ```

3. Install the required dependencies by running:

   ```bash
   npm install
   ```

## OpenAI API Key

To use this application, you'll need an API key from OpenAI. Follow these steps to create a key:

1. Sign in to the [OpenAI website](https://www.openai.com/).
2. Navigate to the API page from the dashboard.
3. Follow the instructions provided by OpenAI to get your API key (be sure to note it down).

## Configuration

Once you have obtained the API key, navigate to the ```index.ts``` file and replace `your-api-key` with the API key obtained from OpenAI.

## Usage

To start a conversation with the chatbot, navigate to the project's directory and use the following command:

```bash
npm start
```

To start the conversation without navigating to the project's directory, use the following command after replacing ```PROJECT_DIRECTORY``` with the project's directory:
```bash
npm run --prefix PROJECT_DIRECTORY start
```



After initiating the conversation, you will be prompted to enter a message. The chatbot will respond based on the given input.

