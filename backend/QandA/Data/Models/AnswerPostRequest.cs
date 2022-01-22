using System;
using System.ComponentModel.DataAnnotations;

namespace QandA.Data.Models
{
    public class AnswerPostRequest
    {
        [Required]
        public int? QuestionId { get; set; } // se ajusta como nullable para que pueda tener valor null, y no sea 0 como es int por defecto. Sino no funcionaría la validación ya que siempre contendría 0 en el peor de los casos.

        [Required]
        public string Content { get; set; }
    }
}
