using System.Text.Json.Serialization;
using System.Text.Json;

namespace Cripto_divisas.Models
{
    public class CryptoConverterAPi
    {

        public string Status { get; set; }
        public double USD { get; set; }
        [JsonExtensionData]
        public Dictionary<string, JsonElement> CurrencyValues
        {
            get; set;


        }
    }
}
