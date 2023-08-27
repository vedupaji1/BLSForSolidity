import { ethers } from "ethers";
import * as mcl from "./utils/mcl";
import { randHex } from "./utils/util";

const temp = async (): Promise<void> => {
  await mcl.init();
  mcl.setDomain("op");

  const message = randHex(12);
  const { pubkey, secret } = mcl.newKeyPair();
  const { signature, M } = mcl.sign(message, secret);
  let message_ser = mcl.g1ToBN(M);
  let pubkey_ser = mcl.g2ToBN(pubkey);
  let sig_ser = mcl.g1ToBN(signature);

  console.log(
    "Message: ",
    message_ser,
    "\nPubKey: ",
    pubkey_ser,
    "\nSignature",
    sig_ser
  );

  return;
};

temp();

/*

["0x0cd1054218b1ceedaf89b0ea31e3ddda42466208d0804fc79d824b39f9bcd5db",
"0x149d2595f91ff9bf8628a3a5ab8a794e814148809571b3c9e7c4d9290f80776e"]

["0x04ee988b019d7248298e86799d429cd2128c55ad1e3780fba0b0af1a2282278e",
"0x0e0bcc284ea9ee4856cb86da173a81daab30dfc9ea7ae8770fb85c499e5c4d52",
"0x02af9994ce1259895ecd63134f0948021fce7d60d6a9571b182135231a0e8852",
"0x079832e4892e4909c6331058ac11cffecb968ffe42ea19724f3f5ecf13b81fa2"]

["0x2dade4343acd4255e055989e26eecb8d215b52d676477fa55af12a5d542ae0f4",
"0x2a8ce66a5281a675ab6a43c89323c3f2bc4b75614d5795ab303ffa4ba99c7035"]

*/