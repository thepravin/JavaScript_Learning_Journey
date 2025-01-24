//*  =====> Convert first char of every letter in upper
const str = "hi i am pravin";
let newStr = str
  .split(" ") // return array ['hi','i',...]
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(newStr);

//* =========>  convert nested json into given format
let obj = {
  a: 1,
  b: {
    c: 2,
  },
  c: {
    d: {
      e: {
        f: 3,
      },
    },
  },
};

const requiredOutput = { a: 1, b_c: 2, c_d_e_f: 3 };

// Ans
function convertFunction(keyValue, parentName = "", result = {}) {
  for (let [key, value] of keyValue) {
    let newParent = !parentName ? `${parentName}_${key}` : key;

    if (typeof value === "object" && value !== null) {
      convertFunction(Object.entries(value), newParent, result);
    } else {
      result[newParent] = value;
    }
  }

  return result;
}
const output = convertFunction(Object.entries(obj));
console.log(output);

//* ================> Blocking the main thread
console.log("Start !!!!");

async function blockThread() {
  for (let i = 1; i <= 10; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 2000);
    });
  }
}

async function main() {
  await blockThread();
  console.log("End !!!!");
}

main();

//*================================================
const magicObject = { a: 1, b: 2 };

const transform = (obj) => {
  obj.a = 3;
  return { ...obj, b: 4 };
};

const newObject = transform(magicObject);

console.log(magicObject, newObject);
