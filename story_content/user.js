function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YLEqTQT9TQ":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycby7XKjw1xrRw4kQroP3pNiarAuWzqk4iO_BFrSK372tt-0f4_OiqOAq7h0lYsirtfR1/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

