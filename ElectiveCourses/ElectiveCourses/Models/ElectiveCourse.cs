using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElectiveCourses.Models
{
    public class ElectiveCourse
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Capacity { get; set; }

        [Required]
        public DateTime Deadline { get; set; }
    }
}
