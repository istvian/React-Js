const products = [
  {
    id: "1",
    name: "Raspberry Pi 4",
    price: 70.000,
    category: "Mini Ordenador",
    img: "https://altronics.cl/image/image/catalog/productos/electronica/tarjetas/raspberry-pi4-4gb/raspberry-pi4-1-500x500.png",
    stock: 15,
    description: "Mini ordenador para realizar proyectos de electronica o programación. \nEspecificaciones:\n4gb Ram\nBluetooth\nWifi\nGPIO pins",
  },
  {
    id: "2",
    name: "Raspberry Pi 400",
    price: 100.000,
    category: "Mini ordenador",
    img: "https://raspberrypi.cl/wp-content/uploads/2021/05/raspberry-pi-400-1024x683.jpg",
    stock: 16,
    description: "Mini ordenador para realizar proyectos de electronica o programación, esta vez con forma de teclado",
  },
  {
    id: "3",
    name: "Adaptador corriente",
    price: 10.000,
    category: "Accesorios",
    img: "https://ae01.alicdn.com/kf/H8de4bc982a6b4a9dac12bcc1684c8182W/Raspberry-Pi-4-adaptador-de-corriente-oficial-fuente-de-USB-C-5-1-V-3A-enchufe.jpg",
    stock: 16,
    description: "Adaptador de corriente compatible con los modelos Raspberry Pi 4, Raspberry Pi 3",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      //reject("Fallo al consultar al servidor");
    }, 2000);
  });
};
export const getProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[0]);
      //reject("Fallo al consultar al servidor");
    }, 2000);
  });
};
