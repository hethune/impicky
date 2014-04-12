"""
    picky.app
    ~~~~~~~~~~~

    :copyright: (c) 2014 by wenhang.
    :license: aGPL v3.
"""
from flask import Flask
app = Flask(__name__)
from pickyRanking import settings
app.config.from_object(settings)

import pickyRanking.views
