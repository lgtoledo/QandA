using System;
using System.ComponentModel.DataAnnotations;

namespace QandA.Data.Models
{
    public class QuestionPostRequest
    {
        [Required]
        [StringLength(100)]
        public string Title { get; set; }

        [Required(ErrorMessage = "Por favor incluya algún contenido para la pregunta")]
        public string Content { get; set; }

        public DateTime Created { get; set; }
    }
}
