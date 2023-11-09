import OpenAI from "openai";
import readline from 'readline';

const openaiKey = 'your-api-key'
const openai = new OpenAI({apiKey: openaiKey});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askGPT = async (query: string) => {
    const response = await openai.chat.completions.create({
        messages: [{role: "system", content: query}],
        model: "gpt-3.5-turbo"
    });
    return response.choices[0].message.content;
}

const main = async () => {
    const askUser = () => {
        rl.question("How can I help you today? (Type 'exit' to quit)\n", async function (query: string) {
            if (query.toLowerCase() === 'exit') {
                rl.close();
                return;
            }

            const response = await askGPT(query);
            console.log(response);

            askUser();
        });
    };
    askUser(); 
};

console.log('CLI Chat GPT 3.5')
main();