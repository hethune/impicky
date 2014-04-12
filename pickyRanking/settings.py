# -*- coding: utf-8 -*-
"""
    pickyRanking.settings
    ~~~~~~~~~~~~~~~~

    pickyRanking config.

    :copyright: (c) 2014 by wenhang.
    :license: aGPL v3.
"""

import os


DEBUG = True
# Detect environment by whether debug named file exists or not
if os.path.exists(os.path.join(os.path.dirname(__file__), 'debug')):
    DEBUG = True

