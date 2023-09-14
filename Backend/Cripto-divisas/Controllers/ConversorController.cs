

using Cripto_divisas.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
using System.Text.Json;
using System.Threading;


namespace Cripto_divisas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversorController : ControllerBase

    {
        private readonly IHttpClientFactory httpClientFactory;
        public ConversorController(IHttpClientFactory _httpClientFactory)
        {
            httpClientFactory = _httpClientFactory;
        }

        [HttpGet("Noticias")]
        public async Task<ActionResult> GetNoticias()
        {

            var httpRequestMessage = new HttpRequestMessage(
          HttpMethod.Get,
       "https://newsdata.io/api/1/news?apikey=pub_28912f77676f83d37db72bd7525ebe81c45b4&image=1&q=bitcoin&language=es,en");


            var httpClient = httpClientFactory.CreateClient();

            var response = await httpClient.SendAsync(httpRequestMessage); // Cambia la URL a la API externa real

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();

                // Puedes procesar el contenido JSON recibido y devolverlo como respuesta en tu API
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var responses = JsonSerializer.Deserialize<CriptoNoticias>(content, options);




                return Ok(responses.results);
            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }

        }

        [HttpGet("MonedasCriptoNombres")]
        public async Task<IActionResult> GetCriptosNombreAsync()
        {
            List<CurrencyInfo> monedas = new List<CurrencyInfo>
        {
            new CurrencyInfo { value = "BTC", name = "Bitcoin" },
            new CurrencyInfo { value = "DAI", name = "Dai" },
            new CurrencyInfo { value = "ETH", name = "Ethereum" },
            new CurrencyInfo { value = "USDT", name = "Tether" },
            new CurrencyInfo { value = "USDC", name = "USD Coin" },
            new CurrencyInfo { value = "BNB", name = "Binance Coin" },
            new CurrencyInfo { value = "BUSD", name = "Binance USD" },
            new CurrencyInfo { value = "AAVE", name = "Aave" },
            new CurrencyInfo { value = "ADA", name = "Cardano" },
            new CurrencyInfo { value = "AXS", name = "Axie Infinity" },
            new CurrencyInfo { value = "BAT", name = "Basic Attention Token" },
            new CurrencyInfo { value = "CAKE", name = "PancakeSwap" },
            new CurrencyInfo { value = "DOGE", name = "Dogecoin" },
            new CurrencyInfo { value = "DOT", name = "Polkadot" },
            new CurrencyInfo { value = "EOS", name = "EOS" },
            new CurrencyInfo { value = "LINK", name = "Chainlink" },
            new CurrencyInfo { value = "LTC", name = "Litecoin" },
            new CurrencyInfo { value = "MANA", name = "Decentraland" },
            new CurrencyInfo { value = "PAXG", name = "PAX Gold" },
            new CurrencyInfo { value = "SAND", name = "The Sandbox" },
            new CurrencyInfo { value = "SHIB", name = "Shiba Inu" },
            new CurrencyInfo { value = "SLP", name = "Smooth Love Potion" },
            new CurrencyInfo { value = "SOL", name = "Solana" },
            new CurrencyInfo { value = "TRX", name = "TRON" },
            new CurrencyInfo { value = "UNI", name = "Uniswap" },
            new CurrencyInfo { value = "XLM", name = "Stellar" },
            new CurrencyInfo { value = "XRP", name = "XRP" },
            new CurrencyInfo { value = "AVAX", name = "Avalanche" },
            new CurrencyInfo { value = "BCH", name = "Bitcoin Cash" },
            new CurrencyInfo { value = "CHZ", name = "Chiliz" },
            new CurrencyInfo { value = "FTM", name = "Fantom" },
            new CurrencyInfo { value = "MATIC", name = "Polygon" },
            new CurrencyInfo { value = "ALGO", name = "Algorand" },
            new CurrencyInfo { value = "USDP", name = "USDP Stablecoin" },
            new CurrencyInfo { value = "NUARS", name = "NuAr Stablecoin" },
            new CurrencyInfo { value = "DOC", name = "Digital One Coin" },
            new CurrencyInfo { value = "UXD", name = "UxD Token" }
        };

            string json = JsonSerializer.Serialize(monedas, new JsonSerializerOptions
            {
                WriteIndented = true
            });
            return Ok(json);
            
            
        }
        [HttpGet("MonedasPaisesNombres")]
        public async Task<IActionResult> GetMonedasNombreAsync()
        {
            var httpRequestMessage = new HttpRequestMessage(
            HttpMethod.Get,
         "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/codes");


            var httpClient = httpClientFactory.CreateClient();

            var response = await httpClient.SendAsync(httpRequestMessage); // Cambia la URL a la API externa real

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();

                // Puedes procesar el contenido JSON recibido y devolverlo como respuesta en tu API
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var responses = JsonSerializer.Deserialize<ExchangeRateResponse>(content, options);

                var coins = new List<CurrencyInfo>();

                foreach (var coinInfo in responses.supported_codes)
                {
                    coins.Add(new CurrencyInfo { value = coinInfo[0], name = coinInfo[1] });
                }
                return Ok(coins);
            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }
        }

        [HttpGet("Criptos")]

        public IActionResult GetCriptos()
        {
            var criptos = new List<string>
            {
                "BTC", "DAI", "ETH", "USDT", "USDC", "BNB", "BUSD", "AAVE", "ADA", "AXS",
                "BAT", "CAKE", "DOGE", "DOT", "EOS", "LINK", "LTC", "MANA", "PAXG", "SAND",
                "SHIB", "SLP", "SOL", "TRX", "UNI", "XLM", "XRP", "AVAX", "BCH", "CHZ",
                "FTM", "MATIC", "ALGO", "USDP", "NUARS", "DOC", "UXD"
            };

            return Ok(criptos);
        }
        [HttpGet("MonedasPaises")]
        public async Task<IActionResult> GetMonedasAsync()
        {
            var httpRequestMessage = new HttpRequestMessage(
            HttpMethod.Get,
         "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/codes");


            var httpClient = httpClientFactory.CreateClient();

            var response = await httpClient.SendAsync(httpRequestMessage); // Cambia la URL a la API externa real

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();

                // Puedes procesar el contenido JSON recibido y devolverlo como respuesta en tu API
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var responses = JsonSerializer.Deserialize<ExchangeRateResponse>(content, options);

                var coins = new List<string>();
                foreach (var coinInfo in responses.supported_codes)
                {
                    coins.Add(coinInfo[0]);
                }
                return Ok(coins);
            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }
        }

        [HttpGet("ConversorDesdeMoneda")]
        public async Task<IActionResult> ConversorDesdeMonedaAsync(string Moneda, double Monto, string Coin, string MonedaPais)
        {

            //responses.totalAsk);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true

            };

            var httpRequestMessage1 = new HttpRequestMessage(
                             HttpMethod.Get,
                          "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + Moneda + "/" + "USD" + "/" + Monto);
            var httpClient = httpClientFactory.CreateClient();
            var response1 = await httpClient.SendAsync(httpRequestMessage1); // Cambia la URL a la API externa real

            if (response1.IsSuccessStatusCode)
            {
                var contenido = await response1.Content.ReadAsStringAsync();


                var responses1 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenido, options);
                var resultado1 = responses1.conversion_result;
                var totalAskFormatted = resultado1.ToString("0.####", CultureInfo.InvariantCulture);
                var httpRequestMessage2 = new HttpRequestMessage(
                     HttpMethod.Get,
                     "https://api.coinconvert.net/convert/" + "USD" + "/" + Coin + "?amount=" + totalAskFormatted);
                var response2 = await httpClient.SendAsync(httpRequestMessage2); // Cambia la URL a la API externa real

                if (response2.IsSuccessStatusCode)
                {
                    var contenido2 = await response2.Content.ReadAsStringAsync();


                    var responses2 = JsonSerializer.Deserialize<CryptoConverterAPi>(contenido2, options);
                    string desiredCurrency = Coin; // Cambia esto a la moneda que quieras obtener
                    if (responses2.CurrencyValues != null &&
                        responses2.CurrencyValues.TryGetValue(desiredCurrency, out JsonElement currencyValueElement))
                    {
                        // Convierte el valor de JsonElement a double
                        double currencyValue = currencyValueElement.GetDouble();
                        //responses.totalAsk);
                        var totalAskFormatted1 = Monto.ToString("0.####", CultureInfo.InvariantCulture);
                        var httpRequestMessage3 = new HttpRequestMessage(
                                     HttpMethod.Get,
                                 "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + Moneda + "/" + MonedaPais + "/" + totalAskFormatted1);
                        var response3 = await httpClient.SendAsync(httpRequestMessage3); // Cambia la URL a la API externa real

                        if (response3.IsSuccessStatusCode)
                        {
                            var contenido3 = await response3.Content.ReadAsStringAsync();


                            var responses3 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenido3, options);
                            var resultadoFinal = new Dictionary<string, double>
                            {

                                { Coin, currencyValue },
                                { MonedaPais, responses3.conversion_result }
                            };
                            return Ok(resultadoFinal);



                        }
                        else
                        {
                            // Manejo de errores en caso de que la solicitud no sea exitosa
                            return BadRequest();
                        }







                    }
                    else
                    {
                        // Manejo de errores en caso de que la solicitud no sea exitosa
                        return BadRequest();
                    }


                }
                else
                {
                    // Manejo de errores en caso de que la solicitud no sea exitosa
                    return BadRequest();
                }
            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }
        }
        [HttpGet("ConversorDesdeCripto2")]
        public async Task<IActionResult> ConversorDesdeCriptoAsync(string Coin, double Monto, string Moneda, string MonedaPais)
        {
            var httpRequestMessage = new HttpRequestMessage(
           HttpMethod.Get,
           "https://criptoya.com/api/binance/" + Coin + "/" + Moneda + "/" + Monto);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true

            };

            var httpClient = httpClientFactory.CreateClient();

            var response = await httpClient.SendAsync(httpRequestMessage); // Cambia la URL a la API externa real

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                // Puedes procesar el contenido JSON recibido y devolverlo como respuesta en tu API

                if (content == "Invalid pair")
                {
                    var httpRequeste = new HttpRequestMessage(

                   HttpMethod.Get,
               "https://api.coinconvert.net/convert/" + Coin + "/" + "USD" + "?amount=" + Monto);
                    var http = httpClientFactory.CreateClient();
                    var resp = await http.SendAsync(httpRequeste); // Cambia la URL a la API externa real
                    if (resp.IsSuccessStatusCode)
                    {
                        var res = await resp.Content.ReadAsStringAsync();
                        var jsonObject = JsonSerializer.Deserialize<Dictionary<string, object>>(res, options);

                        if (jsonObject.TryGetValue("USD", out var value) && value is var numericValuee)

                        {
                            string valorCadena = numericValuee.ToString(); // Convertir el objeto a una cadena
                            CultureInfo cultura = new CultureInfo("es-ES");
                            string parteEntera = valorCadena.Split('.')[0];
                            if (double.TryParse(valorCadena, NumberStyles.Any, cultura, out double valorNumerico))
                            {  // Obtener la parte después de ':' y eliminar espacios
                                double valorNumerico1 = double.Parse(parteEntera);

                                valorNumerico = valorNumerico1;
                            }
                            else
                            {
                                // Manejo de errores en caso de que la solicitud no sea exitosa
                                return BadRequest();
                            }
                            var httpRequestMessage0 = new HttpRequestMessage(
                             HttpMethod.Get,
                             "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + "USD" + "/" + Moneda + "/" + valorNumerico);
                            var response0 = await httpClient.SendAsync(httpRequestMessage0); // Cambia la URL a la API externa real

                            if (response0.IsSuccessStatusCode)
                            {
                                var contenido = await response0.Content.ReadAsStringAsync();


                                var responses0 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenido, options);
                                int entero = (int)responses0.conversion_result;

                                var httpRequestMessage1 = new HttpRequestMessage(
                                             HttpMethod.Get,
                                         "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + Moneda + "/" + MonedaPais + "/" + entero);
                                var response1 = await httpClient.SendAsync(httpRequestMessage1); // Cambia la URL a la API externa real

                                if (response1.IsSuccessStatusCode)
                                {
                                    var contenidoo = await response1.Content.ReadAsStringAsync();


                                    var responses1 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenidoo, options);
                                    var resultadoFinall = new Dictionary<string, double>
                                {
                                        {Coin,Monto },
                                        { MonedaPais, responses1.conversion_result  },
                                         { Moneda,responses0.conversion_result}
                                         };
                                    return Ok(resultadoFinall);
                                }
                                else
                                {
                                    return BadRequest();
                                }

                            }
                            else
                            {
                                // Manejo de errores en caso de que la solicitud no sea exitosa
                                return BadRequest();
                            }


                        }
                        else
                        {
                            // Manejo de errores en caso de que la solicitud no sea exitosa
                            return BadRequest();
                        }
                    }
                    else
                    {
                        // Manejo de errores en caso de que la solicitud no sea exitosa
                        return BadRequest();
                    }
                }
                else
                {
                    var responses = JsonSerializer.Deserialize<CriptoyaResponce>(content, options);

                    //responses.totalAsk);
                    var totalAskFormatted = responses.totalAsk.ToString("0.####", CultureInfo.InvariantCulture);
                    var httpRequestMessage1 = new HttpRequestMessage(
                                 HttpMethod.Get,
                             "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + Moneda + "/" + MonedaPais + "/" + totalAskFormatted);
                    var response1 = await httpClient.SendAsync(httpRequestMessage1); // Cambia la URL a la API externa real

                    if (response1.IsSuccessStatusCode)
                    {
                        var contenido = await response1.Content.ReadAsStringAsync();


                        var responses1 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenido, options);
                        var resultadoFinal = new Dictionary<string, double>
                            {
                            {Coin,Monto },
                        { Moneda, responses.totalAsk },
                        { MonedaPais,responses1.conversion_result}
                            };
                        return Ok(resultadoFinal);
                    }
                    else
                    {
                        // Manejo de errores en caso de que la solicitud no sea exitosa
                        return BadRequest();
                    }
                }


            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }
        }




        [HttpGet("ConversorDesdeCripto")]
        public async Task<IActionResult> ConversorDesdeCriptoAsync(string Coin, double Monto, string Moneda)
        {

            var httpClient = httpClientFactory.CreateClient();

            // Puedes procesar el contenido JSON recibido y devolverlo como respuesta en tu API
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true

            };
            if (Moneda == "USD" || Moneda == "usd" || Moneda == "EUR" || Moneda == "eur")
            {
                var httpRequeste = new HttpRequestMessage(

                    HttpMethod.Get,

                "https://api.coinconvert.net/convert/" + Coin + "/" + Moneda + "?amount=" + Monto);
                var http = httpClientFactory.CreateClient();
                var resp = await http.SendAsync(httpRequeste); // Cambia la URL a la API externa real
                if (resp.IsSuccessStatusCode)
                {
                    var res = await resp.Content.ReadAsStringAsync();
                    var jsonObject = JsonSerializer.Deserialize<Dictionary<string, object>>(res, options);

                    if (jsonObject.TryGetValue(Moneda, out var value) && value is var numericValuee)

                    {
                        string valorCadena = numericValuee.ToString(); // Convertir el objeto a una cadena
                        CultureInfo cultura = new CultureInfo("es-ES");
                        string parteEntera = valorCadena.Split('.')[0];
                        if (double.TryParse(valorCadena, NumberStyles.Any, cultura, out double valorNumerico))
                        {  // Obtener la parte después de ':' y eliminar espacios
                            double valorNumerico1 = double.Parse(parteEntera);

                            valorNumerico = valorNumerico1;
                        }
                        else
                        {
                            // Manejo de errores en caso de que la solicitud no sea exitosa
                            return BadRequest();
                        }



                        var resultadoFinal = new Dictionary<string, double>
                            {
                        { Moneda, valorNumerico  }

                            };
                        return Ok(resultadoFinal);
                    }
                    else
                    {
                        // Manejo de errores en caso de que la solicitud no sea exitosa
                        return BadRequest();
                    }


                }
                else
                {
                    // Manejo de errores en caso de que la solicitud no sea exitosa
                    return BadRequest();
                }


            }
            else
            {
                var httpRequeste = new HttpRequestMessage(

                    HttpMethod.Get,
                "https://api.coinconvert.net/convert/" + Coin + "/" + "USD" + "?amount=" + Monto);
                var http = httpClientFactory.CreateClient();
                var resp = await http.SendAsync(httpRequeste); // Cambia la URL a la API externa real
                if (resp.IsSuccessStatusCode)
                {
                    var res = await resp.Content.ReadAsStringAsync();
                    var jsonObject = JsonSerializer.Deserialize<Dictionary<string, object>>(res, options);

                    if (jsonObject.TryGetValue("USD", out var value) && value is var numericValuee)

                    {
                        string valorCadena = numericValuee.ToString(); // Convertir el objeto a una cadena
                        CultureInfo cultura = new CultureInfo("es-ES");
                        string parteEntera = valorCadena.Split('.')[0];
                        if (double.TryParse(valorCadena, NumberStyles.Any, cultura, out double valorNumerico))
                        {  // Obtener la parte después de ':' y eliminar espacios
                            double valorNumerico1 = double.Parse(parteEntera);

                            valorNumerico = valorNumerico1;
                        }
                        else
                        {
                            // Manejo de errores en caso de que la solicitud no sea exitosa
                            return BadRequest();
                        }
                        var httpRequestMessage3 = new HttpRequestMessage(
                                     HttpMethod.Get,
                                 "https://v6.exchangerate-api.com/v6/8bea83afdb3a482395191a05/pair/" + "USD" + "/" + Moneda + "/" + valorNumerico);
                        var response3 = await httpClient.SendAsync(httpRequestMessage3); // Cambia la URL a la API externa real

                        if (response3.IsSuccessStatusCode)
                        {
                            var contenido3 = await response3.Content.ReadAsStringAsync();


                            var responses3 = JsonSerializer.Deserialize<ExchangeAPIResponce>(contenido3, options);
                            var resultadoFinal = new Dictionary<string, double>
                            {
                        { Moneda, responses3.conversion_result }

                            };
                            return Ok(resultadoFinal);
                        }
                        else
                        {
                            // Manejo de errores en caso de que la solicitud no sea exitosa
                            return BadRequest();
                        }

                    }
                    else
                    {
                        // Manejo de errores en caso de que la solicitud no sea exitosa
                        return BadRequest();
                    }

                }
                else
                {
                    // Manejo de errores en caso de que la solicitud no sea exitosa
                    return BadRequest();
                }
            }
        }
    }
}
 



