import { chain, System, Base64, Base58, Token, Crypto, Arrays, StringBytes } from "@koinos/sdk-as";
import { template } from "./proto/template";

export class Template {
  example(args: template.example_arguments): template.example_result {
    // const value = args.value;

    // YOUR CODE HERE

    const res = new template.example_result();
    // res.value = ;

    return res;
  }
}
