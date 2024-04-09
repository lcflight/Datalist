#!/usr/bin/env node

console.log("Hello, from index!");

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

void yargs(hideBin(process.argv)).command(
  "hello",
  "Prints a greeting",
  {},
  () => {
    console.log("Hello, world!");
  }
);
