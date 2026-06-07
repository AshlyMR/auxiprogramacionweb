const vehicles = [

    {
        id: 1,
        name: "Ferrari 488",
        category: "Deportivos",
        year: 2020,
        color: "Rojo",
        series: "Car Culture",
        image: "/src/assets/images/autos/a1.jpg",
        owned: false,       
        favorite: false,   
        description: "Superdeportivo italiano de alta performance"
    },
    {
        id: 2,
        name: "Lamborghini Huracán",
        category: "Deportivos",
        year: 2021,
        color: "Amarillo",
        series: "Exotics",
        image: "/src/assets/images/autos/a2.jpg",
        owned: false,
        favorite: false,
        description: "El toro desatado de Sant'Agata"
    },
    {
        id: 3,
        name: "Porsche 911 GT3",
        category: "Deportivos",
        year: 2022,
        color: "Blanco",
        series: "Speed Machines",
        image: "/src/assets/images/autos/a3.jpg",
        owned: false,
        favorite: false,
        description: "Precisión alemana en pista"
    },
    {
        id: 4,
        name: "McLaren 720S",
        category: "Deportivos",
        year: 2021,
        color: "Naranja",
        series: "Car Culture",
        image: "/src/assets/images/autos/a4.jpg",
        owned: false,
        favorite: false,
        description: "Tecnología de Fórmula 1 para la calle"
    },

    {
        id: 5,
        name: "Ford Mustang GT500",
        category: "Muscle Cars",
        year: 2019,
        color: "Azul oscuro",
        series: "Muscle Mania",
        image: "/src/assets/images/autos/a5.jpg",
        owned: false,
        favorite: false,
        description: "El pony car más icónico de América"
    },
    {
        id: 6,
        name: "Dodge Challenger SRT",
        category: "Muscle Cars",
        year: 2020,
        color: "Negro",
        series: "Muscle Mania",
        image: "/src/assets/images/autos/a6.jpg",
        owned: false,
        favorite: false,
        description: "Músculo americano puro"
    },
    {
        id: 7,
        name: "Chevrolet Camaro ZL1",
        category: "Muscle Cars",
        year: 2021,
        color: "Amarillo",
        series: "Muscle Mania",
        image: "/src/assets/images/autos/a7.jpg",
        owned: false,
        favorite: false,
        description: "El rival eterno del Mustang"
    },
    {
        id: 8,
        name: "Pontiac GTO 1969",
        category: "Muscle Cars",
        year: 2018,
        color: "Verde",
        series: "Vintage Muscle",
        image: "/src/assets/images/autos/a8.jpg",
        owned: false,
        favorite: false,
        description: "El Judge, un clásico del muscle"
    },


    {
        id: 9,
        name: "Volkswagen Beetle 1963",
        category: "Clásicos",
        year: 2017,
        color: "Celeste",
        series: "Retro Classics",
        image: "/src/assets/images/autos/a9.jpg",
        owned: false,
        favorite: false,
        description: "El escarabajo que conquistó el mundo"
    },
    {
        id: 10,
        name: "Chevrolet Corvette C1 1957",
        category: "Clásicos",
        year: 2019,
        color: "Rojo y blanco",
        series: "Retro Classics",
        image: "/src/assets/images/autos/a10.jpg",
        owned: false,
        favorite: false,
        description: "El deportivo americano original"
    },
    {
        id: 11,
        name: "Ford Model T",
        category: "Clásicos",
        year: 2016,
        color: "Negro",
        series: "Historic Fleet",
        image: "/src/assets/images/autos/a11.jpg",
        owned: false,
        favorite: false,
        description: "El auto que cambió el mundo"
    },
    {
        id: 12,
        name: "Mercedes 300SL Alas de Gaviota",
        category: "Clásicos",
        year: 2020,
        color: "Plata",
        series: "Retro Classics",
        image: "/src/assets/images/autos/a12.jpg",
        owned: false,
        favorite: false,
        description: "Las puertas más famosas de la historia"
    },


    {
        id: 13,
        name: "Ford Bronco 2021",
        category: "Todoterreno",
        year: 2022,
        color: "Verde militar",
        series: "Off-Road Kings",
        image: "/src/assets/images/autos/a13.jpg",
        owned: false,
        favorite: false,
        description: "El rey del off-road regresó"
    },
    {
        id: 14,
        name: "Jeep Wrangler Rubicon",
        category: "Todoterreno",
        year: 2021,
        color: "Naranja",
        series: "Off-Road Kings",
        image: "/src/assets/images/autos/a14.jpg",
        owned: false,
        favorite: false,
        description: "Imbatible en cualquier terreno"
    },
    {
        id: 15,
        name: "Toyota Land Cruiser FJ40",
        category: "Todoterreno",
        year: 2020,
        color: "Beige",
        series: "4x4 Legends",
        image: "/src/assets/images/autos/a15.jpg",
        owned: false,
        favorite: false,
        description: "Legendario explorador japonés"
    },
    {
        id: 16,
        name: "Land Rover Defender",
        category: "Todoterreno",
        year: 2022,
        color: "Gris",
        series: "4x4 Legends",
        image: "/src/assets/images/autos/a16.jpg",
        owned: false,
        favorite: false,
        description: "El aventurero británico por excelencia"
    },


    {
        id: 17,
        name: "Formula 1 Red Bull RB19",
        category: "Competición",
        year: 2023,
        color: "Azul y rojo",
        series: "Racing Circuit",
        image: "/src/assets/images/autos/a17.jpg",
        owned: false,
        favorite: false,
        description: "El monoplaza más dominante de la historia"
    },
    {
        id: 18,
        name: "NASCAR Chevrolet #24",
        category: "Competición",
        year: 2022,
        color: "Multicolor",
        series: "Racing Circuit",
        image: "/src/assets/images/autos/a18.jpg",
        owned: false,
        favorite: false,
        description: "Velocidad oval americana"
    },
    {
        id: 19,
        name: "Le Mans Prototype LMP1",
        category: "Competición",
        year: 2021,
        color: "Negro y dorado",
        series: "Endurance Legends",
        image: "/src/assets/images/autos/a19.jpg",
        owned: false,
        favorite: false,
        description: "Rey de las 24 horas de Le Mans"
    },
    {
        id: 20,
        name: "Rally WRC Subaru Impreza",
        category: "Competición",
        year: 2020,
        color: "Azul con dorado",
        series: "Rally Legends",
        image: "/src/assets/images/autos/a20.jpg",
        owned: false,
        favorite: false,
        description: "El rey de los rallies mundiales"
    }
];


export default vehicles;