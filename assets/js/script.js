let sitio = {
    nombre: "ecamp",
};

let handler = {
    get: function(target, propiedad) {
        console.log(`GET ${propiedad}`);
        return Reflect.get(target, propiedad);
        },
    set: function(target, propiedad, valor) {
        console.log(`SET ${propiedad}=${valor}`);
        return Reflect.set(target,propiedad, valor);
        }
};

let proxy = new Proxy(sitio, handler);

let nombre = proxy.nombre;
proxy.nombre = "ECAMP";
console.log(nombre);