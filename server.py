# python API reference

from flask import Flask, render_template, request, redirect, url_for
from flask_modus import Modus
from avocado import Avocado

app = Flask(__name__)
modus = Modus(app)

avocados_list = []

@app.route('/')
def root():
  return redirect(url_for('index'))

@app.route('/avocados', methods=["GET"])
def index():
  return render_template('index.html', avocados=avocados_list)

@app.route('/avocados', methods=["POST"])
def create():
  avocados_list.append(Avocado(request.form['name']))
  return redirect(url_for('index'))

@app.route('/eat', methods=["DELETE"])
def eat():
  avocados_list.clear()
  return redirect(url_for('index'))

@app.route('/avocados/<int:id>', methods=["DELETE"])
def delete(id):
  del avocados_list[id]
  return redirect(url_for('index'))

@app.route('/avocados/new')
def new():
  return render_template('new.html')  

@app.route('/avocados/<int:id>')
def show(id):
  return render_template('show.html', avocado=avocados_list[id])

if __name__ == '__main__':
  app.run(debug=True, port=3000)