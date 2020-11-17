import { keyframes } from 'styled-components';

export const gradient = keyframes`
    0% {
        background: radial-gradient(circle at center, rgba( 206, 231, 236, 0 ) 0%, #fff 0%, #fff 100%);
    }
    20% {
        background: radial-gradient(circle at center, rgba( 206, 231, 236, 0.3 ) 24%, #fff 25%, #fff 100%);
    }
    40% {
        background: radial-gradient(circle at center, rgba( 206, 231, 236, 0.5 ) 49%, #fff 50%, #fff 100%);
    }
    60% {
        background: radial-gradient(circle at center, rgba( 206, 231, 236, 0.8 ) 74%, #fff 75%, #fff 100%);
    }
    100% {
        background: radial-gradient(circle at center, #CEE7EC 99%, #fff 100%, #fff 100%);
    }
`;