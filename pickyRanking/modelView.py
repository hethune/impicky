from flask import request, jsonify, render_template
import flask.views
import json

class PickView(flask.views.MethodView):
    def get(self):
        return render_template('main.html')

class EventAdd(flask.views.MethodView):
    def post(self):
        args = json.loads(request.data)
        return jsonify({ 'success': True })

class EventRetrieve(flask.views.MethodView):
	def post(self):
		args = json.loads(request.data)
		return jsonify({ 'success': True })