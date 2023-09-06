

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
            var httpRequestMessage = new HttpRequestMessage(
            HttpMethod.Get,
         "https://api.coingecko.com/api/v3/coins/list");


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

                var responses = JsonSerializer.Deserialize<List<CriptoInfo>>(content, options);

                var coins = new List<CurrencyInfo>();

                foreach (var coinInfo in responses)
                {
                    coins.Add(new CurrencyInfo { value = coinInfo.Id, name = coinInfo.Name });
                }
                return Ok(coins);
            }
            else
            {
                // Manejo de errores en caso de que la solicitud no sea exitosa
                return BadRequest();
            }
        }
        [HttpGet("MonedasPaisesNombres")]
        public async Task<IActionResult> GetMonedasNombreAsync()
        {
            var httpRequestMessage = new HttpRequestMessage(
            HttpMethod.Get,
         "https://v6.exchangerate-api.com/v6/2a9ddc806d84b84c56007f37/codes");


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
         "https://v6.exchangerate-api.com/v6/2a9ddc806d84b84c56007f37/codes");


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
                          "https://v6.exchangerate-api.com/v6/2a9ddc806d84b84c56007f37/pair/" + Moneda + "/" + "USD" + "/" + Monto);
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
                                 "https://v6.exchangerate-api.com/v6/2a9ddc806d84b84c56007f37/pair/" + Moneda + "/" + MonedaPais + "/" + totalAskFormatted1);
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
                                 "https://v6.exchangerate-api.com/v6/2a9ddc806d84b84c56007f37/pair/" + "USD" + "/" + Moneda + "/" + valorNumerico);
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


