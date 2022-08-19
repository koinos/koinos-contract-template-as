import { System, Protobuf, claim } from "koinos-sdk-as";
import { Claim as ContractClass } from "./Claim";

export function main(): i32 {
  const contractArgs = System.getArguments();
  let retbuf = new Uint8Array(1024);

  const c = new ContractClass();

  switch (contractArgs.entry_point) {
    case 0xdd1b3c31: {
      const args = Protobuf.decode<claim.claim_arguments>(
        contractArgs.args,
        claim.claim_arguments.decode
      );
      const res = c.claim(args);
      retbuf = Protobuf.encode(
        res,
        claim.claim_result.encode
      );
      break;
    }
           
    case 0xbd7f6850: {
      const args = Protobuf.decode<claim.get_info_arguments>(
        contractArgs.args,
        claim.get_info_arguments.decode
      );
      const res = c.get_info(args);
      retbuf = Protobuf.encode(
        res,
        claim.get_info_result.encode
      );
      break;
    }

    case 0x2ac66b4c: {
      const args = Protobuf.decode<claim.check_claim_arguments>(
        contractArgs.args,
        claim.check_claim_arguments.decode
      );
      const res = c.check_claim(args);
      retbuf = Protobuf.encode(
        res,
        claim.check_claim_result.encode
      );
      break;
    }

    default:
      System.exit(1);
      break;
  }

  System.exit(0, retbuf);
  return 0;
}

main();
