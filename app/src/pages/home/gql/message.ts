import { gql } from '@apollo/client';

export const POST_MESSAGE = gql`
    mutation PostMessage($msg: MessageInput) {
        addMessage(msg: $msg) {
            id
        }
    }
`;
