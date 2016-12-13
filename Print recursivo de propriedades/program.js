//-----------------------------------------Declarações------------------------------------------------
var flight =
{
  plane: 'Airbus A320',
  EDT: "06:30AM GTM-3",
  ETA: "09:00AM GMT-3",
  equipment :
  {
    motor: "protune",
    flaps: "urantia",
    tail:  "spacex"
  }
};
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------



//----------------------------------------Principal--------------------------------------------------
document.writeln("Flight record");
write_props(flight,false);
//---------------------------------------------------------------------------------------------------




//-----------------------------------------Update----------------------------------------------------
//Update = faz um append, aicionando mais uma propriedade ao objeto equipment dentro do objeto flight
document.writeln("	");document.writeln("	");
flight.equipment.nose = "woodpecker";
write_props(flight,false);


//----------------------------------------Reference--------------------------------------------------
//Reference = objetos não são copiados, mas passados por referência
//AO ALTERAR O OBJETO REFERENCIADO, MUDA TAMBÉM NO OBJETO DE REFERÊNCIA
document.writeln("	");document.writeln("	");
var flight_new = flight;
flight_new.plane = "Lockheed F-35";
write_props(flight,false);
//---------------------------------------------------------------------------------------------------