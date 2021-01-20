require ("../conexion");

const book = require("../models/book");

const variosLibros = async () => {
    const relatosEroticos = new libro({
        Titulo: "Relatos Eróticos",
        Sinopsis: "Relatos eróticos es la narración de diferentes versiones de los cuentos de Disney. Grandes títulos como La bella durmiente, Sedúceme nace con la intención de contener historias. Relatos que muestren una realidad concreta, que refl ejen una situación precisa, que avisen de la inminencia de un momento. Y este libro lucha contra varios prejuicios, y desea romper lanzas y unifi car deseos. Pero, sobre todo, pretende ser literatura y gustar a los lectores. La seducción es un juego, un arte, un desafío... uno de los mayores placeres del sexo. ¡Déjate seducir!",
        Precio: 20,
        Accesorio: "Fusta"
    });
    await relatosEroticos.save();
    
    const todoONada = new libro({
        Titulo: "Todo o nada",
        Sinopsis: "Ethan Blackstone tiene un serio problema. Acaba de romper la confianza de Brynne y ella lo ha dejado. Sin embargo, no está dispuesto a darse por vencido, no va a rendirse; hará todo lo que pueda para recuperar a su preciosa chica americana. La pasión entre ellos es abrasadora pero los secretos que se esconden el uno al otro son muy dolorosos y lo suficientemente serios como para acabar con la posibilidad de una vida juntos.Además, debido a las amenazas políticas que ahora caen sobre Brynne, Ethan tiene poco tiempo para reaccionar y ha de reunir toda su fuerza y habilidad para protegerla de los peligros que pueden apartarla de su lado para siempre. ¿Será capaz Ethan de liberar a Brynne de un pasado que la sigue atemorizando? ¿Volverá a sentir el calor de su piel, a recuperar su confianza de nuevo? Esta es la historia de un hombre enamorado que hará cualquier cosa para poseer el corazón de la mujer que ama. Y que llegará hasta donde sea para protegerla. Todo o nada.Una novela apasionante que habla de lo que sucede cuando dos personas se encuentran y se rinden a un amor tan fuerte que es capaz de curar las heridas del pasado y de dar paso a una vida de pura y completa felicidad.El fenómeno que arrasa en InternetEl fenómeno editorial de la trilogía El affaire Blackstone conquistó los corazones de centenares de lectoras es Estados Unidos, y que ya ha conquistado a cientos de lectoras de habla hispana, que se declaran fans del apuesto y seductor Ethan, el tipo de hombre con el que sueñan todas las mujeres. Todo o nada, la segunda parte de El affaire Blackstone, se publicó en Internet en noviembre de 2012 y en menos de un mes conquistó a más de 120.000 lectoras. La tercera parte, Sorprendida.",                             
        Precio: 15,
        Accesorio: "Juguetito"
    });
    await todoONada.save();
    
    const hazmeDisfrutar = new libro({
        Titulo: "Hazme disfrutar",
        Sinopsis: "Nuria es una joven de 21 años que acaba de salir de una relación complicada. El destino le pone en el camino al padre de su primer amor que tiene 23 años más que ella y una forma diferente de vivir su vida sexual. En este libro romántico y erótico, se narran historias donde podrás disfrutar, donde tus sentidos se verán seducidos hasta llegar a la excitación.",
        Precio: 45,
        Accesorio: "Satisfayer"
    });
    await hazmeDisfrutar.save();

    const elContrato = new libro({
        Titulo: "El contrato",
        Sinopsis: "Blake Harrison necesita urgentemente una mujer con la que casarse. Samantha Elliot, propietaria de una agencia matrimonial, tiene dos días para encontrarla... Blake Harrison: Rico, noble, encantador... ... Ahora solo le queda proteger su corazón para salir airosa cuando su mercenario matrimonio llegue a su fin.",
        Precio: 80,
        Accesorio: "Esposas"
    });
    await elContrato.save();

    const laSumisaInsumisa = new libro({
        Titulo: "La sumisa Insumisa",
        Sinopsis: "AMOSAPIENS es un sádico que busca desesperadamente a su sumisa a través de la red, para -según comenta en los chats-complementarse como el botón y el ojal y alcanzar juntos el éxtasis, a través del BDSM o el arte erótico del bondage o ataduras, dominación, sadismo y masoquismo",
        Precio: 25,
        Accesorio: "Estimulador"
    });
    await laSumisaInsumisa.save();
}

variosLibros();