from flask import Flask
from pickView import PickView, EventAdd, EventRetrieve

app = Flask(__name__)

app.add_url_rule('/', view_func=PickView.as_view('pick_view'),
    methods=['GET'])
app.add_url_rule('/eventAdd', view_func=EventAdd.as_view('event_add'),
    methods=['POST'])
app.add_url_rule('/eventRetrieve', view_func=EventRetrieve.as_view('event_retrieve'),
	methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)
