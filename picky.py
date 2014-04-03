from flask import Flask
from pickView import PickView

app = Flask(__name__)

app.add_url_rule('/', view_func=PickView.as_view('pick_view'),
    methods=['GET'])

if __name__ == '__main__':
    app.run(debug=True)
