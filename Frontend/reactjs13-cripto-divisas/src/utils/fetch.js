// export const getCriptos = async () => {
//     try {
//       const response = await fetch(
//         "https://nocountrycohorte13.somee.com/api/Conversor/Criptos"
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
//       }
//       const data = await response.json();
//       //console.log(data);
//       return data;
//     } catch (error) {
//       console.error('Hubo un error al hacer la solicitud fetch:', error.message);
//       return ["BTC", "ETH"];
//     }
//   };

// export const getDivisas = async () => {
//   try {
//     const response = await fetch(
//       "https://nocountrycohorte13.somee.com/api/Conversor/MonedasPaises"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
//     }
//     const data = await response.json();
//     //console.log(data);
//        return data;
//   } catch (error) {
//     console.error('Hubo un error al hacer la solicitud fetch:', error.message);
//     return ["USD", "COP"];
//   }
// };

export const getCriptos = () => {
  return fetch("https://nocountrycohorte13.somee.com/api/Conversor/Criptos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "Hubo un error al hacer la solicitud fetch:",
        error.message
      );
      return ["BTC", "ETH"];
    });
};

export const getDivisas = () => {
  return fetch(
    "https://nocountrycohorte13.somee.com/api/Conversor/MonedasPaises"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "Hubo un error al hacer la solicitud fetch:",
        error.message
      );
      return ["USD", "COP"];
    });
};

export async function getDataDesdeMoneda(monto, moneda, coin, monedaPais) {
  try {
    const url = `https://nocountrycohorte13.somee.com/api/Conversor/ConversorDesdeMoneda?Moneda=${moneda}&Monto=${monto}&Coin=${coin}&MonedaPais=${monedaPais}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un error al hacer la solicitud fetch:", error.message);
  }
}

export async function getDataDesdeCripto(monto, coin, moneda, monedaPais) {
  try {
    const url = `https://nocountrycohorte13.somee.com/api/Conversor/ConversorDesdeCripto?Coin=${coin}&Monto=${monto}&Moneda=${moneda}&MonedaPais=${monedaPais}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un error al hacer la solicitud fetch:", error.message);
  }
}
