# Desafios curso React Js CoderHouse

## Pasos para ejecutar el proyecto

En una nueva carpeta ejecuta los siguientes codigos
```
$ git clone https://github.com/istvian/React-Js.git
$ cd .\React-Js\
$ npm install
$ npm start
```

### `npm start`
Clona el repositorio a tu carpeta local
### `cd .\React-Js\`
Ingresa a la carpeta del proyecto
### `npm install`
Npm buscara las dependencias necesarias en el archivo package.json y las instalara
### `npm start`
Inicia el servidor en el navegador

## Componentes
Cree los siguientes componentes:
- ItemListContainer: Es el componente encargado de consultar al asyncMock y mostrar la lista de productos, ya sean todos los productos o por categoria.
- ItemList: Crea una lista desordenada
- Item: Es un componente reutilizable, el cual muestra el producto.

- ItemDetailContainer: Contiene la logica necesaria para hacer el llamado a la "API" y solicitar un producto por Id. A su vez pasa este contenido a ItemDetail
- ItemDetail: Es un componente reutilizable, el cual muestra el detalle de un producto.

- NavBar: Como su nombre lo dice contiene la navegación del sitio web, además de tener el componente CartWidget
- CartWidget: Componente que contiene la imagen del carrito de compras y un contador.

- asyncMock: Con este archivo simulamos la llamada a una API. El tiempo de respuesta se modifica con timeout.

## Navegación
La navegación del sitio web se realizó con `react-router-dom` el cual facilita el trabajo y genera una mejor experiencia de usuario al cambiar la url y generar historial.

## Link hacia el gif
[Imgur](https://imgur.com/vbiHNqL)

## Sobre el proyecto

A lo largo del curso he ido realizando desafios, los cuales estan guardados en cada una de las ramas de este repo.
La finalidad es hacer una web de un e-commerce. En este caso escogi un e-commerce ficticio que vende articulos electronicos.

