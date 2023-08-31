"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const ChartComponent = () =>{
    const chartRef = useRef(null);

    useEffect(()=>{
        const myChartRef = chartRef.current.getContext('2d');

            const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );

        const data = response.data.prices; // Ajusta la estructura según la respuesta de la API

        const prices = data.map((item) => item[1]); // Extrae los precios

        new Chart(myChartRef, {
            type: 'line', // Cambia el tipo de gráfica aquí (line, bar, pie, etc.)
            data: {
              labels: Array.from({ length: prices.length }, (_, i) => i + 1),
              datasets: [
                {
                  label: 'Precio de Bitcoin (USD)',
                  data: prices,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
                },
              ],
            },
        })
    } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      
      fetchData();
    }, []);

    return(
        <div>
            <canvas ref={chartRef} />
        </div>
    )
};

export default ChartComponent