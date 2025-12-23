import { createRouter } from "@nanostores/router";

const BASE_URL = "/homomorphism-convergence";

export const $router = createRouter({
    home: `${BASE_URL}/`,
    characters: `${BASE_URL}/chars`,
    algebra: `${BASE_URL}/algebra`,
    analysis: `${BASE_URL}/analysis`,
});
