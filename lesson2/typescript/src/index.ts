let nameString: string;
let ageNumber: number;
let isStudent: boolean;
let hobbiesArray: string[];
let addressObject: { street: string; city: string };
let myFunction: Function;
let myFunction2: (arg1: string, arg2: number) => void;
let myFunction3: (arg1: string, arg2: number) => string;
let arrayString: Array<string>;
let arrayString2: string[];
let arrayString3: string[][] = [[], []];
let arrayString4: Array<Array<string>>;
let arrayNumber: Array<number>;
let arrayNumber2: number[];
let addressObject2: object = {};
let nullType: null;
let undefinedType: undefined;
let unknownType: unknown;
let anyType: any;

function SomeUnknownFunction(arg1: unknown): string {
  if (typeof arg1 === "string") {
    return arg1;
  }

  return "";
}

type MyType = "rame";

const test: "rame" = "rame";

type MyType2 = "rame" | "john";

type objectTypes = {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  address?: {
    street: string;
    city: string;
  };
  getAge: () => number;
};

let myObject: objectTypes = {
  name: "Rame",
  age: 23,
  isStudent: true,
  hobbies: ["reading", "coding"],
  getAge: function () {
    return this.age;
  },
};

type AnimalVoice = {
  voice: string;
};

type Animial = {
  type: "dog" | "cat";
  name: string;
  age: number;
  getName: (name: string[]) => string[];
};

type Dog = Animial & { voice: string; getName: (name: string) => string };
function getAnimalType(animal: Dog) {
  return animal.getName("Rame");
}

type dynamicObject = {
  [name: string]: string;
};

let myDynamicObject: dynamicObject = {
  name: "Rame",
  age: "23",
  addressObject: "Kathmandu",
};

type dynamicObject2 = {
  [name: string]: string | number;
};

interface MyInterface {
  name: string;
  age: number;
}

enum Size {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

enum SizeLong {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

function getSize(size: Size): SizeLong {
  switch (size) {
    case Size.Small:
      return SizeLong.Small;
    case Size.Medium:
      return SizeLong.Medium;
    case Size.Large:
      return SizeLong.Large;
  }
}

const size: Size = Size.Small;

getSize(size);

interface FrontEndDeveloper {
  name: string;
  skill: ("html" | "css" | "javascript")[];
}

interface BackEndDeveloper {
  name: string;
  skill: "nodejs" | "express" | "mongodb";
}

type DBDeveloper = {
  name: string;
  skill: "mysql" | "mongodb" | "postgresql";
};

// interface Developer {
//     firstName: string;
//     lastName: string;
//     position: FrontEndDeveloper | BackEndDeveloper | DBDeveloper;
// }

type workType = "full-time" | "part-time" | "contract";

interface Developer<T, A> {
  firstName: string;
  lastName: string;
  position: T;
  workType: A;
}

// let frontEndDeveloper: Developer<FrontEndDeveloper, 'full'> = {
//     firstName: 'Rame',
//     lastName: 'Shrestha',
//     position: {
//         name: 'sfgsdgsd',
//         skill: ['html', 'css', 'javascript']
//     },
//     workType: 'full'
// }

let frontEndDeveloper = {
  firstName: "Rame",
  lastName: "Shrestha",
  position: {
    name: "sfgsdgsd",
    skill: ["html", "css", "javascript"],
  },
  workType: "full-time",
} as Developer<FrontEndDeveloper, workType2>;

enum workType2 {
  fullTime = "full-time",
  partTime = "part-time",
  contract = "contract",
}

function getDeveloperWorkType<B>(
  developer: Developer<FrontEndDeveloper, workType2>
): B {
  return developer.workType as B;
}

getDeveloperWorkType<workType2>(frontEndDeveloper);

class DeveloperClass<T, A> {
  firstName: string;
  lastName: string;
  position: T;
  workType: A;

  constructor(firstName: string, lastName: string, position: T, workType: A) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.workType = workType;
  }
}

let frontEndDeveloperClass = new DeveloperClass<FrontEndDeveloper, workType2>(
  "Rame",
  "Shrestha",
  {
    name: "sfgsdgsd",
    skill: ["html", "css", "javascript"],
  },
  workType2.fullTime
);

