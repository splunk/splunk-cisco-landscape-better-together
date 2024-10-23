import csv
import json

def make_json(csvFilePath, jsonFilePath):
    data = {}
    
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        
        for row in csvReader:
            #key of each object
            key = row['category']

            if key in data:
                data[key] = [*data[key], row]
            else:
                data[key] = [row]

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
        

csvFilePath = r'public/data.csv'
jsonFilePath = r'public/data.json'

make_json(csvFilePath, jsonFilePath)

    