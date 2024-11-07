import { Spinner } from "@material-tailwind/react";
import { XYChart, BarSeries, Axis, Grid } from "@visx/xychart";
import { useEffect, useState } from "react";
import { useBlockUI } from "../../lib/context/useBlockUI";

const accessors = {
  xAccessor: (d) => d.label,
  yAccessor: (d) => d.value,
};

const colorAccessor = (d) => {
  switch (d.label) {
    case "Propiedades":
      return "#FF5733";
    case "Transacciones":
      return "#33FF57";
    case "Usuarios registrados":
      return "#FF33FF";
    case "Usuarios activos":
      return "#3357FF";
    default:
      return "#000";
  }
};

const Reports = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { blockUI, unblockUI } = useBlockUI();

  const generateReportData = async () => {
    blockUI("Generando reporte mensual...");
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/report",
        {
          method: "GET",
          headers: {
            Accept: "application/pdf",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImZlbGlwZUBmZWxpcGUuY29tIiwiaWF0IjoxNzMwODM4MDUyLCJleHAiOjE3MzA4NDE2NTJ9.yAUg0i8WmKAlqjPaiWREv52p55O6SwYLs-h2_KkeCQI`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("No se pudo descargar el reporte");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Reporte_Angulum.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
    } finally {
      unblockUI();
    }
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(import.meta.env.VITE_BACKEND_URL + "/api/report/json", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const reportData = [
            { label: "Propiedades", value: data.totalRealEstates },
            { label: "Transacciones", value: data.totalTransactions },
            {
              label: "Usuarios registrados",
              value: data.totalRegisteredUsers,
            },
            { label: "Usuarios activos", value: data.totalActiveUsers },
          ];
          setData(reportData);
        })
        .catch((error) => {
          console.error("Error fetching report data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex p-12 max-w-3xl flex-col">
      <button
        onClick={generateReportData}
        className="absolute top-[100px] right-4 p-2 bg-black text-white rounded-lg"
      >
        Descagar reporte
      </button>
      <h2 className="font-bold text-2xl">Reportes</h2>
      <p className="mt-2 text-[#575757]">
        Analiza las estadísticas detalladamente y descárgalas para utilizarlas
        según tus necesidades específicas. Descargalas para darles el uso que
        quieras.
      </p>
      <div className="mt-4">
        {loading ? (
          <Spinner color="blue" size="large" />
        ) : data.length > 0 ? (
          <XYChart
            height={400}
            width={600}
            xScale={{ type: "band" }}
            yScale={{ type: "linear" }}
          >
            <Grid columns={false} numTicks={4} />
            <BarSeries
              dataKey="Estadísticas"
              data={data}
              {...accessors}
              colorAccessor={colorAccessor}
            />
            <Axis orientation="bottom" />
            <Axis orientation="left" />
          </XYChart>
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Reports;

/*
Con los datos que tienes (`Propiedades`, `Transacciones`, `Usuarios registrados`, `Usuarios activos`), además del gráfico de barras, hay varias opciones de visualización que podrían ser útiles para resaltar diferentes aspectos de estos datos. Aquí te doy algunas sugerencias de gráficos que puedes agregar y que complementan bien un gráfico de barras.

### 1. **Gráfico de Donut o Pie (Torta)**
Un gráfico de **donut** o **pie** es una excelente opción para mostrar cómo se distribuyen los diferentes datos en proporciones relativas. Podrías usarlo para mostrar la proporción de `Propiedades`, `Transacciones`, `Usuarios registrados` y `Usuarios activos` como parte de un total.

#### Ejemplo con `@visx/shape` para un gráfico de Donut:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const width = 400;
const height = 400;
const radius = Math.min(width, height) / 2;

const ReportDonutChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report/stats', {
          params: {
            startDate: '2023-01-01',  // Fecha predeterminada
            endDate: '2023-01-31',    // Fecha predeterminada
          },
        });
        const reportData = [
          { label: 'Propiedades', value: response.data.totalRealEstates },
          { label: 'Transacciones', value: response.data.totalTransactions },
          { label: 'Usuarios registrados', value: response.data.totalRegisteredUsers },
          { label: 'Usuarios activos', value: response.data.totalActiveUsers },
        ];
        setData(reportData);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchData();
  }, []);

  const colorAccessor = (d) => {
    switch (d.label) {
      case 'Propiedades':
        return '#FF5733';  // Naranja
      case 'Transacciones':
        return '#33FF57';  // Verde
      case 'Usuarios registrados':
        return '#FF33FF';  // Rosado
      case 'Usuarios activos':
        return '#3357FF';  // Azul
      default:
        return '#000';     // Negro por defecto
    }
  };

  return (
    <svg width={width} height={height}>
      <Group top={height / 2} left={width / 2}>
        <Pie
          data={data}
          pieValue={(d) => d.value}
          outerRadius={radius}
          innerRadius={radius - 100} // Hace que sea un gráfico tipo donut
          padAngle={0.02}
        >
          {(pie) =>
            pie.arcs.map((arc, index) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const arcData = arc.data;
              return (
                <g key={`arc-${index}`}>
                  <path d={pie.path(arc)} fill={colorAccessor(arcData)} />
                  <Text x={centroidX} y={centroidY} dy=".33em" fontSize={12} textAnchor="middle" fill="white">
                    {arcData.label}
                  </Text>
                </g>
              );
            })
          }
        </Pie>
      </Group>
    </svg>
  );
};

export default ReportDonutChart;
```

### Explicación:
- **Donut**: Se usa un gráfico de "torta" con un radio interno para crear el efecto de donut.
- **Colores**: Cada sección del gráfico tiene un color único usando la función `colorAccessor` como en el gráfico de barras.
- **Proporciones**: Las proporciones del gráfico dependen de los valores de `Propiedades`, `Transacciones`, `Usuarios registrados`, y `Usuarios activos`.

### 2. **Gráfico de Líneas**
Un **gráfico de líneas** es útil si tienes datos que cambian con el tiempo. Por ejemplo, si tienes los datos históricos de `Transacciones` o `Usuarios registrados` a lo largo de varios meses, puedes mostrar las tendencias de crecimiento o caída.

#### Ejemplo con `@visx/xychart` para un gráfico de Líneas:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XYChart, LineSeries, Axis, Grid } from '@visx/xychart';

const accessors = {
  xAccessor: (d) => d.date, // Fecha en el eje X
  yAccessor: (d) => d.value, // Valor numérico en el eje Y
};

const ReportLineChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report/stats/history', {
          params: {
            // Aquí podrías pasar el rango de fechas o no
          },
        });
        const reportData = response.data.map((entry) => ({
          date: entry.date,  // Suponiendo que el API devuelve la fecha
          value: entry.totalTransactions, // Total de transacciones o cualquier otro valor
        }));
        setData(reportData);
      } catch (error) {
        console.error('Error fetching report data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h2>Transacciones a lo largo del tiempo</h2>
      <XYChart height={400} width={600} xScale={{ type: 'time' }} yScale={{ type: 'linear' }}>
        <Grid columns={false} numTicks={4} />
        <LineSeries dataKey="Transacciones" data={data} {...accessors} />
        <Axis orientation="bottom" />
        <Axis orientation="left" />
      </XYChart>
    </div>
  );
};

export default ReportLineChart;
```

### Explicación:
- **Eje X**: Representa el tiempo (fechas).
- **Eje Y**: Representa el valor de las transacciones, usuarios, o propiedades a lo largo del tiempo.
- **Tendencias**: Un gráfico de líneas es útil para observar cómo evolucionan las métricas con el tiempo.

### 3. **Gráfico de Área**
Un gráfico de área es similar a un gráfico de líneas, pero el área debajo de la línea está coloreada, lo que ayuda a enfatizar el volumen o el total acumulado en el gráfico.

#### Ejemplo con `@visx/xychart` para un gráfico de Área:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XYChart, AreaSeries, Axis, Grid } from '@visx/xychart';

const accessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d.value,
};

const ReportAreaChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report/stats/history', {
          params: {
            // Parámetros de la solicitud si es necesario
          },
        });
        const reportData = response.data.map((entry) => ({
          date: entry.date,
          value: entry.totalRegisteredUsers, // Por ejemplo, cantidad de usuarios registrados
        }));
        setData(reportData);
      } catch (error) {
        console.error('Error fetching report data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h2>Usuarios registrados a lo largo del tiempo</h2>
      <XYChart height={400} width={600} xScale={{ type: 'time' }} yScale={{ type: 'linear' }}>
        <Grid columns={false} numTicks={4} />
        <AreaSeries dataKey="Usuarios Registrados" data={data} {...accessors} fill="#FF33FF" />
        <Axis orientation="bottom" />
        <Axis orientation="left" />
      </XYChart>
    </div>
  );
};

export default ReportAreaChart;
```

### Explicación:
- **Gráfico de área**: Similar a un gráfico de líneas, pero coloreado debajo de la línea para mostrar el volumen o acumulado.
- **Comparaciones**: Es útil para ver acumulaciones o comparaciones de volúmenes en el tiempo.

### Resumen:

- **Gráfico de Donut (Torta)**: Para mostrar la proporción relativa entre diferentes categorías (`Propiedades`, `Transacciones`, `Usuarios registrados`, etc.).
- **Gráfico de Líneas**: Para mostrar tendencias a lo largo del tiempo, como la evolución de transacciones o usuarios activos.
- **Gráfico de Área**: Similar al gráfico de líneas, pero con un área coloreada debajo para destacar el volumen acumulado.

Cada uno de estos gráficos puede
*/
