using System;
using System.ComponentModel.DataAnnotations;

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
