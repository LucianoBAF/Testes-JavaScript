var flight =
{
  plane: "Airbus 700",
  EDT: "06:30AM GTM-3",
  ETA: "09:00AM GMT-3",
  equipment :
  {
    motor: "protune",
    flaps: "urantia",
    tail:  "spacex"
  }
};


//Função recursive que percorre todo o objeto flight, escrevendo todas suas propriedades, inclusive dos seus sub-objetos
var write_props = function(obj,has_children)
{
  for(var prop1 in obj)
  {
    for(var prop2 in obj[prop1])
    {
      if(typeof(obj[prop1])=="object")	//if(obj[prop1][prop2].hasOwnProperty())
      {
	  document.writeln(prop1);
	  write_props(obj[prop1],true);
	  break;
      }
      else
        break;
    }    

    if(has_children)		
      document.writeln('|--- ' + prop1 + ' : ' + obj[prop1]);
    else if(typeof(obj[prop1]) !== "object")
      document.writeln(prop1 + ' : ' + obj[prop1]);	
  }
}


document.writeln("Flight record");
write_props(flight,false);

document.writeln("	");document.writeln("	");

//Update = faz um append, aicionando mais uma propriedade ao objeto equipment dentro do objeto flight
flight.equipment.nose = "woodpecker";
write_props(flight,false);
