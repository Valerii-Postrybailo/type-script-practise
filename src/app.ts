/////////---Задайте правильні ts типи для класичних js---/////////

let age :number;
age = 50;

let userName :string;
userName = 'Max';

let toggle : boolean;
toggle = true;

let empty : null;
empty = null;

let notInitialize : undefined;
notInitialize = undefined;

let callback = (a: number) => { return 100 + a };

//////---Задайте тип для змінної, в яку можна зберегти будь-яке значення---//////

let anything :any;
anything = 'Text';
anything = {};
anything = -20;

//////---Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом---/////

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === "string" ){
  str = some;
}

/////---Зробіть незмінний масив із суворо описаними типами. Масив для прикладу---/////

let person: [string, number];

person = ['Max', 21];

/////---Опишіть enum умову наступну: він повинен відображати статус завантаження.---////
/////---Завантажується (LOADING) та завантажена (READY)---//////

enum Download {LOADING, READY};


////---Зробіть змінну, яка може приймати або рядок, або число----/////

let stringOrNumber: string | number; //union type

stringOrNumber = "string";
stringOrNumber = 4;

////---Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'----/////

let enableOrDisable: "enable" | "disable";

enableOrDisable = "enable"; //literal type

/////---Вкажіть типи для наступних функцій---/////

function showMessage(message:string):void {
  console.log(message);
};


function calc(num1:number, num2:number):number {
  return num1 + num2;
};

function customError():never {
  throw new Error('Error');
};

////---Створіть свій тип даних на основі наявних даних----////

type page = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
};

const page1: page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
};

const page2: page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};