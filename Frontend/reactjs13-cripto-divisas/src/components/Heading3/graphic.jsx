"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
import "../Heading3/graphic.css"

const ChartComponent = () =>{
    const chartRef = useRef(null);
    const [bitcoinData, setBitcoinData] = useState([]);
    const [ethereumData, setEthereumData] = useState([]);
    const [dogecoinData, setDogeCoinData] = useState([]);

    useEffect(() => {
      const fetchBitcoinData = async () => {
        try {
          const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
          );
          setBitcoinData(response.data.prices);
        } catch (error) {
          console.error('Error fetching Bitcoin data:', error);
        }
      };
  
      const fetchEthereumData = async () => {
        try {
          const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7'
          );
          setEthereumData(response.data.prices);
        } catch (error) {
          console.error('Error fetching Ethereum data:', error);
        }
      };

      const fetchDogecoinData = async () => {
        try {
          const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=7'
          );
          setDogeCoinData(response.data.prices);
        } catch (error) {
          console.error('Error fetching Dogecoin data:', error);
        }
      };
  
      fetchBitcoinData();
      fetchEthereumData();
      fetchDogecoinData();
    }, []);
  
    useEffect(() => {
      if (chartRef.current && bitcoinData.length > 0 && ethereumData.length > 0 && dogecoinData.length > 0) {
        const myChartRef = chartRef.current.getContext('2d');
  
        const bitcoinPrices = bitcoinData.map((item) => item[1]);
        const ethereumPrices = ethereumData.map((item) => item[1]);
        const dogecoinPrices = dogecoinData.map((item) => item[1]);
  
        new Chart(myChartRef, {
          type: 'line', // Cambia el tipo de gráfica aquí (line, bar, pie, etc.)
          data: {
            labels: Array.from({ length: bitcoinPrices.length }, (_, i) => i + 1),
            datasets: [
              {
                label: 'Precio de Bitcoin (USD)',
                data: bitcoinPrices,
                borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
                borderWidth: 1,
              },
              {
                label: 'Precio de Ethereum (USD)',
                data: ethereumPrices,
                borderColor: 'rgba(192, 75, 192, 1)', // Otro color para Ethereum
                borderWidth: 1,
              },
              {
                label: 'Precio de Dogecoin (USD)',
                data: dogecoinPrices,
                borderColor: 'rgba(44, 79, 192, 1)', // Otro color para Ethereum
                borderWidth: 1,
              },
            ],
          },
          options: {
            width: 400, // Establece el ancho de la gráfica en píxeles
            height: 900, // Establece la altura de la gráfica en píxeles
            maintainAspectRatio: false, // Asegura que no se mantenga el aspect ratio automáticamente
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });
      }
    }, [chartRef.current, bitcoinData, ethereumData, dogecoinData]);

    return(
        <div>
            <canvas ref={chartRef} id="graphic"/>
        </div>
    )
};

export default ChartComponent