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

export const getNamesCryptos = () => {
  return fetch(
    "https://nocountrycohorte13.somee.com/api/Conversor/MonedasCriptoNombres"
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
      throw error;
    });
};

export const getNamesCurrencies = () => {
  return fetch(
    "https://nocountrycohorte13.somee.com/api/Conversor/MonedasPaisesNombres"
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
      throw error;
    });
};

export async function getDataFromCurrency(amount, baseCurrency, crypto, currency) {
  try {
    if (amount <= 0 || amount === "") {
      throw new Error("Invalid");
    }
    const url = `https://nocountrycohorte13.somee.com/api/Conversor/ConversorDesdeMoneda?Moneda=${baseCurrency}&Monto=${amount}&Coin=${crypto}&MonedaPais=${currency}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getDataFromCrypto(amount, crypto, currency1, currency2) {
  try {
    if (amount <= 0 || amount === "") {
      throw new Error("Invalid");
    }
    const url = `https://nocountrycohorte13.somee.com/api/Conversor/ConversorDesdeCripto2?Coin=${crypto}&Monto=${amount}&Moneda=${currency1}&MonedaPais=${currency2}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getDataFromCryptoConvertTraditional(amount, crypto, currency) {
  try {
    if (amount <= 0 || amount === "") {
      throw new Error("Invalid");
    }
    const url = `https://nocountrycohorte13.somee.com/api/Conversor/ConversorDesdeCripto?Coin=${crypto}&Monto=${amount}&Moneda=${currency}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
