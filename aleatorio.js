const texto = document.querySelector("#texto")

const frase = [

    "se minha alma fosse caneta e meu sangue tinta, eu sacaria ate a última veia do meu corpo descrevendo o quanto eu te amo",
    "Se o amor fosse uma musica, eu dedicaria cada batida do meu coração para expressar o quanto eu te amo",
    "Se o universo pudesse falar, suas estrelas sussurrariam meu amor por você em cada brilho cósmico",
    "Se o tempo pudesse congelar, eu escreveria nossos momentos juntos em cada grão de areia, para que todos soubessem o quão intenso é meu amor por você.",
    "Se as palavras fossem pétalas de flores, eu criaria um jardim infinito para declarar o quanto eu te amo, cultivando cada sentimento em cada verso.",
    "Se os ventos pudessem carregar palavras, eu sussurraria ao mundo inteiro sobre o amor inabalável que tenho por você, levando essa mensagem até os confins da terra.",
    "Sou capaz de voltar no passado e rever cada instante ao seu lado.",
    "Você é a poesia que floresce em minha alma, enchendo cada verso de amor, ternura e inspiração.",
    "Você é a luz que dissipa todas as minhas sombras, trazendo clareza e paz ao meu coração",
    "Você é a peça que faltava no quebra-cabeça da minha vida, completando-me de uma maneira que eu jamais imaginei.",
    "Você é meu porto seguro em meio à tempestade, meu refúgio nos momentos difíceis, e eu nunca deixarei de lutar por nosso amor.",
    "Assim como os planetas orbitam em torno do sol, meu coração orbita em torno do seu amor, sendo cativado por sua luminosidade cósmica.",
    "Como o cosmos em constante expansão, meu amor por você não conhece limites, se estendendo além do horizonte do infinito.",
    "Somos como duas estrelas distantes que se encontraram no universo, unidas por um amor que brilha intensamente.",
    "Eu atravessaria desertos áridos e escalaria montanhas imponentes apenas para ter a chance de proteger você, pois seu bem-estar é meu maior sacrifício e prioridade.",
    "Se o destino exigisse, eu sacrificaria meu próprio eu para garantir sua felicidade, pois não há limites para o que estou disposto a fazer pelo amor que compartilhamos.",
    "Meu amor por você é tão intenso que estou disposto(a) a sacrificar meus próprios sonhos e desejos para ver os seus se tornarem realidade.",
    "Nosso amor é tão profundo e intenso que as lágrimas que derramo são gotas de pura gratidão por ter você em minha vida.",
    "Cada vez que olho nos seus olhos, as lágrimas brotam como testemunho da imensidão do meu amor por você, transbordando em emoção e felicidade.",
    "Cada lágrima que escorre pelo meu rosto é uma declaração silenciosa do quanto você me emociona, do quanto seu amor toca minha alma e do quanto sou grato(a) por tê-lo(a) em minha vida.",
]


function fraseAleatoria(){
    let aleatorio = Math.floor(Math.random() * (frase.length - 0)) + 0

    texto.innerText = frase[aleatorio]
    texto.style.color = "#c3eefc"
    console.log(aleatorio)
}
