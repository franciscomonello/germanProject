//here is my data
const gramarText = [
    {id:1,
    text:`La gramàtica es diferente al 
    español ya que el lenguage es 
    de origen germanico y el español rumanico(Iberorumanico para ser mas especifico). Una gran diferencia es el sistema de articulos de las palabras. El español tiene 2: "la", y "le", en cambio el alemàn tiene 3 y son "Der" en masculino, "Die" en femenino, y finalmente "Das" en neutro. En si, es complicado para todos los aprendices del alemàn, sea hispanohablante, japònes, estadounidense 
    y un largo etcera. Ya que no es establecido una regla oficial para saber cual es el artìculo de cada palabra, por ejemplo "Die Handschuhen" (guantes en español) es feminino pero realmente no hay forma de 
    saberlo.`
},{
    id: 2,
    text:`La construcciòn de las frases no es la mismo que en español, ya que los verbos se mueven, dejenme explicarme. Normalmente en español diriamos "Me gustarìa ir al cine", pero en alemàn seria "Ich möchte ins Kino gehen" (literalmente me gustaria al cine ir), y en este caso sucede ya que el verbomodal (gustar), y el verbo (ir) no pueden ir juntos y por indisiocracia del aleman el verbo ìra al final de la frase.
    Otro caso serìa con Nebensatz, es decir, la segunda frase al lado, por ejemplo, "Ich glaube, dass morgen regnen würde" aca el verbo modal se ubica al final, junto al lado derecho del verbo que tambien se movio, y hay bastantes casos pero con el tiempo tu cerebro entendera todo. Asì que no te preocupes! `
},{
    id: 3,
    text:`Y finalmente el peor de los males, los casos gramaticales: nominativo, acusativo, dative y genitivo. 
    Estos casos gramaticales aparecen cuando usamos un verbo y modifican el sujeto o el objeto de la frase. Por ejemple "Ich sehe den Hund" seria "Yo veo el perro" pero normalmente en Aleman seria "Der Hund" pero cuando declinamos un verbo con acusativo el masculino cambia a "Den". Otro ejemplo seria "Ich helfe der Krakenschwester" pero en nominativo seria "Die Krakenschwester" aca usamos el dativo y modificamos el articulo "Die" a "Der" ¿Medio confuso? Si ¿Imposible de aprender? Para nada. Lo mas importante para dominar la gramatica alemana es saber el artìculo de las palabras, de ahi pueden ver una tabla para saber como declinar/cambiar articulos. Ademas Acusativo y Dativo existe en español pero los denominamos "Objeto indirecto" y 
    "Objeto directo"`
},{
    id:4,
    text: `Otro tema, las compositas, las palabras largas del alemàn, realmente no es dìficil de formar ya que solo unimos varias palabras que conocemos en español diriamos "Lentes de sol" pero en alemàn es "Sonnenbrillen" como en inglès primero va el adjetivo y despues el sustantivo pero no es nada complicado, y en si, las compositas no son usadas a menudo en el lenguaje cotidiano tal vez encuentren mas compositas en libros de teoria que en series de television`
}
]

const paragraph = document.getElementById("paragraph")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

let currentItem = 0 

window.addEventListener("DOMContentLoaded", function(){
    showParagraph(currentItem)
    showParagraphTwo(currentItem)
    showParagraphThree(currentItem)
})

function showParagraph(show){
    const item = gramarText[show]
    paragraph.textContent = item.text
   
}

nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > gramarText.length -1){
        currentItem = 0
    }
    showParagraph(currentItem)
})

prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = gramarText.length - 1
    }
    showParagraph(currentItem)
})

//Pronunciation 
const pronunText = [
    {id:1,
     text: `La pronunciacion alemana incluye nuevos sonidos que no existen en el español, estos son "Ö, Ü, Ä".
     El Ö es un intervalo entre la o y la e, ponemos la boca en posiciòn de o y pronunciamos la e.
     La Ü es un intervalo entre u y la i, ponemos la boca en posiciòn de u y pronunciamos la i.
     La Ä serìa la màs fàcil de todas, ya que es una e pero abriendo mas la boca, se podrìa decir que es una "E" sonriente  `   

    },
    {id:2,
    text: `Aca otro sonido el "ç" y "x" eston son 2 sonidos foneticos y asi se ven representado por el alfabeto fonetico internacional.
    En alemàn escrito se verìa "ch". Para el "ç" tenemos que hacer un maullido de gato, expirando el aire para afuera, y levantar un poco la punta de nuestra lengua, mientras 
    que el "x" la punta de la esta mas aplanada, realmente la diferencia se presenta con la acompañamos con un vocal. Ejemplo ich serìa [ɪç] mientras que nach serìa 
    [na:x]  `   
    },
    {id:3,
        text: ` la h en alemàn es simplemente similar al ch pero el sonido es mas debil, muchos hispanohablantes cometen el error de pronunciarlo mas fuerte `   
        },
     {
        id:4,
        text:`La R en alemàn es la misma R que la francesa, y es dìficil de pronunciar e incluso alado de una consonante por ejemplo Grün  [ɡʀy:n]. Lo que yo hago es acumular saliva en el paladar, ya que este sonido realmente no se produce de la garganta sino cuando la ùvula y la lengua tienen contacto `
     } ,
     {
        id: 5,
        text:`otra gran diferencia es que los alemanes tienen vocales largas, e incluyen fonemas semiabiertas como el  [ʊ] que es sola una u pero con la boca mas abierta para abajo, moviendo la mandìbula.`
     }  
]

const paraTwo = document.getElementById("paraTwo")
const prevBtnTwo = document.getElementById("prevBtnTwo")
const nextBtnTwo = document.getElementById("nextBtnTwo")



function showParagraphTwo(show){
    const item = pronunText[show]
    paraTwo.textContent = item.text
   
}

nextBtnTwo.addEventListener("click", function(){
    currentItem++
    if(pronunText.length -1 < currentItem){
        currentItem = 0
    }
   
    showParagraphTwo(currentItem)
})

prevBtnTwo.addEventListener("click", function(){
    currentItem--
    if ( currentItem < 0){
        currentItem = pronunText.length -1
    }
    showParagraphTwo(currentItem)
})

//Vocabulario
const vocabularioText =
[{id:1,
     text:`Antes, que nada, no el alemàn no son palabras largas, 
     solo lo encontraras en libros de polìtica, economìa y filosofìa.
      Pero ni forman el 10% del idioma y su forma de estructurarlas es bastante lògico.
     `},
 {id:2,
        text:`El alemàn ya que no es una lengua rumanica el lexico es muy diferente, 
        son pocas las palabras parecidas al español, en incluso muy diferente al inglès tambièn,
         solò el hòlandes comparte un lèxico similar, en un 80% `},
{id:3,
text:`El alemàn incluye prefijos separables. Estas son palabras que se separan cuando no se incluye un verbo modal en la frase, por ejemplo palabras con 
"an", "vor", "auf" y unas cuantas mas son palabras que su prefijo al principio se puede empezar. 
Ejemplo "Wir fangen mal an"(nosotros empezamos en español). Ademas si no se incluye un prefijo al final 
de la oraciòn el significado cambiara. Sin "an" al final de la oraciòn diriamos "Nosotros cazamos"`},
{id:4,
text:`Modalpartikeln (particulas modales): quizas esto sea lo mas dìficil ya que en español ni en inglès existen.
     Ademàs es enseñado en cursos para estudiantes avanzados.Los modarlpartikeln transportan una emociòn a la frase,
     en español cambiariamos nuestro tono de voz, segùn el contexto y/o la situaciòn.
     Pero en alemàn necesitamos usarlo para no sonar como unos robots. Ademàs son usados muy a menudos.
     Unos ejemplos son "Mal", "Aber", "Eben", "Halt", "Denn", "Ja", "Doch" y un largo etcetera. "Denn", "Mal" y "Doch"
     son los mas usados en la vida cotidiana. Y como vieron en el texto anterior incluì la frase 
     "Wir fangen mal an" expresando una emociòn positiva. `},
]

const paraThree = document.getElementById("paraThree")
const prevBtnThree = document.getElementById("prevBtnThree")
const nextBtnThree = document.getElementById("nextBtnThree")


function showParagraphThree(show){
    const item = vocabularioText[show]
    paraThree.textContent = item.text
}

nextBtnThree.addEventListener("click", function(){
    currentItem++
    if(vocabularioText.length - 1 < currentItem){
        currentItem = 0
    }
    showParagraphThree(currentItem)
})

prevBtnThree.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = vocabularioText.length -1
    }
    showParagraphThree(currentItem)
})

//Set date

const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

//toggle function with the links
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".linkContainer")
const links = document.querySelector(".links")




navToggle.addEventListener("click", function(){
    //Element.getBoudingClientRect() method to return the size of an element and its position relative to the viewport
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    } else{
        linksContainer.style.height = 0
    }
  
})

//Fixed navbar 
const navbar = document.getElementById("navbar")

const topLink = document.querySelector(".top-link")
window.addEventListener("scroll", function(){
    //pageYOffset is a read - only window property that return the number
// of pixels the document has been scrolled vertically
 const scrollHeight = window.pageYOffset
 const navHeight = navbar.getBoundingClientRect().height
 if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
 }else{
    navbar.classList.remove("fixed-nav")
 }

 if (scrollHeight > 500){
    topLink.classList.add("show-link")
 }else{
    topLink.classList.remove("show-link")
 }
})


//smooth scroll
const scrollLinks = document.querySelectorAll(".scrollLink")


scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
      //prevent default
        e.preventDefault()
     // navigate to specific spot
     const id = e.currentTarget.getAttribute("href").slice(1)
     const element = document.getElementById(id) 
     //slice extracts a section of a string without modifyin the original string  
     const navHeight = navbar.getBoundingClientRect().height
     const containerHeight = linksContainer.getBoundingClientRect().height
     const fixedNav = navbar.classList.contains("fixed-nav")
     let position = element.offsetTop - navHeight
     if(!fixedNav){
        position = position - navHeight
     }
     if(navHeight > 82){
        position = position + containerHeight
     }

     window.scrollTo({
        left: 0, 
        top: position
     })
     linksContainer.style.height = 0
    })
})

const slides = document.querySelectorAll(".slide")
const slidePrevBtn = document.getElementById("slidePrevBtn")
const slideNextBtn = document.getElementById("slideNextBtn")

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
})
let counter = 0
slideNextBtn.addEventListener("click", function(){
    counter++
    carousel()
})
slidePrevBtn.addEventListener("click", function(){
    counter--
    carousel()
})

function carousel(){
    //working with slides
    if(counter === slides.length){
        counter = 0
    }
    if( counter < 0){
        counter = slides.length -1
    }


    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}