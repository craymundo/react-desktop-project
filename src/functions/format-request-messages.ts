import { DEFAULT_MESSAGE_FROM_ARRAY } from "../constants/static-values";

export const getOneTextFromArrayMessages = (messages: string[] | any, defaultMessage?: string) => {
    if (!messages || !Array.isArray(messages) || !messages.length || !(typeof messages[0] === "string")) {
        return defaultMessage ? defaultMessage : DEFAULT_MESSAGE_FROM_ARRAY;
    }
    else if (messages.length === 1) {
        return messages[0];
    } else {
        let messageResult = "";
        messages.forEach((message: string) => {
            messageResult += message + " ";
        });
        return messageResult;
    }
}