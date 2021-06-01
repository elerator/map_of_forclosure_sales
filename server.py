from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from starlette.staticfiles import StaticFiles


from datetime import date
from scraping import *
import pickle
import json

dfs = None

def write_today(current_date):
    """ Writes the provided current_date string to a file today.txt"""
    with open("today.txt", "w") as f:
        f.write(current_date)

def update_scrape():
    """ Scrapes data if it was not yet scraped today. Saves Dataframe as dfs.pkl """
    global dfs
    current_date = str(date.today())
    try:#is there a today file?
        with open("today.txt", "r") as f:
            today = f.read()
        if current_date == today:
            if type(dfs) == type(None):#if dfs not there yet load
                try:
                    with open("dfs.pkl", "rb") as f:
                        print("loading")
                        dfs = pickle.load(f)
                        print("pkl loaded success")
                except Exception as e:
                    pass
            return#scraped today already: return

        #print(current_date)
        #print(today)
    except:#init today file
        write_today(current_date)

    print("scraping now")
    dfs = scrape_all(verbose =  0)

    # Add longitude and latitude
    with open("plz_to_long_lat.json", "r") as f:
        plz_to_long_lat = json.loads(f.read())
    long_lat = []
    for line in dfs.iterrows():
        try:
            print(plz_to_long_lat[line[1]["PLZ"]][0])
            print(plz_to_long_lat[line[1]["PLZ"]][1])

            long_lat.append(str([plz_to_long_lat[line[1]["PLZ"]][1],
                                plz_to_long_lat[line[1]["PLZ"]][0]]))
        except Exception as e:
            print(e)
            long_lat.append(str(["-2.0","-2.0"]))
    dfs.insert(len(dfs.keys()), "long_lat", long_lat)

    write_today(current_date)#update today
    with open("dfs.pkl", "wb") as f:#save updated scrape
        pickle.dump(dfs,f)



async def get_json(request):
    update_scrape()
    print("update scrape")
    df = dfs.copy()
    df['Termin'] = df['Termin'].dt.strftime('%Y-%m-%d')
    return JSONResponse(df.to_json())

async def homepage(request):
    update_scrape()
    df = dfs.copy()
    df['Termin'] = df['Termin'].dt.strftime('%Y-%m-%d')
    return JSONResponse(df.to_json())

routes=[
    Route('/json', get_json),
    Mount('/', app=StaticFiles(directory='build/', html=True), name="static"),

]

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'])
]

app = Starlette(debug = True, routes=routes, middleware=middleware)
