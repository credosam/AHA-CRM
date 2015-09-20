# import pymongo
# import datetime
from flask import Flask, request, render_template, url_for, flash, redirect
# from pymongo import MongoClient
# client = MongoClient()
app = Flask(__name__, static_url_path='')
# db = client.test
# test = db.test
# test.find_one()
# @app.route("/static/js/<filename>")
# def staticjs(filename):
# 	return app.send_static_file('static/js/' + filename)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
	print "YO"
	return "YO!!!"

if __name__ == "__main__":
	app.run()