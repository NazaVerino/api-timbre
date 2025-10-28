# api/index.py
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"mensaje": "Servidor Flask en Vercel funcionando 🚀"})

@app.route("/saludo/<nombre>")
def saludo(nombre):
    return jsonify({"saludo": f"Hola, {nombre}!"})

# Vercel necesita que el objeto de la app se llame 'app'
# No es necesario ejecutar app.run()
