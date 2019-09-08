using ElectiveCourses.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectiveCourses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElectiveCoursesController : ControllerBase
    {
        private readonly ElectiveCoursesDbContext _context;

        public ElectiveCoursesController(ElectiveCoursesDbContext context)
        {
            _context = context;
        }

        // GET: api/ElectiveCourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ElectiveCourse>>> GetElectiveCourses()
        {
            return await _context.ElectiveCourses.ToListAsync();
        }

        // GET: api/ElectiveCourses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ElectiveCourse>> GetElectiveCourse(int id)
        {
            var electiveCourse = await _context.ElectiveCourses.FindAsync(id);

            if (electiveCourse == null)
            {
                return NotFound();
            }

            return electiveCourse;
        }

        // PUT: api/ElectiveCourses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElectiveCourse(int id, ElectiveCourse electiveCourse)
        {
            if (id != electiveCourse.Id)
            {
                return BadRequest();
            }

            _context.Entry(electiveCourse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElectiveCourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ElectiveCourses
        [HttpPost]
        public async Task<ActionResult<ElectiveCourse>> PostElectiveCourse(ElectiveCourse electiveCourse)
        {
            _context.ElectiveCourses.Add(electiveCourse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElectiveCourse", new { id = electiveCourse.Id }, electiveCourse);
        }

        // DELETE: api/ElectiveCourses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ElectiveCourse>> DeleteElectiveCourse(int id)
        {
            var electiveCourse = await _context.ElectiveCourses.FindAsync(id);
            if (electiveCourse == null)
            {
                return NotFound();
            }

            _context.ElectiveCourses.Remove(electiveCourse);
            await _context.SaveChangesAsync();

            return electiveCourse;
        }

        private bool ElectiveCourseExists(int id)
        {
            return _context.ElectiveCourses.Any(e => e.Id == id);
        }
    }
}
