from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():

    titulo = "Calculadora de Dano"
    logo = '../static/img/demon.png'

    subtitulo1 = "Selecione o Oni"
    subtitulo2 = "Selecione um Caçador para Atacar"
    

    imagens_bloco1 = [
        {   'id': 'kokushibo',
            'class':'personagem',
            'titulo': 'kokushibo',
            'imagem': '../static/img/kokushibo.png'
        },
        {
            'id': 'muzan',
            'class':'personagem',
            'titulo': 'Muzan',
            'imagem': '../static/img/Muzan_Combat_Form.png'
        },
        {
            'id': 'akasa',
            'class':'personagem',
            'titulo': 'Akasa',
            'imagem': '../static/img/Akaza_colored_body.png'
        }
    ]

    imagens_bloco2 = [
        {   
            'id': 'sanemi',
            'class':'arma',
            'titulo': 'Sanemi',
            'imagem': '../static/img/Sanemi_anime.png'
        },
        {
             'id': 'giyuu',
            'class':'arma',
            'titulo': 'Giyuu Tomioka',
            'imagem': '../static/img/Giyuu_anime_design.png'
        },
        {
            'id': 'kyojuro',
            'class':'arma',
            'titulo': 'Kyojuro Rengoku',
            'imagem': '../static/img/Rengoku_Anime.png'
        }
    ]

    return render_template(
        "principal.html",
        subtitulo1 = subtitulo1,
        subtitulo2 = subtitulo2,
        titulo = titulo,
        logo = logo,
        imagens_bloco1 = imagens_bloco1,
        imagens_bloco2 = imagens_bloco2
    )

if __name__=="__main__":
    app.run(debug=True)
    