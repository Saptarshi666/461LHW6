from flask import Flask, jsonify
from flask_cors import CORS
CORS(app)
app = Flask(__name__, static_folder='./Frontend/build', static_url_path='/')


@app.route('/name/<lastname>')
def lastName(lastname):
    if lastname == "Saptarshi" :
        return jsonify({"lastName":"mondal"})
    else:
        return jsonify({"lastName":"User Not Found"})


@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()