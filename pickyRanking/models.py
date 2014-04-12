# -*- coding: utf-8 -*-
"""
    pickyRanking.models
    ~~~~~~~~~~~~~~

    pickyRanking db.

    :copyright: (c) 2014 by wenhang.
    :license: aGPL v3.
"""

from pickyRanking import app

# Import mongo db here

# Configure MongdoDB
app.config["MONGODB_SETTINGS"] = {'DB': "pick_app"}
app.config["SECRET_KEY"] = "woshimima"

db = MongoEngine(app)

