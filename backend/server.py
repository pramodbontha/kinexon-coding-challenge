import json
from random import randrange, random
from bottle import route, run, static_file
from faker import Faker
import threading

file = open('drivers.get.json', 'w+')
file.write("[]")

drivers_updated_locations = []
# generate fake driver profile
def genobj(number_of_objects):
    try:
        o = json.loads(open("drivers.get.json", "r").read())
    except:
        o = []
    for i in range(number_of_objects):
        fake = Faker()
        d = {
            "driverName": fake.name(),
            "driverCityOrigin": fake.city(),
            "driverLanguage": ['de', 'en', 'nl', 'fr', 'es', 'ar'][randrange(6)],
            "driverPhone": fake.phone_number(),
            'driverInfo': fake.catch_phrase(),
            "licensePlate": fake.license_plate(),
            "kmDriven": int(random() * 100000),
            'location': [str(fake.latitude()), str(fake.longitude())]
        }
        o.append(d)
    file = open("./drivers.get.json", "w")
    file.write(json.dumps(o))

#generate 10 fake drivers
genobj(10)


# TODO randomly update driver location every 5 seconds
def set_interval(func, sec): 
    def func_wrapper():
        set_interval(func, sec) 
        func()  
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

def update_driver_location():
    drivers = json.loads(open("drivers.get.json", "r").read())
    for i in range(len(drivers)):
        fake = Faker()
        drivers[i]['location'] = [str(fake.latitude()), str(fake.longitude())]
    file = open("drivers.get.json", "w")
    file.write(json.dumps(drivers))
    

set_interval(update_driver_location, 5)


@route('/')
def serve_static(file_path="index.html"):
    return static_file(file_path, root='./app/')

@route('/drivers')
def get_cars():
    return open("drivers.get.json", "r").read()

run(host='localhost', port=8080, debug=True)
