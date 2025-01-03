// Nos permite que las opciones para 'comuna' dependan del valor de 'region' escogido
const comunaSegunRegion = () => {
    let regionSelect = document.getElementById("region-formulario");
    let comunaSelect = document.getElementById("comuna-formulario");
    let region = regionSelect.value;

    comunaSelect.required = false;

    while (comunaSelect.options.length > 0) {
        comunaSelect.remove(0);
    }

    let opciones;
    // Región de Arica y Parinacota
    if (region == "arica-parinacota") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Arica", valor: "arica"},
            {texto: "Camarones", valor: "camarones"},
            {texto: "General Lagos", valor: "general-lagos"},
            {texto: "Putre", valor: "putre"}
        ];
    }
    // Región de Tarapacá
    if (region == "tarapaca") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto Hospicio", valor: "alto-hospicio"},
            {texto: "Camiña", valor: "camina"},
            {texto: "Colchane", valor: "colchane"},
            {texto: "Huara", valor: "huara"},
            {texto: "Iquique", valor: "iquique"},
            {texto: "Pica", valor: "pica"},
            {texto: "Pozo Almonte", valor: "pozo-almonte"}
        ];
    }
    // Región de Antofagasta
    if (region == "antofagasta") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Antofagasta", valor: "antofagasta"},
            {texto: "Calama", valor: "calama"},
            {texto: "María Elena", valor: "maria-elena"},
            {texto: "Mejillones", valor: "mejillones"},
            {texto: "Ollagüe", valor: "ollague"},
            {texto: "San Pedro de Atacama", valor: "san-pedro"},
            {texto: "Sierra Gorda", valor: "sierra-gorda"},
            {texto: "Taltal", valor: "taltal"},
            {texto: "Tocopilla", valor: "tocopilla"}
        ];
    }
    // Región de Atacama
    if (region == "atacama") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto del Carmen", valor: "alto-carmen"},
            {texto: "Caldera", valor: "caldera"},
            {texto: "Chañaran", valor: "chanaran"},
            {texto: "Copiapó", valor: "copiapo"},
            {texto: "Diego de Almagro", valor: "diego-almagro"},
            {texto: "Freirina", valor: "freirina"},
            {texto: "Huasco", valor: "huasco"},
            {texto: "Tierra Amarilla", valor: "tierra-amarilla"},
            {texto: "Vallenar", valor: "vallenar"}
        ];
    }
    // Región de Coquimbo
    if (region == "coquimbo") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Andacollo", valor: "andacollo"},
            {texto: "Canela", valor: "canela"},
            {texto: "Combarbalá", valor: "combarbala"},
            {texto: "Coquimbo", valor: "coquimbo"},
            {texto: "Illapel", valor: "illapel"},
            {texto: "La Higuera", valor: "la-higuera"},
            {texto: "La Serena", valor: "la-serena"},
            {texto: "Los Vilos", valor: "los-vilos"},
            {texto: "Monte Patria", valor: "monte-patria"},
            {texto: "Ovalle", valor: "ovalle"},
            {texto: "Paihuano", valor: "paihuano"},
            {texto: "Punitaqui", valor: "punitaqui"},
            {texto: "Río Hurtado", valor: "rio-hurtado"},
            {texto: "Salamanca", valor: "salamanca"},
            {texto: "Vicuña", valor: "vicuna"}
        ];
    }
    // Región de Valparaíso
    if (region == "valparaiso") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Algarrobo", valor: "algarrobo"},
            {texto: "Cabildo", valor: "cabildo"},
            {texto: "Calle Larga", valor: "calle-larga"},
            {texto: "Cartagena", valor: "cartagena"},
            {texto: "Casablanca", valor: "casablanca"},
            {texto: "Catemu", valor: "catemu"},
            {texto: "Concón", valor: "concon"},
            {texto: "El Quisco", valor: "el-quisco"},
            {texto: "El Tabo", valor: "el-tabo"},
            {texto: "Hijuelas", valor: "hijuelas"},
            {texto: "Isla de Pascua", valor: "isla-pascua"},
            {texto: "Juan Fernández", valor: "juan-fernandez"},
            {texto: "La Calera", valor: "la-calera" },
            {texto: "La Cruz", valor: "la-cruz"},
            {texto: "La Ligua", valor: "la-ligua"},
            {texto: "Limache", valor: "limache"},
            {texto: "Llaillay", valor: "llaillay"},
            {texto: "Los Andes", valor: "los-andes"},
            {texto: "Nogales", valor: "nogales"},
            {texto: "Olmué", valor: "olmue"},
            {texto: "Panquehue", valor: "panquehue"},
            {texto: "Papudo", valor: "papudo"},
            {texto: "Petorca", valor: "petorca"},
            {texto: "Puchuncaví", valor: "puchuncavi"},
            {texto: "Putaendo", valor: "putaendo"},
            {texto: "Quillota", valor: "quillota"},
            {texto: "Quilpué", valor: "quilpue"},
            {texto: "Quintero", valor: "quintero"},
            {texto: "Rinconada", valor: "rinconada"},
            {texto: "San Antonio", valor: "san-antonio"},
            {texto: "San Esteban", valor: "san-esteban"},
            {texto: "San Felipe", valor: "san-felipe"},
            {texto: "Santa María", valor: "santa-maria"},
            {texto: "Santo Domingo", valor: "santo-domingo"},
            {texto: "Valparaíso", valor: "valparaiso"},
            {texto: "Villa Alemana", valor: "villa-alemana"},
            {texto: "Viña del Mar", valor: "vina-mar"},
            {texto: "Zapallar", valor: "zapallar"},
        ];
    }
    // Región Metropolitana de Santiago
    if (region == "metropolitana") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alhué", valor: "alhue"},
            {texto: "Buin", valor: "buin"},
            {texto: "Calera de Tango", valor: "calera-tango"},
            {texto: "Cerrillos", valor: "cerrillos"},
            {texto: "Cerro Navia", valor: "cerro-navia"},
            {texto: "Colina", valor: "colina"},
            {texto: "Conchalí", valor: "conchali"},
            {texto: "Curacaví", valor: "curacavi"},
            {texto: "El Bosque", valor: "el-bosque"},
            {texto: "El Monte", valor: "el-monte"},
            {texto: "Estación Central", valor: "estacion-central"},
            {texto: "Huechuraba", valor: "huechuraba"},
            {texto: "Independencia", valor: "independencia"},
            {texto: "Isla de Maipo", valor: "isla-maipo"},
            {texto: "La Cisterna", valor: "la-cisterna"},
            {texto: "La Florida", valor: "la-florida"},
            {texto: "La Granja", valor: "la-granja"},
            {texto: "Lampa", valor: "lampa"},
            {texto: "La Pintana", valor: "la-pintana"},
            {texto: "La Reina", valor: "la-reina"},
            {texto: "Las Condes", valor: "las-condes"},
            {texto: "Lo Barnechea", valor: "lo-barnechea"},
            {texto: "Lo Espejo", valor: "lo-espejo"},
            {texto: "Lo Prado", valor: "lo-prado"},
            {texto: "Macul", valor: "macul"},
            {texto: "Maipú", valor: "maipu"},
            {texto: "María Pinto", valor: "maria-pinto"},
            {texto: "Melipilla", valor: "melipilla"},
            {texto: "Ñuñoa", valor: "nunoa"},
            {texto: "Padre Hurtado", valor: "padre-hurtado"},
            {texto: "Paine", valor: "paine"},
            {texto: "Pedro Aguirre Cerda", valor: "pedro-cerda"},
            {texto: "Peñaflor", valor: "penafor"},
            {texto: "Peñalolén", valor: "penalolen"},
            {texto: "Pirque", valor: "pirque"},
            {texto: "Providencia", valor: "providencia"},
            {texto: "Pudahuel", valor: "pudahuel"},
            {texto: "Puente Alto", valor: "puente-alto"},
            {texto: "Quilicura", valor: "quilicura"},
            {texto: "Quinta Normal", valor: "quinta-normal"},
            {texto: "Recoleta", valor: "recoleta"},
            {texto: "Renca", valor: "renca"},
            {texto: "San Bernardo", valor: "san-bernardo"},
            {texto: "San Joaquín", valor: "san-joaquin"},
            {texto: "San José de Maipo", valor: "jose-maipo"},
            {texto: "San Miguel", valor: "san-miguel"},
            {texto: "San Pedro", valor: "san-pedro"},
            {texto: "San Ramón", valor: "san-ramon"},
            {texto: "Santiago", valor: "santiago"},
            {texto: "Talagante", valor: "talagante"},
            {texto: "Tiltil", valor: "tiltil"},
            {texto: "Vitacura", valor: "vitacura"}
        ];
    }
    // Región del Libertador Gral. Bernardo O'Higgins
    if (region == "libertador-ohiggins") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Chépica", valor: "chepica"},
            {texto: "Chimbarongo", valor: "chimbarongo"},
            {texto: "Codegua", valor: "codegua"},
            {texto: "Coinco", valor: "coinco"},
            {texto: "Coltauco", valor: "coltauco"},
            {texto: "Doñihue", valor: "donihue"},
            {texto: "Graneros", valor: "graneros"},
            {texto: "La Estrella", valor: "la-estrella"},
            {texto: "Las Cabras", valor: "las-cabras"},
            {texto: "Litueche", valor: "litueche"},
            {texto: "Lolol", valor: "lolol"},
            {texto: "Machalí", valor: "machali"},
            {texto: "Malloa", valor: "malloa"},
            {texto: "Marchihue", valor: "marchihue"},
            {texto: "Mostazal", valor: "mostazal"},
            {texto: "Nancagua", valor: "nancahua"},
            {texto: "Navidad", valor: "navidad"},
            {texto: "Olivar", valor: "olivar"},
            {texto: "Palmilla", valor: "palmilla"},
            {texto: "Paredones", valor: "paredones"},
            {texto: "Peralillo", valor: "peralillo"},
            {texto: "Peumo", valor: "peumo"},
            {texto: "Pichidegua", valor: "pichidegua"},
            {texto: "Pichilemu", valor: "pichilemu"},
            {texto: "Placilla", valor: "placilla"},
            {texto: "Pumanque", valor: "pumanque"},
            {texto: "Quinta de Tilcoco", valor: "tilcoco"},
            {texto: "Rancagua", valor: "rancagua"},
            {texto: "Rengo", valor: "rengo"},
            {texto: "Requínoa", valor: "requinoa"},
            {texto: "San Fernando", valor: "san-fernando"},
            {texto: "Santa Cruz", valor: "santa-cruz"},
            {texto: "San Vicente", valor: "san-vicente"}
        ];
    }
    // Región del Maule
    if (region == "maule") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Cauquenes", valor: "cauquenes"},
            {texto: "Chanco", valor: "chanco"},
            {texto: "Colbún", valor: "colbun"},
            {texto: "Constitución", valor: "constitucion"},
            {texto: "Curepto", valor: "curepto"},
            {texto: "Curicó", valor: "curico"},
            {texto: "Empedrado", valor: "empedrado"},
            {texto: "Hualañé", valor: "hualane"},
            {texto: "Licantén", valor: "licanten"},
            {texto: "Linares", valor: "linares"},
            {texto: "Longaví", valor: "longavi"},
            {texto: "Maule", valor: "maule"},
            {texto: "Molina", valor: "molina"},
            {texto: "Parral", valor: "parral"},
            {texto: "Pelarco", valor: "pelarco"},
            {texto: "Pelluhue", valor: "pelluhue"},
            {texto: "Pencahue", valor: "pencahue"},
            {texto: "Rauco", valor: "rauco"},
            {texto: "Retiro", valor: "retiro"},
            {texto: "Río Claro", valor: "rio.claro"},
            {texto: "Romeral", valor: "romeral"},
            {texto: "Sagrada Familia", valor: "sagrada-familia"},
            {texto: "San Clemente", valor: "san-clemente"},
            {texto: "San Javier", valor: "san-javier"},
            {texto: "San Rafael", valor: "san-rafael"},
            {texto: "Talca", valor: "talca"},
            {texto: "Teno", valor: "teno"},
            {texto: "Vichuquén", valor: "vichuquen"},
            {texto: "Villa Alegre", valor: "villa-alegre"},
            {texto: "Yerbas Buenas", valor: "yerbas-buenas"}
        ];
    }
    // Región de Ñuble
    if (region == "nuble") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Bulnes", valor: "bulnes"},
            {texto: "Chillán", valor: "chillan"},
            {texto: "Chillán Viejo", valor: "chillan-viejo"},
            {texto: "Cobquecura", valor: "cobquecura"},
            {texto: "Coelemu", valor: "coelemu"},
            {texto: "Coihueco", valor: "coihueco"},
            {texto: "El Carmen", valor: "el-carmen"},
            {texto: "Ninhue", valor: "ninhue"},
            {texto: "Ñiquén", valor: "niquen"},
            {texto: "Pemuco", valor: "pemuco"},
            {texto: "Pinto", valor: "pinto"},
            {texto: "Portezuelo", valor: "portezuelo"},
            {texto: "Quillón", valor: "quillon"},
            {texto: "Quirihue", valor: "quirihue"},
            {texto: "Ránquil", valor: "ranquil"},
            {texto: "San Carlos", valor: "san-carlos"},
            {texto: "San Fabián", valor: "san-fabian"},
            {texto: "San Ignacio", valor: "san-ignacio"},
            {texto: "San Nicolás", valor: "san-nicolas"},
            {texto: "Treguaco", valor: "treguaco"},
            {texto: "Yungay", valor: "yungay"}
        ];
    }
    // Región del Biobío
    if (region == "biobio") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto Biobío", valor: "alto-biobio"},
            {texto: "Antuco", valor: "antuco"},
            {texto: "Arauco", valor: "arauco"},
            {texto: "Cabrero", valor: "cabrero"},
            {texto: "Cañete", valor: "canete"},
            {texto: "Chiguayante", valor: "chiguayante"},
            {texto: "Concepción", valor: "concepcion"},
            {texto: "Contulmo", valor: "contulmo"},
            {texto: "Coronel", valor: "coronel"},
            {texto: "Curanilahue", valor: "curanilahue"},
            {texto: "Florida", valor: "florida"},
            {texto: "Hualpén", valor: "hualpen"},
            {texto: "Hualqui", valor: "hualqui"},
            {texto: "Laja", valor: "laja"},
            {texto: "Lebu", valor: "lebu"},
            {texto: "Los Álamos", valor: "los-alamos"},
            {texto: "Los Ángeles", valor: "los-angeles"},
            {texto: "Lota", valor: "lota"},
            {texto: "Mulchén", valor: "mulchen"},
            {texto: "Nacimiento", valor: "nacimiento"},
            {texto: "Negrete", valor: "negrete"},
            {texto: "Penco", valor: "penco"},
            {texto: "Quilaco", valor: "quilaco"},
            {texto: "Quilleco", valor: "quilleco"},
            {texto: "San Pedro de la Paz", valor: "pedro-paz"},
            {texto: "San Rosendo", valor: "san-rosendo"},
            {texto: "Santa Bárbara", valor: "santa-barbara"},
            {texto: "Santa Juana", valor: "santa-juana"},
            {texto: "Talcahuano", valor: "talcahuano"},
            {texto: "Tirúa", valor: "tirua"},
            {texto: "Tomé", valor: "tome"},
            {texto: "Tucapel", valor: "tucapel"},
            {texto: "Yumbel", valor: "yumbel"},
        ];
    }
    // Región de La Araucanía
    if (region == "araucania") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Angol", valor: "angol"},
            {texto: "Carahue", valor: "carahue"},
            {texto: "Cholchol", valor: "cholchol"},
            {texto: "Collipulli", valor: "collipulli"},
            {texto: "Cunco", valor: "cunco"},
            {texto: "Curacautín", valor: "curacautin"},
            {texto: "Curarrehue", valor: "curarrehue"},
            {texto: "Ercilla", valor: "ercilla"},
            {texto: "Freire", valor: "freire"},
            {texto: "Galvarino", valor: "galvarino"},
            {texto: "Gorbea", valor: "gorbea"},
            {texto: "Lautaro", valor: "lautaro"},
            {texto: "Loncoche", valor: "loncoche"},
            {texto: "Lonquimay", valor: "lonquimay"},
            {texto: "Los Sauces", valor: "los-sauces"},
            {texto: "Lumaco", valor: "lumaco"},
            {texto: "Melipeuco", valor: "melipeuco"},
            {texto: "Nueva Imperial", valor: "nueva-imperial"},
            {texto: "Padre las Casas", valor: "padre-casas"},
            {texto: "Perquenco", valor: "perquenco"},
            {texto: "Pitrufquén", valor: "pitrufquen"},
            {texto: "Pucón", valor: "pucon"},
            {texto: "Purén", valor: "puren"},
            {texto: "Renaico", valor: "renaico"},
            {texto: "Saavedra", valor: "saavedra"},
            {texto: "Temuco", valor: "temuco"},
            {texto: "Teodoro Schmidt", valor: "teodoro-schmidt"},
            {texto: "Toltén", valor: "tolten"},
            {texto: "Traiguén", valor: "traiguen"},
            {texto: "Victoria", valor: "victoria"},
            {texto: "Vilcún", valor: "vilcun"},
            {texto: "Villarrica", valor: "villarica"}
        ];
    }
    // Región de Los Ríos
    if (region == "rios") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Corral", valor: "corral"},
            {texto: "Futrono", valor: "futrono"},
            {texto: "Lago Ranco", valor: "lago-ranco"},
            {texto: "Lanco", valor: "lanco"},
            {texto: "La Unión", valor: "la-union"},
            {texto: "Los Lagos", valor: "los-lagos"},
            {texto: "Máfil", valor: "mafil"},
            {texto: "Mariquina", valor: "mariquina"},
            {texto: "Paillaco", valor: "paillaco"},
            {texto: "Panguipulli", valor: "panguipulli"},
            {texto: "Río Bueno", valor: "rio-bueno"},
            {texto: "Valdivia", valor: "valdivia"}
        ];
    }
    // Región de Los Lagos
    if (region == "lagos") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Ancud", valor: "ancud"},
            {texto: "Calbuco", valor: "calbuco"},
            {texto: "Castro", valor: "castro"},
            {texto: "Chaitén", valor: "chaiten"},
            {texto: "Chonchi", valor: "chonchi"},
            {texto: "Cochamó", valor: "cochamo"},
            {texto: "Curaco de Vélez", valor: "curaco-velez"},
            {texto: "Dalcahue", valor: "dalcahue"},
            {texto: "Fresia", valor: "fresia"},
            {texto: "Frutillar", valor: "frutillar"},
            {texto: "Futaleufú", valor: "futaleufu"},
            {texto: "Hualaihué", valor: "hualaihue"},
            {texto: "Llanquihue", valor: "llanquihue"},
            {texto: "Los Muermos", valor: "los-muermos"},
            {texto: "Maullín", valor: "maullin"},
            {texto: "Osorno", valor: "osorno"},
            {texto: "Palena", valor: "palena"},
            {texto: "Puerto Montt", valor: "puerto-montt"},
            {texto: "Puerto Octay", valor: "puerto-octay"},
            {texto: "Puerto Varas", valor: "puerto-varas"},
            {texto: "Puqueldón", valor: "puqueldon"},
            {texto: "Purranque", valor: "purranque"},
            {texto: "Puyehue", valor: "puyehue"},
            {texto: "Queilén", valor: "queilen"},
            {texto: "Quellón", valor: "quellon"},
            {texto: "Quemchi", valor: "quemchi"},
            {texto: "Quinchao", valor: "quincao"},
            {texto: "Río Negro", valor: "rio-negro"},
            {texto: "San Juan de la Costa", valor: "juan-costa"},
            {texto: "San Pablo", valor: "san-pablo"},
        ];
    }
    // Región Aysén del G. Carlos Ibañez del Campo
    if (region == "aysen") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Aysén", valor: "aysen"},
            {texto: "Chile Chico", valor: "chile-chico"},
            {texto: "Cisnes", valor: "cisnes"},
            {texto: "Cochrane", valor: "cochrane"},
            {texto: "Coyhaique", valor: "coyhaique"},
            {texto: "Guaitecas", valor: "guaitecas"},
            {texto: "Lago Verde", valor: "lago-verde"},
            {texto: "O'Higgins", valor: "ohiggins"},
            {texto: "Río Ibáñez", valor: "rio-ibanez"},
            {texto: "Tortel", valor: "tortel"}
        ];
    }
    // Región de Magallanes y de la Antártica Chilena
    if (region == "magallanes") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Antártica", valor: "antartica"},
            {texto: "Cabo de Hornos", valor: "cabo-hornos"},
            {texto: "Laguna Blanca", valor: "laguna-blanca"},
            {texto: "Natales", valor: "natales"},
            {texto: "Porvenir", valor: "porvenir"},
            {texto: "Primavera", valor: "primavera"},
            {texto: "Punta Arenas", valor: "punta-arenas"},
            {texto: "Río Verde", valor: "rio-verde"},
            {texto: "San Gregorio", valor: "san-gregorio"},
            {texto: "Timaukel", valor: "timaukel"},
            {texto: "Torres del Paine", valor: "torres-paine"}
        ];
    }

    const crearAnadir = (opcion) => {
        let opcion_element = document.createElement("option");
        opcion_element.textContent = opcion.texto;
        opcion_element.value = opcion.valor;
        comunaSelect.append(opcion_element);
    }

    if (!opciones || opciones.length === 0) {
        return;
    }

    opciones.forEach(crearAnadir);
};

let index = 1;

const indiceMasUno = () => {
    let fvSelect = document.getElementById("fv-formulario");
    let tipo = fvSelect.value;
    if (tipo == "frutas" || tipo == "verduras") {
        let fvCant = document.getElementById("log-fv-cant-input");
        fvCant.innerHTML = "";
        if (index == 5) {
            const div = document.createElement("div");

            div.id = "msg-error";
            div.className = "caja-error";

            const error = document.createElement("p");

            error.id = "bajada";
            error.style.textAlign = "center";
            error.style.marginLeft = "5px";
            error.append(document.createElement("br"));
            error.append(document.createTextNode("Error: Por favor escoger hasta un máximo de 5 frutas/verduras.\n"));
            
            div.append(error);
            fvCant.append(div);
        } else {
            index = index + 1;
        }
    }
}

const indiceMenosUno = () => {
    let fvSelect = document.getElementById("fv-formulario");
    let tipo = fvSelect.value;
    if (tipo == "frutas" || tipo == "verduras") {
        let fvCant = document.getElementById("log-fv-cant-input");
        fvCant.innerHTML = "";
        if (index == 1) {
            const div = document.createElement("div");

            div.id = "msg-error";
            div.className = "caja-error";

            const error = document.createElement("p");

            error.id = "bajada";
            error.style.textAlign = "center";
            error.style.marginLeft = "5px";
            error.append(document.createElement("br"));
            error.append(document.createTextNode("Error: Por favor escoger mínimo 1 fruta/verdura.\n"));
            
            div.append(error);
            fvCant.append(div);
        } else {
            index = index - 1;
        }
    }
}

const opcSegunFV = () => {
    let fvSelect = document.getElementById("fv-formulario");
    let fvOpc = document.getElementById("fv-cant-input");
    let mensajeError = document.getElementById("log-fv-cant-input");
    let tipo = fvSelect.value;

    fvOpc.innerHTML = "";

    let opciones;
    if (tipo == "frutas") {
        opciones = [
            {texto: "Elija una Fruta", valor: ""},
            {texto: "Arándano", valor: "arandano"},
            {texto: "Frambuesa", valor: "frambuesa"},
            {texto: "Frutilla", valor: "frutilla"},
            {texto: "Grosella", valor: "grosella"},
            {texto: "Mora", valor: "mora"},
            {texto: "Limón", valor: "limon"},
            {texto: "Mandarina", valor: "mandarina"},
            {texto: "Naranja", valor: "naranja"},
            {texto: "Pomelo", valor: "pomelo"},
            {texto: "Melón", valor: "melon"},
            {texto: "Sandía", valor: "sandia"},
            {texto: "Palta", valor: "palta"},
            {texto: "Chirimoya", valor: "chirimoya"},
            {texto: "Coco", valor: "coco"},
            {texto: "Dátil", valor: "datil"},
            {texto: "Kiwi", valor: "kiwi"},
            {texto: "Mango", valor: "mango"},
            {texto: "Papaya", valor: "papaya"},
            {texto: "Piña", valor: "pina"},
            {texto: "Plátano", valor: "platano"},
            {texto: "Damasco", valor: "damasco"},
            {texto: "Cereza", valor: "cereza"},
            {texto: "Ciruela", valor: "ciruela"},
            {texto: "Higo", valor: "higo"},
            {texto: "Kaki", valor: "kaki"},
            {texto: "Manzana", valor: "manzana"},
            {texto: "Durazno", valor: "durazno"},
            {texto: "Nectarin", valor: "nectarin"},
            {texto: "Níspero", valor: "nispero"},
            {texto: "Pera", valor: "pera"},
            {texto: "Uva", valor: "uva"},
            {texto: "Almendra", valor: "almendra"},
            {texto: "Avellana", valor: "avellana"},
            {texto: "Maní", valor: "mani"},
            {texto: "Castaña", valor: "castana"},
            {texto: "Nuez", valor: "nuez"},
            {texto: "Pistacho", valor: "pistacho"}
        ];
    }

    if (tipo == "verduras") {
        opciones = [
            {texto: "Elija una Verdura", valor: ""},
            {texto: "Brócoli", valor: "brocoli"},
            {texto: "Repollo", valor: "repollo"},
            {texto: "Coliflor", valor: "coliflor"},
            {texto: "Rábano", valor: "rabano"},
            {texto: "Alcachofa", valor: "alcachofa"},
            {texto: "Lechuga", valor: "lechuga"},
            {texto: "Zapallo", valor: "zapallo"},
            {texto: "Pepino", valor: "pepino"},
            {texto: "Haba", valor: "haba"},
            {texto: "Maíz", valor: "maiz"},
            {texto: "Champiñón", valor: "champinon"},
            {texto: "Acelga", valor: "acelga"},
            {texto: "Apio", valor: "apio"},
            {texto: "Espinaca", valor: "espinaca"},
            {texto: "Perejil", valor: "perejil"},
            {texto: "Ajo", valor: "ajo"},
            {texto: "Cebolla", valor: "cebolla"},
            {texto: "Espárrago", valor: "esparrago"},
            {texto: "Puerro", valor: "puerro"},
            {texto: "Acelga", valor: "acelga"},
            {texto: "Espinaca", valor: "espinaca"},
            {texto: "Remolacha", valor: "remolacha"},
            {texto: "Berenjena", valor: "berenjena"},
            {texto: "Papa", valor: "papa"},
            {texto: "Pimiento", valor: "pimiento"},
            {texto: "Tomate", valor: "tomate"},
            {texto: "Zanahoria", valor: "zanahoria"}
        ];
    }

    const crearSelectorSgnFV = indice => {
        let fvSelect = document.getElementById("fv-formulario");
        let fvOpc = document.getElementById("fv-cant-input");
        let tipo = fvSelect.value;
        let selector = document.createElement("select");

        if (tipo == "fruta") {
            selector.id = "fruta" + indice;
            selector.name = "fruta" + indice;
            selector.required = true;
        }

        if (tipo == "verdura") {
            selector.id = "verdura" + (indice+1);
            selector.name = "verdura" + (indice+1);
            selector.required = true;
        }

        opciones.forEach(crearOption = (opcion) => {
            let opcion_element = document.createElement("option");
            opcion_element.textContent = opcion.texto;
            opcion_element.value = opcion.valor;
            selector.append(opcion_element);
        });

        fvOpc.append(selector);
    }

    if (!opciones || opciones.length === 0) {
        botonMasUno.style.display = "none";
        botonMenosUno.style.display = "none";
        mensajeError.innerHTML = "";
        index = 1;
        return;
    }

    botonMasUno.style.display = "inline-block";
    botonMenosUno.style.display = "inline-block";

    for (let i = 0; i < index; i++) {
        crearSelectorSgnFV(i+1)
    }
}

const validarTipo = tipo => {
    return tipo != ""
};

const validarCantTipo = cantTipo => {
    let elecciones = [];
    const selects = cantTipo.getElementsByTagName("select");
    for (let select of selects) {
        if (select.value != "" && !elecciones.includes(select.value)) {
            elecciones.push(select.value);
        }   
    }
    return elecciones.length == index; 
};

const validarFotos = fotos => {
    const cantFotos = fotos.files.length;
    return cantFotos >= 1 && cantFotos <= 3;
};

const validarRegion = region => {
    return region.value !== "";
};

const validarComuna = comuna => {
    return comuna.value !== "";
};

const validarNombre = nombre => {
    return nombre && nombre.length >= 3 && nombre.length <= 80
};

const validarCorreo = correo => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.length <= 30 && emailRegex.test(correo);
};

const validarNumero = numero => {
    const numeroRegex = /^\+569\d{8}$/;
    return (numero.length <= 15 && numeroRegex.test(numero)) || numero == "";
};

const validarEnvio = () => {
    const tipoInput = document.getElementById("fv-formulario");
    const cantTipoInput = document.getElementById("fv-cant-input");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    const cajaPostForm = document.getElementById("post-formulario");

    let valido = true;
    let mensajeDeError = "";

    if (!validarTipo(tipoInput.value)) {
        valido = false;
        mensajeDeError += "Por favor indique el tipo de producto (fruta o verdura).\n";
        tipoInput.style.borderColor = "red";
    } else {
        tipoInput.style.borderColor = "";
        if (!validarCantTipo(cantTipoInput)) {
            valido = false;
            mensajeDeError += "Por favor seleccione la cantidad de frutas/verduras de acuerdo al número escogido (mínimo 1, máximo 5). De ser más de una opción, deben ser distintas entre sí.\n";
        }
    }

    if (!validarFotos(fotosInput)) {
        valido = false;
        mensajeDeError += "Por favor suba fotos de sus productos (mínimo 1, máximo 3).\n";
        fotosInput.style.borderColor = "red";
    } else {
        fotosInput.style.borderColor = "";
    }

    if (!validarRegion(regionInput)) {
        valido = false;
        mensajeDeError += "Por favor seleccione su Región.\n";
        regionInput.style.borderColor = "red";
    } else {
        regionInput.style.borderColor = "";
    }

    if (!validarComuna(comunaInput)) {
        valido = false;
        mensajeDeError += "Por favor seleccione su Comuna.\n";
        comunaInput.style.borderColor = "red";
    } else {
        comunaInput.style.borderColor = "";
    }

    if (!validarNombre(nombreInput.value)) {
        valido = false;
        mensajeDeError += "Por favor ingrese un nombre válido (3 caracteres mínimo, 80 máximo).\n";
        nombreInput.style.borderColor = "red";
    } else {
        nombreInput.style.borderColor = "";
    }

    if (!validarCorreo(correoInput.value)) {
        valido = false;
        mensajeDeError += "Por favor ingrese un correo electrónico válido (30 caracteres máximo).\n";
        correoInput.style.borderColor = "red";
    } else {
        correoInput.style.borderColor = "";
    }

    if (!validarNumero(numeroInput.value)) {
        valido = false;
        mensajeDeError += "Por favor ingrese un número de celular válido en Chile (Formato: +569XXXXXXXX).\n";
        numeroInput.style.borderColor = "red";
    } else {
        numeroInput.style.borderColor = "";
    }

    if (!valido) {
        formularioError(cajaPostForm, mensajeDeError);
    } else {
        formularioExitoso(cajaPostForm);
    }
};

const formularioError = (contenedor, errores) => {
    contenedor.innerHTML = "";

    const div = document.createElement("div");

    div.id = "msg-error";
    div.className = "caja-error";

    const introError = document.createElement("p");

    introError.id = "font-boton";
    introError.style.textAlign = "left";
    introError.style.marginLeft = "5px";
    introError.append(document.createTextNode("Ha habido un error con sus respuestas:\n"));
    introError.append(document.createElement("br"));

    errores.split('\n').forEach(linea => {
        introError.append(document.createElement("br"));
        introError.append(document.createTextNode(linea));
    });
    
    div.append(introError);
    contenedor.append(div);
}

const formularioExitoso = contenedor => {
    const tipoInput = document.getElementById("fv-formulario");
    const cantTipoInput = document.getElementById("fv-cant-input");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    tipoInput.disabled = true;
    cantTipoInput.disabled = true;
    fotosInput.disabled = true;
    regionInput.disabled = true;
    comunaInput.disabled = true;
    nombreInput.disabled = true;
    correoInput.disabled = true;
    numeroInput.disabled = true;

    const desc = document.getElementById("descripcion")

    desc.disabled = true;

    contenedor.innerHTML = "";

    const div = document.createElement("div");

    div.id = "msg-confirmar";
    div.className = "caja-confirmacion";

    const introConfirmar = document.createElement("p");

    introConfirmar.id = "bajada";
    introConfirmar.style.textAlign = "center";
    introConfirmar.style.marginLeft = "5px";
    introConfirmar.append(document.createTextNode("¿Confirma el registro de este producto?\n"));
    introConfirmar.append(document.createElement("br"));

    const botonConfirmar = document.createElement("button");

    botonConfirmar.className = "confirmar";
    botonConfirmar.id = "confirmar-formulario";
    botonConfirmar.textContent = "Sí, confirmo";
    botonConfirmar.addEventListener("click", () => msgConfirmado(contenedor));

    const botonVolver = document.createElement("button");

    botonVolver.className = "volver";
    botonVolver.id = "volver-al-formulario";
    botonVolver.textContent = "No, quiero volver al formulario";

    botonVolver.addEventListener("click", () => volverFormulario(contenedor));
    
    div.append(introConfirmar);
    div.append(botonConfirmar);
    div.append(botonVolver);
    contenedor.append(div);
};

const msgConfirmado = contenedor => {
    contenedor.innerHTML = "";

    const div = document.createElement("div");

    div.id = "msg-confirmar";
    div.className = "caja-confirmacion";

    const introFin = document.createElement("p");

    introFin.id = "bajada";
    introFin.style.textAlign = "center";
    introFin.style.marginLeft = "5px";
    introFin.append(document.createTextNode("Hemos recibido el registro de producto. Muchas gracias.\n"));
    introFin.append(document.createElement("br"));
    
    const botonVolver = document.createElement("a");

    botonVolver.id = "font-boton";
    botonVolver.href = "../html/index.html";
    botonVolver.className = "volver";
    botonVolver.textContent = "Volver al menú";

    div.append(introFin);
    div.append(botonVolver);
    contenedor.append(div);
};

const volverFormulario = contenedor => {
    const tipoInput = document.getElementById("fv-formulario");
    const cantTipoInput = document.getElementById("fv-cant-input");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    tipoInput.disabled = false;
    cantTipoInput.disabled = false;
    fotosInput.disabled = false;
    regionInput.disabled = false;
    comunaInput.disabled = false;
    nombreInput.disabled = false;
    correoInput.disabled = false;
    numeroInput.disabled = false;

    const desc = document.getElementById("descripcion")

    desc.disabled = false;

    contenedor.innerHTML = "";
}

const botonEnvio = document.getElementById("envio-formulario");
botonEnvio.addEventListener("click", validarEnvio);

const botonMasUno = document.getElementById("mas-uno");
botonMasUno.addEventListener("click", indiceMasUno);
botonMasUno.addEventListener("click", opcSegunFV);

const botonMenosUno = document.getElementById("menos-uno");
botonMenosUno.addEventListener("click", indiceMenosUno);
botonMenosUno.addEventListener("click", opcSegunFV);