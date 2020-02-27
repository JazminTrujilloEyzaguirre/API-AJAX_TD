$(document).ready(function(){
    $('.btn-warning').click(function(){
        for(var i=1; i<=50; i++){
            $("#thediv").append("<img id="+ i + " data-toggle=modal data-target=#exampleModal src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png>");
        };
        $(".btn-warning").prop('disabled', true);

        $('img').click(function(){

            let ide = $(this).attr("id");
            let imagen = "";

            $.get("https://pokeapi.co/api/v2/pokemon/"+ ide +"/", function(res) {
                console.log(res);

                imagen =  "<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + ide + ".png>"
                $("#imgn").html(imagen);

                let name = res.species.name;
                $("#name").html(name);

                let type = ""; 
                type += "Tipos: " ; 
                    for(var i = 0; i < res.types.length; i++) {
                        type += res.types[i].type.name;
                        //if(i === 0){type += " - "}
                        if(i < res.types.length - 1){type += " - "}
                    }
                $("#tipo").html(type);

                let weight = "Ancho:   " + res.weight + " cm.";
                $("#ancho").html(weight);

                let height = "Alto:    " + res.height + " cm.";
                $("#altura").html(height);

            }, "json");

        });
       
    });

});

