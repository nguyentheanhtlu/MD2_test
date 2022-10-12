import { filterByTerm } from './app'

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});

import {Calculator} from './app'

describe("add function", () => {
    test("add two number", () => {
        const number1 = 1;
        const number2 = 2;

        const result = 3;

        expect(Calculator.add(number1, number2)).toBe(result);
    });
});