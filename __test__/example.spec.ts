import { GraphQLClient } from "graphql-request";
import { host } from "./constants";

const client = new GraphQLClient(host, { headers: {} });

function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const query = `{
  testMessage
}`;

test("Query test", async () => {
  const response = await client.request(query);
  console.log("response", response);

  expect(response).toEqual("Hello World");
});
