from flask import Flask
from flask.ext.mongoengine import MongoEngine
from pickView import PickView, EventAdd, EventRetrieve

app = Flask(__name__)

# URL rules
app.add_url_rule('/', view_func=PickView.as_view('pick_view'),
    methods=['GET'])
app.add_url_rule('/eventAdd', view_func=EventAdd.as_view('event_add'),
    methods=['POST'])
app.add_url_rule('/eventRetrieve', view_func=EventRetrieve.as_view('event_retrieve'),
	methods=['POST'])

# Configure MongdoDB
app.config["MONGODB_SETTINGS"] = {'DB': "pick_app"}
app.config["SECRET_KEY"] = "woshimima"

db = MongoEngine(app)

if __name__ == '__main__':
    app.run(debug=True)
