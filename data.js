/* =========================================================
   CastelAutos - Datos de demostración
   Todos los vehículos, precios y vendedores son ficticios.
   Para usar fotos reales agrega un arreglo `fotos: ['img/a.jpg', ...]`
   a cualquier vehículo; si no existe, se generan ilustraciones.
   ========================================================= */

const VENDEDORES = {
  castel:  { nombre: 'CastelAutos Oficial', tipo: 'Concesionario', verificado: true,  tel: '573001112233', rep: 5, ventas: 1240, ciudad: 'Bogotá',       desde: 2012 },
  norte:   { nombre: 'Autos del Norte',     tipo: 'Concesionario', verificado: true,  tel: '573002223344', rep: 4, ventas: 560,  ciudad: 'Barranquilla', desde: 2016 },
  pacifico:{ nombre: 'Pacífico Motors',     tipo: 'Concesionario', verificado: true,  tel: '573003334455', rep: 4, ventas: 410,  ciudad: 'Cali',         desde: 2018 },
  juan:    { nombre: 'Juan P. Ramírez',     tipo: 'Particular',    verificado: false, tel: '573004445566', rep: 3, ventas: 3,    ciudad: 'Medellín',     desde: 2021 },
  marta:   { nombre: 'Marta L. Gómez',      tipo: 'Particular',    verificado: true,  tel: '573005556677', rep: 5, ventas: 7,    ciudad: 'Bogotá',       desde: 2019 }
};

/* Equipamiento por nivel (0 = básico ... 3 = full) */
function eq(n) {
  const seg = ["Airbags frontales y laterales", "Frenos ABS con EBD", "Control de estabilidad (ESP)", "Anclajes ISOFIX", "Alarma antirrobo", "Cámara de reversa", "Sensores de parqueo", "Control de tracción", "Asistente de arranque en pendiente", "Monitoreo de punto ciego", "Frenado autónomo de emergencia", "Alerta de cambio de carril"];
  const con = ["Aire acondicionado", "Vidrios eléctricos", "Cierre centralizado", "Dirección asistida", "Piloto automático (cruise control)", "Aire acondicionado automático", "Silla del conductor eléctrica", "Sensor de lluvia", "Techo panorámico", "Rines de aleación", "Asientos en cuero", "Llave inteligente / Start-Stop"];
  const mul = ["Radio Bluetooth", "Entrada USB", "Pantalla táctil", "Apple CarPlay / Android Auto", "Cargador inalámbrico", "Sistema de sonido premium", "Navegación GPS"];
  return {
    seguridad:  seg.slice(0, [5, 7, 9, 12][n]),
    confort:    con.slice(0, [5, 8, 10, 12][n]),
    multimedia: mul.slice(0, [2, 4, 6, 7][n])
  };
}

function mk(o) {
  const base = { puertas: 5, pasajeros: 5, duenos: 1, garantia: 'Sin garantía', permuta: true, destacado: false, dias: 5, nivel: 1 };
  const v = Object.assign({}, base, o);
  v.placa = v.placa || ('Terminada en ' + (v.id * 3 % 10));
  v.equipamiento = eq(v.nivel);
  v.descripcion = v.descripcion ||
    `${v.marca} ${v.modelo} ${v.version} ${v.anio} en excelente estado, ${v.condicion === 'Nuevo' ? 'sin uso, directo de concesionario' : 'con mantenimientos al día en concesionario'}. ` +
    `Motor ${v.motor}, transmisión ${v.transmision.toLowerCase()} y tracción ${v.traccion}. ` +
    `Documentos al día, ${v.duenos === 1 ? 'único dueño' : v.duenos + ' dueños'}. ${v.permuta ? 'Recibimos tu vehículo en permuta. ' : ''}Agenda tu prueba de manejo.`;
  return v;
}

const VEHICULOS = [
  mk({ id: 1,  marca: 'Renault',    modelo: 'Duster',        version: 'Intens 1.3 Turbo', anio: 2023, precio: 82900000,  km: 38000, condicion: 'Usado', tipo: 'SUV',       combustible: 'Gasolina',  transmision: 'Automática', motor: '1.3L Turbo',  cilindraje: 1332, potencia: '156 hp', traccion: '4x2', consumo: '13 km/L', color: 'Gris Cassiopée', hex: '#7b8088', ciudad: 'Bogotá',       vendedor: 'castel',   destacado: true, dias: 3,  nivel: 2, garantia: '6 meses de garantía mecánica' }),
  mk({ id: 2,  marca: 'Mazda',      modelo: 'CX-30',         version: 'Touring',          anio: 2022, precio: 98500000,  km: 41500, condicion: 'Usado', tipo: 'SUV',       combustible: 'Gasolina',  transmision: 'Automática', motor: '2.0L Skyactiv', cilindraje: 1998, potencia: '156 hp', traccion: '4x2', consumo: '14 km/L', color: 'Rojo Soul', hex: '#b3122b', ciudad: 'Medellín',     vendedor: 'juan',     dias: 9,  nivel: 2 }),
  mk({ id: 3,  marca: 'Chevrolet',  modelo: 'Onix',          version: 'Turbo Premier',    anio: 2024, precio: 79900000,  km: 0,     condicion: 'Nuevo', tipo: 'Hatchback', combustible: 'Gasolina',  transmision: 'Automática', motor: '1.0L Turbo',  cilindraje: 999,  potencia: '116 hp', traccion: '4x2', consumo: '16 km/L', color: 'Blanco Summit', hex: '#f1f1ee', ciudad: 'Cali',         vendedor: 'pacifico', destacado: true, dias: 1,  nivel: 2, garantia: '3 años / 100.000 km', placa: 'Por matricular' }),
  mk({ id: 4,  marca: 'Toyota',     modelo: 'Hilux',         version: 'SRV 4x4 2.8 TDI',  anio: 2021, precio: 168000000, km: 67000, condicion: 'Usado', tipo: 'Pickup',    combustible: 'Diésel',    transmision: 'Automática', motor: '2.8L Turbodiésel', cilindraje: 2755, potencia: '204 hp', traccion: '4x4', consumo: '11 km/L', color: 'Gris Metálico', hex: '#5c6168', ciudad: 'Barranquilla', vendedor: 'norte',    dias: 12, nivel: 3, puertas: 4, duenos: 2 }),
  mk({ id: 5,  marca: 'Kia',        modelo: 'Picanto',       version: 'Zenith',           anio: 2023, precio: 58900000,  km: 14200, condicion: 'Usado', tipo: 'Hatchback', combustible: 'Gasolina',  transmision: 'Automática', motor: '1.25L',       cilindraje: 1248, potencia: '83 hp',  traccion: '4x2', consumo: '19 km/L', color: 'Azul Celeste', hex: '#3b82c4', ciudad: 'Bogotá',       vendedor: 'marta',    dias: 2,  nivel: 1 }),
  mk({ id: 6,  marca: 'Mazda',      modelo: '3',             version: 'Grand Touring LX', anio: 2023, precio: 109900000, km: 22000, condicion: 'Usado', tipo: 'Sedán',     combustible: 'Gasolina',  transmision: 'Automática', motor: '2.5L Skyactiv', cilindraje: 2488, potencia: '188 hp', traccion: '4x2', consumo: '13 km/L', color: 'Gris Machine', hex: '#4b4f55', ciudad: 'Bogotá',       vendedor: 'castel',   destacado: true, dias: 4,  nivel: 3, puertas: 4, garantia: '12 meses de garantía' }),
  mk({ id: 7,  marca: 'BYD',        modelo: 'Dolphin',       version: 'Comfort',          anio: 2024, precio: 142000000, km: 0,     condicion: 'Nuevo', tipo: 'Hatchback', combustible: 'Eléctrico', transmision: 'Automática', motor: 'Eléctrico 70 kW', cilindraje: 0,    potencia: '95 hp',  traccion: '4x2', consumo: '410 km de autonomía', color: 'Azul Surf', hex: '#2aa7c9', ciudad: 'Medellín',     vendedor: 'castel',   destacado: true, dias: 2,  nivel: 3, garantia: '6 años / 150.000 km (batería 8 años)', placa: 'Por matricular' }),
  mk({ id: 8,  marca: 'Ford',       modelo: 'Ranger',        version: 'Wildtrak 3.2',     anio: 2022, precio: 219000000, km: 52000, condicion: 'Usado', tipo: 'Pickup',    combustible: 'Diésel',    transmision: 'Automática', motor: '3.2L Turbodiésel', cilindraje: 3198, potencia: '200 hp', traccion: '4x4', consumo: '10 km/L', color: 'Naranja Saber', hex: '#d9631e', ciudad: 'Bucaramanga',  vendedor: 'norte',    dias: 15, nivel: 3, puertas: 4 }),
  mk({ id: 9,  marca: 'Toyota',     modelo: 'Corolla Cross', version: 'XEI Híbrido',      anio: 2024, precio: 159900000, km: 0,     condicion: 'Nuevo', tipo: 'SUV',       combustible: 'Híbrido',   transmision: 'Automática', motor: '1.8L Híbrido', cilindraje: 1798, potencia: '122 hp', traccion: '4x2', consumo: '22 km/L', color: 'Blanco Perla', hex: '#ecebe6', ciudad: 'Cali',         vendedor: 'pacifico', dias: 6,  nivel: 3, garantia: '3 años / 100.000 km', placa: 'Por matricular' }),
  mk({ id: 10, marca: 'Volkswagen', modelo: 'Tiguan',        version: 'Allspace 2.0 TSI', anio: 2020, precio: 128000000, km: 71000, condicion: 'Usado', tipo: 'SUV',       combustible: 'Gasolina',  transmision: 'Automática', motor: '2.0L TSI',    cilindraje: 1984, potencia: '220 hp', traccion: '4x4', consumo: '10 km/L', color: 'Negro Profundo', hex: '#1b1d21', ciudad: 'Bogotá',       vendedor: 'marta',    dias: 21, nivel: 3, pasajeros: 7, duenos: 2 }),
  mk({ id: 11, marca: 'Hyundai',    modelo: 'Tucson',        version: 'Limited 2.0',      anio: 2021, precio: 118500000, km: 56000, condicion: 'Usado', tipo: 'SUV',       combustible: 'Gasolina',  transmision: 'Automática', motor: '2.0L MPI',    cilindraje: 1999, potencia: '156 hp', traccion: '4x4', consumo: '11 km/L', color: 'Plata', hex: '#b9bdc2', ciudad: 'Cartagena',    vendedor: 'norte',    dias: 8,  nivel: 2 }),
  mk({ id: 12, marca: 'Nissan',     modelo: 'Versa',         version: 'Advance',          anio: 2022, precio: 64900000,  km: 33000, condicion: 'Usado', tipo: 'Sedán',     combustible: 'Gasolina',  transmision: 'Manual',     motor: '1.6L',        cilindraje: 1598, potencia: '118 hp', traccion: '4x2', consumo: '15 km/L', color: 'Blanco', hex: '#f4f4f2', ciudad: 'Medellín',     vendedor: 'juan',     dias: 18, nivel: 1, puertas: 4 }),
  mk({ id: 13, marca: 'Chevrolet',  modelo: 'Tracker',       version: 'Premier 1.2 Turbo', anio: 2023, precio: 96500000, km: 25000, condicion: 'Usado', tipo: 'SUV',       combustible: 'Gasolina',  transmision: 'Automática', motor: '1.2L Turbo',  cilindraje: 1199, potencia: '132 hp', traccion: '4x2', consumo: '14 km/L', color: 'Rojo Cereza', hex: '#a3182a', ciudad: 'Barranquilla', vendedor: 'norte',    dias: 7,  nivel: 2 }),
  mk({ id: 14, marca: 'BMW',        modelo: '320i',          version: 'Sport Line',       anio: 2019, precio: 149000000, km: 62000, condicion: 'Usado', tipo: 'Sedán',     combustible: 'Gasolina',  transmision: 'Automática', motor: '2.0L TwinPower Turbo', cilindraje: 1998, potencia: '184 hp', traccion: '4x2', consumo: '12 km/L', color: 'Azul Estoril', hex: '#1f3f7a', ciudad: 'Bogotá',       vendedor: 'marta',    dias: 30, nivel: 3, puertas: 4, duenos: 2 }),
  mk({ id: 15, marca: 'Suzuki',     modelo: 'Swift',         version: 'GLX',              anio: 2022, precio: 57900000,  km: 29000, condicion: 'Usado', tipo: 'Hatchback', combustible: 'Gasolina',  transmision: 'Manual',     motor: '1.2L',        cilindraje: 1197, potencia: '90 hp',  traccion: '4x2', consumo: '18 km/L', color: 'Amarillo', hex: '#e8b923', ciudad: 'Pereira',      vendedor: 'juan',     dias: 10, nivel: 1 }),
  mk({ id: 16, marca: 'Ford',       modelo: 'Mustang',       version: 'GT 5.0 V8',        anio: 2020, precio: 320000000, km: 28000, condicion: 'Usado', tipo: 'Deportivo', combustible: 'Gasolina',  transmision: 'Automática', motor: '5.0L V8',     cilindraje: 4951, potencia: '450 hp', traccion: '4x2', consumo: '7 km/L',  color: 'Azul Velocidad', hex: '#1459a8', ciudad: 'Bogotá',       vendedor: 'castel',   destacado: true, dias: 14, nivel: 3, puertas: 2, pasajeros: 4, permuta: false, garantia: '6 meses de garantía mecánica' })
];

/* Preguntas y respuestas de ejemplo (por id de vehículo) */
VEHICULOS.find(v => v.id === 1).preguntas = [
  { q: '¿Tiene historial de mantenimiento en concesionario?', a: 'Sí, todos los mantenimientos están en concesionario Renault. Puedes verificar la carpeta en la prueba de manejo.' },
  { q: '¿Aceptan permuta por un vehículo de menor valor?', a: 'Claro, hacemos peritaje gratuito y te damos una oferta en el mismo día.' }
];
VEHICULOS.find(v => v.id === 7).preguntas = [
  { q: '¿Incluye cargador de pared?', a: 'Sí, incluye cargador portátil y cable tipo 2. La instalación del wallbox es opcional.' }
];
