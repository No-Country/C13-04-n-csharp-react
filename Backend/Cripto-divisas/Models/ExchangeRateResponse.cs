namespace Cripto_divisas.Models
{
    public class ExchangeRateResponse
    {
        public string Result { get; set; }
        public string Documentation { get; set; }
        public string TermsOfUse { get; set; }
        public List<List<string>> supported_codes { get; set; }
    }
}
