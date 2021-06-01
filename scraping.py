from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import datetime

import shlex
import subprocess
import chardet
import re

def execute_command(cmd):
    args = shlex.split(cmd)
    process = subprocess.Popen(args, shell=False, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()

    #print(chardet.detect(stdout)['encoding'])
    result = stdout.decode("utf-8","ignore")
    return result, stdout, stderr

def replace_all(text, dic):
    found = False
    for i, j in dic.items():
        if i in text:
            text = j
            found = True
    if not found:
        print(text)
        text = None
    return text

def get_curl_cmd_search_pages(land_abk = "bw", page_no = "1"):
    string1 = "curl 'https://www.zvg-portal.de/index.php?button=Suchen&seite="
    string2 = page_no + """&l=1&r=8&all=&order_by=-1&desc=-1'   -H 'Connection: keep-alive'   -H 'Cache-Control: max-age=0'   -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"'   -H 'sec-ch-ua-mobile: ?0'   -H 'Upgrade-Insecure-Requests: 1'   -H 'Origin: https://www.zvg-portal.de'   -H 'Content-Type: application/x-www-form-urlencoded'   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'   -H 'Sec-Fetch-Site: same-origin'   -H 'Sec-Fetch-Mode: navigate'   -H 'Sec-Fetch-User: ?1'   -H 'Sec-Fetch-Dest: document'   -H 'Referer: https://www.zvg-portal.de/index.php?button=Termine%20suchen'   -H 'Accept-Language: en-GB,en;q=0.9'   --data-raw 'ger_name=--+Alle+Amtsgerichte+--&order_by=2&land_abk="""
    string3 = land_abk + """&ger_id=0&az1=&az2=&az3=&az4=&art=&obj=&str=&hnr=&plz=&ort=&ortsteil=&vtermin=&btermin='"""
    string = string1 + string2 + string3
    return string

def get_curl_cmd_result_detail(url = ""):
    cmd = """curl '{url}' \
          -H 'Connection: keep-alive' \
          -H 'Cache-Control: max-age=0' \
          -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"' \
          -H 'sec-ch-ua-mobile: ?0' \
          -H 'Upgrade-Insecure-Requests: 1' \
          -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36' \
          -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
          -H 'Sec-Fetch-Site: same-origin' \
          -H 'Sec-Fetch-Mode: navigate' \
          -H 'Sec-Fetch-User: ?1' \
          -H 'Sec-Fetch-Dest: document' \
          -H 'Referer: https://www.zvg-portal.de/index.php?button=Suchen' \
          -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,de;q=0.7' \
  --compressed""".format(url = url)
    return cmd

import datetime
def replace_all(text, dic):
    found = False
    for i, j in dic.items():
        if i in text:
            text = j
            found = True
    if not found:
        print(text)
        text = None
    return text

import datetime
def replace_all(text, dic):
    found = False
    for i, j in dic.items():
        if i in text:
            text = j
            found = True
    if not found:
        print(text)
        text = None
    return text

def first_group(re_search_result):
    if re_search_result:
        assert str(type(re_search_result.groups(1)[0])) == "<class 'str'>"
        return re_search_result.groups(1)[0]
    else:
        return ""
        print("WARNING REGEX DID NOT MATCH")


def scrape_page(land_abk = "bw", page_no = 1):
    page_no = str(page_no)
    string = get_curl_cmd_search_pages(land_abk, page_no)
    soup = BeautifulSoup(execute_command(string)[0], features="html.parser")
    pages_buttons = soup.find_all("button", {"class": "seiten_nr"})
    n_pages = len(pages_buttons)//2

    objekt_lage = [td.parent for td in soup.findAll("td", string = "Objekt/Lage")]
    amtsgericht = [ol.find_previous_sibling('tr') for ol in objekt_lage]
    aktenzeichen_link = [am.find_previous_sibling('tr') for am in amtsgericht]
    verkehrswert = [ol.find_next_sibling('tr') for ol in objekt_lage]
    vks_text = [str(list(v.children)[1].text) for v in verkehrswert]
    termin = [val.find_next_sibling('tr') for val in verkehrswert]

    links = ["https://www.zvg-portal.de/"+a.findAll("a")[0]["href"] for a in aktenzeichen_link]
    aktenzeichen = [first_group(re.search("<nobr>(.*/.*[0-9]{4}).*</nobr>",str(link.findAll("nobr")[1]))) for link in aktenzeichen_link]
    plz = [re.search("[0-9]{5}", str(a)).group() for a in objekt_lage]
    address = [first_group(re.search("</b> (.*[0-9]{5}.*)</td>", str(a))) for a in objekt_lage]

    days = [first_group(re.search("([0-9]+)\..*",t.text)) for t in termin]
    months = [first_group(re.search("[0-9]+\. ([a-zA-Z]+) [0-9]+.*",t.text)) for t in termin]
    years = [first_group(re.search("[0-9]+\. [a-zA-Z]+ ([0-9]{4}).*",t.text)) for t in termin]

    months_to_numbers = {"Jan":"1", "Feb":"2", "Mar":"3", "Apr":"4", "Mai":"5","Jun":"6","Jul":"7","Aug":"8","Sep":"9","Okt":"10","Nov":"11","Dez":"12"}
    months1 = [replace_all(m, months_to_numbers) for m in months]

    dates = []
    for y, m, d in zip(years, months1, days):
        try:
            dates.append(datetime.date(int(y),int(m),int(d)))
        except:
            print(y)
            print(m)
            print(d)

    amtsgericht = [list(a.children)[1].text for a in amtsgericht]
    objekt_lage = [list(a.children)[1].text for a in objekt_lage]

    vals = [list(re.findall("[0-9]*\.*[0-9]*\.*[0-9]*\.*[0-9]*\.*[0-9]+,[0-9\-]+",str(val.text))) for val in verkehrswert]
    vals = [str([item.replace("-","0").replace(".",";").replace(",",".").replace(";",",") for item in sublist]) for sublist in vals]

    data = [aktenzeichen, amtsgericht, links, plz, address, objekt_lage, vals, vks_text, dates]

    df = pd.DataFrame(data).T
    df.columns = ["Aktenzeichen", "Amtsgericht", "Links", "PLZ", "Address", "Objekt/Lage", "Verkehrswerte", "Verkehrswert Text",  "Termin"]
    df['Termin'] = df['Termin'].apply(lambda x: pd.Timestamp(x))
    return n_pages, soup, df

def scrape_pages(land_abk = "be"):
    n_pages, _, data = scrape_page(land_abk, 1)
    print(".", end = "")
    if n_pages > 1:
        for i in range(2, n_pages+1):
            n_pages, _, data1 = scrape_page(land_abk, i)
            data = data.append(data1, ignore_index = True)
            print(".",end= "")
    return data

def scrape_all(verbose = 0):
    land_abks = ["be"]#["bw", "by", "be", "br", "hb", "hh", "he", "mv", "no", "nw", "rp", "sl", "sn", "st", "sh", "th"]
    dfs = scrape_pages(land_abks[0])
    for abk in land_abks[1:]:
        dfs = dfs.append(scrape_pages(abk), ignore_index=True)
        if verbose == 0:
            print("-", end="")
    return dfs
