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
    if (region == "15") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Arica", valor: "10201"},
            {texto: "Camarones", valor: "10202"},
            {texto: "General Lagos", valor: "10101"},
            {texto: "Putre", valor: "10102"}
        ];
    }
    // Región de Tarapacá
    if (region == "1") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto Hospicio", valor: "10307"},
            {texto: "Camiña", valor: "10301"},
            {texto: "Colchane", valor: "10306"},
            {texto: "Huara", valor: "10302"},
            {texto: "Iquique", valor: "10304"},
            {texto: "Pica", valor: "10305"},
            {texto: "Pozo Almonte", valor: "10303"}
        ];
    }
    // Región de Antofagasta
    if (region == "2") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Antofagasta", valor: "20303"},
            {texto: "Calama", valor: "20202"},
            {texto: "María Elena", valor: "20102"},
            {texto: "Mejillones", valor: "20302"},
            {texto: "Ollagüe", valor: "20201"},
            {texto: "San Pedro de Atacama", valor: "20203"},
            {texto: "Sierra Gorda", valor: "20301"},
            {texto: "Taltal", valor: "20304"},
            {texto: "Tocopilla", valor: "20101"}
        ];
    }
    // Región de Atacama
    if (region == "3") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto del Carmen", valor: "30304"},
            {texto: "Caldera", valor: "30201"},
            {texto: "Chañaran", valor: "30102"},
            {texto: "Copiapó", valor: "30202"},
            {texto: "Diego de Almagro", valor: "30101"},
            {texto: "Freirina", valor: "30302"},
            {texto: "Huasco", valor: "30301"},
            {texto: "Tierra Amarilla", valor: "30203"},
            {texto: "Vallenar", valor: "30303"}
        ];
    }
    // Región de Coquimbo
    if (region == "4") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Andacollo", valor: "40106"},
            {texto: "Canela", valor: "40302"},
            {texto: "Combarbalá", valor: "40205"},
            {texto: "Coquimbo", valor: "40105"},
            {texto: "Illapel", valor: "40302"},
            {texto: "La Higuera", valor: "40101"},
            {texto: "La Serena", valor: "40102"},
            {texto: "Los Vilos", valor: "40304"},
            {texto: "Monte Patria", valor: "40203"},
            {texto: "Mincha", valor: "40301"},
            {texto: "Ovalle", valor: "40202"},
            {texto: "Paihuano", valor: "40104"},
            {texto: "Punitaqui", valor: "40204"},
            {texto: "Río Hurtado", valor: "40201"},
            {texto: "Salamanca", valor: "40303"},
            {texto: "Vicuña", valor: "40103"}
        ];
    }
    // Región de Valparaíso
    if (region == "5") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Algarrobo", valor: "50701"},
            {texto: "Cabildo", valor: "50102"},
            {texto: "Calle Larga", valor: "50403"},
            {texto: "Cartagena", valor: "50704"},
            {texto: "Casablanca", valor: "50508"},
            {texto: "Catemu", valor: "50205"},
            {texto: "Concon", valor: "50509"},
            {texto: "El Quisco", valor: "50702"},
            {texto: "El Tabo", valor: "50703"},
            {texto: "Hijuelas", valor: "50303"},
            {texto: "Isla de Pascua", valor: "50601"},
            {texto: "Juan Fernandez", valor: "50507"},
            {texto: "La Calera", valor: "50302"},
            {texto: "La Cruz", valor: "50304"},
            {texto: "La Ligua", valor: "50104"},
            {texto: "Limache", valor: "50307"},
            {texto: "Llay Llay", valor: "50206"},
            {texto: "Los Andes", valor: "50401"},
            {texto: "Nogales", valor: "50301"},
            {texto: "Olmué", valor: "50306"},
            {texto: "Papudo", valor: "50103"},
            {texto: "Pencahue", valor: "50204"},
            {texto: "Petorca", valor: "50101"},
            {texto: "Puchuncaví", valor: "50501"},
            {texto: "Putaendo", valor: "50201"},
            {texto: "Quillota", valor: "50305"},
            {texto: "Quilpué", valor: "50505"},
            {texto: "Quintero", valor: "50502"},
            {texto: "Rinconada", valor: "50402"},
            {texto: "San Antonio", valor: "50705"},
            {texto: "San Esteban", valor: "50404"},
            {texto: "San Felipe", valor: "50203"},
            {texto: "Santa María", valor: "50202"},
            {texto: "Santo Domingo", valor: "50706"},
            {texto: "Valparaíso", valor: "50506"},
            {texto: "Villa Alemana", valor: "50504"},
            {texto: "Viña del Mar", valor: "50503"},
            {texto: "Zapallar", valor: "50105"}
        ];
    }
    // Región Metropolitana de Santiago
    if (region == "13") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alhué", valor: "130605"},
            {texto: "Buin", valor: "130403"},
            {texto: "Calera de Tango", valor: "130402"},
            {texto: "Cerrillos", valor: "130230"},
            {texto: "Cerro Navia", valor: "130232"},
            {texto: "Colina", valor: "130102"},
            {texto: "Conchalí", valor: "130201"},
            {texto: "Curacaví", valor: "130601"},
            {texto: "El Bosque", valor: "130226"},
            {texto: "El Monte", valor: "130503"},
            {texto: "Estación Central", valor: "130229"},
            {texto: "Huechuraba", valor: "130217"},
            {texto: "Independencia", valor: "130216"},
            {texto: "Isla de Maipo", valor: "130504"},
            {texto: "La Cisterna", valor: "130213"},
            {texto: "La Florida", valor: "130214"},
            {texto: "La Granja", valor: "130215"},
            {texto: "Lampa", valor: "130103"},
            {texto: "La Pintana", valor: "130224"},
            {texto: "La Reina", valor: "130209"},
            {texto: "Las Condes", valor: "130204"},
            {texto: "Lo Barnechea", valor: "130220"},
            {texto: "Lo Espejo", valor: "130228"},
            {texto: "Lo Prado", valor: "130231"},
            {texto: "Macul", valor: "130221"},
            {texto: "Maipú", valor: "130212"},
            {texto: "María Pinto", valor: "130602"},
            {texto: "Melipilla", valor: "130603"},
            {texto: "Ñuñoa", valor: "130210"},
            {texto: "Padre Hurtado", valor: "130606"},
            {texto: "Paine", valor: "130404"},
            {texto: "Pedro Aguirre Cerda", valor: "130227"},
            {texto: "Peñaflor", valor: "130501"},
            {texto: "Peñalolén", valor: "130222"},
            {texto: "Pirque", valor: "130303"},
            {texto: "Providencia", valor: "130207"},
            {texto: "Pudahuel", valor: "130205"},
            {texto: "Puente Alto", valor: "130302"},
            {texto: "Quilicura", valor: "130202"},
            {texto: "Quinta Normal", valor: "130206"},
            {texto: "Recoleta", valor: "130218"},
            {texto: "Renca", valor: "130203"},
            {texto: "San Bernardo", valor: "130401"},
            {texto: "San Joaquín", valor: "130223"},
            {texto: "San José de Maipo", valor: "130301"},
            {texto: "San Miguel", valor: "130211"},
            {texto: "San Pedro", valor: "130604"},
            {texto: "San Ramón", valor: "130225"},
            {texto: "Santiago", valor: "130208"},
            {texto: "Talagante", valor: "130502"},
            {texto: "Tiltil", valor: "130101"},
            {texto: "Vitacura", valor: "130219"}
        ];
    }
    // Región del Libertador Gral. Bernardo O'Higgins
    if (region == "6") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Chépica", valor: "60309"},
            {texto: "Chimbarongo", valor: "60304"},
            {texto: "Codegua", valor: "60102"},
            {texto: "Coinco", valor: "60109"},
            {texto: "Coltauco", valor: "60110"},
            {texto: "Doñihue", valor: "60107"},
            {texto: "Graneros", valor: "60103"},
            {texto: "La Estrella", valor: "60202"},
            {texto: "Las Cabras", valor: "60112"},
            {texto: "Litueche", valor: "60205"},
            {texto: "Lolol", valor: "60310"},
            {texto: "Machalí", valor: "60104"},
            {texto: "Malloa", valor: "60116"},
            {texto: "Marchihue", valor: "60203"},
            {texto: "Mostazal", valor: "60101"},
            {texto: "Nancagua", valor: "60306"},
            {texto: "Navidad", valor: "60201"},
            {texto: "Olivar", valor: "60106"},
            {texto: "Palmilla", valor: "60305"},
            {texto: "Paredones", valor: "60206"},
            {texto: "Peralillo", valor: "60302"},
            {texto: "Peumo", valor: "60114"},
            {texto: "Pichidegua", valor: "60115"},
            {texto: "Pichilemu", valor: "60204"},
            {texto: "Placilla", valor: "60303"},
            {texto: "Pumanque", valor: "60308"},
            {texto: "Quinta Tilcoco", valor: "60111"},
            {texto: "Rancagua", valor: "60105"},
            {texto: "Rengo", valor: "60113"},
            {texto: "Requínoa", valor: "60108"},
            {texto: "San Fernando", valor: "60301"},
            {texto: "Santa Cruz", valor: "60307"},
            {texto: "San Vicente", valor: "60117"}
        ];
    }
    // Región del Maule
    if (region == "7") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Cauquenes", valor: "70402"},
            {texto: "Chanco", valor: "70401"},
            {texto: "Colbún", valor: "70302"},
            {texto: "Constitución", valor: "70207"},
            {texto: "Curepto", valor: "70202"},
            {texto: "Curicó", valor: "70104"},
            {texto: "Empedrado", valor: "70209"},
            {texto: "Hualañé", valor: "70106"},
            {texto: "Licantén", valor: "70109"},
            {texto: "Linares", valor: "70305"},
            {texto: "Longaví", valor: "70306"},
            {texto: "Maule", valor: "70208"},
            {texto: "Molina", valor: "70108"},
            {texto: "Parral", valor: "70308"},
            {texto: "Pelarco", valor: "70203"},
            {texto: "Pelluhue", valor: "70403"},
            {texto: "Pencahue", valor: "70205"},
            {texto: "Rauco", valor: "70103"},
            {texto: "Retiro", valor: "70307"},
            {texto: "Río Claro", valor: "70201"},
            {texto: "Romeral", valor: "70102"},
            {texto: "Sagrada Familia", valor: "70105"},
            {texto: "San Clemente", valor: "70206"},
            {texto: "San Javier", valor: "70301"},
            {texto: "San Rafael", valor: "70210"},
            {texto: "Talca", valor: "70204"},
            {texto: "Teno", valor: "70101"},
            {texto: "Vichuquén", valor: "70107"},
            {texto: "Villa Alegre", valor: "70303"},
            {texto: "Yerbas Buenas", valor: "70304"}
        ];
    }
    // Región de Ñuble
    if (region == "16") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Bulnes", valor: "80114"},
            {texto: "Chillán", valor: "80110"},
            {texto: "Chillán Viejo", valor: "80121"},
            {texto: "Cobquecura", valor: "80101"},
            {texto: "Coelemu", valor: "80113"},
            {texto: "Coihueco", valor: "80109"},
            {texto: "El Carmen", valor: "80118"},
            {texto: "Ninhue", valor: "80106"},
            {texto: "Ñiquén", valor: "80102"},
            {texto: "Pemuco", valor: "80119"},
            {texto: "Pinto", valor: "80112"},
            {texto: "Portezuelo", valor: "80111"},
            {texto: "Quillón", valor: "80117"},
            {texto: "Quirihue", valor: "80105"},
            {texto: "Ránquil", valor: "80116"},
            {texto: "San Carlos", valor: "80104"},
            {texto: "San Fabián", valor: "80103"},
            {texto: "San Ignacio", valor: "80115"},
            {texto: "San Nicolás", valor: "80108"},
            {texto: "Trehuaco", valor: "80107"},
            {texto: "Yungay", valor: "80120"}
        ];
    }
    // Región del Biobío
    if (region == "8") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Alto Biobío", valor: "80314"},
            {texto: "Antuco", valor: "80304"},
            {texto: "Arauco", valor: "80401"},
            {texto: "Cabrero", valor: "80301"},
            {texto: "Cañete", valor: "80405"},
            {texto: "Chiguayante", valor: "80210"},
            {texto: "Concepción", valor: "80205"},
            {texto: "Contulmo", valor: "80406"},
            {texto: "Coronel", valor: "80207"},
            {texto: "Curanilahue", valor: "80402"},
            {texto: "Florida", valor: "80202"},
            {texto: "Hualpén", valor: "80212"},
            {texto: "Hualqui", valor: "80206"},
            {texto: "Laja", valor: "80306"},
            {texto: "Lebu", valor: "80404"},
            {texto: "Los Álamos", valor: "80403"},
            {texto: "Los Ángeles", valor: "80308"},
            {texto: "Lota", valor: "80208"},
            {texto: "Mulchén", valor: "80313"},
            {texto: "Nacimiento", valor: "80309"},
            {texto: "Negrete", valor: "80310"},
            {texto: "Penco", valor: "80203"},
            {texto: "Quilaco", valor: "80312"},
            {texto: "Quilleco", valor: "80307"},
            {texto: "San Pedro de la Paz", valor: "80211"},
            {texto: "San Rosendo", valor: "80305"},
            {texto: "Santa Bárbara", valor: "80311"},
            {texto: "Santa Juana", valor: "80209"},
            {texto: "Talcahuano", valor: "80204"},
            {texto: "Tirúa", valor: "80407"},
            {texto: "Tomé", valor: "80201"},
            {texto: "Tucapel", valor: "80303"},
            {texto: "Yumbel", valor: "80302"},
        ];
    }
    // Región de La Araucanía
    if (region == "9") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Angol", valor: "90102"},
            {texto: "Carahue", valor: "90206"},
            {texto: "Cholchol", valor: "90221"},
            {texto: "Collipulli", valor: "90103"},
            {texto: "Cunco", valor: "90210"},
            {texto: "Curacautín", valor: "90110"},
            {texto: "Curarrehue", valor: "90218"},
            {texto: "Ercilla", valor: "90106"},
            {texto: "Freire", valor: "90211"},
            {texto: "Galvarino", valor: "90202"},
            {texto: "Gorbea", valor: "90214"},
            {texto: "Lautaro", valor: "90203"},
            {texto: "Loncoche", valor: "90219"},
            {texto: "Lonquimay", valor: "90111"},
            {texto: "Los Sauces", valor: "90104"},
            {texto: "Lumaco", valor: "90107"},
            {texto: "Melipeuco", valor: "90207"},
            {texto: "Nueva Imperial", valor: "90208"},
            {texto: "Padre las Casas", valor: "90220"},
            {texto: "Perquenco", valor: "90201"},
            {texto: "Pitrufquén", valor: "90212"},
            {texto: "Pucón", valor: "90215"},
            {texto: "Purén", valor: "90105"},
            {texto: "Renaico", valor: "90101"},
            {texto: "Puerto Saavedra", valor: "90209"},
            {texto: "Temuco", valor: "90205"},
            {texto: "Teodoro Schmidt", valor: "90213"},
            {texto: "Toltén", valor: "90217"},
            {texto: "Traiguén", valor: "90109"},
            {texto: "Victoria", valor: "90108"},
            {texto: "Vilcún", valor: "90204"},
            {texto: "Villarrica", valor: "90216"}
        ];
    }
    // Región de Los Ríos
    if (region == "14") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Corral", valor: "100107"},
            {texto: "Futrono", valor: "100109"},
            {texto: "Lago Ranco", valor: "100110"},
            {texto: "Lanco", valor: "100101"},
            {texto: "La Unión", valor: "100111"},
            {texto: "Los Lagos", valor: "100106"},
            {texto: "Máfil", valor: "100104"},
            {texto: "Mariquina", valor: "100102"},
            {texto: "Paillaco", valor: "100108"},
            {texto: "Panguipulli", valor: "100103"},
            {texto: "Río Bueno", valor: "100112"},
            {texto: "Valdivia", valor: "100105"}
        ];
    }
    // Región de Los Lagos
    if (region == "10") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Ancud", valor: "100401"},
            {texto: "Calbuco", valor: "100308"},
            {texto: "Castro", valor: "100405"},
            {texto: "Chaitén", valor: "100501"},
            {texto: "Chonchi", valor: "100406"},
            {texto: "Cochamó", valor: "100309"},
            {texto: "Curaco de Vélez", valor: "100404"},
            {texto: "Dalcahue", valor: "100403"},
            {texto: "Fresia", valor: "100302"},
            {texto: "Frutillar", valor: "100301"},
            {texto: "Futaleufú", valor: "100502"},
            {texto: "Hualaihué", valor: "100504"},
            {texto: "Llanquihue", valor: "100303"},
            {texto: "Los Muermos", valor: "100305"},
            {texto: "Maullín", valor: "100307"},
            {texto: "Osorno", valor: "100203"},
            {texto: "Palena", valor: "100503"},
            {texto: "Puerto Montt", valor: "100306"},
            {texto: "Puerto Octay", valor: "100207"},
            {texto: "Puerto Varas", valor: "100304"},
            {texto: "Puqueldón", valor: "100410"},
            {texto: "Purranque", valor: "100206"},
            {texto: "Puyehue", valor: "100204"},
            {texto: "Queilén", valor: "100407"},
            {texto: "Quellón", valor: "100408"},
            {texto: "Quemchi", valor: "100402"},
            {texto: "Quinchao", valor: "100409"},
            {texto: "Río Negro", valor: "100205"},
            {texto: "San Juan", valor: "100202"},
            {texto: "San Pablo", valor: "100201"},
        ];
    }
    // Región Aysén del G. Carlos Ibañez del Campo
    if (region == "11") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Aysén", valor: "110103"},
            {texto: "Chile Chico", valor: "110302"},
            {texto: "Cisnes", valor: "110102"},
            {texto: "Cochrane", valor: "110401"},
            {texto: "Coyhaique", valor: "110201"},
            {texto: "Guaitecas", valor: "110101"},
            {texto: "Lago Verde", valor: "110202"},
            {texto: "O'Higgins", valor: "110403"},
            {texto: "Río Ibáñez", valor: "110301"},
            {texto: "Tortel", valor: "110402"}
        ];
    }
    // Región de Magallanes y de la Antártica Chilena
    if (region == "12") {
        comunaSelect.required = true;
        opciones = [
            {texto: "Escoja una comuna", valor: ""},
            {texto: "Antártica", valor: "120401"},
            {texto: "Laguna Blanca", valor: "120201"},
            {texto: "Porvenir", valor: "120301"},
            {texto: "Primavera", valor: "120302"},
            {texto: "Puerto Natales", valor: "120102"},
            {texto: "Punta Arenas", valor: "120204"},
            {texto: "Río Verde", valor: "120203"},
            {texto: "San Gregorio", valor: "120202"},
            {texto: "Timaukel", valor: "120303"},
            {texto: "Torres del Paine", valor: "120101"}
        ];
    }

    // Esta función nos permite crear un elemento de tipo option para el valor que le entreguemos, asignándole un texto y un valor (valor que podemos validar luego)
    const crearAnadir = (opcion) => {
        let opcion_element = document.createElement("option");
        opcion_element.textContent = opcion.texto;
        opcion_element.value = opcion.valor;
        comunaSelect.append(opcion_element);
    }

    // Si no hay opciones, u opciones es un arreglo vacío, volvemos (en resumen, no hay datos que insertar)
    if (!opciones || opciones.length === 0) {
        return;
    }

    // Para cada opción en opciones, aplicamos crearAnadir(opcion)
    opciones.forEach(crearAnadir);
};

// Permite actualizar las opciones de frutas y verduras dependiendo de lo escogido (despliega todas las frutas si escogimos Frutas anteriormente, lo mismo para Verduras)
const opcSegunFV = () => {
    let fv = document.getElementById("fv-formulario");
    let selector = document.getElementById("selector-fv");
    let tipo = fv.value;

    if (selector.options.length > 0) {
        selector.innerHTML = "";
    }

    let opciones;
    if (tipo == "fruta") {
        opciones = [
            {texto: "Arándano", valor: "1"},
            {texto: "Frambuesa", valor: "2"},
            {texto: "Frutilla", valor: "3"},
            {texto: "Grosella", valor: "4"},
            {texto: "Mora", valor: "5"},
            {texto: "Limón", valor: "6"},
            {texto: "Mandarina", valor: "7"},
            {texto: "Naranja", valor: "8"},
            {texto: "Pomelo", valor: "9"},
            {texto: "Melón", valor: "10"},
            {texto: "Sandía", valor: "11"},
            {texto: "Palta", valor: "12"},
            {texto: "Chirimoya", valor: "13"},
            {texto: "Coco", valor: "14"},
            {texto: "Dátil", valor: "15"},
            {texto: "Kiwi", valor: "16"},
            {texto: "Mango", valor: "17"},
            {texto: "Papaya", valor: "18"},
            {texto: "Piña", valor: "19"},
            {texto: "Plátano", valor: "20"},
            {texto: "Damasco", valor: "21"},
            {texto: "Cereza", valor: "22"},
            {texto: "Ciruela", valor: "23"},
            {texto: "Higo", valor: "24"},
            {texto: "Kaki", valor: "25"},
            {texto: "Manzana", valor: "26"},
            {texto: "Durazno", valor: "27"},
            {texto: "Nectarin", valor: "28"},
            {texto: "Níspero", valor: "29"},
            {texto: "Pera", valor: "30"},
            {texto: "Uva", valor: "31"},
            {texto: "Almendra", valor: "32"},
            {texto: "Avellana", valor: "33"},
            {texto: "Maní", valor: "34"},
            {texto: "Castaña", valor: "35"},
            {texto: "Nuez", valor: "36"},
            {texto: "Pistacho", valor: "37"}
        ];
    }

    if (tipo == "verdura") {
        opciones = [
            {texto: "Brócoli", valor: "38"},
            {texto: "Repollo", valor: "39"},
            {texto: "Coliflor", valor: "40"},
            {texto: "Rábano", valor: "41"},
            {texto: "Alcachofa", valor: "42"},
            {texto: "Lechuga", valor: "43"},
            {texto: "Zapallo", valor: "44"},
            {texto: "Pepino", valor: "45"},
            {texto: "Haba", valor: "46"},
            {texto: "Maíz", valor: "47"},
            {texto: "Champiñón", valor: "48"},
            {texto: "Acelga", valor: "49"},
            {texto: "Apio", valor: "50"},
            {texto: "Espinaca", valor: "51"},
            {texto: "Perejil", valor: "52"},
            {texto: "Ajo", valor: "53"},
            {texto: "Cebolla", valor: "54"},
            {texto: "Espárrago", valor: "55"},
            {texto: "Puerro", valor: "56"},
            {texto: "Remolacha", valor: "57"},
            {texto: "Berenjena", valor: "58"},
            {texto: "Papa", valor: "59"},
            {texto: "Pimiento", valor: "60"},
            {texto: "Tomate", valor: "61"},
            {texto: "Zanahoria", valor: "62"}
        ];
    }

    // Similar al de comunas según región, creamos un elemento de tipo option por cada opción en el arreglo opciones
    opciones.forEach(crearOption = (opcion) => {
        let opcion_element = document.createElement("option");
        opcion_element.textContent = opcion.texto;
        opcion_element.value = opcion.valor;
        selector.appendChild(opcion_element);
    });
}

// --- VALIDACIONES ---

const validarFV = fv => {
    return fv == "fruta" || fv == "verdura";
}

const validarOpcionesFV = opcionesFV => {
    return opcionesFV.length > 0 && opcionesFV.length <= 5
}

const validarDescripcion = desc => {
    return desc.value.length <= 300
};

const validarFotos = fotos => {
    const cantFotos = fotos.files.length;
    return cantFotos >= 1 && cantFotos <= 3;
};

// Las regiones van de 1 a 16
const idRegiones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

const validarRegion = region => {
    return idRegiones.includes(region);
};

const validarComuna = (region, comuna) => {
    if (region == "15") {
        return comuna != "" && (comuna.startsWith("101") || comuna.startsWith("102"))
    }
    if (region == "8") {
        return comuna != "" && (comuna.startsWith(region+"02") || comuna.startsWith(region+"03") || comuna.startsWith(region+"04"));
    }
    if (region == "10") {
        return comuna != "" && (comuna.startsWith(region+"02") || comuna.startsWith(region+"03") || comuna.startsWith(region+"04") || comuna.startsWith(region+"05"));
    }
    if (region == "14") {
        return comuna != "" && comuna.startsWith("1001");
    }
    if (region == "16") {
        return comuna != "" && comuna.startsWith("801");
    }
    if (region != "15" && comuna != "8" && comuna != "10" && comuna != "14" && comuna != "16") {
        return comuna != "" && comuna.startsWith(region);
    }
};

const validarNombre = nombre => {
    return nombre != "" && nombre.length >= 3 && nombre.length <= 80
};

const validarCorreo = correo => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.length <= 30 && emailRegex.test(correo);
};

const validarNumero = numero => {
    const numeroRegex = /^\+569\d{8}$/;
    return (numero.length <= 15 && numeroRegex.test(numero)) || numero == "";
};

// --- ENVÍO DEL FORMULARIO ---

const validarEnvio = () => {
    const tipoInput = document.getElementById("fv-formulario");
    const cantInput = document.getElementById("selector-fv");
    const descInput = document.getElementById("descripcion");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    const cajaPostForm = document.getElementById("post-formulario");

    let valido = true;
    let mensajeDeError = "";

    // Mensajes de error:

    if (!validarFV(tipoInput.value)) {
        valido = false;
        mensajeDeError += "Por favor indique el tipo de producto (fruta o verdura).\n";
        tipoInput.style.borderColor = "red";
    } else {
        tipoInput.style.borderColor = "";
        if (!validarOpcionesFV(cantInput.selectedOptions)) {
            valido = false;
            mensajeDeError += "Por favor seleccione al menos 1 y como mucho 5 frutas/verduras.\n";
        }
    }

    if (!validarDescripcion(descInput)) {
        valido = false;
        mensajeDeError += "Por favor ingrese una descripción de no más de 300 caracteres.\n";
        descInput.style.borderColor = "red";
    } else {
        descInput.style.borderColor = "";
    }

    if (!validarFotos(fotosInput)) {
        valido = false;
        mensajeDeError += "Por favor suba fotos de sus productos (mínimo 1, máximo 3).\n";
        fotosInput.style.borderColor = "red";
    } else {
        fotosInput.style.borderColor = "";
    }

    if (!validarRegion(regionInput.value)) {
        console.log(regionInput.value);
        valido = false;
        mensajeDeError += "Por favor seleccione su Región.\n";
        regionInput.style.borderColor = "red";
    } else {
        regionInput.style.borderColor = "";
    }

    if (!validarComuna(regionInput.value, comunaInput.value)) {
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

    // Si nos encontramos con un error, delegamos a formularioError(contenedor, errores) la creación de un globo de texto, informando al usuario sobre datos mal ingresados
    // Si todo sale bien, delegamos a formularioExitoso(contenedor) el preguntar al usuario si está seguro con subir dichas respuestas:
    // ---> Si el usuario decide confirmar, volvemos a index
    // ---> Si decide volver al formulario, dejamos todo tal cual estaba antes

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
    const fvInput = document.getElementById("fv-formulario");
    const cantInput = document.getElementById("selector-fv");
    const descInput = document.getElementById("descripcion");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    fvValue = fvInput.value;

    cantValue = Array.from(cantInput.selectedOptions).map(option => option.value);

    descValue = descInput.value;
    fotosValue = fotosInput.files;
    regionValue = regionInput.value;
    comunaValue = comunaInput.value;
    nombreValue = nombreInput.value;
    correoValue = correoInput.value;
    numeroValue = numeroInput.value;

    fvInput.disabled = true;
    cantInput.disabled = true;
    descInput.disabled = true;
    fotosInput.disabled = true;
    regionInput.disabled = true;
    comunaInput.disabled = true;
    nombreInput.disabled = true;
    correoInput.disabled = true;
    numeroInput.disabled = true;

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
    botonConfirmar.addEventListener("click", () => msgConfirmado());

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

// Esta función es la encargada de enviar los datos del formulario a nuestra ruta de Flask, para luego ser subidos a las bases de datos, además de cualquier post-procesamiento de datos de parte del backend
const msgConfirmado = () => {
    const formData = new FormData();
    formData.append("fv-formulario", fvValue);
    formData.append("selector-fv", cantValue);
    formData.append("descripcion", descValue);
    formData.append("region-formulario", regionValue);
    formData.append("comuna-formulario", comunaValue);
    formData.append("nombre-formulario", nombreValue);
    formData.append("correo-formulario", correoValue);
    formData.append("numero-formulario", numeroValue);

    for (let i = 0; i < fotosValue.length; i++) {
        formData.append("fotos-formulario", fotosValue[i]);
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", agregarProductoUrl);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Redirigir al usuario a la página de index
                window.location.href = exitoProductoUrl;
            } else {
                // Manejar errores
                document.getElementById("post-formulario").innerHTML = xhr.responseText;
            }
        }
    };
    xhr.send(formData);
};

const volverFormulario = contenedor => {
    const fvInput = document.getElementById("fv-formulario");
    const cantInput = document.getElementById("selector-fv");
    const descInput = document.getElementById("descripcion");
    const fotosInput = document.getElementById("fotos-formulario");
    const regionInput = document.getElementById("region-formulario");
    const comunaInput = document.getElementById("comuna-formulario");
    const nombreInput = document.getElementById("nombre-formulario");
    const correoInput = document.getElementById("correo-formulario");
    const numeroInput = document.getElementById("numero-formulario");

    fvInput.disabled = false;
    cantInput.disabled = false;
    descInput.disabled = false;
    fotosInput.disabled = false;
    regionInput.disabled = false;
    comunaInput.disabled = false;
    nombreInput.disabled = false;
    correoInput.disabled = false;
    numeroInput.disabled = false;

    contenedor.innerHTML = "";
}

const botonEnvio = document.getElementById("envio-formulario");
botonEnvio.addEventListener("click", validarEnvio);