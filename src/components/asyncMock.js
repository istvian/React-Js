const products = [
  {
    id: "1",
    name: "Raspberry Pi 4",
    price: "70.000",
    category: "ordenadores",
    img: "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Raspberry_Pi_4_Model_B.jpg",
    stock: 15,
    description: "Mini ordenador para realizar proyectos de electronica o programación. \nEspecificaciones:\n4gb Ram\nBluetooth\nWifi\nGPIO pins",
  },
  {
    id: "2",
    name: "Raspberry Pi 400",
    price: "100.000",
    category: "ordenadores",
    img: "https://raspberrypi.cl/wp-content/uploads/2021/05/raspberry-pi-400-1024x683.jpg",
    stock: 16,
    description: "Mini ordenador para realizar proyectos de electronica o programación, esta vez con forma de teclado",
  },
  {
    id: "3",
    name: "Case Raspberry Pi 4b",
    price: "10.000",
    category: "accesorios",
    img: "https://www.vozdelsur.cl/2-99526_cdn/thumb-Raspberry-pi-4-modelo-b-2-4-8-gb-de-ram-7-pulgadas.jpeg",
    stock: 16,
    description: "Carcasa transparente para utilizar y proteger tu raspberry",
  },
  {
    id: "4",
    name: "Set de temperatura",
    price: "5.000",
    category: "accesorios",
    img: "https://cf.shopee.cl/file/12a2bf528ec158375b7da298df394189",
    stock: 12,
    description: "Ventilador y disipador de temperatura",
  },
  {
    id: "5",
    name: "Control Xbox",
    price: "25.000",
    category: "controles",
    img: "https://m.media-amazon.com/images/I/61z3GQgEPZL._SL1200_.jpg",
    stock: 30,
    description: "Control compatible con pc",
  },
  {
    id: "6",
    name: "Control PlayStation",
    price: "30.000",
    category: "controles",
    img: "https://m.media-amazon.com/images/I/612bjwBuobS._SL1500_.jpg",
    stock: 24,
    description: "Control compatible con pc y consola",
  },
  {
    id: "7",
    name: "NINTENDO SWITCH PRO CONTROLLER",
    price: "32.000",
    category: "controles",
    img: "https://home.ripley.cl/store/Attachment/WOP/D172/2000362620210/2000362620210_2.jpg",
    stock: 30,
    description: "Control compatible con consola Nintendo Switch",
  },
  {
    id: "8",
    name: "Joycons",
    price: "32.000",
    category: "controles",
    img: "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw1e396700/images/imagenes-productos/743/309215-0000-002.jpg?sw=320&sh=409&sm=fit",
    stock: 29,
    description: "Control compatible con consola Nintendo Switch",
  },
  {
    id: "9",
    name: "Consola Nintendo Switch",
    price: "200.000",
    category: "consolas",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one",
    stock: 14,
    description: "Consola Nintendo Switch",
  },
  {
    id: "10",
    name: "Consola PS5",
    price: "250.000",
    category: "consolas",
    img: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/11/30164156/PS5-edicion-digital-.jpeg",
    stock: 2,
    description: "Consola PlayStation 5",
  },
];
const timeout = 100;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      //reject("Fallo al consultar al servidor");
    }, timeout);
  });
};
export const getProductByID = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id == id));
      //reject("Fallo al consultar al servidor");
    }, timeout);
  });
};
export const getProductsByCategory = (cat) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === cat));
      //reject("Fallo al consultar al servidor");
    }, timeout);
  });
};
