from flask import request, jsonify, render_template

import flask.views
import json

class PickView(flask.views.MethodView):
    def get(self):
        return render_template('main.html')