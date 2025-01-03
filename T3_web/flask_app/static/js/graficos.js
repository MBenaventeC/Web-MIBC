// Variables para almacenar las referencias a los gráficos
let chart1, chart2;

// Paletas de colores para los gráficos:
// GRÁFICO 1: ---
const palette1 = ["#6bc4e2", "#8396aa", "#9c6771", "#b43939"];
const palette2 = ["#eeb31b", "#d58c48", "#bb6376", "#a23ca3"];

// Función para obtener un color aleatorio de la paleta
function getRandomColor(palette) {
  return palette[Math.floor(Math.random() * palette.length)];
}

// GRÁFICO 1: Cantidad de cada fruta o verdura en "ver productos" a lo largo de todos los productos subidos
chart1 = Highcharts.chart("container1", {
  // El gráfico es de barras
  chart: {
    type: "column",
  },
  // Título
  title: {
    text: "Cantidad de cada fruta/verdura",
  },
  // Descripción del eje X
  xAxis: {
    type: "category",
    title: {
      text: "Frutas/Verduras",
    },
  },
  // Descripción del eje Y
  yAxis: {
    title: {
      text: "Cantidad",
    },
  },
  legend: {
    enabled: false, // Desactivar la leyenda de colores
  },
  series: [
    {
      name: "Cantidad",
      data: [], // Inicialmente sin datos, los añadiremos mediante la solicitud HTTP
    },
  ],
});

// GRÁFICO 2: Veces que se repite cada comuna en "ver pedidos" a lo largo de todos los pedidos subidos
chart2 = Highcharts.chart("container2", {
  // El gráfico es de barras
  chart: {
    type: "column",
  },
  // Títuto
  title: {
    text: "Cantidad de pedidos por comuna",
  },
  // Descripción del eje X
  xAxis: {
    type: "category",
    title: {
      text: "Comunas",
    },
  },
  // Descripción del eje Y
  yAxis: {
    title: {
      text: "Cantidad de pedidos",
    },
  },
  legend: {
    enabled: false, // Desactivar la leyenda de colores
  },
  series: [
    {
      name: "Cantidad de pedidos",
      data: [], // Inicialmente sin datos, los añadiremos mediante la solicitud HTTP
    },
  ],
});

// Realizamos una solicitud HTTP para obtener los datos de los gráficos
fetch("http://localhost:5000/conseguir-info")
  .then((response) => response.json())
  .then((data) => {
    // Datos para el gráfico de frutas y verduras
    const productosData = data.productos.map((item) => ({
      name: item.type,
      y: item.count,
      color: getRandomColor(palette1), // Asignar un color aleatorio de la paleta 1
    }));

    // Datos para el gráfico de pedidos por comuna
    const pedidosData = data.pedidos.map((item) => ({
      name: item.type,
      y: item.count,
      color: getRandomColor(palette2), // Asignar un color aleatorio de la paleta 2
    }));

    // Obtener el gráfico 1 por su ID
    const chart1 = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "container1"
    );

    // Obtener el gráfico 2 por su ID
    const chart2 = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "container2"
    );

    // Actualizamos los datos del gráfico 1
    chart1.update({
      series: [
        {
          data: productosData,
        },
      ],
    });

    // Actualizamos los datos del gráfico 2
    chart2.update({
      series: [
        {
          data: pedidosData,
        },
      ],
    });
  })
  .catch((error) => console.error("Error:", error));
