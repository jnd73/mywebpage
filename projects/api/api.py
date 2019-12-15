from flask import Flask, request, send_from_directory, make_response
import json
import uuid
from shutil import copyfile
import datetime

app = Flask(__name__, static_url_path='')


# Main route to display form.html for the root index
@app.route('/')
def index():
    return send_from_directory('.', 'form.html')


# Routes for static resources

@app.route('/js/<path:path>')
def get_js(path):
    return send_from_directory('js', path)


# @app.route('/css/<path:path>')
# def get_css(path):
#     return send_from_directory('css', path)

# Route to retrieve data file
@app.route('/data/<path:path>')
def get_data(path):
    return send_from_directory('data', path)


# Reading and writing json config file
@app.route('/addEntry/', methods=['GET', 'POST'])
def addRec():

    data = ''
    fileName = 'data/demo.json'
    with open(fileName, 'r') as json_file:
        data = json.load(json_file)

    # writeToFile(fileName, data)

    data["trackinfo"] = {
        "track": request.form.get("track")
    }

    data["sessioninfo"] = {
        "date": request.form.get("date"),
        "timeStart": request.form.get("timeStart"),
        "timeEnd": request.form.get("timeEnd"),
        "startLap": int(request.form.get("startLap")),
        "endLap": int(request.form.get("endLap"))
    }
    data["participants"]={
        car: request.form.get("car1"),
        rank: request.form.get("rank1"),
        timebehindleader: request.form.get("tbhl1")
    }
    with open(fileName,'w') as json_file:
        json.dump(data,json_file, indent=4)


# def writeToFile(filePath, jsonString):
#     with open(filePath, 'w') as json_file:
#         # Write the modified list to file
#         json.dump(jsonString, json_file, sort_keys=True, indent=4)

@app.route('/entry/', methods = ['GET'])
def getUsers():
    with open('data/demo.json', 'r') as json_file:
        data = json.load(json_file)
        return(data)

app.run(host='127.0.0.1', port=5000, debug=True)
