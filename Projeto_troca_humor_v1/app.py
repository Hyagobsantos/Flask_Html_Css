from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    nome = "Homer simpson"
    idade = 39
    ocupacao = "Inspetor de segurança"
    image1 = "../static/img/happy.png"
    image2 = "../static/img/sad.png"
    exibir_img = True

    return render_template(
        "index.html",
        nome = nome,
        ocupacao = ocupacao,
        image1 = image1,
        image2 = image2,
        exibir_img = exibir_img,
        idade = idade
        
        )

if __name__ =="__main__":
    app.run(debug=True)