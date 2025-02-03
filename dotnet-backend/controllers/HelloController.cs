using Microsoft.AspNetCore.Mvc;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "Hello from GET" });
    }

    [HttpPost]
    public IActionResult Post([FromBody] dynamic data)
    {
        return Ok(new { message = "Hello from POST", data });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return Ok(new { message = $"Hello from DELETE (id: {id})" });
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] dynamic data)
    {
        return Ok(new { message = $"Hello from PUT (id: {id})", data });
    }
}