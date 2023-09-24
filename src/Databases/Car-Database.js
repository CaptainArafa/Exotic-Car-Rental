import Royce from "../assets/RollsRoyceGhost2018.jpg"
import Porsche from "../assets/PorschePanameraTurbo2023.jpg"
import Bentley from "../assets/BentleyContinentalGT2020.jpg"
import BMW from "../assets/BMWi82023.jpg"
import Benz from "../assets/MercedesBenzS2023.jpg"
import Tesla from "../assets/TeslaModelS.webp"
import TeslaPNG from "../assets/TeslaPng.png"
import BentleyPng from "../assets/BentleyPng.png"
import i8PNG from "../assets/i8Png.png"
import BenzPNG from "../assets/BenzPNG.png"
import PorschePNG from "../assets/PorschePng.png"
import RoycePNG from "../assets/RollsRoyce.png"



export const Cars = [

    {
        id:1,
        Name:"Rolls Royce Ghost",
        Model_Year:"2018",
        Price: 900,
        Rating: 5.0,
        image: Royce,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2FRollsRoyce.png?alt=media&token=facfcecd-5b26-445c-8480-a44600321efb",
        Model: 'Ghost',
        Brand:"Rolls Royce",
        transmission:'Automatic'
    },
    {
        id:2,
        Name:"Porsche Panamera Turbo",
        Model_Year:"2023",
        Price:200,
        Rating: 3.9,
        image: Porsche,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2FPorschePng.png?alt=media&token=b84b9c36-1b49-436c-a21f-8dab951cf609",
        Model: "Panamera Turbo",
        Brand:'Porsche',
        transmission:'Automatic'

    },
    {
        id:3,
        Name:"Mercedes Benz S Class",
        Model_Year:"2023",
        Price: 320,
        Rating: 4.0,
        image: Benz,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2FBenzPng.png?alt=media&token=c305f239-649b-448b-8f67-a68a9ba283a6",
        Model: "S Class",
        Brand:'Mercedes',
        transmission:'Automatic'

    },  {
        id:4,
        Name:"Bentley Continental GT",
        Model_Year:"2020",
        Price: 1020,
        Rating: 5.0,
        image: Bentley,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2FBentleyPng.png?alt=media&token=6deaf035-6a99-4027-952f-fdd744cee240",
        Model: "Continental GT",
        Brand:"Bentley",
        transmission:'Manual'


    },
    {
        id:5,
        Name:"Tesla Model S",
        Model_Year:"2021",
        Price: 160,
        Rating: 4.7,
        image: Tesla,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2FTeslaPng.png?alt=media&token=9a185275-6a34-490b-a0f1-766603a1be41",
        Model:"Model S",
        Brand: "Tesla",
        transmission:'Automatic'

    },
    {
        id:6,
        Name:"BMW i8",
        Model:"2023",
        Price:350,
        Rating: 4.8,
        image: BMW,
        png:"https://firebasestorage.googleapis.com/v0/b/car-rental-d2818.appspot.com/o/Car-Png%2Fi8Png.png?alt=media&token=eae03db6-8c3c-4f60-8221-77fd2d518378",
        Model:"i8",
        Brand:"BMW",
        transmission:'Automatic'

    }
]