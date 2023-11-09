"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const readline_1 = __importDefault(require("readline"));
const openaiKey = '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';
const openai = new openai_1.default({ apiKey: openaiKey });
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const askGPT = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openai.chat.completions.create({
        messages: [{ role: "system", content: query }],
        model: "gpt-3.5-turbo"
    });
    return response.choices[0].message.content;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const askUser = () => {
        rl.question("How can I help you today? (Type 'exit' to quit)\n", function (query) {
            return __awaiter(this, void 0, void 0, function* () {
                if (query.toLowerCase() === 'exit') {
                    rl.close();
                    return;
                }
                const response = yield askGPT(query);
                console.log(response);
                askUser();
            });
        });
    };
    askUser();
});
console.log('CLI Chat GPT 3.5');
main();
